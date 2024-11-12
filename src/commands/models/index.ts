import { Command, Flags} from '@oclif/core'
import { createWriteStream } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { Readable } from 'node:stream'
import { finished } from 'node:stream/promises'

import { resolvePath } from '../../internal/utils.js'


export default class UpdateModel extends Command {
  static description = 'Update the bundled LLM model'

  static flags = {
    local: Flags.string({
      default: '~/.cache/llama.cpp/media-file-recognizer-tiny-llama-1.1b-q4_k_m-imat.gguf',
      description: 'Where the model is stored to',
    }),
    remote: Flags.string({
      default: 'VLKVLK/media-file-recognizer-tiny-llama-1.1b-Q4_K_M-GGUF',
      description: 'Where the model is fetch from',
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(UpdateModel)
    const localModelFile = resolvePath(flags.local)

    await Promise.resolve(null)
      .then(async _ => Promise.all([
        readFile(`${localModelFile}.sha`).then((sha: ArrayBuffer) => ({ sha: sha.toString() })).catch(_ => ({ sha: null })),
        (await fetch(`https://huggingface.co/api/models/${flags.remote}`)).json(),
      ]))
      .then(([local, remote]) => {
        if (local.sha === remote.sha) {
          this.log(`${localModelFile} is already up-to-date.`)
          return
        }

        const model = remote.siblings.find((s: {rfilename:string}) => s.rfilename.match(/\.gguf$/));
        if (!model) {
          throw new Error(`No model found extension in ${flags.remote}`)
        }

        const source = `https://huggingface.co/${flags.remote}/resolve/main/${model.rfilename}?download=true`
        return this.download(source, remote.sha, localModelFile)
      })
  }

  private async download(source: string, sha: string, destination: string) {
    this.log(`will download ${source} to ${destination}`)
    const fileStream = createWriteStream(destination)
    const { body } = await fetch(source)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await finished(Readable.fromWeb(body as any).pipe(fileStream))
    await writeFile(`${destination}.sha`, sha)
  }
}
