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
			data,
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
	if (positionals.length !== 0) {
		throw new SyntaxError(`Invalid positional arguments length! Expect: 1, Current: ${positionals.length + 1}.`);
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
			return writeError(data, properties);
		case "note":
		case "notice":
			return writeNotice(data, properties);
		case "warn":
		case "warning":
			return writeWarning(data, properties);
		default:
			throw new Error(`Unknown action \`${action0}\`! I do not know how you get into here...`);
	}
}
