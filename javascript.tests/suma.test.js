import { suma } from "../javascript/suma"
import { test, expect } from "vitest";

test("suma 1 + 2 y debe de dar 3", () => {
    expect(suma(1,2)).toBe(3)
});