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
		"jsr:@hugoalh/env@^0.4.0/general": {
			name: "@hugoalh/env",
			version: "^0.4.0",
			subPath: "general"
		},
		"jsr:@hugoalh/eol@^0.5.1/eol": {
			name: "@hugoalh/eol",
			version: "^0.5.1",
			subPath: "eol"
		},
		"jsr:@hugoalh/eol@^0.5.1/normalize": {
			name: "@hugoalh/eol",
			version: "^0.5.1",
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
		homepage: "https://codeberg.org/hugoalh/github-actions-core-es#readme",
		bugs: {
			url: "https://codeberg.org/hugoalh/github-actions-core-es/issues"
		},
		license: "MIT",
		author: "hugoalh",
		repository: {
			type: "git",
			url: "git+https://codeberg.org/hugoalh/github-actions-core-es.git"
		},
		private: false,
		publishConfig: {
			access: "public"
		}
	},
	outputDirectory: "dist/npm-codeberg",
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
