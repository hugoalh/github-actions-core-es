import type {
	JSONArray,
	JSONObject,
	JSONPrimitive,
	JSONValue,
} from "jsr:@hugoalh/is-json@^1.0.6";
/**
 * Type of key-value like.
 */
export type KeyValueLike<V = string> =
	| Map<string, V>
	| Record<string, V>;
/**
 * Type which stringifiable.
 */
export type StringifiableType =
	| bigint
	| boolean
	| number
	| string
	| JSONArray
	| JSONObject
	| JSONPrimitive
	| JSONValue
	| null;
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
