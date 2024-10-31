import { isStringSingleLine } from "https://raw.githubusercontent.com/hugoalh/is-string-singleline-es/v1.0.4/mod.ts";
import { GitHubActionsStdOutCommand } from "./command/stdout.ts";
/**
 * Add problem matcher to scan the logs by specified regular expression patterns and automatically surface that information prominently in the user interface, both annotation and log decoration will create when a match is detected.
 * 
 * For more information, please visit https://github.com/actions/toolkit/blob/main/docs/problem-matchers.md.
 * @param {...string} paths Path of the JSON problem matcher file.
 * @returns {void}
 */
export function addProblemMatcher(...paths: string[]): void {
	paths.forEach((path: string): void => {
		if (!(isStringSingleLine(path) && path.length > 0)) {
			throw new SyntaxError(`\`${path}\` is not a string which is non empty and single line!`);
		}
	});
	paths.forEach((path: string): void => {
		new GitHubActionsStdOutCommand("add-matcher", path).dispatch();
	});
}
/**
 * Remove problem matcher.
 * 
 * For more information, please visit https://github.com/actions/toolkit/blob/main/docs/problem-matchers.md.
 * @param {...string} names Name of the problem matcher.
 * @returns {void}
 */
export function removeProblemMatcher(...names: string[]): void {
	names.forEach((name: string): void => {
		if (!(isStringSingleLine(name) && name.length > 0)) {
			throw new SyntaxError(`\`${name}\` is not a string which is non empty and single line!`);
		}
	});
	names.forEach((name: string): void => {
		new GitHubActionsStdOutCommand("remove-matcher", { owner: name }).dispatch();
	});
}
