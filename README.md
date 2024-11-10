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
dejunkai/0.0.0 linux-x64 node-v23.1.0
$ dejunkai --help [COMMAND]
USAGE
  $ dejunkai COMMAND
...
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`dejunkai help [COMMAND]`](#dejunkai-help-command)
* [`dejunkai sort /downloads --movies=/my-movies --music=/my-music --music=/my-music`](#dejunkai-sort)
* [`dejunkai models`](#dejunkai-models-update)

## `dejunkai sort PERSON`

Sort a directory of badly named files, and move them to a more proper location.

```
USAGE
  $ dejunkai sort INPUT [--audiobooks /TV...] [--do] [--ebooks /TV] [--model <value>] [--movies /Movies] [--timeout <value>] [--tv /TV]

ARGUMENTS
  INPUT  Where to find files to sort

FLAGS
  --do                 Actually move files
  --timeout=<value>    [default: 5000] Timeout for each LLM query in milliseconds
  --model=<value>      [default: ~/.cache/llama.cpp/media-file-recognizer-q4_k_m.gguf] Use a custom LLM model
  --audiobooks=/TV...  Move sorted audiobooks to this directory
  --ebooks=/TV         Move sorted ebooks to this directory
  --movies=/Movies     Move sorted movies to this directory
  --tv=/TV             Move sorted TV shows to this directory

DESCRIPTION
  Sort files

EXAMPLES
  $ dejunkai sort ~/Downloads --movies /MyMovies --tv /MyTVShows
```

_See code: [src/commands/sort/index.ts](https://github.com/vincent/dejunkai/blob/v0.0.0/src/commands/sort/index.ts)_

<!-- commandsstop -->
