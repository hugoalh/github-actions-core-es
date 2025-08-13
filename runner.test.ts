import {
	deepStrictEqual,
	ok
} from "node:assert";
import {
	getRunnerArchitecture,
	getRunnerDebugStatus,
	getRunnerEnvironment,
	getRunnerName,
	getRunnerOS,
	getRunnerTempPath,
	getRunnerToolCachePath,
	getRunnerWorkspacePath,
	isInRunner
} from "./runner.ts";
const ignore = !(
	Deno.args.includes("--force") ||
	Deno.env.get("GITHUB_ACTIONS") === "true"
);
Deno.test("Architecture", {
	ignore,
	permissions: {
		env: ["RUNNER_ARCH"]
	}
}, () => {
	console.log(getRunnerArchitecture());
});
Deno.test("Debug Status", {
	ignore,
	permissions: {
		env: ["RUNNER_DEBUG"]
	}
}, () => {
	console.log(getRunnerDebugStatus());
});
Deno.test("Environment", {
	ignore,
	permissions: {
		env: ["RUNNER_ENVIRONMENT"]
	}
}, () => {
	console.log(getRunnerEnvironment());
});
Deno.test("Name", {
	ignore,
	permissions: {
		env: ["RUNNER_NAME"]
	}
}, () => {
	console.log(getRunnerName());
});
Deno.test("OS", {
	ignore,
	permissions: {
		env: ["RUNNER_OS"]
	}
}, () => {
	const current = Deno.build.os;
	const result = getRunnerOS();
	ok(
		(current === "darwin" && result === "macOS") ||
		(current === "linux" && result === "Linux") ||
		(current === "windows" && result === "Windows")
	);
});
Deno.test("TEMP Path", {
	ignore,
	permissions: {
		env: ["RUNNER_TEMP"]
	}
}, () => {
	console.log(getRunnerTempPath());
});
Deno.test("Tool Cache Path", {
	ignore,
	permissions: {
		env: ["RUNNER_TOOL_CACHE"]
	}
}, () => {
	console.log(getRunnerToolCachePath());
});
Deno.test("Workspace Path", {
	ignore,
	permissions: {
		env: ["GITHUB_WORKSPACE"]
	}
}, () => {
	console.log(getRunnerWorkspacePath());
});
Deno.test("Is In Runner", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	deepStrictEqual(isInRunner(), true);
});
