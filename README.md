DejunkAI
=================

A tool to sort media files, using a ridiculously resources heavy AI chat completion method.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dejunkai.svg)](https://npmjs.org/package/dejunkai)
[![Downloads/week](https://img.shields.io/npm/dw/dejunkai.svg)](https://npmjs.org/package/dejunkai)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dejunkai
$ dejunkai COMMAND
running command...
$ dejunkai (--version)
dejunkai/0.0.0 linux-x64 node-v18.20.4
$ dejunkai --help [COMMAND]
USAGE
  $ dejunkai COMMAND
...
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`dejunkai help [COMMAND]`](#dejunkai-help-command)
* [`dejunkai plugins`](#dejunkai-plugins)
* [`dejunkai plugins add PLUGIN`](#dejunkai-plugins-add-plugin)
* [`dejunkai plugins:inspect PLUGIN...`](#dejunkai-pluginsinspect-plugin)
* [`dejunkai plugins install PLUGIN`](#dejunkai-plugins-install-plugin)
* [`dejunkai plugins link PATH`](#dejunkai-plugins-link-path)
* [`dejunkai plugins remove [PLUGIN]`](#dejunkai-plugins-remove-plugin)
* [`dejunkai plugins reset`](#dejunkai-plugins-reset)
* [`dejunkai plugins uninstall [PLUGIN]`](#dejunkai-plugins-uninstall-plugin)
* [`dejunkai plugins unlink [PLUGIN]`](#dejunkai-plugins-unlink-plugin)
* [`dejunkai plugins update`](#dejunkai-plugins-update)

## `dejunkai help [COMMAND]`

Display help for dejunkai.

```
USAGE
  $ dejunkai help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dejunkai.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.16/src/commands/help.ts)_

## `dejunkai plugins`

List installed plugins.

```
USAGE
  $ dejunkai plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dejunkai plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/index.ts)_

## `dejunkai plugins add PLUGIN`

Installs a plugin into dejunkai.

```
USAGE
  $ dejunkai plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into dejunkai.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DEJUNKAI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DEJUNKAI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ dejunkai plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ dejunkai plugins add myplugin

  Install a plugin from a github url.

    $ dejunkai plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ dejunkai plugins add someuser/someplugin
```

## `dejunkai plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dejunkai plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dejunkai plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/inspect.ts)_

## `dejunkai plugins install PLUGIN`

Installs a plugin into dejunkai.

```
USAGE
  $ dejunkai plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into dejunkai.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DEJUNKAI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DEJUNKAI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ dejunkai plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ dejunkai plugins install myplugin

  Install a plugin from a github url.

    $ dejunkai plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ dejunkai plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/install.ts)_

## `dejunkai plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ dejunkai plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ dejunkai plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/link.ts)_

## `dejunkai plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ dejunkai plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dejunkai plugins unlink
  $ dejunkai plugins remove

EXAMPLES
  $ dejunkai plugins remove myplugin
```

## `dejunkai plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ dejunkai plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/reset.ts)_

## `dejunkai plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ dejunkai plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dejunkai plugins unlink
  $ dejunkai plugins remove

EXAMPLES
  $ dejunkai plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/uninstall.ts)_

## `dejunkai plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ dejunkai plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dejunkai plugins unlink
  $ dejunkai plugins remove

EXAMPLES
  $ dejunkai plugins unlink myplugin
```

## `dejunkai plugins update`

Update installed plugins.

```
USAGE
  $ dejunkai plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/update.ts)_
<!-- commandsstop -->
