/* eslint-disable no-undef */
const sum = require('../src/index.js');

describe('it should add 1 + 2', () => {
    it("should add to 3", () => {
        expect(sum(1, 2)).toBe(3)
    });
    it("should add to 4", () => {
        expect(sum(1, -3)).toBe(4)
    })
});