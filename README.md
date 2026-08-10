# GitHub Actions - Core (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[DistBoard @hugoalh](https://hugoalh.github.io/distboard/github_actions_core_ecmascript)
● [GitHub](https://github.com/hugoalh/github-actions-core-es)
● [JSR](https://jsr.io/@hugoalh/github-actions-core)
● [NPM](https://www.npmjs.com/package/@hugoalh/github-actions-core)

An ECMAScript module to provide a better and easier way for GitHub Actions to communicate with the runner, and the toolkit for developing GitHub Actions.

This is not the [official GitHub Actions toolkit](https://github.com/actions/toolkit), features are vary.

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

## #️⃣ Entrypoints

| **Type** | **Name** | **Path** | **Description** |
|:--|:--|:--|:--|
| API | `.` | `./mod.ts` | Default. |
| API | `./command/file` | `./command/file.ts` | File command. |
| API | `./command/stdout` | `./command/stdout.ts` | StdOut command. |
| API | `./annotation` | `./annotation.ts` | Annotation. |
| API | `./env` | `./env.ts` | Environment variable. |
| API | `./input` | `./input.ts` | Input. |
| API | `./log` | `./log.ts` | Log. |
| API | `./output` | `./output.ts` | Output. |
| API | `./problem-matcher` | `./problem_matcher.ts` | Problem matcher. |
| API | `./runner` | `./runner.ts` | Runner. |
| API | `./state` | `./state.ts` | State. |
| API | `./summary` | `./summary.ts` | Summary. |
| API | `./utility` | `./utility.ts` | Utility. |
| CLI | `./cli` | `./cli.ts` | Default. |

> [!NOTE]
> - Different runtimes have vary support for the entrypoints, visit the runtime documentation for more information.
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

## 🧩 CLIs

- ```powershell
  ghac echo off
  ghac echo on
  ```
- ```powershell
  ghac env clear
  ghac env optimize
  ghac env set $Key $Value
  ```
- ```powershell
  ghac error $Data [--file $File] [--line $Line] [--column $Column] [--line-end $LineEnd] [--column-end $ColumnEnd] [--title $Title] [--summary $Summary]
  ghac notice $Data [--file $File] [--line $Line] [--column $Column] [--line-end $LineEnd] [--column-end $ColumnEnd] [--title $Title] [--summary $Summary]
  ghac warning $Data [--file $File] [--line $Line] [--column $Column] [--line-end $LineEnd] [--column-end $ColumnEnd] [--title $Title] [--summary $Summary]
  <# 🔀 Unordered Positions: `$Data`, `--file $File`, `--line $Line`, `--column $Column`, `--line-end $LineEnd`, `--column-end $ColumnEnd`, `--title $Title`, `--summary $Summary` #>
  ```
  | **Argument** | **Type** | **Description** |
  |:--|:--|:--|
  | `column` | `number` | Column start of the issue file of the annotation. |
  | `column-end` | `number` | Column end of the issue file of the annotation. |
  | `file` | `string` | Path of the issue file of the annotation. |
  | `line` | `number` | Line start of the issue file of the annotation. |
  | `line-end` | `number` | Line end of the issue file of the annotation. |
  | `summary` | `string` | Summary of the annotation when the message is too large to display. |
  | `title` | `string` | Title of the annotation. |
- ```powershell
  ghac loggroup exit
  ghac loggroup enter [$Title]
  ```
- ```powershell
  ghac output clear
  ghac output optimize
  ghac output set $Key $Value
  ```
- ```powershell
  ghac path add ...$Paths
  ghac path clear
  ghac path optimize
  ```
- ```powershell
  ghac state clear
  ghac state optimize
  ghac state set $Key $Value
  ```
- ```powershell
  ghac summary clear
  ```
- ```powershell
  ghac temp clear
  ```

## ✍️ Examples

- ```ts
  writeNotice("Hello, world!");
  //=> ::notice::Hello, world!
  ```
- ```powershell
  ghac notice 'Hello, world!'
  ```
