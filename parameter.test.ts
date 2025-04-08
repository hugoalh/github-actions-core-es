import { deepStrictEqual } from "node:assert/strict";
import {
	getInput,
	getInputBigInt,
	getInputBoolean,
	getInputNumber,
	getState,
	getStateBigInt,
	getStateBoolean,
	getStateNumber
} from "./parameter.ts";
const ignore = !(
	Deno.args.includes("--force") ||
	Deno.env.get("GITHUB_ACTIONS") === "true"
);
Deno.test("Input BigInt", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("INPUT_TEST", "9876543210123456789");
	deepStrictEqual(getInputBigInt("test"), 9876543210123456789n);
});
Deno.test("Input Boolean", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("INPUT_TEST", "false");
	deepStrictEqual(getInputBoolean("test"), false);
});
Deno.test("Input Number", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("INPUT_TEST", "9876543210.9");
	deepStrictEqual(getInputNumber("test"), 9876543210.9);
});
Deno.test("Input String", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("INPUT_TEST", "qwerty");
	deepStrictEqual(getInput("test"), "qwerty");
});
Deno.test("State BigInt", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("STATE_TEST", "9876543210123456789");
	deepStrictEqual(getStateBigInt("test"), 9876543210123456789n);
});
Deno.test("State Boolean", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("STATE_TEST", "false");
	deepStrictEqual(getStateBoolean("test"), false);
});
Deno.test("State Number", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("STATE_TEST", "9876543210.9");
	deepStrictEqual(getStateNumber("test"), 9876543210.9);
});
Deno.test("State String", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("STATE_TEST", "qwerty");
	deepStrictEqual(getState("test"), "qwerty");
});
