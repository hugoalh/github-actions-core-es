import { assertEquals } from "STD/assert/equals";
import { GitHubActionsStdOutCommand } from "./stdout.ts";
Deno.test("Custom 1", { permissions: "none" }, () => {
	assertEquals(new GitHubActionsStdOutCommand("test", { foo: "q\nw\ne\nr\nt\ny" }, "foo\nbar").toString(), "::test foo=q%0Aw%0Ae%0Ar%0At%0Ay::foo%0Abar");
});
