import type {
	JSONArray,
	JSONObject,
	JSONPrimitive,
	JSONValue,
} from "jsr:@hugoalh/is-json@^1.0.6";
import {
	getParameter,
	getParameterBigInt,
	getParameterBoolean,
	getParameterJSON,
	getParameterJSONArray,
	getParameterJSONObject,
	getParameterJSONPrimitive,
	getParameterNumber,
	setParameter,
	type GitHubActionsGetParameterOptions
} from "./_parameter.ts";
import type {
	KeyValueLike,
	StringifiableType
} from "./_share.ts";
import {
	clearFileCommand,
	optimizeFileCommand
} from "./command/file.ts";
export type { GitHubActionsGetParameterOptions } from "./_parameter.ts";
export type {
	KeyValueLike,
	StringifiableType
} from "./_share.ts";
/**
 * **\[🅰️ Advanced\]** Clear the states which set in the current step.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_STATE`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {void}
 */
export function clearState(): void {
	clearFileCommand("GITHUB_STATE");
}
/**
 * Get the string value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {string | undefined} String value of the state.
 */
export function getState(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): string | undefined;
/**
 * Get the string value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {string} String value of the state.
 */
export function getState(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): string;
export function getState(key: string, options: GitHubActionsGetParameterOptions = {}): string | undefined {
	return getParameter("State", key, options);
}
export {
	getState as getStateString
};
/**
 * Get the big integer value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {bigint | undefined} Big integer value of the state.
 */
export function getStateBigInt(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): bigint | undefined;
/**
 * Get the big integer value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {bigint} Big integer value of the state.
 */
export function getStateBigInt(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): bigint;
export function getStateBigInt(key: string, options: GitHubActionsGetParameterOptions = {}): bigint | undefined {
	return getParameterBigInt("State", key, options);
}
/**
 * Get the boolean value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {boolean | undefined} Boolean value of the state.
 */
export function getStateBoolean(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): boolean | undefined;
/**
 * Get the boolean value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {boolean} Boolean value of the state.
 */
export function getStateBoolean(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): boolean;
export function getStateBoolean(key: string, options: GitHubActionsGetParameterOptions = {}): boolean | undefined {
	return getParameterBoolean("State", key, options);
}
/**
 * Get the JSON value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONValue | undefined} JSON value of the state.
 */
export function getStateJSON(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONValue | undefined;
/**
 * Get the JSON value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONValue} JSON value of the state.
 */
export function getStateJSON(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONValue;
export function getStateJSON(key: string, options: GitHubActionsGetParameterOptions = {}): JSONValue | undefined {
	return getParameterJSON("State", key, options);
}
export {
	getStateJSON as getStateJSONValue
};
/**
 * Get the JSON array of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONArray | undefined} JSON array of the state.
 */
export function getStateJSONArray(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONArray | undefined;
/**
 * Get the JSON array of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONArray} JSON array of the state.
 */
export function getStateJSONArray(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONArray;
export function getStateJSONArray(key: string, options: GitHubActionsGetParameterOptions = {}): JSONArray | undefined {
	return getParameterJSONArray("State", key, options);
}
/**
 * Get the JSON object of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONObject | undefined} JSON object of the state.
 */
export function getStateJSONObject(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONObject | undefined;
/**
 * Get the JSON object of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONObject} JSON object of the state.
 */
export function getStateJSONObject(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONObject;
export function getStateJSONObject(key: string, options: GitHubActionsGetParameterOptions = {}): JSONObject | undefined {
	return getParameterJSONObject("State", key, options);
}
/**
 * Get the JSON primitive of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONPrimitive | undefined} JSON primitive of the state.
 */
export function getStateJSONPrimitive(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONPrimitive | undefined;
/**
 * Get the JSON primitive of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONPrimitive} JSON primitive of the state.
 */
export function getStateJSONPrimitive(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONPrimitive;
export function getStateJSONPrimitive(key: string, options: GitHubActionsGetParameterOptions = {}): JSONPrimitive | undefined {
	return getParameterJSONPrimitive("State", key, options);
}
/**
 * Get the number value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {number | undefined} Number value of the state.
 */
export function getStateNumber(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): number | undefined;
/**
 * Get the number value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {number} Number value of the state.
 */
export function getStateNumber(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): number;
export function getStateNumber(key: string, options: GitHubActionsGetParameterOptions = {}): number | undefined {
	return getParameterNumber("State", key, options);
}
/**
 * **\[🅰️ Advanced\]** Optimize the states which set in the current step to reduce size whenever possible.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_STATE`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {void}
 */
export function optimizeState(): void {
	optimizeFileCommand("GITHUB_STATE");
}
/**
 * Set a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_STATE`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @param {string} key Key of the state.
 * @param {StringifiableType} value Value of the state.
 * @returns {void}
 */
export function setState(key: string, value: StringifiableType): void;
/**
 * Set the states.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_STATE`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @param {KeyValueLike<StringifiableType>} pairs Pairs of the state.
 * @returns {void}
 */
export function setState(pairs: KeyValueLike<StringifiableType>): void;
export function setState(param0: string | KeyValueLike<StringifiableType>, param1?: StringifiableType): void {
	return setParameter("State", param0, param1);
}
