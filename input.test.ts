import { deepStrictEqual } from "node:assert";
import {
	getInput,
	getInputBigInt,
	getInputBoolean,
	getInputNumber
} from "./input.ts";
Deno.test("BigInt 1", {
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("INPUT_TEST", "9876543210123456789");
	deepStrictEqual(getInputBigInt("test"), 9876543210123456789n);
});
Deno.test("Boolean 1", {
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("INPUT_TEST", "false");
	deepStrictEqual(getInputBoolean("test"), false);
});
Deno.test("Number 1", {
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("INPUT_TEST", "9876543210.9");
	deepStrictEqual(getInputNumber("test"), 9876543210.9);
});
Deno.test("String 1", {
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("INPUT_TEST", "qwerty");
	deepStrictEqual(getInput("test"), "qwerty");
});
