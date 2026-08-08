import { parseArgs } from "node:util";
import {
	clearOutput,
	optimizeOutput,
	setOutput
} from "../output.ts";
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
	if (action0 !== "output") {
		throw new Error(`Unknown action \`${action0}\`! I do not know how you get into here...`);
	}
	switch (action1) {
		case "clear":
			checkPositionalArgumentsLength(0);
			return clearOutput();
		case "optimize":
			checkPositionalArgumentsLength(0);
			return optimizeOutput();
		case "set": {
			checkPositionalArgumentsLength(2);
			const [
				key,
				value
			]: readonly string[] = positionals;
			return setOutput(key, value);
		}
		default:
			throw new Error(`Unknown action \`${action0} ${action1}\`!`);
	}
}
