import { getEnv } from "https://raw.githubusercontent.com/hugoalh/env-es/v0.4.0/general.ts";
import { isAbsolute as isPathAbsolute } from "node:path";
export function getVariableWithGuard(key: string, description: string): string {
	const value: string = getEnv(key) ?? "";
	if (value.length === 0) {
		throw new ReferenceError(`Unable to get the ${description}, environment variable \`${key}\` is not defined!`);
	}
	return value;
}
export function getVariableWithGuardAbsolutePath(key: string, description: string): string {
	const value: string = getVariableWithGuard(key, description);
	if (!isPathAbsolute(value)) {
		throw new Error(`\`${value}\` (environment variable \`${key}\`) is not an absolute path of the ${description}!`);
	}
	return value;
}
export function getVariableWithGuardExpected<T extends string>(key: string, description: string, expectedValues: readonly T[]): T {
	const value: string = getVariableWithGuard(key, description);
	if (!expectedValues.includes(value as T)) {
		throw new Error(`\`${value}\` (environment variable \`${key}\`) is not a known ${description}!`);
	}
	return value as T;
}
