// FILEPATH: /Users/ashely/frontend-notes/docs/front-end-practice/Lodash 手寫題/06-dropRightWhile/dropRightWhile.test.ts
import { describe, expect, it } from "@jest/globals";
import dropRightWhile from "./dropRightWhile";

describe("dropRightWhile", () => {
  it("should drop elements from the end of the array until the predicate returns false", () => {
    const result = dropRightWhile(
      ["hello", "world", "today", "isGood"],
      (value) => value.length > 5,
    );
    expect(result).toEqual(["hello", "world", "today"]);
  });

  it("should drop objects from the end of the array until the predicate returns false", () => {
    const result = dropRightWhile(
      [
        { name: "Alice", age: 25 },
        { name: "Charlie", age: 20 },
        { name: "Bob", age: 30 },
      ],
      (obj) => obj.age > 25,
    );
    expect(result).toEqual([
      { name: "Alice", age: 25 },
      { name: "Charlie", age: 20 },
    ]);
  });

  it("should return the original array if no elements need to be dropped", () => {
    const result = dropRightWhile(
      [10, 20, 30, 40, 50, 10],
      (value) => value !== 10,
    );
    expect(result).toEqual([10, 20, 30, 40, 50, 10]);
  });

  it("should return an empty array if all elements need to be dropped", () => {
    const result = dropRightWhile([1], (value) => value > 0);
    expect(result).toEqual([]);
  });
});
