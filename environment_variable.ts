import { isAbsolute as isPathAbsolute } from "jsr:@std/path@^1.0.6/is-absolute";
import { setEnv } from "https://raw.githubusercontent.com/hugoalh/env-es/v0.2.0/env.ts";
import { addEnvPath } from "https://raw.githubusercontent.com/hugoalh/env-es/v0.2.0/path.ts";
import { isStringSingleLine } from "https://raw.githubusercontent.com/hugoalh/is-string-singleline-es/v1.0.4/mod.ts";
import {
	stringifyInput,
	type KeyValueLike,
	type StringizableType
} from "./_share.ts";
import {
	appendFileLineCommand,
	appendFileMapCommand,
	clearFileCommand,
	optimizeFileCommand
} from "./command/file.ts";
/**
 * Add value to the `PATH`.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_PATH`
 * >     - `PATH`
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * > - NodeJS (>= v20.9.0) 🧪
 * >   - File System - Read (`fs-read`)
 * >     - *Resources*
 * >   - File System - Write (`fs-write`)
 * >     - *Resources*
 * @param {string} path Value that need to add to the `PATH`.
 * @param {GitHubActionsSetEnvironmentVariableOptions} [options={}] Options.
 * @returns {void}
 */
export function addPATH(path: string, options?: GitHubActionsSetEnvironmentVariableOptions): void;
/**
 * Add value to the `PATH`.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_PATH`
 * >     - `PATH`
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * > - NodeJS (>= v20.9.0) 🧪
 * >   - File System - Read (`fs-read`)
 * >     - *Resources*
 * >   - File System - Write (`fs-write`)
 * >     - *Resources*
 * @param {string[]} paths Value that need to add to the `PATH`.
 * @param {GitHubActionsSetEnvironmentVariableOptions} [options={}] Options.
 * @returns {void}
 */
export function addPATH(paths: string[], options?: GitHubActionsSetEnvironmentVariableOptions): void;
export function addPATH(param0: string | string[], options: GitHubActionsSetEnvironmentVariableOptions = {}): void {
	const {
		scopeCurrent = true,
		scopeSubsequent = true
	}: GitHubActionsSetEnvironmentVariableOptions = options;
	const paths: string[] = (typeof param0 === "string") ? [param0] : param0;
	paths.forEach((path: string): void => {
		if (!isPathAbsolute(path)) {
			throw new SyntaxError(`\`${path}\` is not a valid absolute path!`);
		}
	});
	if (paths.length > 0) {
		if (scopeCurrent) {
			addEnvPath(...paths);
		}
		if (scopeSubsequent) {
			appendFileLineCommand("GITHUB_PATH", ...paths);
		}
	}
}
/**
 * **\[🅰️ Advanced\]** Clear the environment variables for all of the subsequent steps which set in the current step.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_ENV`
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
export function clearEnvironmentVariableSubsequent(): void {
	clearFileCommand("GITHUB_ENV");
}
export {
	clearEnvironmentVariableSubsequent as clearEnvSubsequent
};
/**
 * **\[🅰️ Advanced\]** Clear the `PATH` for all of the subsequent steps which set in the current step.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_PATH`
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
export function clearPATHSubsequent(): void {
	clearFileCommand("GITHUB_PATH");
}
/**
 * **\[🅰️ Advanced\]** Optimize the environment variables for all of the subsequent steps which set in the current step to reduce size whenever possible.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_ENV`
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
export function optimizeEnvironmentVariableSubsequent(): void {
	optimizeFileCommand("GITHUB_ENV");
}
export {
	optimizeEnvironmentVariableSubsequent as optimizeEnvSubsequent
};
/**
 * **\[🅰️ Advanced\]** Optimize the `PATH` for all of the subsequent steps which set in the current step to reduce size whenever possible.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_PATH`
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
export function optimizePATHSubsequent(): void {
	optimizeFileCommand("GITHUB_PATH");
}
const regexpEnvironmentVariableKeyForbidden = /^(?:CI|PATH)$|^(?:ACTIONS|GITHUB|RUNNER)_/i;
/**
 * Validate the item is a valid GitHub Actions environment variable key.
 * @param {string} item Item that need to determine.
 * @returns {void}
 */
function validateEnvironmentVariableKey(item: string): void {
	if (!(isStringSingleLine(item) && item.length > 0)) {
		throw new SyntaxError(`\`${item}\` is not a valid environment variable key!`);
	}
	if (regexpEnvironmentVariableKeyForbidden.test(item)) {
		throw new Error(`Modify environment variable \`${item}\` is forbidden!`);
	}
}
export interface GitHubActionsSetEnvironmentVariableOptions {
	/**
	 * Whether to set for the current step.
	 * @default {true}
	 */
	scopeCurrent?: boolean;
	/**
	 * Whether to set for all of the subsequent steps.
	 * @default {true}
	 */
	scopeSubsequent?: boolean;
}
/**
 * Set an environment variable.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * > - NodeJS (>= v20.9.0) 🧪
 * >   - File System - Read (`fs-read`)
 * >     - *Resources*
 * >   - File System - Write (`fs-write`)
 * >     - *Resources*
 * @param {string} key Key of the environment variable.
 * @param {StringizableType} value Value of the environment variable.
 * @param {GitHubActionsSetEnvironmentVariableOptions} [options={}] Options.
 * @returns {void}
 */
export function setEnvironmentVariable(key: string, value: StringizableType, options?: GitHubActionsSetEnvironmentVariableOptions): void;
/**
 * Set the environment variables.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_ENV`
 * >     - *Resources*
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * > - NodeJS (>= v20.9.0) 🧪
 * >   - File System - Read (`fs-read`)
 * >     - *Resources*
 * >   - File System - Write (`fs-write`)
 * >     - *Resources*
 * @param {KeyValueLike<StringizableType>} pairs Pairs of the environment variable.
 * @param {GitHubActionsSetEnvironmentVariableOptions} [options={}] Options.
 * @returns {void}
 */
export function setEnvironmentVariable(pairs: KeyValueLike<StringizableType>, options?: GitHubActionsSetEnvironmentVariableOptions): void;
export function setEnvironmentVariable(param0: string | KeyValueLike<StringizableType>, param1?: StringizableType | GitHubActionsSetEnvironmentVariableOptions, param2?: GitHubActionsSetEnvironmentVariableOptions): void {
	const {
		scopeCurrent = true,
		scopeSubsequent = true
	}: GitHubActionsSetEnvironmentVariableOptions = ((typeof param0 === "string") ? (param1 as GitHubActionsSetEnvironmentVariableOptions | undefined) : param2) ?? {};
	const pairs: Map<string, string> = new Map<string, string>();
	if (typeof param0 === "string") {
		validateEnvironmentVariableKey(param0);
		pairs.set(param0, stringifyInput(param1 as StringizableType));
	} else {
		for (const [key, value] of ((param0 instanceof Map) ? param0.entries() : Object.entries(param0))) {
			validateEnvironmentVariableKey(key);
			pairs.set(key, stringifyInput(value));
		}
	}
	if (pairs.size > 0) {
		if (scopeCurrent) {
			for (const [key, value] of pairs.values()) {
				setEnv(key, value);
			}
		}
		if (scopeSubsequent) {
			appendFileMapCommand("GITHUB_ENV", pairs);
		}
	}
}
export {
	setEnvironmentVariable as setEnv
};
