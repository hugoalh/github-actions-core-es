import { invokeDenoNodeJSTransformer } from "DNT";
import { parse as parseJSONC } from "STD_JSONC";
const jsrManifest = parseJSONC(await Deno.readTextFile("./jsr.jsonc"));
await invokeDenoNodeJSTransformer({
	copyEntries: [
		"LICENSE.md",
		"README.md"
	],
	//@ts-ignore Lazy type.
	entrypointsScript: jsrManifest.exports,
	generateDeclarationMap: true,
	mappings: {
		"https://raw.githubusercontent.com/hugoalh/env-es/v0.3.0/env.ts": {
			name: "@hugoalh/env",
			version: "^0.3.0",
			subPath: "env"
		},
		"https://raw.githubusercontent.com/hugoalh/eol-es/v0.5.0/eol.ts": {
			name: "@hugoalh/eol",
			version: "^0.5.0",
			subPath: "eol"
		},
		"https://raw.githubusercontent.com/hugoalh/eol-es/v0.5.0/normalize.ts": {
			name: "@hugoalh/eol",
			version: "^0.5.0",
			subPath: "normalize"
		},
		"https://raw.githubusercontent.com/hugoalh/is-json-es/v1.0.5/mod.ts": {
			name: "@hugoalh/is-json",
			version: "^1.0.5"
		},
		"https://raw.githubusercontent.com/hugoalh/is-string-singleline-es/v1.0.5/mod.ts": {
			name: "@hugoalh/is-string-singleline",
			version: "^1.0.5"
		}
	},
	metadata: {
		//@ts-ignore Lazy type.
		name: jsrManifest.name,
		//@ts-ignore Lazy type.
		version: jsrManifest.version,
		description: "A module to provide a better and easier way for GitHub Actions to communicate with the runner, and the toolkit for developing GitHub Actions.",
		keywords: [
			"core",
			"gh-actions",
			"ghactions",
			"github-actions",
			"toolkit"
		],
		homepage: "https://github.com/hugoalh/github-actions-core-es#readme",
		bugs: {
			url: "https://github.com/hugoalh/github-actions-core-es/issues"
		},
		license: "MIT",
		author: "hugoalh",
		repository: {
			type: "git",
			url: "git+https://github.com/hugoalh/github-actions-core-es.git"
		},
		private: false,
		publishConfig: {
			access: "public"
		}
	},
	outputDirectory: "dist/npm",
	outputDirectoryPreEmpty: true
});
