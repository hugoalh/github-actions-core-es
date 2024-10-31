import { assert } from "STD/assert/assert";
import {
	getRunnerArchitecture,
	getRunnerDebugStatus,
	getRunnerName,
	getRunnerOS,
	getRunnerTempPath,
	getRunnerToolCachePath,
	getRunnerWorkspacePath,
	validateInRunner
} from "./runner.ts";
const isInGitHubActionsRunner = Deno.env.get("GITHUB_ACTIONS") === "true";
Deno.test("Architecture", {
	ignore: !isInGitHubActionsRunner,
	permissions: {
		env: ["RUNNER_ARCH"]
	}
}, () => {
	console.log(getRunnerArchitecture());
});
Deno.test("Debug Status", {
	ignore: !isInGitHubActionsRunner,
	permissions: {
		env: ["RUNNER_DEBUG"]
	}
}, () => {
	console.log(getRunnerDebugStatus());
});
Deno.test("Name", {
	ignore: !isInGitHubActionsRunner,
	permissions: {
		env: ["RUNNER_NAME"]
	}
}, () => {
	console.log(getRunnerName());
});
Deno.test("OS", {
	ignore: !isInGitHubActionsRunner,
	permissions: {
		env: ["RUNNER_OS"]
	}
}, () => {
	const current = Deno.build.os;
	const result = getRunnerOS();
	assert(
		(current === "darwin" && result === "macOS") ||
		(current === "linux" && result === "Linux") ||
		(current === "windows" && result === "Windows")
	);
});
Deno.test("TEMP Path", {
	ignore: !isInGitHubActionsRunner,
	permissions: {
		env: ["RUNNER_TEMP"]
	}
}, () => {
	console.log(getRunnerTempPath());
});
Deno.test("Tool Cache Path", {
	ignore: !isInGitHubActionsRunner,
	permissions: {
		env: ["RUNNER_TOOL_CACHE"]
	}
}, () => {
	console.log(getRunnerToolCachePath());
});
Deno.test("Workspace Path", {
	ignore: !isInGitHubActionsRunner,
	permissions: {
		env: ["GITHUB_WORKSPACE"]
	}
}, () => {
	console.log(getRunnerWorkspacePath());
});
Deno.test("Validate In Runner", {
	ignore: !isInGitHubActionsRunner,
	permissions: {
		env: true
	}
}, () => {
	void validateInRunner();
});
