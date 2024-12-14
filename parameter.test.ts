import { assertEquals } from "STD/assert/equals";
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
	assertEquals(getInputBigInt("test"), 9876543210123456789n);
});
Deno.test("Input Boolean", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("INPUT_TEST", "false");
	assertEquals(getInputBoolean("test"), false);
});
Deno.test("Input Number", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("INPUT_TEST", "9876543210.9");
	assertEquals(getInputNumber("test"), 9876543210.9);
});
Deno.test("Input String", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("INPUT_TEST", "qwerty");
	assertEquals(getInput("test"), "qwerty");
});
Deno.test("State BigInt", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("STATE_TEST", "9876543210123456789");
	assertEquals(getStateBigInt("test"), 9876543210123456789n);
});
Deno.test("State Boolean", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("STATE_TEST", "false");
	assertEquals(getStateBoolean("test"), false);
});
Deno.test("State Number", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("STATE_TEST", "9876543210.9");
	assertEquals(getStateNumber("test"), 9876543210.9);
});
Deno.test("State String", {
	ignore,
	permissions: {
		env: true
	}
}, () => {
	Deno.env.set("STATE_TEST", "qwerty");
	assertEquals(getState("test"), "qwerty");
});
