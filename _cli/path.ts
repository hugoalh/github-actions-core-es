import { parseArgs } from "node:util";
import {
	addPATHSubsequent,
	clearPATHSubsequent,
	optimizePATHSubsequent
} from "../path.ts";
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
	if (action0 !== "path") {
		throw new Error(`Unknown action \`${action0}\`! I do not know how you get into here...`);
	}
	switch (action1) {
		case "add":
			return addPATHSubsequent(...positionals);
		case "clear":
			checkPositionalArgumentsLength(0);
			return clearPATHSubsequent();
		case "optimize":
			checkPositionalArgumentsLength(0);
			return optimizePATHSubsequent();
		default:
			throw new Error(`Unknown action \`${action0} ${action1}\`!`);
	}
}
