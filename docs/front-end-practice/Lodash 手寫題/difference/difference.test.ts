import { describe, expect, test } from "@jest/globals";
import difference from "./difference";

describe("difference", () => {
  test("returns elements only present in the first array", () => {
    expect(difference([], [])).toEqual([]);
    expect(difference([1, 1, 2, 3], [2, 3])).toEqual([1, 1]);
    expect(difference([1, 2, 3], [1, 2, 3, 4])).toEqual([]);
    expect(difference([4, 3, 2, 1], [1, 2, 3])).toEqual([4]);
  });
});
