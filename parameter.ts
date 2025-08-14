import { env } from "https://raw.githubusercontent.com/hugoalh/env-es/v0.3.0/env.ts";
import {
	isJSONPrimitive,
	type JSONArray,
	type JSONObject,
	type JSONPrimitive,
	type JSONValue,
} from "https://raw.githubusercontent.com/hugoalh/is-json-es/v1.0.5/mod.ts";
import { isStringSingleLine } from "https://raw.githubusercontent.com/hugoalh/is-string-singleline-es/v1.0.5/mod.ts";
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
export type {
	JSONArray,
	JSONObject,
	JSONPrimitive,
	JSONValue
};
/**
 * **\[🅰️ Advanced\]** Clear the outputs which set in the current step.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_OUTPUT`
 * > - **File System - Read (Deno: `read`; NodeJS: `fs-read`):**
 * >   - *Resources*
 * > - **File System - Write (Deno: `write`; NodeJS: `fs-write`):**
 * >   - *Resources*
 * @returns {void}
 */
export function clearOutput(): void {
	clearFileCommand("GITHUB_OUTPUT");
}
/**
 * **\[🅰️ Advanced\]** Clear the states which set in the current step.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_STATE`
 * > - **File System - Read (Deno: `read`; NodeJS: `fs-read`):**
 * >   - *Resources*
 * > - **File System - Write (Deno: `write`; NodeJS: `fs-write`):**
 * >   - *Resources*
 * @returns {void}
 */
export function clearState(): void {
	clearFileCommand("GITHUB_STATE");
}
export interface GitHubActionsGetParameterOptions {
	/**
	 * Whether the parameter is require.
	 * 
	 * If the parameter is required and not defined, will raise an error.
	 * @default {false}
	 */
	require?: boolean;
}
function getParameter(type: string, key: string): string {
	if (!isStringSingleLine(key)) {
		throw new SyntaxError(`\`${key}\` is not a valid GitHub Actions ${type.toLowerCase()} key!`);
	}
	return env.get(`${type.toUpperCase()}_${key.replaceAll(" ", "_").toUpperCase()}`) ?? "";
}
/**
 * Get the string value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {string | undefined} String value of the input.
 */
export function getInput(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): string | undefined;
/**
 * Get the string value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {string} String value of the input.
 */
export function getInput(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): string;
export function getInput(key: string, options: GitHubActionsGetParameterOptions = {}): string | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("input", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`Input \`${key}\` is not defined!`);
		}
		return;
	}
	return value;
}
export {
	getInput as getInputString
};
/**
 * Get the big integer value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {bigint | undefined} Big integer value of the input.
 */
export function getInputBigInt(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): bigint | undefined;
/**
 * Get the big integer value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {bigint} Big integer value of the input.
 */
export function getInputBigInt(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): bigint;
export function getInputBigInt(key: string, options: GitHubActionsGetParameterOptions = {}): bigint | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("input", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`Input \`${key}\` is not defined!`);
		}
		return;
	}
	try {
		return BigInt(value.endsWith("n") ? value.slice(0, value.length - 1) : value);
	} catch {
		throw new SyntaxError(`\`${value}\` (input \`${key}\`) is not a valid big integer!`);
	}
}
/**
 * Get the boolean value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {boolean | undefined} Boolean value of the input.
 */
export function getInputBoolean(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): boolean | undefined;
/**
 * Get the boolean value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {boolean} Boolean value of the input.
 */
export function getInputBoolean(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): boolean;
export function getInputBoolean(key: string, options: GitHubActionsGetParameterOptions = {}): boolean | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("input", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`Input \`${key}\` is not defined!`);
		}
		return;
	}
	switch (value) {
		case "false":
		case "False":
		case "FALSE":
			return false;
		case "true":
		case "True":
		case "TRUE":
			return true;
		default:
			throw new SyntaxError(`\`${value}\` (input \`${key}\`) is not a valid boolean!`);
	}
}
/**
 * Get the JSON value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {JSONValue | undefined} JSON value of the input.
 */
