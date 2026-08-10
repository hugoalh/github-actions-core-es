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
	type GitHubActionsGetParameterOptions
} from "./_parameter.ts";
export type { GitHubActionsGetParameterOptions } from "./_parameter.ts";
/**
 * Get the string value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {string | undefined} String value of the input.
 */
export function getInput(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): string | undefined;
/**
 * Get the string value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {string} String value of the input.
 */
export function getInput(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): string;
export function getInput(key: string, options: GitHubActionsGetParameterOptions = {}): string | undefined {
	return getParameter("Input", key, options);
}
export {
	getInput as getInputString
};
/**
 * Get the big integer value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {bigint | undefined} Big integer value of the input.
 */
export function getInputBigInt(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): bigint | undefined;
/**
 * Get the big integer value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {bigint} Big integer value of the input.
 */
export function getInputBigInt(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): bigint;
export function getInputBigInt(key: string, options: GitHubActionsGetParameterOptions = {}): bigint | undefined {
	return getParameterBigInt("Input", key, options);
}
/**
 * Get the boolean value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {boolean | undefined} Boolean value of the input.
 */
export function getInputBoolean(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): boolean | undefined;
/**
 * Get the boolean value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {boolean} Boolean value of the input.
 */
export function getInputBoolean(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): boolean;
export function getInputBoolean(key: string, options: GitHubActionsGetParameterOptions = {}): boolean | undefined {
	return getParameterBoolean("Input", key, options);
}
/**
 * Get the JSON value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONValue | undefined} JSON value of the input.
 */
export function getInputJSON(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONValue | undefined;
/**
 * Get the JSON value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONValue} JSON value of the input.
 */
export function getInputJSON(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONValue;
export function getInputJSON(key: string, options: GitHubActionsGetParameterOptions = {}): JSONValue | undefined {
	return getParameterJSON("Input", key, options);
}
export {
	getInputJSON as getInputJSONValue
};
/**
 * Get the JSON array of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONArray | undefined} JSON array of the input.
 */
export function getInputJSONArray(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONArray | undefined;
/**
 * Get the JSON array of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONArray} JSON array of the input.
 */
export function getInputJSONArray(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONArray;
export function getInputJSONArray(key: string, options: GitHubActionsGetParameterOptions = {}): JSONArray | undefined {
	return getParameterJSONArray("Input", key, options);
}
/**
 * Get the JSON object of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONObject | undefined} JSON object of the input.
 */
export function getInputJSONObject(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONObject | undefined;
/**
 * Get the JSON object of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONObject} JSON object of the input.
 */
export function getInputJSONObject(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONObject;
export function getInputJSONObject(key: string, options: GitHubActionsGetParameterOptions = {}): JSONObject | undefined {
	return getParameterJSONObject("Input", key, options);
}
/**
 * Get the JSON primitive of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONPrimitive | undefined} JSON primitive of the input.
 */
export function getInputJSONPrimitive(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONPrimitive | undefined;
/**
 * Get the JSON primitive of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {JSONPrimitive} JSON primitive of the input.
 */
export function getInputJSONPrimitive(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONPrimitive;
export function getInputJSONPrimitive(key: string, options: GitHubActionsGetParameterOptions = {}): JSONPrimitive | undefined {
	return getParameterJSONPrimitive("Input", key, options);
}
/**
 * Get the number value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {number | undefined} Number value of the input.
 */
export function getInputNumber(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): number | undefined;
/**
 * Get the number value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions} [options={}] Options.
 * @returns {number} Number value of the input.
 */
export function getInputNumber(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): number;
export function getInputNumber(key: string, options: GitHubActionsGetParameterOptions = {}): number | undefined {
	return getParameterNumber("Input", key, options);
}
