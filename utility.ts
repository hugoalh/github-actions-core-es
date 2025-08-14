import { isAbsolute as isPathAbsolute } from "node:path";
import { env } from "https://raw.githubusercontent.com/hugoalh/env-es/v0.3.0/env.ts";
import {
	isJSONObject,
	type JSONObject
} from "https://raw.githubusercontent.com/hugoalh/is-json-es/v1.0.5/mod.ts";
/**
 * Get the URL of the GitHub API.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_API_URL`
 * @returns {URL} URL of the GitHub API.
 * @example
 * ```ts
 * getGitHubAPIURL();
 * //=> https://api.github.com/
 * ```
 */
export function getGitHubAPIURL(): URL {
	return new URL(env.get("GITHUB_API_URL") ?? "https://api.github.com/");
}
/**
 * Get the URL of the GitHub GraphQL API.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_GRAPHQL_URL`
 * @returns {URL} URL of the GitHub GraphQL API.
 * @example
 * ```ts
 * getGitHubGraphQLAPIURL();
 * //=> https://api.github.com/graphql
 * ```
 */
export function getGitHubGraphQLAPIURL(): URL {
	return new URL(env.get("GITHUB_GRAPHQL_URL") ?? "https://api.github.com/graphql");
}
/**
 * Get the URL of the GitHub server.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_SERVER_URL`
 * @returns {URL} URL of the GitHub server.
 * @example
 * ```ts
 * getGitHubServerURL();
 * //=> https://github.com/
 * ```
 */
export function getGitHubServerURL(): URL {
	return new URL(env.get("GITHUB_SERVER_URL") ?? "https://github.com/");
}
/**
 * Get the name of the workflow.
 * 
 * If the workflow file does not specify a name, then the value is the full path of the workflow file in the repository.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_WORKFLOW`
 * @returns {string} Name of the workflow.
 * @example
 * ```ts
 * getWorkflowName();
 * //=> "My test workflow"
 * ```
 */
export function getWorkflowName(): string {
	const value: string | undefined = env.get("GITHUB_WORKFLOW");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow name, environment variable \`GITHUB_WORKFLOW\` is not defined!`);
	}
	return value;
}
/**
 * Get the reference path of the workflow.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_WORKFLOW_REF`
 * @returns {string} Reference path of the workflow.
 * @example
 * ```ts
 * getWorkflowPath();
 * //=> "octocat/hello-world/.github/workflows/my-workflow.yml@refs/heads/my_branch"
 * ```
 */
export function getWorkflowReferencePath(): string {
	const value: string | undefined = env.get("GITHUB_WORKFLOW_REF");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow reference path, environment variable \`GITHUB_WORKFLOW_REF\` is not defined!`);
	}
	return value;
}
/**
 * Get the repository of the workflow.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_REPOSITORY`
 * @returns {string} Repository of the workflow.
 * @example
 * ```ts
 * getWorkflowRepository();
 * //=> "octocat/Hello-World"
 * ```
 */
export function getWorkflowRepository(): string {
	const value: string | undefined = env.get("GITHUB_REPOSITORY");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow repository, environment variable \`GITHUB_REPOSITORY\` is not defined!`);
	}
	return value;
}
/**
 * Get the repository ID of the workflow.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_REPOSITORY_ID`
 * @returns {string} Repository ID of the workflow.
 * @example
 * ```ts
 * getWorkflowRepositoryID();
 * //=> "123456789"
 * ```
 */
export function getWorkflowRepositoryID(): string {
	const value: string | undefined = env.get("GITHUB_REPOSITORY_ID");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow repository ID, environment variable \`GITHUB_REPOSITORY_ID\` is not defined!`);
	}
	return value;
}
/**
 * Get the repository owner of the workflow.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_REPOSITORY_OWNER`
 * @returns {string} Repository owner of the workflow.
 * @example
 * ```ts
 * getWorkflowRepositoryOwner();
 * //=> "octocat"
 * ```
 */
export function getWorkflowRepositoryOwner(): string {
	const value: string | undefined = env.get("GITHUB_REPOSITORY_OWNER");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow repository owner, environment variable \`GITHUB_REPOSITORY_OWNER\` is not defined!`);
	}
	return value;
}
/**
 * Get the repository owner ID of the workflow.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_REPOSITORY_OWNER_ID`
 * @returns {string} Repository owner ID of the workflow.
 * @example
 * ```ts
 * getWorkflowRepositoryOwnerID();
 * //=> "1234567"
 * ```
 */
export function getWorkflowRepositoryOwnerID(): string {
	const value: string | undefined = env.get("GITHUB_REPOSITORY_OWNER_ID");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow repository owner ID, environment variable \`GITHUB_REPOSITORY_OWNER_ID\` is not defined!`);
	}
	return value;
}
/**
 * Get the action ID of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_ACTION`
 * @returns {string} Action ID of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunActionID();
 * //=> "__repo-owner_name-of-action-repo"
 * ```
 */
