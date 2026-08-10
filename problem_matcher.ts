import { isStringSingleLine } from "jsr:@hugoalh/is-string-singleline@^1.0.6";
import { GitHubActionsStdOutCommand } from "./command/stdout.ts";
/**
 * Add problem matcher to scan the logs by specified regular expression patterns and automatically surface that information prominently in the user interface, both annotation and log decoration will create when a match is detected.
 * 
 * For more information, please visit https://github.com/actions/toolkit/blob/main/docs/problem-matchers.md.
 * @param {string} path Path of the JSON problem matcher file.
 * @returns {void}
 */
export function addProblemMatcher(path: string): void {
	if (!(isStringSingleLine(path) && path.length > 0)) {
		throw new SyntaxError(`\`${path}\` is not a string which is non empty and single line!`);
	}
	new GitHubActionsStdOutCommand("add-matcher", path).dispatch();
}
/**
 * Remove problem matcher.
 * 
 * For more information, please visit https://github.com/actions/toolkit/blob/main/docs/problem-matchers.md.
 * @param {string} name Name of the problem matcher.
 * @returns {void}
 */
export function removeProblemMatcher(name: string): void {
	if (!(isStringSingleLine(name) && name.length > 0)) {
		throw new SyntaxError(`\`${name}\` is not a string which is non empty and single line!`);
	}
	new GitHubActionsStdOutCommand("remove-matcher", { owner: name }).dispatch();
}
