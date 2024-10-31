# GitHub Actions - Core (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/github-actions-core-es](https://img.shields.io/github/v/release/hugoalh/github-actions-core-es?label=hugoalh/github-actions-core-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/github-actions-core-es")](https://github.com/hugoalh/github-actions-core-es)
[![JSR: @hugoalh/github-actions-core](https://img.shields.io/jsr/v/@hugoalh/github-actions-core?label=@hugoalh/github-actions-core&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/github-actions-core")](https://jsr.io/@hugoalh/github-actions-core)
[![NPM: @hugoalh/github-actions-core](https://img.shields.io/npm/v/@hugoalh/github-actions-core?label=@hugoalh/github-actions-core&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/github-actions-core")](https://www.npmjs.com/package/@hugoalh/github-actions-core)

An ES (JavaScript & TypeScript) module to provide a better and easier way for GitHub Actions to communicate with the runner, and the toolkit for developing GitHub Actions.

## ⚠️ Important

[official-toolkit]: https://github.com/actions/toolkit

This is a partial refactor of [the official toolkit][official-toolkit], not all of the features in [the official toolkit][official-toolkit] are available here, and not all of the features in here are available in [the official toolkit][official-toolkit].

## 🌟 Features

- Ability to use directly on GitHub Actions with Deno runtime without complex setup.
- Compatible with bundler.
- Full ModuleJS.

## 🔰 Begin

### 🎯 Targets

|  | **Remote** | **JSR** | **NPM** |
|:--|:--|:--|:--|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ❓ | ✔️ |
| **[Deno](https://deno.land/)** >= v1.42.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v16.13.0 | ❌ | ❓ | ✔️ |

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

### 🛡️ Require Runtime Permissions

*This module does not require any runtime permission.*

## 🧩 APIs (Excerpt)

- ```ts
  function addPATH(path: string, options?: GitHubActionsSetEnvironmentVariableOptions & GitHubActionsFileCommandOptions): void;
  function addPATH(paths: string[], options?: GitHubActionsSetEnvironmentVariableOptions & GitHubActionsFileCommandOptions): void;
  ```
- ```ts
  function addSecretMask(...values: string[]): void;
  ```
- ```ts
  function enterLogGroup(title: string = ""): void;
  ```
- ```ts
  function exitLogGroup(): void;
  ```
- ```ts
  function getInput(key: string, options?: GitHubActionsGetParameterOptions & { returnDefaultValueOnUndefined?: true; require?: false; }): string;
  function getInput(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): string;
  function getInput(key: string, options: GitHubActionsGetParameterOptions & { returnDefaultValueOnUndefined: false; require?: false; }): string | undefined;
  ```
- ```ts
  function getState(key: string, options?: GitHubActionsGetParameterOptions & { returnDefaultValueOnUndefined?: true; require?: false; }): string;
  function getState(key: string, options: GitHubActionsGetParameterOptions & { require: true; }): string;
  function getState(key: string, options: GitHubActionsGetParameterOptions & { returnDefaultValueOnUndefined: false; require?: false; }): string | undefined;
  ```
- ```ts
  function setEnvironmentVariable(key: string, value: string, options?: GitHubActionsSetEnvironmentVariableOptions & GitHubActionsFileCommandOptions): void;
  function setEnvironmentVariable(pairs: KeyValueLike, options?: GitHubActionsSetEnvironmentVariableOptions & GitHubActionsFileCommandOptions): void;
  ```
- ```ts
  function setOutput(key: string, value: string, options?: GitHubActionsFileCommandOptions): void;
  function setOutput(pairs: KeyValueLike, options?: GitHubActionsFileCommandOptions): void;
  ```
- ```ts
  function setState(key: string, value: string, options?: GitHubActionsFileCommandOptions): void;
  function setState(pairs: KeyValueLike, options?: GitHubActionsFileCommandOptions): void;
  ```
- ```ts
  function writeDebug(...data: string[]): void;
  ```
- ```ts
  function writeError(data: string, properties: GitHubActionsAnnotationProperties = {}): void;
  ```
- ```ts
  function writeNotice(data: string, properties: GitHubActionsAnnotationProperties = {}): void;
  ```
- ```ts
  function writeWarn(data: string, properties: GitHubActionsAnnotationProperties = {}): void;
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
