import { parseArgs } from "node:util";
import {
	clearEnvSubsequent,
	optimizeEnvSubsequent,
	setEnvSubsequent
} from "../env.ts";
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
	if (action0 !== "env") {
		throw new Error(`Unknown action \`${action0}\`! I do not know how you get into here...`);
	}
	switch (action1) {
		case "clear":
			checkPositionalArgumentsLength(0);
			return clearEnvSubsequent();
		case "optimize":
			checkPositionalArgumentsLength(0);
			return optimizeEnvSubsequent();
		case "set":
			checkPositionalArgumentsLength(2);
			return setEnvSubsequent(positionals[0], positionals[1]);
		default:
			throw new Error(`Unknown action \`${action0} ${action1}\`!`);
	}
}
