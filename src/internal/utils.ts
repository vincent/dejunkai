import path from 'node:path';

export function resolvePath(filepath: string): string {
    if (filepath[0] === '~') {
        return path.join(`${process.env.HOME}`, filepath.slice(1));
    }

    return path.resolve(filepath);
}