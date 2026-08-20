import { getEnvSafe } from "jsr:@hugoalh/env@^0.4.1/general";
import {
	isJSONObject,
	type JSONObject
} from "jsr:@hugoalh/is-json@^1.0.6";
import { readFileSync } from "node:fs";
import {
	getVariableWithGuard,
	getVariableWithGuardAbsolutePath,
	getVariableWithGuardExpected
} from "./_variable.ts";
/**
 * Get the URL of the GitHub API.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_API_URL`
 * @returns {URL} URL of the GitHub API.
 * @example
 * ```ts
 * getGitHubAPIURL();
 * //=> https://api.github.com/
 * ```
 */
export function getGitHubAPIURL(): URL {
	return new URL(getEnvSafe("GITHUB_API_URL") ?? "https://api.github.com/");
}
/**
 * Get the URL of the GitHub GraphQL API.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_GRAPHQL_URL`
 * @returns {URL} URL of the GitHub GraphQL API.
 * @example
 * ```ts
 * getGitHubGraphQLAPIURL();
 * //=> https://api.github.com/graphql
 * ```
 */
export function getGitHubGraphQLAPIURL(): URL {
	return new URL(getEnvSafe("GITHUB_GRAPHQL_URL") ?? "https://api.github.com/graphql");
}
/**
 * Get the URL of the GitHub server.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_SERVER_URL`
 * @returns {URL} URL of the GitHub server.
 * @example
 * ```ts
 * getGitHubServerURL();
 * //=> https://github.com/
 * ```
 */
export function getGitHubServerURL(): URL {
	return new URL(getEnvSafe("GITHUB_SERVER_URL") ?? "https://github.com/");
}
/**
 * Get the name of the workflow.
 * 
 * If the workflow file does not specify a name, then the value is the full path of the workflow file in the repository.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_WORKFLOW`
 * @returns {string} Name of the workflow.
 * @example
 * ```ts
 * getWorkflowName();
 * //=> "My test workflow"
 * ```
 */
export function getWorkflowName(): string {
	return getVariableWithGuard("GITHUB_WORKFLOW", "GitHub Actions workflow name");
}
/**
 * Get the reference path of the workflow.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_WORKFLOW_REF`
 * @returns {string} Reference path of the workflow.
 * @example
 * ```ts
 * getWorkflowPath();
 * //=> "octocat/hello-world/.github/workflows/my-workflow.yml@refs/heads/my_branch"
 * ```
 */
export function getWorkflowReferencePath(): string {
	return getVariableWithGuard("GITHUB_WORKFLOW_REF", "GitHub Actions workflow reference path");
}
/**
 * Get the repository of the workflow.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_REPOSITORY`
 * @returns {string} Repository of the workflow.
 * @example
 * ```ts
 * getWorkflowRepository();
 * //=> "octocat/Hello-World"
 * ```
 */
export function getWorkflowRepository(): string {
	return getVariableWithGuard("GITHUB_REPOSITORY", "GitHub Actions workflow repository");
}
/**
 * Get the repository ID of the workflow.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_REPOSITORY_ID`
 * @returns {string} Repository ID of the workflow.
 * @example
 * ```ts
 * getWorkflowRepositoryID();
 * //=> "123456789"
 * ```
 */
export function getWorkflowRepositoryID(): string {
	return getVariableWithGuard("GITHUB_REPOSITORY_ID", "GitHub Actions workflow repository ID");
}
/**
 * Get the repository owner of the workflow.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_REPOSITORY_OWNER`
 * @returns {string} Repository owner of the workflow.
 * @example
 * ```ts
 * getWorkflowRepositoryOwner();
 * //=> "octocat"
 * ```
 */
