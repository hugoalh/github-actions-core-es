import { parseArgs } from "node:util";
import {
	exitLogGroup,
	enterLogGroup
} from "../log.ts";
export default function (): void {
	const {
		positionals: [
			action0,
			action1,
			...positionals
		]
	} = parseArgs({
		allowPositionals: true
	});
	function checkPositionalArgumentsLength(length: number): void {
		if (positionals.length !== length) {
			throw new SyntaxError(`Invalid positional arguments length! Expect: ${length}, Current: ${positionals.length}.`);
		}
	}
	function checkPositionalArgumentsMaximumLength(length: number): void {
		if (positionals.length > length) {
			throw new SyntaxError(`Invalid positional arguments length! Maximum: ${length}, Current: ${positionals.length}.`);
		}
	}
	if (action0 !== "loggroup") {
		throw new Error(`Unknown action \`${action0}\`! I do not know how you get into here...`);
	}
	switch (action1) {
		case "end":
		case "exit":
			checkPositionalArgumentsLength(0);
			return exitLogGroup();
		case "enter":
		case "start":
			checkPositionalArgumentsMaximumLength(1);
			return enterLogGroup(positionals[0]);
		default:
			throw new Error(`Unknown action \`${action0} ${action1}\`!`);
	}
}
