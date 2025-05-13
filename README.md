# GitHub Actions - Core (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/github-actions-core-es](https://img.shields.io/github/v/release/hugoalh/github-actions-core-es?label=hugoalh/github-actions-core-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/github-actions-core-es")](https://github.com/hugoalh/github-actions-core-es)
[![JSR: @hugoalh/github-actions-core](https://img.shields.io/jsr/v/@hugoalh/github-actions-core?label=@hugoalh/github-actions-core&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/github-actions-core")](https://jsr.io/@hugoalh/github-actions-core)
[![NPM: @hugoalh/github-actions-core](https://img.shields.io/npm/v/@hugoalh/github-actions-core?label=@hugoalh/github-actions-core&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/github-actions-core")](https://www.npmjs.com/package/@hugoalh/github-actions-core)

An ECMAScript (JavaScript & TypeScript) module to provide a better and easier way for GitHub Actions to communicate with the runner, and the toolkit for developing GitHub Actions.

## ⚠️ Important

[official-toolkit]: https://github.com/actions/toolkit

This is a partial refactor of [the official toolkit][official-toolkit], not all of the features in [the official toolkit][official-toolkit] are available in here, and not all of the features in here are available in [the official toolkit][official-toolkit].

## 🌟 Features

- Ability to use directly on GitHub Actions with Deno runtime without complex setup.
- Compatible with bundler.
- Full ECMAScript module.

## 🔰 Begin

### 🎯 Targets

| **Targets** | **Remote** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

> [!NOTE]
> - It is possible to use this module in other methods/ways which not listed in here, however those methods/ways are not officially supported, and should beware maybe cause security issues.

### #️⃣ Resources Identifier

- **Remote - GitHub Raw:**
  ```
  https://raw.githubusercontent.com/hugoalh/github-actions-core-es/{Tag}/mod.ts
  ```
- **JSR:**
  ```
  [jsr:]@hugoalh/github-actions-core[@{Tag}]
  ```
- **NPM:**
  ```
  [npm:]@hugoalh/github-actions-core[@{Tag}]
  ```

> [!NOTE]
> - For usage of remote resources, it is recommended to import the entire module with the main path `mod.ts`, however it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `_bar`, `_foo`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - For usage of JSR or NPM resources, it is recommended to import the entire module with the main entrypoint, however it is also able to import part of the module with sub entrypoint if available, please visit the [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub entrypoints.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Runtime Permissions

- **Environment Variable (Deno: `env`):**
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
- **File System - Read (Deno: `read`; NodeJS (>= v20.9.0) 🧪: `fs-read`):**
  - *Resources* (Optional)
- **File System - Write (Deno: `write`; NodeJS (>= v20.9.0) 🧪: `fs-write`):**
  - *Resources* (Optional)

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
  function getInput(key: string, options?: GitHubActionsGetParameterOptions & { fallback?: true; require?: false; }): string;
  function getInput(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): string;
  function getInput(key: string, options: GitHubActionsGetParameterOptions & { fallback: false; require?: false; }): string | undefined;
  ```
- ```ts
  function getState(key: string, options?: GitHubActionsGetParameterOptions & { fallback?: true; require?: false; }): string;
  function getState(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): string;
  function getState(key: string, options: GitHubActionsGetParameterOptions & { fallback: false; require?: false; }): string | undefined;
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
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/documentation_generator/)
>   - [JSR](https://jsr.io/@hugoalh/github-actions-core)

## ✍️ Examples

- ```ts
  writeNotice("Hello, world!");
  //=> ::notice::Hello, world!
  ```
