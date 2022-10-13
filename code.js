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