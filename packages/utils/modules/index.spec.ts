import { defaultEquals } from "./index";

it("test defaultEquals", () => {
  expect(defaultEquals("test", "test")).toBe(true);
  expect(defaultEquals([], [])).toBe(false);
});
