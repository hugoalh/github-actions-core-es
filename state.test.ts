import { deepStrictEqual } from "node:assert";
import {
	getState,
	getStateBigInt,
	getStateBoolean,
	getStateNumber
} from "./state.ts";
Deno.test("BigInt 1", {
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("STATE_TEST", "9876543210123456789");
	deepStrictEqual(getStateBigInt("test"), 9876543210123456789n);
});
Deno.test("Boolean 1", {
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("STATE_TEST", "false");
	deepStrictEqual(getStateBoolean("test"), false);
});
Deno.test("Number 1", {
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("STATE_TEST", "9876543210.9");
	deepStrictEqual(getStateNumber("test"), 9876543210.9);
});
Deno.test("String 1", {
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("STATE_TEST", "qwerty");
	deepStrictEqual(getState("test"), "qwerty");
});
