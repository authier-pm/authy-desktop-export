import { Command } from '@oclif/core'
import CDP from 'chrome-remote-interface'
import fs from 'fs'

const options = {
  host: '127.0.0.1',
  port: 5858
}

export default class ExportFromAuthy extends Command {
  static description =
    'utility to export TOTP secrets from a running authy desktop'

  static examples = [`$ authy-desktop-export`]

  static args = [
    { name: 'fileName', description: 'Export name', required: false }
  ]

  async run(): Promise<void> {
    const { args, flags } = await this.parse(ExportFromAuthy)
    let client

    // connect to endpoint
    client = await CDP(options)
    console.log('Connected to running authy!')

    const res = await client.Runtime.evaluate({
      // the script is inspired from https://gist.github.com/gboudreau/94bb0c11a6209c82418d01a59d958c93
      expression: `
JSON.stringify(appManager.getModel().map(function(i) {
    var secret = (i.markedForDeletion === false ? i.decryptedSeed : hex_to_b32(i.secretSeed));
    var period = (i.digits === 7 ? 10 : 30);
    return {...i, secret}
}))`
    })

    if (res.result.subtype === 'error') {
      console.error(res.result.description)
      throw new Error('Error in authy desktop script injection')
    }
    const fileName = args.fileName || 'au-export.json'
    await fs.promises.writeFile(fileName, res.result.value)

    console.log(`✅ Exported to ${fileName}!`)
    await client.close()
  }
}
