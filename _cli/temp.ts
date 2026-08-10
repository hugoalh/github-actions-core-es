import { parseArgs } from "node:util";
import { clearRunnerTemp } from "../runner.ts";
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
	if (action0 !== "temp") {
		throw new Error(`Unknown action \`${action0}\`! I do not know how you get into here...`);
	}
	//deno-lint-ignore hugoalh/no-misuse-switch -- Keep structure.
	switch (action1) {
		case "clear":
			checkPositionalArgumentsLength(0);
			return clearRunnerTemp();
		default:
			throw new Error(`Unknown action \`${action0} ${action1}\`!`);
	}
}
