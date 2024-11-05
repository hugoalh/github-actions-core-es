import { isAbsolute as isPathAbsolute } from "jsr:@std/path@^1.0.6/is-absolute";
import { getEnv } from "https://raw.githubusercontent.com/hugoalh/env-es/v0.2.0/env.ts";
export const runnerArchitectures = [
	"ARM",
	"ARM64",
	"X64",
	"X86"
] as const;
/**
 * GitHub Actions runner architecture.
 */
export type GitHubActionsRunnerArchitecture = typeof runnerArchitectures[number];
/**
 * Get the architecture of the GitHub Actions runner.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `RUNNER_ARCH`
 * @returns {GitHubActionsRunnerArchitecture} Architecture of the GitHub Actions runner.
 * @example
 * ```ts
 * getRunnerArchitecture();
 * //=> "X64"
 * ```
 */
export function getRunnerArchitecture(): GitHubActionsRunnerArchitecture {
	const value: string | undefined = getEnv("RUNNER_ARCH");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions runner architecture, environment variable \`RUNNER_ARCH\` is not defined!`);
	}
	if (!runnerArchitectures.includes(value as GitHubActionsRunnerArchitecture)) {
		throw new Error(`\`${value}\` (environment variable \`RUNNER_ARCH\`) is not a known GitHub Actions runner architecture!`);
	}
	return value as GitHubActionsRunnerArchitecture;
}
export {
	getRunnerArchitecture as getRunnerArch
};
/**
 * Get the debug status of the GitHub Actions runner.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `RUNNER_DEBUG`
 * @returns {boolean} Debug status of the GitHub Actions runner.
 */
export function getRunnerDebugStatus(): boolean {
	return (getEnv("RUNNER_DEBUG") === "1");
}
export {
	getRunnerDebugStatus as isRunnerDebug
};
/**
 * Get the name of the GitHub Actions runner.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `RUNNER_NAME`
 * @returns {string} Name of the GitHub Actions runner.
 * @example
 * ```ts
 * getRunnerName();
 * //=> "Hosted Agent"
 * ```
 */
export function getRunnerName(): string {
	const value: string | undefined = getEnv("RUNNER_NAME");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions runner name, environment variable \`RUNNER_NAME\` is not defined!`);
	}
	return value;
}
export const runnerOSes = [
	"Linux",
	"macOS",
	"Windows"
] as const;
/**
 * GitHub Actions runner OS.
 */
export type GitHubActionsRunnerOS = typeof runnerOSes[number];
/**
 * Get the OS of the GitHub Actions runner.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `RUNNER_OS`
 * @returns {GitHubActionsRunnerOS} OS of the GitHub Actions runner.
 * @example
 * ```ts
 * getRunnerOS();
 * //=> "Windows"
 * ```
 */
export function getRunnerOS(): GitHubActionsRunnerOS {
	const value: string | undefined = getEnv("RUNNER_OS");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions runner OS, environment variable \`RUNNER_OS\` is not defined!`);
	}
	if (!runnerOSes.includes(value as GitHubActionsRunnerOS)) {
		throw new Error(`\`${value}\` (environment variable \`RUNNER_OS\`) is not a known GitHub Actions runner OS!`);
	}
	return value as GitHubActionsRunnerOS;
}
/**
 * Get the path of the `TEMP` of the GitHub Actions runner.
 * 
 * This directory is emptied at the beginning and end of each job, files will not be removed if the runner's user account does not have permission to delete them.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `RUNNER_TEMP`
 * @returns {string} Path of the `TEMP` of the GitHub Actions runner.
 * @example
 * ```ts
 * getRunnerTempPath();
 * //=> "D:\a\_temp"
 * ```
 */
export function getRunnerTempPath(): string {
	const value: string | undefined = getEnv("RUNNER_TEMP");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions runner TEMP path, environment variable \`RUNNER_TEMP\` is not defined!`);
	}
	if (!isPathAbsolute(value)) {
		throw new Error(`\`${value}\` (environment variable \`RUNNER_TEMP\`) is not a valid absolute path!`);
	}
	return value;
}
/**
 * Get the path of the tool cache of the GitHub hosted GitHub Actions runner.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `RUNNER_TOOL_CACHE`
 * @returns {string | undefined} Path of the tool cache of the GitHub hosted GitHub Actions runner.
 * @example
 * ```ts
 * getRunnerToolCachePath();
 * //=> "C:\\hostedtoolcache\\windows"
 * ```
 */
export function getRunnerToolCachePath(): string | undefined {
	const value: string | undefined = getEnv("RUNNER_TOOL_CACHE");
	if (typeof value !== "undefined" && !isPathAbsolute(value)) {
		throw new Error(`\`${value}\` (environment variable \`RUNNER_TOOL_CACHE\`) is not a valid absolute path!`);
	}
	return value;
}
/**
 * Get the path of the workspace of the GitHub Actions runner; The default working directory on the runner for steps.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `GITHUB_WORKSPACE`
 * @returns {string} Path of the workspace of the GitHub Actions runner.
 * @example
 * ```ts
 * getRunnerWorkspacePath();
 * //=> "/home/runner/work/my-repo-name/my-repo-name"
 * ```
 */
