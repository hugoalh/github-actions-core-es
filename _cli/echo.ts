import { parseArgs } from "node:util";
import {
	disableEchoStdOutCommand,
	enableEchoStdOutCommand
} from "../command/stdout.ts";
export default function (): void {
	const {
		positionals: [
			action0,
			action1,
			...positionals
		]
	} = parseArgs({ allowPositionals: true });
	function checkPositionalArgumentsLength(length: number): void {
		if (positionals.length !== length) {
			throw new SyntaxError(`Invalid positional arguments length! Expect: ${length}, Current: ${positionals.length}.`);
		}
	}
	if (action0 !== "echo") {
		throw new Error(`Unknown action \`${action0}\`! I do not know how you get into here...`);
	}
	switch (action1) {
		case "off":
			checkPositionalArgumentsLength(0);
			return disableEchoStdOutCommand();
		case "on":
			checkPositionalArgumentsLength(0);
			return enableEchoStdOutCommand();
		default:
			throw new Error(`Unknown action \`${action0} ${action1}\`!`);
	}
}
