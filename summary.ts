import {
	clearFileCommand,
	getFileCommandPath
} from "./command/file.ts";
/**
 * Append data to the summary.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_STEP_SUMMARY`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @param {string | Uint8Array} data Data.
 * @returns {void}
 */
export function appendSummary(data: string | Uint8Array): void {
	const path: string = getFileCommandPath("GITHUB_STEP_SUMMARY");
	if (typeof data === "string") {
		Deno.writeTextFileSync(path, data, { append: true });
	} else {
		Deno.writeFileSync(path, data, { append: true });
	}
}
/**
 * Clear the summary which set in the current step.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_STEP_SUMMARY`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {void}
 */
export function clearSummary(): void {
	clearFileCommand("GITHUB_STEP_SUMMARY");
}
/**
 * Get the size of the summary which set in the current step.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_STEP_SUMMARY`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {number} Size of the summary, in bytes.
 */
export function getSummarySize(): number {
	try {
		return Deno.statSync(getFileCommandPath("GITHUB_STEP_SUMMARY")).size;
	} catch (error) {
		if (error instanceof Deno.errors.NotFound) {
			return 0;
		}
		throw error;
	}
}
