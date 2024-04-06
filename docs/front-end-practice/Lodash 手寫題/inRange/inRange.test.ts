import { describe, expect, test } from "@jest/globals";
import inRange from "./inRange";

describe("inRange", () => {
  test("returns true when value is within the range", () => {
    expect(inRange(3, 2, 4)).toBe(true);
    expect(inRange(4, 8)).toBe(true);
  });

  test("returns false when value is outside the range", () => {
    expect(inRange(4, 2)).toBe(false);
    expect(inRange(2, 2)).toBe(false);
  });

  test("handles negative ranges correctly", () => {
    expect(inRange(-3, -2, -4)).toBe(true);
    expect(inRange(-4, -2)).toBe(false);
    expect(inRange(-2, -2)).toBe(true);
    expect(inRange(-1, -2)).toBe(true);
  });

  test("handles decimal values correctly", () => {
    expect(inRange(1.2, 2)).toBe(true);
    expect(inRange(1.2, 0.5, 1)).toBe(false);
  });
});
