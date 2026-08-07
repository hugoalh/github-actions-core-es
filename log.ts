import { isStringSingleLine } from "https://raw.githubusercontent.com/hugoalh/is-string-singleline-es/v1.0.6/mod.ts";
import { GitHubActionsStdOutCommand } from "./command/stdout.ts";
/**
 * Make secret get masked from the log.
 * @param {string} value Secret that need to get masked from the log.
 * @returns {void}
 */
export function addSecretMask(value: string): void {
	const valueFmt: string = value.trim();
	if (valueFmt.length > 0) {
		new GitHubActionsStdOutCommand("add-mask", valueFmt).dispatch();
	}
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
 * Print a debug message to the log.
 * @param {...string} data Data that need to log at debug level.
 * @returns {void}
 */
export function writeDebug(...data: readonly string[]): void {
	new GitHubActionsStdOutCommand("debug", data.join(" ")).dispatch();
}
