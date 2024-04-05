import { describe, expect, test } from "@jest/globals";
import clamp from "./clamp";
describe("clamp", () => {
  test("should return the input number when it is within the specified range", () => {
    expect(clamp(7, 0, 9)).toBe(7);
    expect(clamp(3, -5, 5)).toBe(3);
    expect(clamp(-2, -10, 10)).toBe(-2);
  });

  test("should return the lower bound when the input number is less than the lower bound", () => {
    expect(clamp(-5, 0, 9)).toBe(0);
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(-15, -10, 10)).toBe(-10);
  });

  test("should return the upper bound when the input number is greater than the upper bound", () => {
    expect(clamp(10, 0, 9)).toBe(9);
    expect(clamp(6, -5, 5)).toBe(5);
    expect(clamp(15, -10, 10)).toBe(10);
  });
});
