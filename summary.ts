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
 * @param {string} data Data.
 * @returns {void}
 */
export function appendSummary(data: string): void {
	Deno.writeTextFileSync(getFileCommandPath("GITHUB_STEP_SUMMARY"), data, { append: true });
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
 * @returns {void}
 */
export function clearSummary(): void {
	clearFileCommand("GITHUB_STEP_SUMMARY");
}
