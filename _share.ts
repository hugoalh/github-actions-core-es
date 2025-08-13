import type {
	JSONArray,
	JSONObject,
	JSONPrimitive,
	JSONValue,
} from "https://raw.githubusercontent.com/hugoalh/is-json-es/v1.0.5/mod.ts";
/**
 * Type of key-value like.
 */
export type KeyValueLike<V = string> = Map<string, V> | Record<string, V>;
/**
 * Type which stringifiable.
 */
export type StringifiableType = bigint | boolean | number | string | JSONArray | JSONObject | JSONPrimitive | JSONValue | null;
export function stringifyInput(input: StringifiableType): string {
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
