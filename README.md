# authy-desktop-export

authy-desktop-export utility. Can be imported into [authier](authier.pm) password manager.

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Prerequisites

1. Install [Authy desktop app](https://authy.com/download/) - The following steps will work on Linux, Mac and Windows.
2. Open Authy and log in, so you can see the codes being generated for you
   Note: Authy has a backup password feature that is enabled on some accounts; it's ones that have a padlock icon next to them. For those accounts, you might need to enter the backup password to be able to export them.
3. Restart Authy desktop app, but add the `--remote-debugging-port=5858` parameter to the command-line:

- On Windows: right-click the Authy desktop shortcut, and in the Target field write `--remote-debugging-port=5858` at the end. Then click OK. Double-click the Authy desktop shortcut.
- On Mac: from Terminal.app: `open -a "Authy Desktop" --args --remote-debugging-port=5858`
- On Linux, from a terminal: `authy --remote-debugging-port=5858`

# Usage

<!-- usage -->

```sh-session
$ npm install -g authy-desktop-export
$ authy-desktop-export COMMAND
running command...
$ authy-desktop-export (--version)
authy-desktop-export/0.0.0 linux-x64 node-v16.13.1
$ authy-desktop-export --help [COMMAND]
USAGE
  $ authy-desktop-export export my-authy_export.json
...
```

<!-- usagestop -->

You should see your exported json file in the folder where you ran the command.
