import { GitHubActionsStdOutCommand } from "./stdout.ts";
Deno.test("1", { permissions: "none" }, () => {
	new GitHubActionsStdOutCommand("test", { foo: "q\nw\ne\nr\nt\ny" }, "foo\nbar").test("::test foo=q%0Aw%0Ae%0Ar%0At%0Ay::foo%0Abar");
});
