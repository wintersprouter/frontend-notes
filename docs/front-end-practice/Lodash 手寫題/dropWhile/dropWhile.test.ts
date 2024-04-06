import { describe, expect, test } from "@jest/globals";
import dropWhile from "./dropWhile";

describe("dropWhile", () => {
  test("drops elements while predicate is true", () => {
    const result = dropWhile([1, 2, 3, 4, 5, 6], (value) => value < 4);
    expect(result).toEqual([4, 5, 6]);
  });

  test("returns empty array if all elements satisfy the predicate", () => {
    const result = dropWhile([0, 1, 2], (value) => value < 5);
    expect(result).toEqual([]);
  });

  test("stops dropping when predicate is false", () => {
    const result = dropWhile([0, 6, 1, 2], (value) => value < 5);
    expect(result).toEqual([6, 1, 2]);
  });

  test("does not mutate the original array", () => {
    const original = [1, 2, 3, 4, 5, 6];
    const copy = [...original];
    dropWhile(original, (value) => value < 4);
    expect(original).toEqual(copy);
  });
});
