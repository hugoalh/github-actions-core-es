import { isStringSingleLine } from "https://raw.githubusercontent.com/hugoalh/is-string-singleline-es/v1.0.4/mod.ts";
import type { KeyValueLike } from "../common.ts";
const commandsStdOutCurrent: string[] = [
	"add-mask",
	"add-matcher",
	"debug",
	"echo",
	"endgroup",
	"error",
	"group",
	"notice",
	"remove-matcher",
	"stop-commands",
	"warning"
];
const commandsStdOutForbid: string[] = [
	"add-path",
	"save-state",
	"set-env",
	"set-output"
];
const regexpCommandStdout = /^(?:[\da-z][\da-z._-]*)?[\da-z]$/;
/**
 * Escape GitHub Actions runner stdout command value.
 * @param {string} item
 * @returns {string}
 */
function escapeStdOutCommandValue(item: string): string {
	return item.replaceAll("%", "%25").replaceAll("\n", "%0A").replaceAll("\r", "%0D");
}
/**
 * Escape GitHub Actions runner stdout command property value.
 * @param {string} item
 * @returns {string}
 */
function escapeStdOutCommandPropertyValue(item: string): string {
	return escapeStdOutCommandValue(item).replaceAll(",", "%2C").replaceAll(":", "%3A");
}
/**
 * **\[🅰️ Advanced\]** Communicate with the GitHub Actions runner via the stdout command.
 */
export class GitHubActionsStdOutCommand {
	get [Symbol.toStringTag](): string {
		return "GitHubActionsStdOutCommand";
	}
	#result: string;
	/**
	 * **\[🅰️ Advanced\]** Create new stdout command to communicate with the GitHub Actions runner.
	 * @param {string} command StdOut command.
	 * @param {string} [message] Message of the stdout command.
	 */
	constructor(command: string, message?: string);
	/**
	 * **\[🅰️ Advanced\]** Create new stdout command to communicate with the GitHub Actions runner.
	 * @param {string} command StdOut command.
	 * @param {KeyValueLike} properties Properties of the stdout command.
	 * @param {string} [message] Message of the stdout command.
	 */
	constructor(command: string, properties: KeyValueLike, message?: string);
	constructor(command: string, param1?: string | KeyValueLike, param2?: string) {
		let message: string = "";
		const properties: Map<string, string> = new Map<string, string>();
		if (!(
			commandsStdOutCurrent.includes(command) ||
			regexpCommandStdout.test(command)
		)) {
			throw new SyntaxError(`\`${command}\` is not a valid GitHub Actions stdout command!`);
		}
		if (commandsStdOutForbid.includes(command)) {
			throw new Error(`\`${command}\` is a forbidden GitHub Actions stdout command!`);
		}
		switch (typeof param1) {
			case "string":
				message = param1;
				break;
			case "undefined":
				break;
			default:
				if (typeof param2 !== "undefined") {
					message = param2;
				}
				for (const [key, value] of ((param1 instanceof Map) ? param1.entries() : Object.entries(param1))) {
					if (!isStringSingleLine(key)) {
						throw new SyntaxError(`\`${key}\` is not a valid GitHub Actions stdout command property key!`);
					}
					properties.set(key, value);
				}
				break;
		}
		this.#result = `::${command}${properties.size > 0 ? " " : ""}${Array.from(properties.entries(), ([key, value]: [string, string]): string => {
			return `${key}=${escapeStdOutCommandPropertyValue(value)}`;
		}).join(",")}::${escapeStdOutCommandValue(message)}`;
	}
	/**
	 * Stringify the stdout command.
	 * @returns {string}
	 */
	toString(): string {
		return this.#result;
	}
	/**
	 * Dispatch the stdout command.
	 * @returns {void}
	 */
	dispatch(): void {
		console.log(this.toString());
	}
}
const commandEchoDisable: GitHubActionsStdOutCommand = new GitHubActionsStdOutCommand("echo", "off");
/**
 * Disable echo most of the stdout commands, the log will not print the stdout command itself unless there has any issue.
 * 
 * Environment variable `ACTIONS_STEP_DEBUG` will ignore this setting.
 * @returns {void}
 */
export function disableEchoStdOutCommand(): void {
	commandEchoDisable.dispatch();
}
const commandEchoEnable: GitHubActionsStdOutCommand = new GitHubActionsStdOutCommand("echo", "on");
/**
 * Enable echo most of the stdout commands, the log will print the stdout command itself.
 * 
 * Environment variable `ACTIONS_STEP_DEBUG` will ignore this setting.
 * @returns {void}
 */
export function enableEchoStdOutCommand(): void {
	commandEchoEnable.dispatch();
}
/**
 * Validate the item is a valid GitHub Actions stdout command end token.
 * @param {string} item Item that need to determine.
 * @returns {void}
 */
function validateStdOutCommandEndToken(item: string): void {
	if (!(!commandsStdOutCurrent.includes(item) && !commandsStdOutForbid.includes(item) && regexpCommandStdout.test(item) && item.length >= 4)) {
		throw new SyntaxError(`Parameter \`endToken\` is not a string which is single line, more than or equal to 4 characters, and not match any GitHub Actions command!`);
	}
}
/**
 * Disable process all of the stdout commands, to allow log anything without accidentally execute any stdout command.
 * @param {string} [endToken] An end token for re-enable stdout command process.
 * @returns {string} An end token for re-enable stdout command process.
 */
export function disableProcessStdOutCommand(endToken?: string): string {
	if (typeof endToken === "undefined") {
		const endTokenGenerate: string = crypto.randomUUID().replaceAll("-", "");
		new GitHubActionsStdOutCommand("stop-commands", endTokenGenerate).dispatch();
		return endTokenGenerate;
	}
	validateStdOutCommandEndToken(endToken);
	new GitHubActionsStdOutCommand("stop-commands", endToken).dispatch();
	return endToken;
}
/**
 * Enable process all of the stdout commands, to allow execute any stdout command.
 * @param {string} endToken An end token from disable stdout command process.
 * @returns {void}
 */
export function enableProcessStdOutCommand(endToken: string): void {
	validateStdOutCommandEndToken(endToken);
	new GitHubActionsStdOutCommand(endToken).dispatch();
}
