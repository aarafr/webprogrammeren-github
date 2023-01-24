const input = require("readline-sync");

let firstName = input.question("Wat is uw voornaam? ");
let lastName = input.question("Wat is uw achternaam? ");
let age = input.question("Wat is je leeftijd? ");

console.log(`U bent ${firstName} ${lastName} en u bent ${age} jaar oud`);

export{};