export function getRunnerWorkspacePath(): string {
	const value: string | undefined = getEnv("GITHUB_WORKSPACE");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions runner workspace path, environment variable \`GITHUB_WORKSPACE\` is not defined!`);
	}
	if (!isPathAbsolute(value)) {
		throw new Error(`\`${value}\` (environment variable \`GITHUB_WORKSPACE\`) is not a valid absolute path!`);
	}
	return value;
}
interface GitHubActionsRunnerDefaultEnvironmentVariableMeta {
	key: string;
	need?: boolean;
	value?: string;
}
const runnerEnvsDefault: GitHubActionsRunnerDefaultEnvironmentVariableMeta[] = [
	{ key: "CI", value: "true" },
	{ key: "GITHUB_ACTION" },
	{ key: "GITHUB_ACTIONS", value: "true" },
	{ key: "GITHUB_ACTOR" },
	{ key: "GITHUB_ACTOR_ID" },
	{ key: "GITHUB_API_URL" },
	{ key: "GITHUB_ENV" },
	{ key: "GITHUB_EVENT_NAME" },
	{ key: "GITHUB_EVENT_PATH" },
	{ key: "GITHUB_GRAPHQL_URL" },
	{ key: "GITHUB_JOB" },
	{ key: "GITHUB_OUTPUT" },
	{ key: "GITHUB_PATH" },
	{ key: "GITHUB_REF_NAME" },
	{ key: "GITHUB_REF_TYPE" },
	{ key: "GITHUB_REPOSITORY" },
	{ key: "GITHUB_REPOSITORY_ID" },
	{ key: "GITHUB_REPOSITORY_OWNER" },
	{ key: "GITHUB_REPOSITORY_OWNER_ID" },
	{ key: "GITHUB_RETENTION_DAYS" },
	{ key: "GITHUB_RUN_ATTEMPT" },
	{ key: "GITHUB_RUN_ID" },
	{ key: "GITHUB_RUN_NUMBER" },
	{ key: "GITHUB_SERVER_URL" },
	{ key: "GITHUB_SHA" },
	{ key: "GITHUB_STATE" },
	{ key: "GITHUB_STEP_SUMMARY" },
	{ key: "GITHUB_WORKFLOW" },
	{ key: "GITHUB_WORKFLOW_REF" },
	{ key: "GITHUB_WORKFLOW_SHA" },
	{ key: "GITHUB_WORKSPACE" },
	{ key: "RUNNER_ARCH" },
	{ key: "RUNNER_NAME" },
	{ key: "RUNNER_OS" },
	{ key: "RUNNER_TEMP" }
];
export interface GitHubActionsRunnerTestOptions {
	/**
	 * Also test whether have artifact resources.
	 * @default false
	 */
	artifact?: boolean;
	/**
	 * Also test whether have cache resources.
	 * @default false
	 */
	cache?: boolean;
	/**
	 * Also test whether have OpenID Connect (OIDC) resources.
	 * @default false
	 */
	oidc?: boolean;
	/**
	 * Also test whether have tool cache resources.
	 * @default false
	 */
	toolCache?: boolean;
}
/**
 * Test the current process whether is executing inside the GitHub Actions runner.
 * 
 * If this test is mandatory, use function {@linkcode validateInRunner} instead.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `ACTIONS_CACHE_URL`
 * >     - `ACTIONS_ID_TOKEN_REQUEST_TOKEN`
 * >     - `ACTIONS_ID_TOKEN_REQUEST_URL`
 * >     - `ACTIONS_RESULTS_URL`
 * >     - `ACTIONS_RUNTIME_TOKEN`
 * >     - `ACTIONS_RUNTIME_URL`
 * >     - `CI`
 * >     - `GITHUB_ACTION`
 * >     - `GITHUB_ACTIONS`
 * >     - `GITHUB_ACTOR`
 * >     - `GITHUB_ACTOR_ID`
 * >     - `GITHUB_API_URL`
 * >     - `GITHUB_ENV`
 * >     - `GITHUB_EVENT_NAME`
 * >     - `GITHUB_EVENT_PATH`
 * >     - `GITHUB_GRAPHQL_URL`
 * >     - `GITHUB_JOB`
 * >     - `GITHUB_OUTPUT`
 * >     - `GITHUB_PATH`
 * >     - `GITHUB_REF_NAME`
 * >     - `GITHUB_REF_TYPE`
 * >     - `GITHUB_REPOSITORY`
 * >     - `GITHUB_REPOSITORY_ID`
 * >     - `GITHUB_REPOSITORY_OWNER`
 * >     - `GITHUB_REPOSITORY_OWNER_ID`
 * >     - `GITHUB_RETENTION_DAYS`
 * >     - `GITHUB_RUN_ATTEMPT`
 * >     - `GITHUB_RUN_ID`
 * >     - `GITHUB_RUN_NUMBER`
 * >     - `GITHUB_SERVER_URL`
 * >     - `GITHUB_SHA`
 * >     - `GITHUB_STATE`
 * >     - `GITHUB_STEP_SUMMARY`
 * >     - `GITHUB_WORKFLOW`
 * >     - `GITHUB_WORKFLOW_REF`
 * >     - `GITHUB_WORKFLOW_SHA`
 * >     - `GITHUB_WORKSPACE`
 * >     - `RUNNER_ARCH`
 * >     - `RUNNER_NAME`
 * >     - `RUNNER_OS`
 * >     - `RUNNER_TEMP`
 * >     - `RUNNER_TOOL_CACHE`
 * @param {GitHubActionsRunnerTestOptions} [options={}] Options.
 * @returns {boolean} Test result.
 */
