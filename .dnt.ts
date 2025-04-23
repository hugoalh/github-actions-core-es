import {
	getMetadataFromConfig,
	invokeDenoNodeJSTransformer
} from "DNT";
const configJSR = await getMetadataFromConfig("jsr.jsonc");
await invokeDenoNodeJSTransformer({
	copyAssets: [
		"LICENSE.md",
		"README.md"
	],
	entrypoints: configJSR.getExports(),
	fixInjectedImports: true,
	generateDeclarationMap: true,
	mappings: {
		"https://raw.githubusercontent.com/hugoalh/env-es/v0.2.1/env.ts": {
			name: "@hugoalh/env",
			version: "^0.2.1",
			subPath: "env"
		},
		"https://raw.githubusercontent.com/hugoalh/env-es/v0.2.1/path.ts": {
			name: "@hugoalh/env",
			version: "^0.2.1",
			subPath: "path"
		},
		"https://raw.githubusercontent.com/hugoalh/eol-es/v0.3.1/eol.ts": {
			name: "@hugoalh/eol",
			version: "^0.3.1",
			subPath: "eol"
		},
		"https://raw.githubusercontent.com/hugoalh/is-json-es/v1.0.4/mod.ts": {
			name: "@hugoalh/is-json",
			version: "^1.0.4"
		},
		"https://raw.githubusercontent.com/hugoalh/is-string-singleline-es/v1.0.4/mod.ts": {
			name: "@hugoalh/is-string-singleline",
			version: "^1.0.4"
		}
	},
	metadata: {
		name: configJSR.getName(),
		version: configJSR.getVersion(),
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
		scripts: {
		},
		engines: {
			node: ">=16.13.0"
		},
		private: false,
		publishConfig: {
			access: "public"
		}
	},
	outputDirectory: "dist/npm",
	outputDirectoryPreEmpty: true
});