export function getWorkflowRunActionID(): string {
	const value: string | undefined = env.get("GITHUB_ACTION");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run action ID, environment variable \`GITHUB_ACTION\` is not defined!`);
	}
	return value;
}
/**
 * Get the actor ID of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_ACTOR_ID`
 * @returns {string} Actor ID of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunActorID();
 * //=> "1234567"
 * ```
 */
export function getWorkflowRunActorID(): string {
	const value: string | undefined = env.get("GITHUB_ACTOR_ID");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run actor ID, environment variable \`GITHUB_ACTOR_ID\` is not defined!`);
	}
	return value;
}
/**
 * Get the actor name that initiate the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_ACTOR`
 * @returns {string} Actor name that initiate the workflow run.
 * @example
 * ```ts
 * getWorkflowRunActorName();
 * //=> "octocat"
 * ```
 */
export function getWorkflowRunActorName(): string {
	const value: string | undefined = env.get("GITHUB_ACTOR");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run actor name, environment variable \`GITHUB_ACTOR\` is not defined!`);
	}
	return value;
}
/**
 * Get the commit SHA that trigger the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_SHA`
 * @returns {string} Commit SHA that trigger the workflow run.
 * @example
 * ```ts
 * getWorkflowRunCommitSHA();
 * //=> "ffac537e6cbbf934b08745a378932722df287a53"
 * ```
 */
export function getWorkflowRunCommitSHA(): string {
	const value: string | undefined = env.get("GITHUB_SHA");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run commit SHA, environment variable \`GITHUB_SHA\` is not defined!`);
	}
	return value;
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
	| "pull_request_comment"
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
const eventsName: readonly GitHubActionsEventName[] = [
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
	"issue_comment",
	"issues",
	"label",
	"merge_group",
	"milestone",
	"page_build",
	"project",// Legacy.
	"project_card",// Legacy.
	"project_column",// Legacy.
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
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_EVENT_NAME`
 * @returns {GitHubActionsEventName} Event name of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunEventName();
 * //=> "workflow_dispatch"
 * ```
 */
export function getWorkflowRunEventName(): GitHubActionsEventName {
	const value: string | undefined = env.get("GITHUB_EVENT_NAME");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run event name, environment variable \`GITHUB_EVENT_NAME\` is not defined!`);
	}
	if (!eventsName.includes(value as GitHubActionsEventName)) {
		throw new Error(`\`${value}\` is not a known GitHub Actions workflow run event name!`);
	}
	return value as GitHubActionsEventName;
}
/**
 * Get the ID of the workflow run.
 * 
 * This is unique for each workflow run within a repository, and does not change when re-run the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_RUN_ID`
 * @returns {string} ID of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunID();
 * //=> 1658821493
 * ```
 */
export function getWorkflowRunID(): string {
	const value: string | undefined = env.get("GITHUB_RUN_ID");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run ID, environment variable \`GITHUB_RUN_ID\` is not defined!`);
	}
	return value;
}
/**
 * Get the job ID of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_JOB`
 * @returns {string} Job ID of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunJobID();
 * //=> "greeting_job"
 * ```
 */
export function getWorkflowRunJobID(): string {
	const value: string | undefined = env.get("GITHUB_JOB");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run job ID, environment variable \`GITHUB_JOB\` is not defined!`);
	}
	return value;
}
/**
 * Get the run number of the workflow.
 * 
 * This is unique for each run of a particular workflow in a repository, begins at `1` for the workflow's first run, and increments with each new run; This number does not change when re-run the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_RUN_NUMBER`
 * @returns {number} Run number of the workflow.
 * @example
 * ```ts
 * getWorkflowRunNumber();
 * //=> 3
 * ```
 */
