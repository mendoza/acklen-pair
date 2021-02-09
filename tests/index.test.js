/* eslint-disable no-undef */
const calc = require("../src/index");

describe('it should add 1 + 2', () => {
    const calculator = new calc();
    it("Empty string should return 0", () => {
        expect(calculator.Sum("")).toBe(0);
    });

    it("When input is one number should return the same number", () => {
        expect(calculator.Sum("3")).toBe(3);
    })

    it("When input is two numbers should return the sum of the numbers", () => {
        expect(calculator.Sum("1,3")).toBe(4);
    })

    it("When input is any amount of numbers should return the sum of all those numbers", () => {
        expect(calculator.Sum("1,2,3,4")).toBe(10);
    })

    it("When input has diferent delimeters for the numbers it should return the sum of all those numbers", () => {
        expect(calculator.Sum("1,2\n3,4")).toBe(10);
    })

    it("When using a custom character as delimiter it should return the sum of all numbers", () => {
        expect(calculator.Sum("//.\n1.2.3")).toBe(6);
    })

    it("When input includes a negative number it should return a exception showing the negative number", () => {
        expect(() => { calculator.Sum("//.\n1.-2.3") }).toThrow("negatives not allowed: -2");
    })

    it("When input includes several negative numbers it should return a exception showing all negatives", () => {
        expect(() => { calculator.Sum("//.\n1.-2.-3") }).toThrow("negatives not allowed: -2, -3");
    })
});

/*
1. Given the user input is empty when calculating the sum then it should return zero.
2. Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)
3. Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)
4. Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)
5. Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)
6. Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)
7. Given the user input contains one negative number when calculating the sum then it should throw an exception "negatives not allowed: x" (where x is the negative number).
8. Given the user input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception "negatives not allowed: x, y, z" (where x, y, z are only the negative numbers).
9. Given the user input contains numbers larger than 1000 when calculating the sum it should only sum the numbers less than 1001. (example 2 + 1001 = 2)
10. Given the user input is multiple numbers with a custom multi-character delimiter when calculating the sum then it should return the sum of all the numbers. (example: “//[***]\n1***2***3” should return 6)
11. Given the user input is multiple numbers with multiple custom delimiters when calculating the sum then it should return the sum of all the numbers. (example “//[*][%]\n1*2%3” should return 6)
*/