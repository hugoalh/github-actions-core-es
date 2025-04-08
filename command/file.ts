import { isAbsolute as isPathAbsolute } from "node:path"
import { getEnv } from "https://raw.githubusercontent.com/hugoalh/env-es/v0.2.1/env.ts";
import {
	_regexpEOL,
	eol
} from "https://raw.githubusercontent.com/hugoalh/eol-es/v0.3.1/eol.ts";
import { isStringSingleLine } from "https://raw.githubusercontent.com/hugoalh/is-string-singleline-es/v1.0.4/mod.ts";
import type { KeyValueLike } from "../_share.ts";
/**
 * GitHub Actions file command type.
 */
export type GitHubActionsFileCommandType =
	| "pairs"
	| "raw"
	| "values";
const fileCommandTypes: Readonly<Record<string, GitHubActionsFileCommandType>> = {
	pairs: "pairs",
	Pairs: "pairs",
	raw: "raw",
	Raw: "raw",
	values: "values",
	Values: "values"
};
const commandsFileMeta: Readonly<Record<string, GitHubActionsFileCommandType>> = {
	GITHUB_ENV: "pairs",
	GITHUB_OUTPUT: "pairs",
	GITHUB_PATH: "values",
	GITHUB_STATE: "pairs",
	GITHUB_STEP_SUMMARY: "raw"
};
const regexpCommandFile = /^(?:[\dA-Z][\dA-Z_-]*)?[\dA-Z]$/;
/**
 * **\[🅰️ Advanced\]** Get the file command path in order to communicate with the GitHub Actions runner via the file command.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable \[Deno: `env`\]
 * >   - *Resources*
 * > - File System - Read \[Deno: `read`; NodeJS (>= v20.9.0) 🧪: `fs-read`\]
 * >   - *Resources*
 * @param {string} command File command.
 * @returns {string} Path of the file command.
 */
export function getFileCommandPath(command: string): string {
	if (!(
		Object.keys(commandsFileMeta).includes(command) ||
		regexpCommandFile.test(command)
	)) {
		throw new SyntaxError(`\`${command}\` is not a valid GitHub Actions file command!`);
	}
	const path: string = getEnv(command) ?? "";
	if (path.length === 0) {
		throw new Error(`File command \`${command}\` path is not defined!`);
	}
	if (!isPathAbsolute(path)) {
		throw new Error(`\`${path}\` (file command \`${command}\`) is not a valid absolute path!`);
	}
	try {
		const { isFile }: Deno.FileInfo = Deno.statSync(path);
		if (!isFile) {
			throw new Error(`\`${path}\` (file command \`${command}\`) is not a file!`);
		}
	} catch (error) {
		// NOTE: Command file may not created yet.
		if (!(error instanceof Deno.errors.NotFound)) {
			throw error;
		}
	}
	return path;
}
function formatFilePairsCommand(inputs: Map<string, string>): string {
	return Array.from(inputs.entries(), ([key, value]: [string, string]): string => {
		if (isStringSingleLine(value)) {
			return `${key}=${value}`;
		}
		let delimiter: string;
		do {
			delimiter = crypto.randomUUID().replaceAll("-", "");
		} while (
			key.search(delimiter) !== -1 ||
			value.search(delimiter) !== -1
		);
		return `${key}<<${delimiter}${eol}${value.replace(_regexpEOL, eol)}\n${delimiter}`;
	}).join(eol);
}
/**
 * **\[🅰️ Advanced\]** Append value to the file line command.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable \[Deno: `env`\]
 * >   - *Resources*
 * > - File System - Read \[Deno: `read`; NodeJS (>= v20.9.0) 🧪: `fs-read`\]
 * >   - *Resources*
 * > - File System - Write \[Deno: `write`; NodeJS (>= v20.9.0) 🧪: `fs-write`\]
 * >   - *Resources*
 * @param {string} command File command.
 * @param {...string} values Value of the file line command.
 * @returns {void}
 */
export function appendFileLineCommand(command: string, ...values: readonly string[]): void {
	const path: string = getFileCommandPath(command);
	values.forEach((value: string): void => {
		if (!(isStringSingleLine(value) && value.length > 0)) {
			throw new SyntaxError(`\`${value}\` is not a valid GitHub Actions file line command value!`);
		}
	});
	if (values.length > 0) {
		Deno.writeTextFileSync(path, `${Array.from(new Set<string>(values).values()).join(eol)}${eol}`, { append: true });
	}
}
/**
 * **\[🅰️ Advanced\]** Append pair to the file map command.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable \[Deno: `env`\]
 * >   - *Resources*
 * > - File System - Read \[Deno: `read`; NodeJS (>= v20.9.0) 🧪: `fs-read`\]
 * >   - *Resources*
 * > - File System - Write \[Deno: `write`; NodeJS (>= v20.9.0) 🧪: `fs-write`\]
 * >   - *Resources*
 * @param {string} command File command.
 * @param {string} key Key of the pair of the file map command.
 * @param {string} value Value of the pair of the file map command.
 * @returns {void}
 */
