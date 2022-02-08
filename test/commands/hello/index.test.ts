import { expect, test } from '@oclif/test'

describe('help', () => {
  test
    .stdout()
    .command(['help'])
    .it('runs help cmd', (ctx) => {
      expect(ctx.stdout).to.contain(
        'utility to export TOTP secrets from a running authy desktop'
      )
    })
})
