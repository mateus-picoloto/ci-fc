const { sum, sub, mult, div, mod } = require("../src/arithmetic");

test("sum 2 plus 2 equal 4", () => {
    expect(sum(2, 2)).toBe(4);
});


test("sub 2 subtract 2 equal 0", () => {
    expect(sub(2, 2)).toBe(0);
});

test("mult 2 times 2 equal 4", () => {
    expect(mult(2, 2)).toBe(4);
});

test("div 2 divided 2 equal 1", () => {
    expect(div(2, 2)).toBe(1);
});


test("div 2 divided 0 throw error", () => {
    expect(() => div(2, 0)).toThrow("Forbidden division by 0");
});

test("mod 5 divided 2 remainder 1", () => {
    expect(mod(5, 2)).toBe(1);
});

test("mod 2 divided 0 throw error", () => {
    expect(() => mod(2, 0)).toThrow("Forbidden division by 0");
});