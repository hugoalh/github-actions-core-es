import { getEnv } from "https://raw.githubusercontent.com/hugoalh/env-es/v0.2.0/env.ts";
import { isStringSingleLine } from "https://raw.githubusercontent.com/hugoalh/is-string-singleline-es/v1.0.4/mod.ts";
import {
	appendFileMapCommand,
	clearFileCommand,
	optimizeFileCommand
} from "./command/file.ts";
import type { KeyValueLike } from "./common.ts";
/**
 * **\[🅰️ Advanced\]** Clear the outputs which set in the current step.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_OUTPUT`
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * @returns {void}
 */
export function clearOutput(): void {
	clearFileCommand("GITHUB_OUTPUT");
}
/**
 * **\[🅰️ Advanced\]** Clear the states which set in the current step.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_STATE`
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * @returns {void}
 */
export function clearState(): void {
	clearFileCommand("GITHUB_STATE");
}
const regexpBigInt = /^(?:0b1*[01]+|0o[1-7]*[0-7]+|[1-9]*\d|0x[1-9A-Fa-f]*[\dA-Fa-f]+)n?$/;
const regexpBooleanFalse = /^[Ff]alse$|^FALSE$/;
const regexpBooleanTrue = /^[Tt]rue$|^TRUE$/;
export interface GitHubActionsGetParameterOptions {
	/**
	 * Whether to return `undefined` instead of the default fallback value when the parameter is not required and defined.
	 * 
	 * Different parameter type has different fallback value:
	 * 
	 * - **`bigint`**: `0n`
	 * - **`boolean`**: `false`
	 * - **`number`**: `0`
	 * - **`string`**: `""`
	 * 
	 * If property {@linkcode require} is defined to `true`, define this property is pointless.
	 * @default {false}
	 */
	noDefaultFallbackValue?: boolean;
	/**
	 * Whether the parameter is require.
	 * 
	 * If the parameter is required and not defined, will raise an error.
	 * @default {false}
	 */
	require?: boolean;
}
/**
 * Get the raw value of a parameter.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} source Source of the parameter.
 * @param {string} key Key of the parameter.
 * @returns {string} Raw value of the parameter.
 */
function getParameter(source: string, key: string): string {
	if (!isStringSingleLine(key)) {
		throw new SyntaxError(`\`${key}\` is not a valid GitHub Actions ${source.toLowerCase()} key!`);
	}
	return getEnv(`${source.toUpperCase()}_${key.replaceAll(" ", "_").toUpperCase()}`) ?? "";
}
/**
 * Get the string value of an input.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }} [options={}] Options.
 * @returns {string} String value of the input.
 */
export function getInput(key: string, options?: GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }): string;
/**
 * Get the string value of an input.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {string} String value of the input.
 */
export function getInput(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): string;
/**
 * Get the string value of an input.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }} options Options.
 * @returns {string | undefined} String value of the input.
 */
export function getInput(key: string, options: GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }): string | undefined;
export function getInput(key: string, options: GitHubActionsGetParameterOptions = {}): string | undefined {
	const {
		noDefaultFallbackValue = false,
		require = false
	}: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("input", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`Input \`${key}\` is not defined!`);
		}
		return (noDefaultFallbackValue ? undefined : "");
	}
	return value;
}
export {
	getInput as getInputString
};
/**
 * Get the big integer value of an input.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }} [options={}] Options.
 * @returns {bigint} Big integer value of the input.
 */
export function getInputBigInt(key: string, options?: GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }): bigint;
/**
 * Get the big integer value of an input.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {bigint} Big integer value of the input.
 */
export function getInputBigInt(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): bigint;
/**
 * Get the big integer value of an input.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }} options Options.
 * @returns {bigint | undefined} Big integer value of the input.
 */
export function getInputBigInt(key: string, options: GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }): bigint | undefined;
export function getInputBigInt(key: string, options: GitHubActionsGetParameterOptions = {}): bigint | undefined {
	const {
		noDefaultFallbackValue = false,
		require = false
	}: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("input", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`Input \`${key}\` is not defined!`);
		}
		return (noDefaultFallbackValue ? undefined : 0n);
	}
	try {
		if (!regexpBigInt.test(value)) {
			throw undefined;
		}
		return BigInt(value.replace(/n$/, ""));
	} catch {
		throw new SyntaxError(`\`${value}\` (input \`${key}\`) is not a valid big integer!`);
	}
}
export {
	getInputBigInt as getInputBigInteger
};
/**
 * Get the boolean value of an input.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }} [options={}] Options.
 * @returns {boolean} Boolean value of the input.
 */
