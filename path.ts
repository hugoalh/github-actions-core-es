import {
	appendFileLineCommand,
	clearFileCommand,
	optimizeFileCommand
} from "./command/file.ts";
/**
 * Add value to the `PATH` for all of the subsequent steps.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_PATH`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @param {...string} paths Value that need to add to the `PATH`.
 * @returns {void}
 */
export function addPATHSubsequent(...paths: readonly string[]): void {
	if (paths.length > 0) {
		appendFileLineCommand("GITHUB_PATH", ...paths);
	}
}
/**
 * **\[🅰️ Advanced\]** Clear the `PATH` for all of the subsequent steps which set in the current step.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_PATH`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {void}
 */
export function clearPATHSubsequent(): void {
	clearFileCommand("GITHUB_PATH");
}
/**
 * **\[🅰️ Advanced\]** Optimize the `PATH` for all of the subsequent steps which set in the current step to reduce size whenever possible.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_PATH`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {void}
 */
export function optimizePATHSubsequent(): void {
	optimizeFileCommand("GITHUB_PATH");
}