export function getWorkflowRunNumber(): number {
	const value: string | undefined = env.get("GITHUB_RUN_NUMBER");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run number, environment variable \`GITHUB_RUN_NUMBER\` is not defined!`);
	}
	return Number.parseInt(value, 10);
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
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_BASE_REF`
 * >   - `GITHUB_HEAD_REF`
 * >   - `GITHUB_REF`
 * >   - `GITHUB_REF_NAME`
 * >   - `GITHUB_REF_PROTECTED`
 * >   - `GITHUB_REF_TYPE`
 * @returns {GitHubReferenceMeta} Reference of the workflow run.
 */
export function getWorkflowRunReference(): GitHubReferenceMeta {
	const base: string | undefined = env.get("GITHUB_BASE_REF");
	const full: string | undefined = env.get("GITHUB_REF");
	if (typeof full === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run reference, environment variable \`GITHUB_REF\` is not defined!`);
	}
	const head: string | undefined = env.get("GITHUB_HEAD_REF");
	const short: string | undefined = env.get("GITHUB_REF_NAME");
	if (typeof short === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run reference, environment variable \`GITHUB_REF_NAME\` is not defined!`);
	}
	const type: string | undefined = env.get("GITHUB_REF_TYPE");
	if (typeof type === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run reference, environment variable \`GITHUB_REF_TYPE\` is not defined!`);
	}
	if (!referenceTypes.includes(type as GitHubReferenceType)) {
		throw new Error(`\`${type}\` is not a known GitHub Actions workflow run reference type!`);
	}
	return {
		base: (typeof base === "string" && base.length > 0) ? base : undefined,
		full,
		head: (typeof head === "string" && head.length > 0) ? head : undefined,
		protected: env.get("GITHUB_REF_PROTECTED") === "true",
		short,
		type: type as GitHubReferenceType
	};
}
/**
 * Get the retention days of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_RETENTION_DAYS`
 * @returns {number} Retention days of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunRetentionDays();
 * //=> 90
 * ```
 */
export function getWorkflowRunRetentionDays(): number {
	const value: string | undefined = env.get("GITHUB_RETENTION_DAYS");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run retention days, environment variable \`GITHUB_RETENTION_DAYS\` is not defined!`);
	}
	return Number.parseInt(value, 10);
}
/**
 * Get the run attempt of the workflow run.
 * 
 * This is unique for each attempt of a particular workflow run in a repository, begins at `1` for the workflow run's first attempt, and increments with each re-run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_RUN_ATTEMPT`
 * @returns {number} Run attempt of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunRunAttempt();
 * //=> 3
 * ```
 */
export function getWorkflowRunRunAttempt(): number {
	const value: string | undefined = env.get("GITHUB_RUN_ATTEMPT");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run run attempt, environment variable \`GITHUB_RUN_ATTEMPT\` is not defined!`);
	}
	return Number.parseInt(value, 10);
}
/**
 * Get the URL of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_REPOSITORY`
 * @returns {URL} URL of the workflow run.
 * @example
 * ```ts
 * getWorkflowRunURL();
 * //=> https://github.com/octocat/Hello-World/actions/runs/1658821493
 * ```
 */
export function getWorkflowRunURL(): URL {
	const repository: string | undefined = env.get("GITHUB_REPOSITORY");
	if (typeof repository === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run URI, environment variable \`GITHUB_REPOSITORY\` is not defined!`);
	}
	const serverURLString: string = getGitHubServerURL().toString();
	return new URL(`${serverURLString}${serverURLString.endsWith("/") ? "" : "/"}${repository}/actions/runs/${getWorkflowRunID()}`);
}
/**
 * Get the webhook event payload of the workflow run.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_EVENT_PATH`
 * > - **File System - Read (Deno: `read`; NodeJS: `fs-read`):**
 * >   - *Resources*
 * @returns {JSONObject} Webhook event payload of the workflow run.
 */
export function getWorkflowRunWebhookEventPayload(): JSONObject {
	const path: string | undefined = env.get("GITHUB_EVENT_PATH");
	if (typeof path === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run webhook event payload, environment variable \`GITHUB_EVENT_PATH\` is not defined!`);
	}
	if (!isPathAbsolute(path)) {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow run webhook event payload, \`${path}\` (environment variable \`GITHUB_EVENT_PATH\`) is not an absolute path!`);
	}
	const context: unknown = JSON.parse(Deno.readTextFileSync(path));
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
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_WORKFLOW_SHA`
 * @returns {string} SHA of the workflow.
 */
export function getWorkflowSHA(): string {
	const value: string | undefined = env.get("GITHUB_WORKFLOW_SHA");
	if (typeof value === "undefined") {
		throw new ReferenceError(`Unable to get the GitHub Actions workflow SHA, environment variable \`GITHUB_WORKFLOW_SHA\` is not defined!`);
	}
	return value;
}
/**
 * Test whether is inside the GitHub Enterprise Server.
 * 
 * > **🛡️ Runtime Permissions**
 * > 
 * > - **Environment Variable (Deno: `env`):**
 * >   - `GITHUB_SERVER_URL`
 * @returns {boolean} Determine result.
 */
export function isGitHubEnterpriseServer(): boolean {
	const hostname: string = getGitHubServerURL().hostname.toUpperCase();
	const isGitHubHost: boolean = hostname === "GITHUB.COM";
	const isGitHubEnterpriseHost: boolean = hostname.endsWith(".GHE.COM");
	const isLocalHost: boolean = hostname.endsWith(".LOCALHOST") || hostname.endsWith(".GHE.LOCALHOST");
	return (!isGitHubHost && !isGitHubEnterpriseHost && !isLocalHost);
}