export function getInputBoolean(key: string, options?: GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }): boolean;
/**
 * Get the boolean value of an input.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {boolean} Boolean value of the input.
 */
export function getInputBoolean(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): boolean;
/**
 * Get the boolean value of an input.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }} options Options.
 * @returns {boolean | undefined} Boolean value of the input.
 */
export function getInputBoolean(key: string, options: GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }): boolean | undefined;
export function getInputBoolean(key: string, options: GitHubActionsGetParameterOptions = {}): boolean | undefined {
	const {
		noDefaultFallbackValue = false,
		require = false
	}: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("input", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`Input \`${key}\` is not defined!`);
		}
		return (noDefaultFallbackValue ? undefined : false);
	}
	if (regexpBooleanFalse.test(value)) {
		return false;
	}
	if (regexpBooleanTrue.test(value)) {
		return true;
	}
	throw new SyntaxError(`\`${value}\` (input \`${key}\`) is not a valid boolean!`);
}
/**
 * Get the number value of an input.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }} [options={}] Options.
 * @returns {number} Number value of the input.
 */
export function getInputNumber(key: string, options?: GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }): number;
/**
 * Get the number value of an input.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {number} Number value of the input.
 */
export function getInputNumber(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): number;
/**
 * Get the number value of an input.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }} options Options.
 * @returns {number | undefined} Number value of the input.
 */
export function getInputNumber(key: string, options: GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }): number | undefined;
export function getInputNumber(key: string, options: GitHubActionsGetParameterOptions = {}): number | undefined {
	const {
		noDefaultFallbackValue = false,
		require = false
	}: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("input", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`Input \`${key}\` is not defined!`);
		}
		return (noDefaultFallbackValue ? undefined : 0);
	}
	try {
		return Number(value);
	} catch {
		throw new SyntaxError(`\`${value}\` (input \`${key}\`) is not a valid number!`);
	}
}
/**
 * Get the string value of a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }} [options={}] Options.
 * @returns {string} String value of the state.
 */
export function getState(key: string, options?: GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }): string;
/**
 * Get the string value of a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {string} String value of the state.
 */
export function getState(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): string;
/**
 * Get the string value of a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }} options Options.
 * @returns {string | undefined} String value of the state.
 */
export function getState(key: string, options: GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }): string | undefined;
export function getState(key: string, options: GitHubActionsGetParameterOptions = {}): string | undefined {
	const {
		noDefaultFallbackValue = false,
		require = false
	}: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("state", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`State \`${key}\` is not defined!`);
		}
		return (noDefaultFallbackValue ? undefined : "");
	}
	return value;
}
export {
	getState as getStateString
};
/**
 * Get the big integer value of a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }} [options={}] Options.
 * @returns {bigint} Big integer value of the state.
 */
export function getStateBigInt(key: string, options?: GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }): bigint;
/**
 * Get the big integer value of a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {bigint} Big integer value of the state.
 */
export function getStateBigInt(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): bigint;
/**
 * Get the big integer value of a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }} options Options.
 * @returns {bigint | undefined} Big integer value of the state.
 */
export function getStateBigInt(key: string, options: GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }): bigint | undefined;
export function getStateBigInt(key: string, options: GitHubActionsGetParameterOptions = {}): bigint | undefined {
	const {
		noDefaultFallbackValue = false,
		require = false
	}: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("state", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`State \`${key}\` is not defined!`);
		}
		return (noDefaultFallbackValue ? undefined : 0n);
	}
	try {
		if (!regexpBigInt.test(value)) {
			throw undefined;
		}
		return BigInt(value.replace(/n$/, ""));
	} catch {
		throw new SyntaxError(`\`${value}\` (state \`${key}\`) is not a valid big integer!`);
	}
}
export {
	getStateBigInt as getStateBigInteger
};
/**
 * Get the boolean value of a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }} [options={}] Options.
 * @returns {boolean} Boolean value of the state.
 */
export function getStateBoolean(key: string, options?: GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }): boolean;
/**
 * Get the boolean value of a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {boolean} Boolean value of the state.
 */
export function getStateBoolean(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): boolean;
/**
 * Get the boolean value of a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }} options Options.
 * @returns {boolean | undefined} Boolean value of the state.
 */