export function appendFileMapCommand(command: string, key: string, value: string): void;
/**
 * **\[🅰️ Advanced\]** Append pairs to the file map command.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable \[Deno: `env`\]
 * >   - *Resources*
 * > - File System - Read \[Deno: `read`; NodeJS (>= v20.9.0) 🧪: `fs-read`\]
 * >   - *Resources*
 * > - File System - Write \[Deno: `write`; NodeJS (>= v20.9.0) 🧪: `fs-write`\]
 * >   - *Resources*
 * @param {string} command File command.
 * @param {KeyValueLike} pairs Pairs of the file map command.
 * @returns {void}
 */
export function appendFileMapCommand(command: string, pairs: KeyValueLike): void;
export function appendFileMapCommand(command: string, param1: string | KeyValueLike, param2?: string): void {
	const path: string = getFileCommandPath(command);
	const pairs: Map<string, string> =
		(typeof param1 === "string") ? new Map<string, string>([[param1, param2!]])
			: (param1 instanceof Map) ? param1
				: new Map<string, string>(Object.entries(param1));
	pairs.forEach((_value: string, key: string): void => {
		if (!isStringSingleLine(key)) {
			throw new SyntaxError(`\`${key}\` is not a valid GitHub Actions file map command pair key!`);
		}
	});
	if (pairs.size > 0) {
		Deno.writeTextFileSync(path, `${formatFilePairsCommand(pairs)}${eol}`, { append: true });
	}
}
/**
 * **\[🅰️ Advanced\]** Clear the file command which set in the current step.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable \[Deno: `env`\]
 * >   - *Resources*
 * > - File System - Read \[Deno: `read`; NodeJS (>= v20.9.0) 🧪: `fs-read`\]
 * >   - *Resources*
 * > - File System - Write \[Deno: `write`; NodeJS (>= v20.9.0) 🧪: `fs-write`\]
 * >   - *Resources*
 * @param {string} command File command.
 * @returns {void}
 */
export function clearFileCommand(command: string): void {
	return Deno.writeTextFileSync(getFileCommandPath(command), "");
}
/**
 * **\[🅰️ Advanced\]** Optimize the file command to reduce size whenever possible.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable \[Deno: `env`\]
 * >   - *Resources*
 * > - File System - Read \[Deno: `read`; NodeJS (>= v20.9.0) 🧪: `fs-read`\]
 * >   - *Resources*
 * > - File System - Write \[Deno: `write`; NodeJS (>= v20.9.0) 🧪: `fs-write`\]
 * >   - *Resources*
 * @param {string} command File command.
 * @param {GitHubActionsFileCommandType} [type="raw"] Type of the file command; Only used when the {@linkcode command} is not known.
 * @returns {void}
 */
export function optimizeFileCommand(command: string, type: GitHubActionsFileCommandType = "raw"): void {
	const path: string = getFileCommandPath(command);
	switch (commandsFileMeta[command] ?? fileCommandTypes[type]) {
		case "pairs": {
			const pairs: Map<string, string> = new Map<string, string>();
			const content: string[] = Deno.readTextFileSync(path).split(_regexpEOL);
			for (let index: number = 0; index < content.length; index += 1) {
				const line: string = content[index];
				if (/^[\s\t]*$/.test(line)) {
					continue;
				}
				if (/^.+<<.+?$/.test(line)) {
					const lineSplit: string[] = line.split("<<");
					const key: string = lineSplit.slice(0, lineSplit.length - 1).join("<<");
					const delimiter: string = lineSplit[-1];
					const value: string[] = [];
					let indexOffset: number = index;
					while (true) {
						indexOffset += 1;
						if (indexOffset >= content.length) {
							// NOTE: File may contain issues, abort optimization.
							return;
						}
						const lineOffset: string = content[indexOffset];
						if (lineOffset === delimiter) {
							break;
						}
						value.push(lineOffset);
					}
					pairs.set(key, value.join("\n"));
					index = indexOffset;
					continue;
				}
				if (/^.+?=.+$/.test(line)) {
					const [key, value]: string[] = line.split("=", 1);
					pairs.set(key, value);
					continue;
				}
				// NOTE: File may contain issues, abort optimization.
				return;
			}
			return Deno.writeTextFileSync(path, (pairs.size > 0) ? `${formatFilePairsCommand(pairs)}${eol}` : "");
		}
		case "raw":
			return;
		case "values": {
			const content: Set<string> = new Set<string>(Deno.readTextFileSync(path).split(_regexpEOL).map((value: string): string => {
				return value.trim();
			}).filter((value: string): boolean => {
				return (value.length > 0);
			}));
			return Deno.writeTextFileSync(path, (content.size > 0) ? `${Array.from(content.values()).join(eol)}${eol}` : "");
		}
		default:
			throw new RangeError(`\`${type}\` is not a valid GitHub Actions file command type! Only accept these values: ${Object.keys(fileCommandTypes).sort().join(", ")}`);
	}
}
