import { isStringSingleLine } from "https://raw.githubusercontent.com/hugoalh/is-string-singleline-es/v1.0.6/mod.ts";
import {
	stringifyInput,
	type KeyValueLike,
	type StringifiableType
} from "./_share.ts";
import {
	appendFileMapCommand,
	clearFileCommand,
	optimizeFileCommand
} from "./command/file.ts";
/**
 * **\[🅰️ Advanced\]** Clear the environment variables for all of the subsequent steps which set in the current step.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_ENV`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {void}
 */
export function clearEnvSubsequent(): void {
	clearFileCommand("GITHUB_ENV");
}
/**
 * **\[🅰️ Advanced\]** Optimize the environment variables for all of the subsequent steps which set in the current step to reduce size whenever possible.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_ENV`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {void}
 */
export function optimizeEnvSubsequent(): void {
	optimizeFileCommand("GITHUB_ENV");
}
const regexpEnvironmentVariableKeyForbidden = /^(?:CI|PATH)$|^(?:ACTIONS|GITHUB|RUNNER)_/i;
function assertEnvironmentVariableKey(item: string): void {
	if (!(isStringSingleLine(item) && item.length > 0)) {
		throw new SyntaxError(`\`${item}\` is not a valid environment variable key!`);
	}
	if (regexpEnvironmentVariableKeyForbidden.test(item)) {
		throw new Error(`Modify environment variable \`${item}\` is forbidden!`);
	}
}
/**
 * Set an environment variable for all of the subsequent steps.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_ENV`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @param {string} key Key of the environment variable.
 * @param {StringifiableType} value Value of the environment variable.
 * @returns {void}
 */
export function setEnvSubsequent(key: string, value: StringifiableType): void;
/**
 * Set the environment variables.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_ENV`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @param {KeyValueLike<StringifiableType>} pairs Pairs of the environment variable.
 * @returns {void}
 */
export function setEnvSubsequent(pairs: KeyValueLike<StringifiableType>): void;
export function setEnvSubsequent(param0: string | KeyValueLike<StringifiableType>, param1?: StringifiableType): void {
	const pairs: Map<string, string> = new Map<string, string>();
	if (typeof param0 === "string") {
		assertEnvironmentVariableKey(param0);
		pairs.set(param0, stringifyInput(param1!));
	} else {
		for (const [
			key,
			value
		] of ((param0 instanceof Map) ? param0.entries() : Object.entries(param0))) {
			assertEnvironmentVariableKey(key);
			pairs.set(key, stringifyInput(value));
		}
	}
	if (pairs.size > 0) {
		appendFileMapCommand("GITHUB_ENV", pairs);
	}
}
