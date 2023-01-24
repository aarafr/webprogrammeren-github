const input = require("readline-sync");

let greeting: string = "Hello";
let randomName = input.question("What's your name?\n");

console.log(`${greeting}, ${randomName}`);