import { describe, expect, test } from "@jest/globals";
import compact from "./compact";

describe("compact", () => {
  test("removes all falsy values from the array", () => {
    expect(compact([0, 1, false, 2, "", 3, "hello"])).toEqual([
      1,
      2,
      3,
      "hello",
    ]);
    expect(compact([null, undefined, NaN, " "])).toEqual([" "]);
    expect(compact([{ name: "Alice" }, null, { age: 30 }, undefined])).toEqual([
      { name: "Alice" },
      { age: 30 },
    ]);
  });

  test("does not remove non-falsy values", () => {
    expect(compact([1, 2, 3])).toEqual([1, 2, 3]);
    expect(compact(["hello", "world"])).toEqual(["hello", "world"]);
    expect(compact([{ name: "Alice" }, { age: 30 }])).toEqual([
      { name: "Alice" },
      { age: 30 },
    ]);
  });
});
