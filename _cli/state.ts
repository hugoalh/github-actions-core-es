import { parseArgs } from "node:util";
import {
	clearState,
	optimizeState,
	setState
} from "../state.ts";
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
	if (action0 !== "state") {
		throw new Error(`Unknown action \`${action0}\`! I do not know how you get into here...`);
	}
	switch (action1) {
		case "clear":
			checkPositionalArgumentsLength(0);
			return clearState();
		case "optimize":
			checkPositionalArgumentsLength(0);
			return optimizeState();
		case "set":
			checkPositionalArgumentsLength(2);
			return setState(positionals[0], positionals[1]);
		default:
			throw new Error(`Unknown action \`${action0} ${action1}\`!`);
	}
}
