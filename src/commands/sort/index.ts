import {Args, Command, Flags} from '@oclif/core'
import path from 'node:path'
import { glob } from 'glob'

import { fileProps } from '../../internal/file-patterns.js'
import { LLM } from '../../internal/llama.js'
import UpdateModel from '../models/index.js'
import { resolvePath } from '../../internal/utils.js'

export default class Sort extends Command {
  static args = {
    input: Args.directory({
        required: true,
        description: 'Where to find files to sort',
    }),
  }

  static description = 'Sort files'

  static examples = [
    `<%= config.bin %> <%= command.id %> ~/Downloads --movies /MyMovies --tv /MyTVShows
`,
  ]

  static flags = {
    audiobooks: Flags.string({
        description: 'Move sorted audiobooks to this directory',
        helpValue: '/TV',
        multiple: true,
    }),
    do: Flags.boolean({
        description: 'Actually move files',
    }),
    ebooks: Flags.string({
        description: 'Move sorted ebooks to this directory',
        helpValue: '/TV',
    }),
    model: Flags.string({
        default: UpdateModel.flags.local.default,
        description: 'Use a custom LLM model',
    }),
    movies: Flags.string({
        description: 'Move sorted movies to this directory',
        helpValue: '/Movies',
    }),
    timeout: Flags.integer({
        default: 5000,
        description: 'Timeout for each LLM query in milliseconds',
    }),
    tv: Flags.string({
        description: 'Move sorted TV shows to this directory',
        helpValue: '/TV',
    }),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Sort)
    const input = resolvePath(args.input);
    this.log(`will sort files from ${input} (${ flags.do ? 'and actually move files' : 'but not actually move files' })`)

    const logger = {
        debug: (...message: string[]) => this.debug(...message),
        error: (message: string) => this.error(message),
        log: (...message: string[]) => this.log(...message),
    }

    const llm = await new LLM(logger).load(flags.model);
    llm.setTimeout(flags.timeout);

    const files = await glob(`${input}/**/*`, { absolute: true, nodir: true });
    this.log(`found ${files.length} files`);

    for (const file of files) {
        const basename = file.replace(input, '').split(path.delimiter).slice(-2).join('/').replace(/(^\/|\/$)/g, '');
        // eslint-disable-next-line no-await-in-loop
        await llm.guessFileMetadata(basename, fileProps(basename)).catch((error) => this.log(error.message));
    }
  }
}
