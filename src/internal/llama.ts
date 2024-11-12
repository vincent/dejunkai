import { LlamaChatSession, getLlama } from 'node-llama-cpp';

import { resolvePath } from './utils.js';

type Logger = {
	debug: (...message: string[]) => void;
	error: (message: string) => void;
	log: (...message: string[]) => void;
}

export class LLM {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
    private session: any

	private readonly systemPrompt = [
        `You are an advanced file sorter with expertise in movie metadata, `,
        `specializing in extracting and organizing information from complex file names with multiple embedded details. `,
        `Give exactly 1 solution as a structured JSON object like { "title":"The title", "year":2000 } without other formatting. `,
        `If certain details are not found, indicate them with "unknown".`,
    ].join('')

	private timeout = 10_000;

	constructor(private logger: Logger) {}

	guessFileMetadata(filename: string, props = ['title']): Promise<Record<string, string>> {
		return new Promise((resolve, r) => {
			let rejected = false
			const reject = (reason: string) => {
				this.logger.log(`< rejected (${reason})`);
				rejected = true;
				r(reason);
			}

			const to = setTimeout(() => reject('timeout exceeded'), this.timeout);
			const prompt = `Analyze the file name "${filename.replaceAll('"', '')}" and extract the ${props.join(',')} metadata.`;
			this.logger.log('> ', prompt);
			this.session.prompt(prompt)
				.then((response: string) => {
					clearTimeout(to);
					let result: Record<string, string> = {};
					try {
						result = JSON.parse(response);
					} catch {
						reject('invalid JSON response');
					}

					if (rejected) return;
					this.logger.log('< ', response);
					resolve(result);
				})
				.catch(reject);
		})
	}

	async load(modelPath: string) {
		this.logger.log('loading model', modelPath);
        const llama = await getLlama();
        const model = await llama.loadModel({ modelPath: resolvePath(modelPath) });
        const context = await model.createContext();
        this.session = new LlamaChatSession({
			contextSequence: context.getSequence(),
            systemPrompt: this.systemPrompt
        });
		return this;
    }

	setTimeout(timeout: number) {
		this.timeout = timeout;
        return this;
    }
}