export function getWorkflowRepositoryOwner(): string {
	return getVariableWithGuard("GITHUB_REPOSITORY_OWNER", "GitHub Actions workflow repository owner");
}
/**
 * Get the repository owner ID of the workflow.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_REPOSITORY_OWNER_ID`
 * @returns {string} Repository owner ID of the workflow.
 * @example
 * ```ts
 * getWorkflowRepositoryOwnerID();
 * //=> "1234567"
 * ```
 */
export function getWorkflowRepositoryOwnerID(): string {
	return getVariableWithGuard("GITHUB_REPOSITORY_OWNER_ID", "GitHub Actions workflow repository owner ID");
}
/**
 * Get the action ID of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_ACTION`
 * @returns {string} Action ID of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunActionID();
 * //=> "__repo-owner_name-of-action-repo"
 * ```
 */
export function getWorkflowRunActionID(): string {
	return getVariableWithGuard("GITHUB_ACTION", "GitHub Actions workflow run action ID");
}
/**
 * Get the actor ID of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_ACTOR_ID`
 * @returns {string} Actor ID of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunActorID();
 * //=> "1234567"
 * ```
 */
export function getWorkflowRunActorID(): string {
	return getVariableWithGuard("GITHUB_ACTOR_ID", "GitHub Actions workflow run actor ID");
}
/**
 * Get the actor name that initiate the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_ACTOR`
 * @returns {string} Actor name that initiate the workflow run.
 * @example
 * ```ts
 * getWorkflowRunActorName();
 * //=> "octocat"
 * ```
 */
export function getWorkflowRunActorName(): string {
	return getVariableWithGuard("GITHUB_ACTOR", "GitHub Actions workflow run actor name");
}
/**
 * Get the commit SHA that trigger the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_SHA`
 * @returns {string} Commit SHA that trigger the workflow run.
 * @example
 * ```ts
 * getWorkflowRunCommitSHA();
 * //=> "ffac537e6cbbf934b08745a378932722df287a53"
 * ```
 */
export function getWorkflowRunCommitSHA(): string {
	return getVariableWithGuard("GITHUB_SHA", "GitHub Actions workflow run commit SHA");
}
/**
 * GitHub Actions event name.
 */
export type GitHubActionsEventName =
	| "branch_protection_rule"
	| "check_run"
	| "check_suite"
	| "create"
	| "delete"
	| "deployment"
	| "deployment_status"
	| "discussion"
	| "discussion_comment"
	| "fork"
	| "gollum"
	| "image_version"
	| "issue_comment"
	| "issues"
	| "label"
	| "merge_group"
	| "milestone"
	| "page_build"
	| "project"// Legacy.
	| "project_card"// Legacy.
	| "project_column"// Legacy.
	| "public"
	| "pull_request"
	| "pull_request_comment"// Legacy.
	| "pull_request_review"
	| "pull_request_review_comment"
	| "pull_request_target"
	| "push"
	| "registry_package"
	| "release"
	| "repository_dispatch"
	| "schedule"
	| "status"
	| "watch"
	| "workflow_call"
	| "workflow_dispatch"
	| "workflow_run";
const eventsName: readonly GitHubActionsEventName[] = [/* UNIQUE */
	"branch_protection_rule",
	"check_run",
	"check_suite",
	"create",
	"delete",
	"deployment",
	"deployment_status",
	"discussion",
	"discussion_comment",
	"fork",
	"gollum",
	"image_version",
	"issue_comment",
	"issues",
	"label",
	"merge_group",
	"milestone",
	"page_build",
	"project",
	"project_card",
	"project_column",
	"public",
	"pull_request",
	"pull_request_comment",
	"pull_request_review",
	"pull_request_review_comment",
	"pull_request_target",
	"push",
	"registry_package",
	"release",
	"repository_dispatch",
	"schedule",
	"status",
	"watch",
	"workflow_call",
	"workflow_dispatch",
	"workflow_run"
];
/**
 * Get the event name of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_EVENT_NAME`
 * @returns {GitHubActionsEventName} Event name of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunEventName();
 * //=> "workflow_dispatch"
 * ```
 */