export function getInputJSON(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONValue | undefined;
/**
 * Get the JSON value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {JSONValue} JSON value of the input.
 */
export function getInputJSON(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONValue;
export function getInputJSON(key: string, options: GitHubActionsGetParameterOptions = {}): JSONValue | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("input", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`Input \`${key}\` is not defined!`);
		}
		return;
	}
	try {
		return JSON.parse(value) as JSONValue;
	} catch {
		throw new SyntaxError(`\`${value}\` (input \`${key}\`) is not a valid JSON value!`);
	}
}
export {
	getInputJSON as getInputJSONValue
};
/**
 * Get the JSON array of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {JSONArray | undefined} JSON array of the input.
 */
export function getInputJSONArray(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONArray | undefined;
/**
 * Get the JSON array of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {JSONArray} JSON array of the input.
 */
export function getInputJSONArray(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONArray;
export function getInputJSONArray(key: string, options: GitHubActionsGetParameterOptions = {}): JSONArray | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: JSONValue | undefined = getInputJSON(key);
	if (typeof value === "undefined") {
		if (require) {
			throw new ReferenceError(`Input \`${key}\` is not defined!`);
		}
		return;
	}
	if (!Array.isArray(value)) {
		throw new SyntaxError(`\`${value}\` (input \`${key}\`) is not a valid JSON array!`);
	}
	return value;
}
/**
 * Get the JSON object of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {JSONObject | undefined} JSON object of the input.
 */
export function getInputJSONObject(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONObject | undefined;
/**
 * Get the JSON object of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {JSONObject} JSON object of the input.
 */
export function getInputJSONObject(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONObject;
export function getInputJSONObject(key: string, options: GitHubActionsGetParameterOptions = {}): JSONObject | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: JSONValue | undefined = getInputJSON(key);
	if (typeof value === "undefined") {
		if (require) {
			throw new ReferenceError(`Input \`${key}\` is not defined!`);
		}
		return;
	}
	if (!(typeof value === "object" && !Array.isArray(value) && value !== null)) {
		throw new SyntaxError(`\`${value}\` (input \`${key}\`) is not a valid JSON object!`);
	}
	return value;
}
/**
 * Get the JSON primitive of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {JSONPrimitive | undefined} JSON primitive of the input.
 */
export function getInputJSONPrimitive(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONPrimitive | undefined;
/**
 * Get the JSON primitive of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {JSONPrimitive} JSON primitive of the input.
 */
export function getInputJSONPrimitive(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONPrimitive;
export function getInputJSONPrimitive(key: string, options: GitHubActionsGetParameterOptions = {}): JSONPrimitive | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: JSONValue | undefined = getInputJSON(key);
	if (typeof value === "undefined") {
		if (require) {
			throw new ReferenceError(`Input \`${key}\` is not defined!`);
		}
		return;
	}
	if (!isJSONPrimitive(value)) {
		throw new SyntaxError(`\`${value}\` (input \`${key}\`) is not a valid JSON primitive!`);
	}
	return value;
}
/**
 * Get the number value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {number | undefined} Number value of the input.
 */
export function getInputNumber(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): number | undefined;
/**
 * Get the number value of the input.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the input.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {number} Number value of the input.
 */
export function getInputNumber(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): number;
export function getInputNumber(key: string, options: GitHubActionsGetParameterOptions = {}): number | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("input", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`Input \`${key}\` is not defined!`);
		}
		return undefined;
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
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {string | undefined} String value of the state.
 */
export function getState(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): string | undefined;
/**
 * Get the string value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {string} String value of the state.
 */
export function getState(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): string;
export function getState(key: string, options: GitHubActionsGetParameterOptions = {}): string | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("state", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`State \`${key}\` is not defined!`);
		}
		return undefined;
	}
	return value;
}
export {
	getState as getStateString
};
/**
 * Get the big integer value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {bigint | undefined} Big integer value of the state.
 */
export function getStateBigInt(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): bigint | undefined;
/**
 * Get the big integer value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {bigint} Big integer value of the state.
 */
export function getStateBigInt(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): bigint;
export function getStateBigInt(key: string, options: GitHubActionsGetParameterOptions = {}): bigint | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("state", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`State \`${key}\` is not defined!`);
		}
		return;
	}
	try {
		return BigInt(value.endsWith("n") ? value.slice(0, value.length - 1) : value);
	} catch {
		throw new SyntaxError(`\`${value}\` (state \`${key}\`) is not a valid big integer!`);
	}
}
/**
 * Get the boolean value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {boolean | undefined} Boolean value of the state.
 */
