import {
	getGitHubAPIURL,
	getGitHubGraphQLAPIURL,
	getGitHubServerURL,
	getWorkflowName,
	getWorkflowReferencePath,
	getWorkflowRepository,
	getWorkflowRepositoryID,
	getWorkflowRepositoryOwner,
	getWorkflowRepositoryOwnerID,
	getWorkflowRunActionID,
	getWorkflowRunActorID,
	getWorkflowRunActorName,
	getWorkflowRunCommitSHA,
	getWorkflowRunEventName,
	getWorkflowRunID,
	getWorkflowRunJobID,
	getWorkflowRunNumber,
	getWorkflowRunReference,
	getWorkflowRunRetentionDays,
	getWorkflowRunRunAttempt,
	getWorkflowRunURL,
	getWorkflowRunWebhookEventPayload,
	getWorkflowSHA
} from "./utility.ts";
const ignore = !(
	Deno.args.includes("--force") ||
	Deno.env.get("GITHUB_ACTIONS") === "true"
);
Deno.test("GitHub API URL", {
	ignore,
	permissions: {
		env: ["GITHUB_API_URL"]
	}
}, () => {
	console.log(getGitHubAPIURL());
});
Deno.test("GitHub GraphQL API URL", {
	ignore,
	permissions: {
		env: ["GITHUB_GRAPHQL_URL"]
	}
}, () => {
	console.log(getGitHubGraphQLAPIURL());
});
Deno.test("GitHub Server URL", {
	ignore,
	permissions: {
		env: ["GITHUB_SERVER_URL"]
	}
}, () => {
	console.log(getGitHubServerURL());
});
Deno.test("Workflow Name", {
	ignore,
	permissions: {
		env: ["GITHUB_WORKFLOW"]
	}
}, () => {
	console.log(getWorkflowName());
});
Deno.test("Workflow Reference Path", {
	ignore,
	permissions: {
		env: ["GITHUB_WORKFLOW_REF"]
	}
}, () => {
	console.log(getWorkflowReferencePath());
});
Deno.test("Workflow Repository", {
	ignore,
	permissions: {
		env: ["GITHUB_REPOSITORY"]
	}
}, () => {
	console.log(getWorkflowRepository());
});
Deno.test("Workflow Repository ID", {
	ignore,
	permissions: {
		env: ["GITHUB_REPOSITORY_ID"]
	}
}, () => {
	console.log(getWorkflowRepositoryID());
});
Deno.test("Workflow Repository Owner", {
	ignore,
	permissions: {
		env: ["GITHUB_REPOSITORY_OWNER"]
	}
}, () => {
	console.log(getWorkflowRepositoryOwner());
});
Deno.test("Workflow Repository Owner ID", {
	ignore,
	permissions: {
		env: ["GITHUB_REPOSITORY_OWNER_ID"]
	}
}, () => {
	console.log(getWorkflowRepositoryOwnerID());
});
Deno.test("Workflow Run Action ID", {
	ignore,
	permissions: {
		env: ["GITHUB_ACTION"]
	}
}, () => {
	console.log(getWorkflowRunActionID());
});
Deno.test("Workflow Run Actor ID", {
	ignore,
	permissions: {
		env: ["GITHUB_ACTOR_ID"]
	}
}, () => {
	console.log(getWorkflowRunActorID());
});
Deno.test("Workflow Run Actor Name", {
	ignore,
	permissions: {
		env: ["GITHUB_ACTOR"]
	}
}, () => {
	console.log(getWorkflowRunActorName());
});
Deno.test("Workflow Run Commit SHA", {
	ignore,
	permissions: {
		env: ["GITHUB_SHA"]
	}
}, () => {
	console.log(getWorkflowRunCommitSHA());
});
Deno.test("Workflow Run Event Name", {
	ignore,
	permissions: {
		env: ["GITHUB_EVENT_NAME"]
	}
}, () => {
	console.log(getWorkflowRunEventName());
});
Deno.test("Workflow Run ID", {
	ignore,
	permissions: {
		env: ["GITHUB_RUN_ID"]
	}
}, () => {
	console.log(getWorkflowRunID());
});
Deno.test("Workflow Run Job ID", {
	ignore,
	permissions: {
		env: ["GITHUB_JOB"]
	}
}, () => {
	console.log(getWorkflowRunJobID());
});
Deno.test("Workflow Run Number", {
	ignore,
	permissions: {
		env: ["GITHUB_RUN_NUMBER"]
	}
}, () => {
	console.log(getWorkflowRunNumber());
});
Deno.test("Workflow Run Reference", {
	ignore,
	permissions: {
		env: [
			"GITHUB_BASE_REF",
			"GITHUB_EVENT_NAME",
			"GITHUB_HEAD_REF",
			"GITHUB_REF",
			"GITHUB_REF_NAME",
			"GITHUB_REF_PROTECTED",
			"GITHUB_REF_TYPE"
		]
	}
}, () => {
	console.log(getWorkflowRunReference());
});
Deno.test("Workflow Run Retention Days", {
	ignore,
	permissions: {
		env: ["GITHUB_RETENTION_DAYS"]
	}
}, () => {
	console.log(getWorkflowRunRetentionDays());
});
Deno.test("Workflow Run Run Attempt", {
	ignore,
	permissions: {
		env: ["GITHUB_RUN_ATTEMPT"]
	}
}, () => {
	console.log(getWorkflowRunRunAttempt());
});
Deno.test("Workflow Run URL", {
	ignore,
	permissions: {
		env: [
			"GITHUB_REPOSITORY",
			"GITHUB_RUN_ID",
			"GITHUB_SERVER_URL"
		]
	}
}, () => {
	console.log(getWorkflowRunURL());
});
Deno.test("Workflow Run Webhook Event Payload", {
	ignore,
	permissions: {
		env: ["GITHUB_EVENT_PATH"],
		read: true
	}
}, () => {
	console.log(getWorkflowRunWebhookEventPayload());
});
Deno.test("Workflow SHA", {
	ignore,
	permissions: {
		env: ["GITHUB_WORKFLOW_SHA"]
	}
}, () => {
	console.log(getWorkflowSHA());
});
