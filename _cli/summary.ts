import { parseArgs } from "node:util";
import {	clearSummary} from "../summary.ts";
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
	if (action0 !== "summary") {
		throw new Error(`Unknown action \`${action0}\`! I do not know how you get into here...`);
	}
	//deno-lint-ignore hugoalh/no-misuse-switch -- Keep structure.
	switch (action1) {
		case "clear":
			checkPositionalArgumentsLength(0);
			return clearSummary();
		default:
			throw new Error(`Unknown action \`${action0} ${action1}\`!`);
	}
}
