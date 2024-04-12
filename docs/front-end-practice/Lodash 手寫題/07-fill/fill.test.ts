import { describe, expect, test } from "@jest/globals";
import fill from "./fill"; // adjust this to your actual file path

describe("fill", () => {
  test("fills all elements with the provided value when start and end are not provided", () => {
    expect(fill([1, 2, 3], "_")).toEqual(["_", "_", "_"]);
  });

  test("does not fill any elements when start is equal to or greater than the array length", () => {
    expect(fill([1, 2], "*", 2, 3)).toEqual([1, 2]);
  });

  test("fills elements from start to end with the provided value", () => {
    expect(fill([1, 2, 3, 4, 5], "_", 1, -1)).toEqual([1, "_", "_", "_", 5]);
  });

  test("fills remaining elements with the provided value when end is not provided", () => {
    expect(fill([1, 2, 3], "_", 1)).toEqual([1, "_", "_"]);
  });
});
