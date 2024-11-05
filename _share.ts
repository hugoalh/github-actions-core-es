import type {
	JSONArray,
	JSONObject,
	JSONPrimitive,
	JSONValue,
} from "https://raw.githubusercontent.com/hugoalh/is-json-es/v1.0.4/mod.ts";
/**
 * Type of key-value like.
 */
export type KeyValueLike<V = string> = { [key: string]: V; } | Map<string, V> | Record<string, V>;
/**
 * Type of stringizable.
 */
export type StringizableType = bigint | boolean | number | string | JSONArray | JSONObject | JSONPrimitive | JSONValue | null;
export function stringifyInput(input: StringizableType): string {
	switch (typeof input) {
		case "bigint":
		case "boolean":
		case "number":
			return String(input);
		case "object":
			if (input === null) {
				return String(input);
			}
			return JSON.stringify(input);
		case "string":
			return input;
		default:
			return String(input);
	}
}
