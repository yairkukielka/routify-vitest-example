import { describe, it, expect, beforeAll } from "vitest";

/** @type { Router } */
let router;

beforeAll(async () => {
  await import("../../../.routify/routify-init.js");
  router = globalThis.__routify.routers[0];
  await router.ready();
  await router.activeRoute.get().rendered;
});

describe("my description", () => {
  it("simple test", () => {
    expect(5).toBe(5);
  });
});
