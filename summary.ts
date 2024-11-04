import {
	clearFileCommand,
	getFileCommandPath
} from "./command/file.ts";
/**
 * Append data to the summary.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_STEP_SUMMARY`
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * > - NodeJS (>= v20.9.0) 🧪
 * >   - File System - Read (`fs-read`)
 * >     - *Resources*
 * >   - File System - Write (`fs-write`)
 * >     - *Resources*
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
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_STEP_SUMMARY`
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * > - NodeJS (>= v20.9.0) 🧪
 * >   - File System - Read (`fs-read`)
 * >     - *Resources*
 * >   - File System - Write (`fs-write`)
 * >     - *Resources*
 * @returns {void}
 */
export function clearSummary(): void {
	clearFileCommand("GITHUB_STEP_SUMMARY");
}
