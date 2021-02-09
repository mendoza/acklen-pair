class Calculator {
    Sum(numbers) {
        if (numbers.length === 0) {
            return 0;
        }

        let delimiter = undefined;
        if (numbers.includes("//")) {
            numbers = numbers.replace("//", "");
            delimiter = numbers[0];
        }

        const listOfNumbers = numbers.split("").map(char =>[delimiter, ",", "\n"].includes(char) ? "," : char).join("").split(",").map(n => Number(n));

        const negatives = listOfNumbers.filter((number) => number < 0);

        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(", ")}`)
        }

        const sumOfAll = listOfNumbers.reduce((pv, cv) => pv + cv, 0);
        return sumOfAll;
    }
}

module.exports = Calculator;