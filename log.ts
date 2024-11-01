import { isStringSingleLine } from "https://raw.githubusercontent.com/hugoalh/is-string-singleline-es/v1.0.4/mod.ts";
import {
	disableProcessStdOutCommand,
	enableProcessStdOutCommand,
	GitHubActionsStdOutCommand
} from "./command/stdout.ts";
/**
 * Make secret get masked from the log.
 * @param {...string} values Secret that need to get masked from the log.
 * @returns {void}
 */
export function addSecretMask(...values: string[]): void {
	values.forEach((value: string): void => {
		if (value.length > 0) {
			new GitHubActionsStdOutCommand("add-mask", value).dispatch();
		}
	});
}
export {
	addSecretMask as addMask,
	addSecretMask as addSecret
};
/**
 * Create a foldable group in the log; Anything write to the log are inside this foldable group in the log.
 * @param {string} [title=""] Title of the foldable group.
 * @returns {void}
 */
export function enterLogGroup(title: string = ""): void {
	if (!isStringSingleLine(title)) {
		throw new SyntaxError(`\`${title}\` (parameter \`title\`) is not a string which is single line!`);
	}
	new GitHubActionsStdOutCommand("group", title).dispatch();
}
export {
	enterLogGroup as startLogGroup
};
const commandLogGroupExit = new GitHubActionsStdOutCommand("endgroup");
/**
 * End an foldable group in the log.
 * @returns {void}
 */
export function exitLogGroup(): void {
	commandLogGroupExit.dispatch();
}
export {
	exitLogGroup as endLogGroup
};
/**
 * GitHub Actions annotation type.
 */
export enum GitHubActionsAnnotationType {
	error = "error",
	Error = "error",
	note = "notice",
	Note = "notice",
	notice = "notice",
	Notice = "notice",
	warn = "warning",
	Warn = "warning",
	warning = "warning",
	Warning = "warning"
}
/**
 * GitHub Actions annotation properties.
 */
export interface GitHubActionsAnnotationProperties {
	/**
	 * Path of the issue file of the annotation.
	 */
	file?: string;
	/**
	 * Line start of the issue file of the annotation.
	 */
	line?: number;
	/**
	 * Column start of the issue file of the annotation.
	 */
	column?: number;
	/**
	 * Line end of the issue file of the annotation.
	 */
	lineEnd?: number;
	/**
	 * Column end of the issue file of the annotation.
	 */
	columnEnd?: number;
	/**
	 * Title of the annotation.
	 */
	title?: string;
	/**
	 * Summary of the annotation when the message is too large to display.
	 */
	summary?: string;
}
/**
 * Print an annotation to the log.
 * @param {GitHubActionsAnnotationType | keyof typeof GitHubActionsAnnotationType} type Type of the annotation.
 * @param {string} data Data of the annotation.
 * @param {GitHubActionsAnnotationProperties} [properties={}] Properties of the annotation.
 * @returns {void}
 */
export function writeAnnotation(type: GitHubActionsAnnotationType | keyof typeof GitHubActionsAnnotationType, data: string, properties: GitHubActionsAnnotationProperties = {}): void {
	const typeFmt: GitHubActionsAnnotationType | undefined = GitHubActionsAnnotationType[type];
	if (typeof typeFmt === "undefined") {
		throw new RangeError(`\`${type}\` is not a valid GitHub Actions annotation type! Only accept these values: ${Array.from<string>(new Set(Object.keys(GitHubActionsAnnotationType).sort()).values()).join(", ")}`);
	}
	const {
		column,
		columnEnd,
		file,
		line,
		lineEnd,
		summary,
		title
	}: GitHubActionsAnnotationProperties = properties;
	const propertiesFmt: Map<string, string> = new Map<string, string>();
	if (typeof file === "string" && file.length > 0) {
		propertiesFmt.set("file", file);
	}
	if (typeof line === "number") {
		if (!(Number.isSafeInteger(line) && line >= 0)) {
			throw new RangeError(`\`${line}\` (parameter \`properties.line\`) is not a number which is integer, positive, and safe!`);
		}
		if (line > 0) {
			propertiesFmt.set("line", line.toString());
		}
	}
	if (typeof column === "number") {
		if (!(Number.isSafeInteger(column) && column >= 0)) {
			throw new RangeError(`\`${column}\` (parameter \`properties.column\`) is not a number which is integer, positive, and safe!`);
		}
		if (column > 0) {
			propertiesFmt.set("col", column.toString());
		}
	}
	if (typeof lineEnd === "number") {
		if (!(Number.isSafeInteger(lineEnd) && lineEnd >= 0)) {
			throw new RangeError(`\`${lineEnd}\` (parameter \`properties.lineEnd\`) is not a number which is integer, positive, and safe!`);
		}
		if (lineEnd > 0) {
			propertiesFmt.set("endLine", lineEnd.toString());
		}
	}
	if (typeof columnEnd === "number") {
		if (!(Number.isSafeInteger(columnEnd) && columnEnd >= 0)) {
			throw new RangeError(`\`${columnEnd}\` (parameter \`properties.columnEnd\`) is not a number which is integer, positive, and safe!`);
		}
		if (columnEnd > 0) {
			propertiesFmt.set("endColumn", columnEnd.toString());
		}
	}
	if (typeof title === "string" && title.length > 0) {
		propertiesFmt.set("title", title);
	}
	if (data.length > 4096 && typeof summary === "string" && summary.length > 0) {
		if (data.trim().startsWith("::")) {
			const endToken: string = disableProcessStdOutCommand();
			console.log(data);
			enableProcessStdOutCommand(endToken);
		} else {
			console.log(data);
		}
		new GitHubActionsStdOutCommand(typeFmt, propertiesFmt, summary).dispatch();
	} else {
		new GitHubActionsStdOutCommand(typeFmt, propertiesFmt, data).dispatch();
	}
}
/**
 * Print a debug message to the log.
 * @param {...string} data Data that need to log at debug level.
 * @returns {void}
 */
export function writeDebug(...data: string[]): void {
	for (const item of data) {
		new GitHubActionsStdOutCommand("debug", item).dispatch();
	}
}
/**
 * Print an error annotation to the log.
 * @param {string} data Data of the annotation.
 * @param {GitHubActionsAnnotationProperties} [properties={}] Properties of the annotation.
 * @returns {void}
 */
export function writeError(data: string, properties: GitHubActionsAnnotationProperties = {}): void {
	return writeAnnotation("error", data, properties);
}
/**
 * Print a notice annotation to the log.
 * @param {string} data Data of the annotation.
 * @param {GitHubActionsAnnotationProperties} [properties={}] Properties of the annotation.
 * @returns {void}
 */
export function writeNotice(data: string, properties: GitHubActionsAnnotationProperties = {}): void {
	return writeAnnotation("notice", data, properties);
}
export {
	writeNotice as writeNote
};
/**
 * Print a warn annotation to the log.
 * @param {string} data Data of the annotation.
 * @param {GitHubActionsAnnotationProperties} [properties={}] Properties of the annotation.
 * @returns {void}
 */
export function writeWarn(data: string, properties: GitHubActionsAnnotationProperties = {}): void {
	return writeAnnotation("warning", data, properties);
}
export {
	writeWarn as writeWarning
};