export function getStateBoolean(key: string, options: GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }): boolean | undefined;
export function getStateBoolean(key: string, options: GitHubActionsGetParameterOptions = {}): boolean | undefined {
	const {
		noDefaultFallbackValue = false,
		require = false
	}: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("state", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`State \`${key}\` is not defined!`);
		}
		return (noDefaultFallbackValue ? undefined : false);
	}
	if (regexpBooleanFalse.test(value)) {
		return false;
	}
	if (regexpBooleanTrue.test(value)) {
		return true;
	}
	throw new SyntaxError(`\`${value}\` (state \`${key}\`) is not a valid boolean!`);
}
/**
 * Get the number value of a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }} [options={}] Options.
 * @returns {number} Number value of the state.
 */
export function getStateNumber(key: string, options?: GitHubActionsGetParameterOptions & { noDefaultFallbackValue?: false; require?: false; }): number;
/**
 * Get the number value of a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {number} Number value of the state.
 */
export function getStateNumber(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): number;
/**
 * Get the number value of a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }} options Options.
 * @returns {number | undefined} Number value of the state.
 */
export function getStateNumber(key: string, options: GitHubActionsGetParameterOptions & { noDefaultFallbackValue: true; require?: false; }): number | undefined;
export function getStateNumber(key: string, options: GitHubActionsGetParameterOptions = {}): number | undefined {
	const {
		noDefaultFallbackValue = false,
		require = false
	}: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("state", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`State \`${key}\` is not defined!`);
		}
		return (noDefaultFallbackValue ? undefined : 0);
	}
	try {
		return Number(value);
	} catch {
		throw new SyntaxError(`\`${value}\` (state \`${key}\`) is not a valid number!`);
	}
}
/**
 * **\[🅰️ Advanced\]** Optimize the outputs which set in the current step to reduce size whenever possible.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_OUTPUT`
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * @returns {void}
 */
export function optimizeOutput(): void {
	optimizeFileCommand("GITHUB_OUTPUT");
}
/**
 * **\[🅰️ Advanced\]** Optimize the states which set in the current step to reduce size whenever possible.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_STATE`
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * @returns {void}
 */
export function optimizeState(): void {
	optimizeFileCommand("GITHUB_STATE");
}
/**
 * Set an output.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_OUTPUT`
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * @param {string} key Key of the output.
 * @param {string} value Value of the output.
 * @returns {void}
 */
export function setOutput(key: string, value: string): void;
/**
 * Set the outputs.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_OUTPUT`
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * @param {KeyValueLike} pairs Pairs of the output.
 * @returns {void}
 */
export function setOutput(pairs: KeyValueLike): void;
export function setOutput(param0: string | KeyValueLike, param1?: string): void {
	const pairs: Map<string, string> = new Map<string, string>();
	if (typeof param0 === "string") {
		if (!isStringSingleLine(param0)) {
			throw new SyntaxError(`\`${param0}\` is not a valid GitHub Actions output key!`);
		}
		pairs.set(param0, param1!);
	} else {
		for (const [key, value] of ((param0 instanceof Map) ? param0.entries() : Object.entries(param0))) {
			if (!isStringSingleLine(key)) {
				throw new SyntaxError(`\`${key}\` is not a valid GitHub Actions output key!`);
			}
			pairs.set(key, value);
		}
	}
	if (pairs.size > 0) {
		appendFileMapCommand("GITHUB_OUTPUT", pairs);
	}
}
/**
 * Set a state.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_STATE`
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * @param {string} key Key of the state.
 * @param {string} value Value of the state.
 * @returns {void}
 */
export function setState(key: string, value: string): void;
/**
 * Set the states.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_STATE`
 * >   - File System - Read (`read`)
 * >     - *Resources*
 * >   - File System - Write (`write`)
 * >     - *Resources*
 * @param {KeyValueLike} pairs Pairs of the state.
 * @returns {void}
 */
export function setState(pairs: KeyValueLike): void;
export function setState(param0: string | KeyValueLike, param1?: string): void {
	const pairs: Map<string, string> = new Map<string, string>();
	if (typeof param0 === "string") {
		if (!isStringSingleLine(param0)) {
			throw new SyntaxError(`\`${param0}\` is not a valid GitHub Actions state key!`);
		}
		pairs.set(param0, param1!);
	} else {
		for (const [key, value] of ((param0 instanceof Map) ? param0.entries() : Object.entries(param0))) {
			if (!isStringSingleLine(key)) {
				throw new SyntaxError(`\`${key}\` is not a valid GitHub Actions state key!`);
			}
			pairs.set(key, value);
		}
	}
	if (pairs.size > 0) {
		appendFileMapCommand("GITHUB_STATE", pairs);
	}
}
