import {
	getEnv,
	hasEnv
} from "jsr:@hugoalh/env@^0.4.1/general";
import {
	existsSync,
	mkdirSync as makeDirSync,
	readdirSync as readDirSync,
	rmSync as removeSync,
	writeFileSync
} from "node:fs";
import {
	isAbsolute as isPathAbsolute,
	join as joinPath
} from "node:path";
import {
	getVariableWithGuard,
	getVariableWithGuardAbsolutePath,
	getVariableWithGuardExpected
} from "./_variable.ts";
/**
 * GitHub Actions runner architecture.
 */
export type GitHubActionsRunnerArchitecture =
	| "ARM"
	| "ARM64"
	| "X64"
	| "X86";
const runnerArchitectures: readonly GitHubActionsRunnerArchitecture[] = [
	"ARM",
	"ARM64",
	"X64",
	"X86"
];
/**
 * Get the architecture of the GitHub Actions runner.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `RUNNER_ARCH`
 * @returns {GitHubActionsRunnerArchitecture} Architecture of the GitHub Actions runner.
 * @example
 * ```ts
 * getRunnerArchitecture();
 * //=> "X64"
 * ```
 */
export function getRunnerArchitecture(): GitHubActionsRunnerArchitecture {
	return getVariableWithGuardExpected<GitHubActionsRunnerArchitecture>("RUNNER_ARCH", "GitHub Actions runner architecture", runnerArchitectures);
}
export {
	getRunnerArchitecture as getRunnerArch
};
/**
 * Get the debug status of the GitHub Actions runner.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `RUNNER_DEBUG`
 * @returns {boolean} Debug status of the GitHub Actions runner.
 */
export function getRunnerDebugStatus(): boolean {
	return (getEnv("RUNNER_DEBUG") === "1");
}
export {
	getRunnerDebugStatus as isRunnerDebug
};
/**
 * GitHub Actions runner environment.
 */
export type GitHubActionsRunnerEnvironment =
	| "github-hosted"
	| "self-hosted";
const runnerEnvironments: readonly GitHubActionsRunnerEnvironment[] = [
	"github-hosted",
	"self-hosted"
];
/**
 * Get the environment of the GitHub Actions runner.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `RUNNER_ENVIRONMENT`
 * @returns {GitHubActionsRunnerEnvironment} Environment of the GitHub Actions runner.
 */
export function getRunnerEnvironment(): GitHubActionsRunnerEnvironment {
	return getVariableWithGuardExpected<GitHubActionsRunnerEnvironment>("RUNNER_ENVIRONMENT", "GitHub Actions runner environment", runnerEnvironments);
}
/**
 * Get the name of the GitHub Actions runner.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `RUNNER_NAME`
 * @returns {string} Name of the GitHub Actions runner.
 * @example
 * ```ts
 * getRunnerName();
 * //=> "Hosted Agent"
 * ```
 */
export function getRunnerName(): string {
	return getVariableWithGuard("RUNNER_NAME", "GitHub Actions runner name");
}
/**
 * GitHub Actions runner OS.
 */
export type GitHubActionsRunnerOS =
	| "Linux"
	| "macOS"
	| "Windows";
const runnerOSes: readonly GitHubActionsRunnerOS[] = [
	"Linux",
	"macOS",
	"Windows",
];
/**
 * Get the OS of the GitHub Actions runner.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `RUNNER_OS`
 * @returns {GitHubActionsRunnerOS} OS of the GitHub Actions runner.
 * @example
 * ```ts
 * getRunnerOS();
 * //=> "Windows"
 * ```
 */
export function getRunnerOS(): GitHubActionsRunnerOS {
	return getVariableWithGuardExpected<GitHubActionsRunnerOS>("RUNNER_OS", "GitHub Actions runner OS", runnerOSes);
}
/**
 * Get the absolute path of the `TEMP` directory of the GitHub Actions runner.
 * 
 * `TEMP` directory is emptied at the beginning and end of each job, files will not be removed if the runner's user account does not have permission to delete them.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `RUNNER_TEMP`
 * @returns {string} Absolute path of the `TEMP` directory of the GitHub Actions runner.
 * @example
 * ```ts
 * getRunnerTempPath();
 * //=> "D:\\a\\_temp"
 * ```
 */
export function getRunnerTempPath(): string {
	return getVariableWithGuardAbsolutePath("RUNNER_TEMP", "GitHub Actions runner TEMP path");
}
/**
 * Get the absolute path of the tool cache directory of the GitHub hosted GitHub Actions runner.
 * 
 * For self hosted GitHub Actions runner, the tool cache directory may not exist and will return `undefined`.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `RUNNER_TOOL_CACHE`
 * @returns {string | undefined} Absolute path of the tool cache directory of the GitHub hosted GitHub Actions runner.
 * @example
 * ```ts
 * getRunnerToolCachePath();
 * //=> "C:\\hostedtoolcache\\windows"
 * ```
 */
export function getRunnerToolCachePath(): string | undefined {
	const value: string | undefined = getEnv("RUNNER_TOOL_CACHE");
	if (typeof value !== "undefined" && !isPathAbsolute(value)) {
		throw new Error(`\`${value}\` (environment variable \`RUNNER_TOOL_CACHE\`) is not an absolute path!`);
	}
	return value;
}
/**
 * Get the absolute path of the workspace of the GitHub Actions runner; The default working directory on the runner for steps.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_WORKSPACE`
 * @returns {string} Absolute path of the workspace of the GitHub Actions runner.
 * @example
 * ```ts
 * getRunnerWorkspacePath();
 * //=> "/home/runner/work/my-repo-name/my-repo-name"
 * ```
 */