export function getStateBoolean(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): boolean | undefined;
/**
 * Get the boolean value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {boolean} Boolean value of the state.
 */
export function getStateBoolean(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): boolean;
export function getStateBoolean(key: string, options: GitHubActionsGetParameterOptions = {}): boolean | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("state", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`State \`${key}\` is not defined!`);
		}
		return;
	}
	switch (value) {
		case "false":
		case "False":
		case "FALSE":
			return false;
		case "true":
		case "True":
		case "TRUE":
			return true;
		default:
			throw new SyntaxError(`\`${value}\` (state \`${key}\`) is not a valid boolean!`);
	}
}
/**
 * Get the JSON value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {JSONValue | undefined} JSON value of the state.
 */
export function getStateJSON(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONValue | undefined;
/**
 * Get the JSON value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {JSONValue} JSON value of the state.
 */
export function getStateJSON(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONValue;
export function getStateJSON(key: string, options: GitHubActionsGetParameterOptions = {}): JSONValue | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("state", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`State \`${key}\` is not defined!`);
		}
		return;
	}
	try {
		return JSON.parse(value) as JSONValue;
	} catch {
		throw new SyntaxError(`\`${value}\` (state \`${key}\`) is not a valid JSON value!`);
	}
}
export {
	getStateJSON as getStateJSONValue
};
/**
 * Get the JSON array of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {JSONArray | undefined} JSON array of the state.
 */
export function getStateJSONArray(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONArray | undefined;
/**
 * Get the JSON array of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {JSONArray} JSON array of the state.
 */
export function getStateJSONArray(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONArray;
export function getStateJSONArray(key: string, options: GitHubActionsGetParameterOptions = {}): JSONArray | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: JSONValue | undefined = getStateJSON(key);
	if (typeof value === "undefined") {
		if (require) {
			throw new ReferenceError(`State \`${key}\` is not defined!`);
		}
		return;
	}
	if (!Array.isArray(value)) {
		throw new SyntaxError(`\`${value}\` (state \`${key}\`) is not a valid JSON array!`);
	}
	return value;
}
/**
 * Get the JSON object of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {JSONObject | undefined} JSON object of the state.
 */
export function getStateJSONObject(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONObject | undefined;
/**
 * Get the JSON object of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {JSONObject} JSON object of the state.
 */
export function getStateJSONObject(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONObject;
export function getStateJSONObject(key: string, options: GitHubActionsGetParameterOptions = {}): JSONObject | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: JSONValue | undefined = getStateJSON(key);
	if (typeof value === "undefined") {
		if (require) {
			throw new ReferenceError(`State \`${key}\` is not defined!`);
		}
		return;
	}
	if (!(typeof value === "object" && !Array.isArray(value) && value !== null)) {
		throw new SyntaxError(`\`${value}\` (state \`${key}\`) is not a valid JSON object!`);
	}
	return value;
}
/**
 * Get the JSON primitive of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {JSONPrimitive | undefined} JSON primitive of the state.
 */
export function getStateJSONPrimitive(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): JSONPrimitive | undefined;
/**
 * Get the JSON primitive of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {JSONPrimitive} JSON primitive of the state.
 */
export function getStateJSONPrimitive(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): JSONPrimitive;
export function getStateJSONPrimitive(key: string, options: GitHubActionsGetParameterOptions = {}): JSONPrimitive | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: JSONValue | undefined = getStateJSON(key);
	if (typeof value === "undefined") {
		if (require) {
			throw new ReferenceError(`State \`${key}\` is not defined!`);
		}
		return;
	}
	if (!isJSONPrimitive(value)) {
		throw new SyntaxError(`\`${value}\` (state \`${key}\`) is not a valid JSON primitive!`);
	}
	return value;
}
/**
 * Get the number value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require?: false; }} [options={}] Options.
 * @returns {number | undefined} Number value of the state.
 */
export function getStateNumber(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): number | undefined;
/**
 * Get the number value of a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - *Resources*
 * @param {string} key Key of the state.
 * @param {GitHubActionsGetParameterOptions & { require: true; }} options Options.
 * @returns {number} Number value of the state.
 */
export function getStateNumber(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): number;
export function getStateNumber(key: string, options: GitHubActionsGetParameterOptions = {}): number | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	const value: string = getParameter("state", key);
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`State \`${key}\` is not defined!`);
		}
		return;
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
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_OUTPUT`
 * > - **File System - Read (Deno: `read`; NodeJS: `fs-read`):**
 * >   - *Resources*
 * > - **File System - Write (Deno: `write`; NodeJS: `fs-write`):**
 * >   - *Resources*
 * @returns {void}
 */
export function optimizeOutput(): void {
	optimizeFileCommand("GITHUB_OUTPUT");
}
/**
 * **\[🅰️ Advanced\]** Optimize the states which set in the current step to reduce size whenever possible.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_STATE`
 * > - **File System - Read (Deno: `read`; NodeJS: `fs-read`):**
 * >   - *Resources*
 * > - **File System - Write (Deno: `write`; NodeJS: `fs-write`):**
 * >   - *Resources*
 * @returns {void}
 */
