//deno-lint-ignore-file hugoalh/no-import-dynamic -- Multiple parts CLI.
import process from "node:process";
import {
	parseArgs,
	styleText
} from "node:util";
if (!import.meta.main) {
	throw new Error(`This entrypoint is for command line only!`);
}
process.addListener("uncaughtException", (error: Error): void => {
	let message: string = error.message;
	if ((error.stack ?? "").length > 0) {
		message += `\n${error.stack}`;
	}
	console.error(`${styleText(["red"], "ERROR", { validateStream: false })}\t${message}`);
	process.exit(1);
});
const {
	positionals,
	tokens
} = parseArgs({
	allowPositionals: true,
	strict: false,
	tokens: true
});
function checkArgumentAction(index: number): void {
	if (!(positionals.length >= index + 1)) {
		throw new SyntaxError(`Invalid arguments length! Minimum: ${index + 1}, Current: ${positionals.length}.`);
	}
	if (tokens[index].kind !== "positional") {
		throw new Error(`Unknown action \`${(tokens[index].kind === "option-terminator") ? "--" : tokens[index].rawName}\`!`);
	}
}
checkArgumentAction(0);
switch (positionals[0]) {
	case "echo":
		checkArgumentAction(1);
		(await import("./_cli/echo.ts")).default();
		break;
	case "env":
		checkArgumentAction(1);
		(await import("./_cli/env.ts")).default();
		break;
	case "error":
	case "note":
	case "notice":
	case "warn":
	case "warning":
		(await import("./_cli/annotation.ts")).default();
		break;
	case "loggroup":
		checkArgumentAction(1);
		(await import("./_cli/loggroup.ts")).default();
		break;
	case "output":
		checkArgumentAction(1);
		(await import("./_cli/output.ts")).default();
		break;
	case "path":
		checkArgumentAction(1);
		(await import("./_cli/path.ts")).default();
		break;
	case "state":
		checkArgumentAction(1);
		(await import("./_cli/state.ts")).default();
		break;
	case "summary":
		checkArgumentAction(1);
		(await import("./_cli/summary.ts")).default();
		break;
	case "temp":
		checkArgumentAction(1);
		(await import("./_cli/temp.ts")).default();
		break;
	default:
		throw new Error(`Unknown action \`${positionals[0]}\`!`);
}