export function getRunnerWorkspacePath(): string {
	return getVariableWithGuardAbsolutePath("GITHUB_WORKSPACE", "GitHub Actions runner workspace path");
}
/**
 * Test the current process whether is executing inside the GitHub Actions runner.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `CI`
 * >   - `GITHUB_ACTIONS`
 * >   - `GITHUB_API_URL`
 * >   - `GITHUB_ENV`
 * >   - `GITHUB_EVENT_NAME`
 * >   - `GITHUB_EVENT_PATH`
 * >   - `GITHUB_JOB`
 * >   - `GITHUB_OUTPUT`
 * >   - `GITHUB_PATH`
 * >   - `GITHUB_RUN_ID`
 * >   - `GITHUB_STATE`
 * >   - `GITHUB_STEP_SUMMARY`
 * >   - `GITHUB_WORKSPACE`
 * >   - `RUNNER_ARCH`
 * >   - `RUNNER_ENVIRONMENT`
 * >   - `RUNNER_NAME`
 * >   - `RUNNER_OS`
 * >   - `RUNNER_TEMP`
 * @returns {boolean} Test result.
 */
export function isInRunner(): boolean {
	return (getEnv("CI") === "true" && getEnv("GITHUB_ACTIONS") === "true" && hasEnv("GITHUB_API_URL") && hasEnv("GITHUB_ENV") && hasEnv("GITHUB_EVENT_NAME") && hasEnv("GITHUB_EVENT_PATH") && hasEnv("GITHUB_JOB") && hasEnv("GITHUB_OUTPUT") && hasEnv("GITHUB_PATH") && hasEnv("GITHUB_RUN_ID") && hasEnv("GITHUB_STATE") && hasEnv("GITHUB_STEP_SUMMARY") && hasEnv("GITHUB_WORKSPACE") && hasEnv("RUNNER_ARCH") && hasEnv("RUNNER_ENVIRONMENT") && hasEnv("RUNNER_NAME") && hasEnv("RUNNER_OS") && hasEnv("RUNNER_TEMP"));
}
/**
 * Clear the `TEMP` directory of the GitHub Actions runner.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `RUNNER_TEMP`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {void}
 */
export function clearRunnerTemp(): void {
	const path: string = getRunnerTempPath();
	const errors: Error[] = [];
	for (const name of readDirSync(path, {
		encoding: "utf8",
		recursive: false,
		withFileTypes: false
	})) {
		try {
			removeSync(joinPath(path, name), { recursive: true });
		} catch (error) {
			errors.push(error as Error);
		}
	}
	if (errors.length > 0) {
		throw new AggregateError(errors, `Unable to fully clear the \`TEMP\` directory of the GitHub Actions runner!`);
	}
}
export interface MakeTempOptions {
	prefix?: string;
	suffix?: string;
}
/**
 * Create/Make a new temporary directory in the `TEMP` directory of the GitHub Actions runner, optionally include prefix and suffix the directory name.
 * 
 * Multiple programs calling this function simultaneously will create different directories. It is the caller's responsibility to remove the directory when no longer needed.
 * 
 * `TEMP` directory is emptied at the beginning and end of each job, files will not be removed if the runner's user account does not have permission to delete them.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `RUNNER_TEMP`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {string} Absolute path of the new temporary directory in the `TEMP` directory.
 */
export function makeRunnerTempDir(options: MakeTempOptions = {}): string {
	const {
		prefix = "",
		suffix = ""
	}: MakeTempOptions = options;
	const pathRunnerTemp: string = getRunnerTempPath();
	let path: string;
	for (let trial: number = 0; trial < 5; trial += 1) {
		path = joinPath(pathRunnerTemp, `${prefix}${crypto.randomUUID().replaceAll("-", "").toLowerCase()}${suffix}`);
		if (!existsSync(path)) {
			break;
		}
	}
	makeDirSync(path!, { recursive: false });
	return path!;
}
export {
	makeRunnerTempDir as createRunnerTempDir,
	makeRunnerTempDir as createRunnerTempDirectory,
	makeRunnerTempDir as makeRunnerTempDirectory
};
/**
 * Create/Make a new temporary file in the `TEMP` directory of the GitHub Actions runner, optionally include prefix and suffix the file name.
 * 
 * Multiple programs calling this function simultaneously will create different files. It is the caller's responsibility to remove the file when no longer needed.
 * 
 * `TEMP` directory is emptied at the beginning and end of each job, files will not be removed if the runner's user account does not have permission to delete them.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `RUNNER_TEMP`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * > - File System - Write (Deno: `write`; NodeJS: `fs-write`)
 * @returns {string} Absolute path of the new temporary file in the `TEMP` directory.
 */
export function makeRunnerTempFile(options: MakeTempOptions = {}): string {
	const {
		prefix = "",
		suffix = ""
	}: MakeTempOptions = options;
	const pathRunnerTemp: string = getRunnerTempPath();
	let path: string;
	for (let trial: number = 0; trial < 5; trial += 1) {
		path = joinPath(pathRunnerTemp, `${prefix}${crypto.randomUUID().replaceAll("-", "").toLowerCase()}${suffix}`);
		if (!existsSync(path)) {
			break;
		}
	}
	writeFileSync(path!, "", {
		encoding: "utf8",
		flag: "wx+"
	});
	return path!;
}
export {
	makeRunnerTempFile as createRunnerTempFile
};
