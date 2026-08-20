import {
	readManifest,
	transform
} from "DNT";
const manifest = await readManifest("jsr.jsonc");
await transform({
	copyEntries: [
		"LICENSE.md",
		"README.md"
	],
	entrypointsExecutable: {
		"ghac": "./cli.ts"
	},
	//@ts-ignore Lazy type.
	entrypointsScript: manifest.exports,
	generateDeclarationMap: true,
	mappings: {
		"jsr:@hugoalh/env@^0.4.1/general": {
			name: "@hugoalh/env",
			version: "^0.4.1",
			subPath: "general"
		},
		"jsr:@hugoalh/eol@^0.6.0/eol": {
			name: "@hugoalh/eol",
			version: "^0.6.0",
			subPath: "eol"
		},
		"jsr:@hugoalh/eol@^0.6.0/normalize": {
			name: "@hugoalh/eol",
			version: "^0.6.0",
			subPath: "normalize"
		},
		"jsr:@hugoalh/is-json@^1.0.6": {
			name: "@hugoalh/is-json",
			version: "^1.0.6"
		},
		"jsr:@hugoalh/is-string-singleline@^1.0.6": {
			name: "@hugoalh/is-string-singleline",
			version: "^1.0.6"
		}
	},
	metadata: {
		//@ts-ignore Lazy type.
		name: manifest.name,
		//@ts-ignore Lazy type.
		version: manifest.version,
		description: "A module to provide a better and easier way for GitHub Actions to communicate with the runner, and the toolkit for developing GitHub Actions.",
		keywords: [
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
	outputDirectory: "dist/npm-npm",
	outputDirectoryPreEmpty: true,
	shims: {
		blob: false,
		crypto: false,
		deno: false,
		prompts: false,
		timers: false,
		undici: false,
		weakRef: false,
		webSocket: false
	}
});