export function isInRunner(options: GitHubActionsRunnerTestOptions = {}): boolean {
	const {
		artifact = false,
		cache = false,
		oidc = false,
		toolCache = false
	}: GitHubActionsRunnerTestOptions = options;
	const envs: GitHubActionsRunnerDefaultEnvironmentVariableMeta[] = [
		...runnerEnvsDefault,
		{ key: "ACTIONS_RESULTS_URL", need: artifact },
		{ key: "ACTIONS_RUNTIME_TOKEN", need: artifact || cache },
		{ key: "ACTIONS_RUNTIME_URL", need: artifact },
		{ key: "ACTIONS_CACHE_URL", need: cache },
		{ key: "ACTIONS_ID_TOKEN_REQUEST_TOKEN", need: oidc },
		{ key: "ACTIONS_ID_TOKEN_REQUEST_URL", need: oidc },
		{ key: "RUNNER_TOOL_CACHE", need: toolCache }
	];
	return !(envs.filter(({ need }: GitHubActionsRunnerDefaultEnvironmentVariableMeta): boolean => {
		return (need ?? true);
	}).map(({
		key,
		value: valueExpected
	}: GitHubActionsRunnerDefaultEnvironmentVariableMeta): boolean => {
		const valueCurrent: string | undefined = getEnv(key);
		if (
			typeof valueCurrent === "undefined" ||
			(typeof valueExpected !== "undefined" && valueCurrent !== valueExpected)
		) {
			console.warn(`Unable to get the GitHub Actions resources, environment variable \`${key}\` is not defined, or not contain an expected value!`);
			return false;
		}
		return true;
	}).includes(false));
}
/**
 * Validate the current process whether is executing inside the GitHub Actions runner.
 * 
 * If this test is optional, use function {@linkcode isInRunner} instead.
 * 
 * > **🛡️ Require Runtime Permissions**
 * > 
 * > - Deno
 * >   - Environment Variable (`env`)
 * >     - `ACTIONS_CACHE_URL`
 * >     - `ACTIONS_ID_TOKEN_REQUEST_TOKEN`
 * >     - `ACTIONS_ID_TOKEN_REQUEST_URL`
 * >     - `ACTIONS_RESULTS_URL`
 * >     - `ACTIONS_RUNTIME_TOKEN`
 * >     - `ACTIONS_RUNTIME_URL`
 * >     - `CI`
 * >     - `GITHUB_ACTION`
 * >     - `GITHUB_ACTIONS`
 * >     - `GITHUB_ACTOR`
 * >     - `GITHUB_ACTOR_ID`
 * >     - `GITHUB_API_URL`
 * >     - `GITHUB_ENV`
 * >     - `GITHUB_EVENT_NAME`
 * >     - `GITHUB_EVENT_PATH`
 * >     - `GITHUB_GRAPHQL_URL`
 * >     - `GITHUB_JOB`
 * >     - `GITHUB_OUTPUT`
 * >     - `GITHUB_PATH`
 * >     - `GITHUB_REF_NAME`
 * >     - `GITHUB_REF_TYPE`
 * >     - `GITHUB_REPOSITORY`
 * >     - `GITHUB_REPOSITORY_ID`
 * >     - `GITHUB_REPOSITORY_OWNER`
 * >     - `GITHUB_REPOSITORY_OWNER_ID`
 * >     - `GITHUB_RETENTION_DAYS`
 * >     - `GITHUB_RUN_ATTEMPT`
 * >     - `GITHUB_RUN_ID`
 * >     - `GITHUB_RUN_NUMBER`
 * >     - `GITHUB_SERVER_URL`
 * >     - `GITHUB_SHA`
 * >     - `GITHUB_STATE`
 * >     - `GITHUB_STEP_SUMMARY`
 * >     - `GITHUB_WORKFLOW`
 * >     - `GITHUB_WORKFLOW_REF`
 * >     - `GITHUB_WORKFLOW_SHA`
 * >     - `GITHUB_WORKSPACE`
 * >     - `RUNNER_ARCH`
 * >     - `RUNNER_NAME`
 * >     - `RUNNER_OS`
 * >     - `RUNNER_TEMP`
 * >     - `RUNNER_TOOL_CACHE`
 * @param {GitHubActionsRunnerTestOptions} [options={}] Options.
 * @returns {void}
 */
export function validateInRunner(options: GitHubActionsRunnerTestOptions = {}): void {
	if (!isInRunner(options)) {
		throw new Error("This process requires to invoke inside the GitHub Actions environment!");
	}
}
