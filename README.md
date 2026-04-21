# GitHub Actions - Core (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[GitHub](https://github.com/hugoalh/github-actions-core-es)
[JSR](https://jsr.io/@hugoalh/github-actions-core)
[NPM](https://www.npmjs.com/package/@hugoalh/github-actions-core)

An ECMAScript module to provide a better and easier way for GitHub Actions to communicate with the runner, and the toolkit for developing GitHub Actions.

This is a partial refactor of [the official toolkit][official-toolkit], not all of the features in [the official toolkit][official-toolkit] are available in here, and not all of the features in here are available in [the official toolkit][official-toolkit].

[official-toolkit]: https://github.com/actions/toolkit

## 🌟 Features

- Ability to use directly on GitHub Actions with Deno runtime without complex setup.
- Compatible with bundler.
- Full ECMAScript module.

## 🎯 Targets

| **Runtime \\ Source** | **GitHub Raw** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

## 🛡️ Runtime Permissions

- Environment Variable (Deno: `env`)
  - `ACTIONS_CACHE_SERVICE_V2` (Optional)
  - `ACTIONS_CACHE_URL` (Optional)
  - `ACTIONS_ID_TOKEN_REQUEST_TOKEN` (Optional)
  - `ACTIONS_ID_TOKEN_REQUEST_URL` (Optional)
  - `ACTIONS_RESULTS_URL` (Optional)
  - `ACTIONS_RUNTIME_TOKEN` (Optional)
  - `ACTIONS_RUNTIME_URL` (Optional)
  - `CI` (Optional)
  - `GITHUB_ACTION` (Optional)
  - `GITHUB_ACTIONS` (Optional)
  - `GITHUB_ACTOR` (Optional)
  - `GITHUB_ACTOR_ID` (Optional)
  - `GITHUB_API_URL` (Optional)
  - `GITHUB_ENV` (Optional)
  - `GITHUB_EVENT_NAME` (Optional)
  - `GITHUB_EVENT_PATH` (Optional)
  - `GITHUB_GRAPHQL_URL` (Optional)
  - `GITHUB_JOB` (Optional)
  - `GITHUB_OUTPUT` (Optional)
  - `GITHUB_PATH` (Optional)
  - `GITHUB_REF_NAME` (Optional)
  - `GITHUB_REF_TYPE` (Optional)
  - `GITHUB_REPOSITORY` (Optional)
  - `GITHUB_REPOSITORY_ID` (Optional)
  - `GITHUB_REPOSITORY_OWNER` (Optional)
  - `GITHUB_REPOSITORY_OWNER_ID` (Optional)
  - `GITHUB_RETENTION_DAYS` (Optional)
  - `GITHUB_RUN_ATTEMPT` (Optional)
  - `GITHUB_RUN_ID` (Optional)
  - `GITHUB_RUN_NUMBER` (Optional)
  - `GITHUB_SERVER_URL` (Optional)
  - `GITHUB_SHA` (Optional)
  - `GITHUB_STATE` (Optional)
  - `GITHUB_STEP_SUMMARY` (Optional)
  - `GITHUB_WORKFLOW` (Optional)
  - `GITHUB_WORKFLOW_REF` (Optional)
  - `GITHUB_WORKFLOW_SHA` (Optional)
  - `GITHUB_WORKSPACE` (Optional)
  - `RUNNER_ARCH` (Optional)
  - `RUNNER_ENVIRONMENT` (Optional)
  - `RUNNER_NAME` (Optional)
  - `RUNNER_OS` (Optional)
  - `RUNNER_TEMP` (Optional)
  - `RUNNER_TOOL_CACHE` (Optional)
  - *Resources* (Optional)
- File System - Read (Deno: `read`; NodeJS: `fs-read`)
  - *Resources* (Optional)
- File System - Write (Deno: `write`; NodeJS: `fs-write`)
  - *Resources* (Optional)

## #️⃣ Sources

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/github-actions-core-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/github-actions-core[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/github-actions-core[@{Tag}]
  ```

> [!NOTE]
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## ⤵️ Entrypoints

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |
| `./command/file` | `./command/file.ts` | File command. |
| `./command/stdout` | `./command/stdout.ts` | StdOut command. |
| `./env` | `./environment_variable.ts` | Environment variable. |
| `./environment-variable` | `./environment_variable.ts` | Environment variable. |
| `./log` | `./log.ts` | Log. |
| `./parameter` | `./parameter.ts` | Input, output, and state. |
| `./problem-matcher` | `./problem_matcher.ts` | Problem matcher. |
| `./runner` | `./runner.ts` | Runner. |
| `./summary` | `./summary.ts` | Summary. |
| `./utility` | `./utility.ts` | Utility. |

## 🧩 APIs

- ```ts
  function addPATH(path: string, options?: GitHubActionsSetEnvironmentVariableOptions): void;
  function addPATH(paths: readonly string[], options?: GitHubActionsSetEnvironmentVariableOptions): void;
  ```
- ```ts
  function addSecretMask(...values: readonly string[]): void;
  ```
- ```ts
  function enterLogGroup(title?: string): void;
  ```
- ```ts
  function exitLogGroup(): void;
  ```
- ```ts
  function getInput(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): string | undefined;
  function getInput(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): string;
  ```
- ```ts
  function getState(key: string, options?: GitHubActionsGetParameterOptions & { require?: false; }): string | undefined;
  function getState(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): string;
  ```
- ```ts
  function setEnvironmentVariable(key: string, value: StringizableType, options?: GitHubActionsSetEnvironmentVariableOptions): void;
  function setEnvironmentVariable(pairs: KeyValueLike<StringizableType>, options?: GitHubActionsSetEnvironmentVariableOptions): void;
  ```
- ```ts
  function setOutput(key: string, value: StringizableType): void;
  function setOutput(pairs: KeyValueLike<StringizableType>): void;
  ```
- ```ts
  function setState(key: string, value: StringizableType): void;
  function setState(pairs: KeyValueLike<StringizableType>): void;
  ```
- ```ts
  function writeDebug(...data: readonly string[]): void;
  ```
- ```ts
  function writeError(data: string, properties?: GitHubActionsAnnotationProperties): void;
  ```
- ```ts
  function writeNotice(data: string, properties?: GitHubActionsAnnotationProperties): void;
  ```
- ```ts
  function writeWarning(data: string, properties?: GitHubActionsAnnotationProperties): void;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
>   - [JSR](https://jsr.io/@hugoalh/github-actions-core)

## ✍️ Examples

- ```ts
  writeNotice("Hello, world!");
  //=> ::notice::Hello, world!
  ```
