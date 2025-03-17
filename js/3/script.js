//1
function sum50() {
    let sum = 0;
    let i = 1;

    while (i <= 50) {
        console.log(`Task 1 | added: ${i}, current sum: ${sum + i}`);
        sum += i;
        i++;
    }

    console.log(`Task 1 | overall: ${sum}`);
    return sum;
}

sum50();

//2
function calcFactorial() {
    const userInput = prompt("Task 2 | enter number:");
    const number = parseInt(userInput, 10);

    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    console.log(`Task 2 | factorial ${number} = ${result}`);
}

calcFactorial();

//3
function getMonth() {
    const userInput = prompt("Task 3 | enter month number (1-12):");
    const monthNumber = parseInt(userInput, 10);

    let monthName;

    switch (monthNumber) {
        case 1:
            monthName = "january";
            break;
        case 2:
            monthName = "february";
            break;
        case 3:
            monthName = "march";
            break;
        case 4:
            monthName = "april";
            break;
        case 5:
            monthName = "may";
            break;
        case 6:
            monthName = "june";
            break;
        case 7:
            monthName = "july";
            break;
        case 8:
            monthName = "august";
            break;
        case 9:
            monthName = "september";
            break;
        case 10:
            monthName = "october";
            break;
        case 11:
            monthName = "november";
            break;
        case 12:
            monthName = "december";
            break;
        default:
            monthName = "that month doesn't exist";
    }
    console.log(`Task 3 | ${monthName}`);
}

getMonth();

//4
function sumEven(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {             //перевірка на парність
            sum += numbers[i];
        }
    }
    return sum;
}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sumEven(numArr);
console.log(`Task 4 | sum of even numbers: ${result}`);

//5
function vowels() {
    const countVowels = (str) => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let count = 0;

        const lowerStr = str.toLowerCase();

        for (let char of lowerStr) {
            if (vowels.includes(char)) {
                count++;
            }
        }

        return count;
    };

    console.log(`Task 5 | "Laboratorna" has ${countVowels("Laboratorna")} vowels`);
    console.log(`Task 5 | "Web Technologies" has ${countVowels("Web Technologies")} vowels`);
    console.log(`Task 5 | "WebStorm" has ${countVowels("WebStorm")} vowels`);
}

vowels()

//6
function pow(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(`Task 6 | ${pow(2, 3)}`);
console.log(`Task 6 | ${pow(5, 2)}`);
