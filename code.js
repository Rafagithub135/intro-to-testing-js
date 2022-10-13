// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(str) {
    if (typeof str !== "string" || str === "" || str === "5") {
        return "Hello, World!";
    } else
        return `Hello, ${str}!`;
}

function isFive(num) {
    if (num === 5) {
        return true;
    }
    return typeof num === 'boolean';
}

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else
    return false;
}

function isVowel(str) {
    if (str === "a" ||
        str === "e" ||
    str === "i" ||
    str === "o" ||
    str === "u" ||
    str === "A" ||
        str === "E" ||
    str === "I" ||
    str === "O" ||
        str === "U") {
        return true;
    }
    return false;
}