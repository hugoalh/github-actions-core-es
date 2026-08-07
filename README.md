# GitHub Actions - Core (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[DistBoard @hugoalh](https://hugoalh.github.io/distboard/github_actions_core_ecmascript)
● [GitHub](https://github.com/hugoalh/github-actions-core-es)
● [JSR](https://jsr.io/@hugoalh/github-actions-core)
● [NPM](https://www.npmjs.com/package/@hugoalh/github-actions-core)

An ECMAScript module to provide a better and easier way for GitHub Actions to communicate with the runner, and the toolkit for developing GitHub Actions.

This is a partial refactor of [the official toolkit][official-toolkit], not all of the features in [the official toolkit][official-toolkit] are available in here, and not all of the features in here are available in [the official toolkit][official-toolkit].

[official-toolkit]: https://github.com/actions/toolkit

## 🌟 Features

- Ability to use directly on GitHub Actions with ECMAScript runtime without complex setup.
- Compatible with bundler.
- Full ECMAScript.

## 🎯 Runtime Targets

Any runtime which support ECMAScript should able to use this; These runtimes are officially supported:

- **[Bun](https://bun.sh/)** >= v1.1.0
- **[Deno](https://deno.land/)** >= v2.1.0
- **[NodeJS](https://nodejs.org/)** >= v20.9.0

## 🛡️ Runtime Permissions

- Environment Variable (Deno: `env`) (Optional)
- File System - Read (Deno: `read`; NodeJS: `fs-read`) (Optional)
- File System - Write (Deno: `write`; NodeJS: `fs-write`) (Optional)

## #️⃣ Sources & Entrypoints

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

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default |
| `./command/file` | `./command/file.ts` | File command. |
| `./command/stdout` | `./command/stdout.ts` | StdOut command. |
| `./annotation` | `./annotation.ts` | Annotation. |
| `./env` | `./env.ts` | Environment variable. |
| `./input` | `./input.ts` | Input. |
| `./log` | `./log.ts` | Log. |
| `./output` | `./output.ts` | Output. |
| `./problem-matcher` | `./problem_matcher.ts` | Problem matcher. |
| `./runner` | `./runner.ts` | Runner. |
| `./state` | `./state.ts` | State. |
| `./summary` | `./summary.ts` | Summary. |
| `./utility` | `./utility.ts` | Utility. |

> [!NOTE]
> - Different runtimes have vary support for the sources and entrypoints, visit the runtime documentation for more information.
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## 🧩 APIs

- ```ts
  function addPATHSubsequent(...paths: readonly string[]): void;
  ```
- ```ts
  function addSecretMask(value: string): void;
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
  function setEnvSubsequent(key: string, value: StringifiableType): void;
  function setEnvSubsequent(pairs: KeyValueLike<StringifiableType>): void;
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
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc)
>   - [JSR](https://jsr.io/@hugoalh/github-actions-core)

## ✍️ Examples

- ```ts
  writeNotice("Hello, world!");
  //=> ::notice::Hello, world!
  ```
