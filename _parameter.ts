import { getEnv } from "jsr:@hugoalh/env@^0.4.1/general";
import {
	isJSONArray,
	isJSONObject,
	isJSONPrimitive,
	type JSONArray,
	type JSONObject,
	type JSONPrimitive,
	type JSONValue,
} from "jsr:@hugoalh/is-json@^1.0.6";
import { isStringSingleLine } from "jsr:@hugoalh/is-string-singleline@^1.0.6";
import {
	stringifyInput,
	type KeyValueLike,
	type StringifiableType
} from "./_share.ts";
import { appendFileMapCommand } from "./command/file.ts";
export interface GitHubActionsGetParameterOptions {
	/**
	 * Whether the parameter is require.
	 * 
	 * If the parameter is required and not defined, will raise an error.
	 * @default {false}
	 */
	require?: boolean;
}
export function getParameter(type: string, key: string, options: GitHubActionsGetParameterOptions = {}): string | undefined {
	const { require = false }: GitHubActionsGetParameterOptions = options;
	if (!isStringSingleLine(key)) {
		throw new SyntaxError(`\`${key}\` is not a valid GitHub Actions ${type.toLowerCase()} key!`);
	}
	const value: string = getEnv(`${type.toUpperCase()}_${key.replaceAll(" ", "_").toUpperCase()}`) ?? "";
	if (value.length === 0) {
		if (require) {
			throw new ReferenceError(`${type} \`${key}\` is not defined!`);
		}
		return;
	}
	return value;
}
export function getParameterBigInt(type: string, key: string, options: GitHubActionsGetParameterOptions = {}): bigint | undefined {
	const value: string | undefined = getParameter(type, key, options);
	if (typeof value === "undefined") {
		return;
	}
	try {
		return BigInt(value.endsWith("n") ? value.slice(0, value.length - 1) : value);
	} catch {
		throw new SyntaxError(`\`${value}\` (${type.toLowerCase()} \`${key}\`) is not a big integer!`);
	}
}
export function getParameterBoolean(type: string, key: string, options: GitHubActionsGetParameterOptions = {}): boolean | undefined {
	const value: string | undefined = getParameter(type, key, options);
	if (typeof value === "undefined") {
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
			throw new SyntaxError(`\`${value}\` (${type.toLowerCase()} \`${key}\`) is not a boolean!`);
	}
}
export function getParameterJSON(type: string, key: string, options: GitHubActionsGetParameterOptions = {}): JSONValue | undefined {
	const value: string | undefined = getParameter(type, key, options);
	if (typeof value === "undefined") {
		return;
	}
	try {
		return JSON.parse(value) as JSONValue;
	} catch {
		throw new SyntaxError(`\`${value}\` (${type.toLowerCase()} \`${key}\`) is not a JSON value!`);
	}
}
export function getParameterJSONArray(type: string, key: string, options: GitHubActionsGetParameterOptions = {}): JSONArray | undefined {
	const value: JSONValue | undefined = getParameterJSON(type, key, options);
	if (typeof value === "undefined") {
		return;
	}
	if (!isJSONArray(value)) {
		throw new SyntaxError(`\`${value}\` (${type.toLowerCase()} \`${key}\`) is not a JSON array!`);
	}
	return value;
}
export function getParameterJSONObject(type: string, key: string, options: GitHubActionsGetParameterOptions = {}): JSONObject | undefined {
	const value: JSONValue | undefined = getParameterJSON(type, key, options);
	if (typeof value === "undefined") {
		return;
	}
	if (!isJSONObject(value)) {
		throw new SyntaxError(`\`${value}\` (${type.toLowerCase()} \`${key}\`) is not a JSON object!`);
	}
	return value;
}
export function getParameterJSONPrimitive(type: string, key: string, options: GitHubActionsGetParameterOptions = {}): JSONPrimitive | undefined {
	const value: JSONValue | undefined = getParameterJSON(type, key, options);
	if (typeof value === "undefined") {
		return;
	}
	if (!isJSONPrimitive(value)) {
		throw new SyntaxError(`\`${value}\` (${type.toLowerCase()} \`${key}\`) is not a JSON primitive!`);
	}
	return value;
}
export function getParameterNumber(type: string, key: string, options: GitHubActionsGetParameterOptions = {}): number | undefined {
	const value: string | undefined = getParameter(type, key, options);
	if (typeof value === "undefined") {
		return;
	}
	try {
		return Number(value);
	} catch {
		throw new SyntaxError(`\`${value}\` (${type.toLowerCase()} \`${key}\`) is not a number!`);
	}
}
export function setParameter(type: string, param0: string | KeyValueLike<StringifiableType>, param1?: StringifiableType): void {
	const pairs: Map<string, string> = new Map<string, string>();
	if (typeof param0 === "string") {
		if (!isStringSingleLine(param0)) {
			throw new SyntaxError(`\`${param0}\` is not a valid GitHub Actions ${type.toLowerCase()} key!`);
		}
		pairs.set(param0, stringifyInput(param1!));
	} else {
		for (const [
			key,
			value
		] of ((param0 instanceof Map) ? param0.entries() : Object.entries(param0))) {
			if (!isStringSingleLine(key)) {
				throw new SyntaxError(`\`${key}\` is not a valid GitHub Actions ${type.toLowerCase()} key!`);
			}
			pairs.set(key, stringifyInput(value));
		}
	}
	if (pairs.size > 0) {
		appendFileMapCommand(`GITHUB_${type.toUpperCase()}`, pairs);
	}
}
