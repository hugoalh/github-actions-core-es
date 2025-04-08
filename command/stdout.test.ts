import { deepStrictEqual } from "node:assert/strict";
import { GitHubActionsStdOutCommand } from "./stdout.ts";
Deno.test("Custom 1", { permissions: "none" }, () => {
	deepStrictEqual(new GitHubActionsStdOutCommand("test", { foo: "q\nw\ne\nr\nt\ny" }, "foo\nbar").toString(), "::test foo=q%0Aw%0Ae%0Ar%0At%0Ay::foo%0Abar");
});
