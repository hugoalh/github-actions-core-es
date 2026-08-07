import { setParameter } from "./_parameter.ts";
import type {
	KeyValueLike,
	StringifiableType
} from "./_share.ts";
import {
	clearFileCommand,
	optimizeFileCommand
} from "./command/file.ts";
export type {
	KeyValueLike,
	StringifiableType
} from "./_share.ts";
/**
 * **\[🅰️ Advanced\]** Clear the outputs which set in the current step.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_OUTPUT`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {void}
 */
export function clearOutput(): void {
	clearFileCommand("GITHUB_OUTPUT");
}
/**
 * **\[🅰️ Advanced\]** Optimize the outputs which set in the current step to reduce size whenever possible.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_OUTPUT`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {void}
 */
export function optimizeOutput(): void {
	optimizeFileCommand("GITHUB_OUTPUT");
}
/**
 * Set an output.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_OUTPUT`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @param {string} key Key of the output.
 * @param {StringifiableType} value Value of the output.
 * @returns {void}
 */
export function setOutput(key: string, value: StringifiableType): void;
/**
 * Set the outputs.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_OUTPUT`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @param {KeyValueLike<StringifiableType>} pairs Pairs of the output.
 * @returns {void}
 */
export function setOutput(pairs: KeyValueLike<StringifiableType>): void;
export function setOutput(param0: string | KeyValueLike<StringifiableType>, param1?: StringifiableType): void {
	return setParameter("Output", param0, param1);
}
