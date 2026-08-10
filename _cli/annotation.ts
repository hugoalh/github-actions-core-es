import { parseArgs } from "node:util";
import {
	writeError,
	writeNotice,
	writeWarning,
	type GitHubActionsAnnotationProperties
} from "../annotation.ts";
export default function (): void {
	const {
		positionals: [
			action0,
			...positionals
		],
		values
	} = parseArgs({
		allowPositionals: true,
		options: {
			column: {
				type: "string"
			},
			"column-end": {
				type: "string"
			},
			file: {
				type: "string"
			},
			line: {
				type: "string"
			},
			"line-end": {
				type: "string"
			},
			summary: {
				type: "string"
			},
			title: {
				type: "string"
			}
		}
	});
	function checkPositionalArgumentsLength(length: number): void {
		if (positionals.length !== length) {
			throw new SyntaxError(`Invalid positional arguments length! Expect: ${length}, Current: ${positionals.length}.`);
		}
	}
	const properties: GitHubActionsAnnotationProperties = {
		column: (typeof values.column === "undefined") ? undefined : Number(values.column),
		columnEnd: (typeof values["column-end"] === "undefined") ? undefined : Number(values["column-end"]),
		file: values.file,
		line: (typeof values.line === "undefined") ? undefined : Number(values.line),
		lineEnd: (typeof values["line-end"] === "undefined") ? undefined : Number(values["line-end"]),
		summary: values.summary,
		title: values.title
	};
	switch (action0) {
		case "error":
			checkPositionalArgumentsLength(1);
			return writeError(positionals[0], properties);
		case "note":
		case "notice":
			checkPositionalArgumentsLength(1);
			return writeNotice(positionals[0], properties);
		case "warn":
		case "warning":
			checkPositionalArgumentsLength(1);
			return writeWarning(positionals[0], properties);
		default:
			throw new Error(`Unknown action \`${action0}\`! I do not know how you get into here...`);
	}
}
