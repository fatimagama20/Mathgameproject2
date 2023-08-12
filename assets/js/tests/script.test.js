/**
 * @jest-environment jsdom
 */

const { describe } = require("yargs");
const { startGame } = require("../script");
const { test } = require("picomatch");
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html","utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("StartGame works correctly", () => {
    beforeAll(() => {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        product = num1 * num2;
        document.getElementById("question").innerHTML = num1 + '&times;' + num2;
        startGame();
    });
    test("Should set num1 to random number", () => {
        expect(num1).toBe(Math.floor(Math.random() * 10) + 1);
    });
    test("Should set num2 to random number", () => {
        expect(num2).toBe(Math.floor(Math.random() * 10) + 1);
    });
    test("Should set product equal to num1 * num2", () => {
        expect(product).toBe(num1 * num2);
    });
    test("Should set question elemetn to num1 + '&times;' + num2", () => {
        expect(document.getElementById("question").innerHTML).toBe(num1 + '&times;' + num2);
    });
});