export function getWorkflowRunEventName(): GitHubActionsEventName {
	return getVariableWithGuardExpected<GitHubActionsEventName>("GITHUB_EVENT_NAME", "GitHub Actions workflow run event name", eventsName);
}
/**
 * Get the ID of the workflow run.
 * 
 * This is unique for each workflow run within a repository, and does not change when re-run the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_RUN_ID`
 * @returns {string} ID of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunID();
 * //=> 1658821493
 * ```
 */
export function getWorkflowRunID(): string {
	return getVariableWithGuard("GITHUB_RUN_ID", "GitHub Actions workflow run ID");
}
/**
 * Get the job ID of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_JOB`
 * @returns {string} Job ID of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunJobID();
 * //=> "greeting_job"
 * ```
 */
export function getWorkflowRunJobID(): string {
	return getVariableWithGuard("GITHUB_JOB", "GitHub Actions workflow run job ID");
}
/**
 * Get the run number of the workflow.
 * 
 * This is unique for each run of a particular workflow in a repository, begins at `1` for the workflow's first run, and increments with each new run; This number does not change when re-run the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_RUN_NUMBER`
 * @returns {number} Run number of the workflow.
 * @example
 * ```ts
 * getWorkflowRunNumber();
 * //=> 3
 * ```
 */
export function getWorkflowRunNumber(): number {
	return Number.parseInt(getVariableWithGuard("GITHUB_RUN_NUMBER", "GitHub Actions workflow run number"), 10);
}
/**
 * GitHub reference type.
 */
export type GitHubReferenceType =
	| "branch"
	| "tag";
const referenceTypes: readonly GitHubReferenceType[] = [
	"branch",
	"tag"
];
export interface GitHubReferenceMeta {
	/**
	 * The name of the base reference or target branch of the pull request of the workflow run, only available when the event that trigger the workflow run is either `pull_request` or `pull_request_target`.
	 * @example "main"
	 */
	base?: string;
	/**
	 * The fully formed reference of the branch or tag that trigger the workflow run.
	 * 
	 * | **Event** | **Format** | **Description** |
	 * |:--|:--|:--|
	 * | `push` | `refs/heads/<branch_name>` | The branch or tag reference that was pushed. |
	 * | `pull_request` | `refs/pull/<pr_number>/merge` | The pull request merge branch. |
	 * | `release` | `refs/tags/<tag_name>` | The release tag created. |
	 * | Other | `refs/heads/<branch_name>` | The branch or tag reference that trigger the workflow run. |
	 * @example "refs/heads/feature-branch-1"
	 */
	full: string;
	/**
	 * The name of the head reference or source branch of the pull request of the workflow run, only available when the event that trigger the workflow run is either `pull_request` or `pull_request_target`.
	 * @example "feature-branch-1"
	 */
	head?: string;
	/**
	 * Whether branch protections or rulesets are configured for the reference that trigger the workflow run.
	 */
	protected: boolean;
	/**
	 * The short reference name of the branch or tag that trigger the workflow run, this value matches the branch or tag name shown on GitHub.
	 * 
	 * For pull requests, the format is `<pr_number>/merge`.
	 * @example "feature-branch-1"
	 */
	short: string;
	/**
	 * The type of reference that trigger the workflow run.
	 * @example "branch"
	 */
	type: GitHubReferenceType;
}
/**
 * Get the reference of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_BASE_REF`
 * >   - `GITHUB_HEAD_REF`
 * >   - `GITHUB_REF`
 * >   - `GITHUB_REF_NAME`
 * >   - `GITHUB_REF_PROTECTED`
 * >   - `GITHUB_REF_TYPE`
 * @returns {GitHubReferenceMeta} Reference of the workflow run.
 */
