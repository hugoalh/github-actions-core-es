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
	//@ts-ignore Lazy type.
	entrypointsScript: manifest.exports,
	generateDeclarationMap: true,
	mappings: {
		"https://raw.githubusercontent.com/hugoalh/env-es/v0.4.0/general.ts": {
			name: "@hugoalh/env",
			version: "^0.4.0",
			subPath: "general"
		},
		"https://raw.githubusercontent.com/hugoalh/eol-es/v0.5.1/eol.ts": {
			name: "@hugoalh/eol",
			version: "^0.5.1",
			subPath: "eol"
		},
		"https://raw.githubusercontent.com/hugoalh/eol-es/v0.5.1/normalize.ts": {
			name: "@hugoalh/eol",
			version: "^0.5.1",
			subPath: "normalize"
		},
		"https://raw.githubusercontent.com/hugoalh/is-json-es/v1.0.6/mod.ts": {
			name: "@hugoalh/is-json",
			version: "^1.0.6"
		},
		"https://raw.githubusercontent.com/hugoalh/is-string-singleline-es/v1.0.6/mod.ts": {
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
	outputDirectoryPreEmpty: true
});
