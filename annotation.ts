import {
	disableProcessStdOutCommand,
	enableProcessStdOutCommand,
	GitHubActionsStdOutCommand
} from "./command/stdout.ts";
const annotationMaximumLength: number = 4096;
/**
 * GitHub Actions annotation type.
 */
type GitHubActionsAnnotationType =
	| "error"
	| "notice"
	| "warning";
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
function assertAnnotationPositionProperty(propertyName: string, input: number): void {
	if (!(Number.isSafeInteger(input) && input >= 0)) {
		throw new RangeError(`\`${input}\` (parameter \`properties.${propertyName}\`) is not a number which is integer, positive, and safe!`);
	}
}
/**
 * Print an annotation to the log.
 * @param {GitHubActionsAnnotationType} type Type of the annotation.
 * @param {string} data Data of the annotation.
 * @param {GitHubActionsAnnotationProperties} [properties={}] Properties of the annotation.
 * @returns {void}
 */
function writeAnnotation(type: GitHubActionsAnnotationType, data: string, properties: GitHubActionsAnnotationProperties = {}): void {
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
		assertAnnotationPositionProperty("line", line);
		if (line > 0) {
			propertiesFmt.set("line", String(line));
		}
	}
	if (typeof column === "number") {
		assertAnnotationPositionProperty("column", column);
		if (column > 0) {
			propertiesFmt.set("col", String(column));
		}
	}
	if (typeof lineEnd === "number") {
		assertAnnotationPositionProperty("lineEnd", lineEnd);
		if (lineEnd > 0) {
			propertiesFmt.set("endLine", String(lineEnd));
		}
	}
	if (typeof columnEnd === "number") {
		assertAnnotationPositionProperty("columnEnd", columnEnd);
		if (columnEnd > 0) {
			propertiesFmt.set("endColumn", String(columnEnd));
		}
	}
	if (typeof title === "string" && title.length > 0) {
		propertiesFmt.set("title", title);
	}
	if (data.length > annotationMaximumLength && typeof summary === "string" && summary.length > 0) {
		if (data.trim().startsWith("::")) {
			const endToken: string = disableProcessStdOutCommand();
			console.log(data);
			enableProcessStdOutCommand(endToken);
		} else {
			console.log(data);
		}
		new GitHubActionsStdOutCommand(type, propertiesFmt, summary).dispatch();
	} else {
		new GitHubActionsStdOutCommand(type, propertiesFmt, data).dispatch();
	}
}
/**
 * Print an error annotation to the log.
 * @param {string} data Data of the annotation.
 * @param {GitHubActionsAnnotationProperties} [properties={}] Properties of the annotation.
 * @returns {void}
 */
export function writeError(data: string, properties: GitHubActionsAnnotationProperties = {}): void {
	writeAnnotation("error", data, properties);
}
/**
 * Print a notice annotation to the log.
 * @param {string} data Data of the annotation.
 * @param {GitHubActionsAnnotationProperties} [properties={}] Properties of the annotation.
 * @returns {void}
 */
export function writeNotice(data: string, properties: GitHubActionsAnnotationProperties = {}): void {
	writeAnnotation("notice", data, properties);
}
export {
	writeNotice as writeNote
};
/**
 * Print a warning annotation to the log.
 * @param {string} data Data of the annotation.
 * @param {GitHubActionsAnnotationProperties} [properties={}] Properties of the annotation.
 * @returns {void}
 */
export function writeWarning(data: string, properties: GitHubActionsAnnotationProperties = {}): void {
	writeAnnotation("warning", data, properties);
}
export {
	writeWarning as writeWarn
};