export function getWorkflowRunReference(): GitHubReferenceMeta {
	const base: string | undefined = getEnvSafe("GITHUB_BASE_REF");
	const full: string = getVariableWithGuard("GITHUB_REF", "GitHub Actions workflow run reference");
	const head: string | undefined = getEnvSafe("GITHUB_HEAD_REF");
	const short: string = getVariableWithGuard("GITHUB_REF_NAME", "GitHub Actions workflow run reference");
	const type: GitHubReferenceType = getVariableWithGuardExpected<GitHubReferenceType>("GITHUB_REF_TYPE", "GitHub Actions workflow run reference type", referenceTypes);
	return {
		base: ((base ?? "").length > 0) ? base : undefined,
		full,
		head: ((head ?? "").length > 0) ? head : undefined,
		protected: getEnvSafe("GITHUB_REF_PROTECTED") === "true",
		short,
		type: type
	};
}
/**
 * Get the retention days of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_RETENTION_DAYS`
 * @returns {number} Retention days of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunRetentionDays();
 * //=> 90
 * ```
 */
export function getWorkflowRunRetentionDays(): number {
	return Number.parseInt(getVariableWithGuard("GITHUB_RETENTION_DAYS", "GitHub Actions workflow run retention days"));
}
/**
 * Get the run attempt of the workflow run.
 * 
 * This is unique for each attempt of a particular workflow run in a repository, begins at `1` for the workflow run's first attempt, and increments with each re-run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_RUN_ATTEMPT`
 * @returns {number} Run attempt of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunRunAttempt();
 * //=> 3
 * ```
 */
export function getWorkflowRunRunAttempt(): number {
	return Number.parseInt(getVariableWithGuard("GITHUB_RUN_ATTEMPT", "GitHub Actions workflow run run attempt"));
}
/**
 * Get the URL of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_REPOSITORY`
 * @returns {URL} URL of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunURL();
 * //=> https://github.com/octocat/Hello-World/actions/runs/1658821493
 * ```
 */
export function getWorkflowRunURL(): URL {
	const serverURLString: string = getGitHubServerURL().toString();
	return new URL(`${serverURLString}${serverURLString.endsWith("/") ? "" : "/"}${getWorkflowRepository()}/actions/runs/${getWorkflowRunID()}`);
}
/**
 * Get the webhook event payload of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_EVENT_PATH`
 * > - File System - Read (Deno: `read`; NodeJS: `fs-read`)
 * @returns {JSONObject} Webhook event payload of the workflow run.
 */
export function getWorkflowRunWebhookEventPayload(): JSONObject {
	const path: string = getVariableWithGuardAbsolutePath("GITHUB_EVENT_PATH", "GitHub Actions workflow run webhook event payload");
	const context: unknown = JSON.parse(readFileSync(path, { encoding: "utf8" }));
	if (!isJSONObject(context)) {
		throw new Error(`GitHub Actions workflow run webhook event payload context is not a JSON object!`);
	}
	return context;
}
/**
 * Get the SHA of the workflow.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_WORKFLOW_SHA`
 * @returns {string} SHA of the workflow.
 */
export function getWorkflowSHA(): string {
	return getVariableWithGuard("GITHUB_WORKFLOW_SHA", "GitHub Actions workflow SHA");
}
/**
 * Test whether is inside the GitHub Enterprise Server.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - Environment Variable (Deno: `env`)
 * >   - `GITHUB_SERVER_URL`
 * @returns {boolean} Determine result.
 */
export function isGitHubEnterpriseServer(): boolean {
	const hostname: string = getGitHubServerURL().hostname.toUpperCase();
	const isGitHubHost: boolean = hostname === "GITHUB.COM";
	const isGitHubEnterpriseHost: boolean = hostname.endsWith(".GHE.COM");
	const isLocalHost: boolean = (
		hostname.endsWith(".LOCALHOST") ||
		hostname.endsWith(".GHE.LOCALHOST")
	);
	return (!isGitHubHost && !isGitHubEnterpriseHost && !isLocalHost);
}