export function optimizeState(): void {
	optimizeFileCommand("GITHUB_STATE");
}
/**
 * Set an output.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_OUTPUT`
 * > - **File System - Read (Deno: `read`; NodeJS: `fs-read`):**
 * >   - *Resources*
 * > - **File System - Write (Deno: `write`; NodeJS: `fs-write`):**
 * >   - *Resources*
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
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_OUTPUT`
 * > - **File System - Read (Deno: `read`; NodeJS: `fs-read`):**
 * >   - *Resources*
 * > - **File System - Write (Deno: `write`; NodeJS: `fs-write`):**
 * >   - *Resources*
 * @param {KeyValueLike<StringifiableType>} pairs Pairs of the output.
 * @returns {void}
 */
export function setOutput(pairs: KeyValueLike<StringifiableType>): void;
export function setOutput(param0: string | KeyValueLike<StringifiableType>, param1?: StringifiableType): void {
	const pairs: Map<string, string> = new Map<string, string>();
	if (typeof param0 === "string") {
		if (!isStringSingleLine(param0)) {
			throw new SyntaxError(`\`${param0}\` is not a valid GitHub Actions output key!`);
		}
		pairs.set(param0, stringifyInput(param1!));
	} else {
		for (const [
			key,
			value
		] of ((param0 instanceof Map) ? param0.entries() : Object.entries(param0))) {
			if (!isStringSingleLine(key)) {
				throw new SyntaxError(`\`${key}\` is not a valid GitHub Actions output key!`);
			}
			pairs.set(key, stringifyInput(value));
		}
	}
	if (pairs.size > 0) {
		appendFileMapCommand("GITHUB_OUTPUT", pairs);
	}
}
/**
 * Set a state.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_STATE`
 * > - **File System - Read (Deno: `read`; NodeJS: `fs-read`):**
 * >   - *Resources*
 * > - **File System - Write (Deno: `write`; NodeJS: `fs-write`):**
 * >   - *Resources*
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
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_STATE`
 * > - **File System - Read (Deno: `read`; NodeJS: `fs-read`):**
 * >   - *Resources*
 * > - **File System - Write (Deno: `write`; NodeJS: `fs-write`):**
 * >   - *Resources*
 * @param {KeyValueLike<StringifiableType>} pairs Pairs of the state.
 * @returns {void}
 */
export function setState(pairs: KeyValueLike<StringifiableType>): void;
export function setState(param0: string | KeyValueLike<StringifiableType>, param1?: StringifiableType): void {
	const pairs: Map<string, string> = new Map<string, string>();
	if (typeof param0 === "string") {
		if (!isStringSingleLine(param0)) {
			throw new SyntaxError(`\`${param0}\` is not a valid GitHub Actions state key!`);
		}
		pairs.set(param0, stringifyInput(param1!));
	} else {
		for (const [
			key,
			value
		] of ((param0 instanceof Map) ? param0.entries() : Object.entries(param0))) {
			if (!isStringSingleLine(key)) {
				throw new SyntaxError(`\`${key}\` is not a valid GitHub Actions state key!`);
			}
			pairs.set(key, stringifyInput(value));
		}
	}
	if (pairs.size > 0) {
		appendFileMapCommand("GITHUB_STATE", pairs);
	}
}
