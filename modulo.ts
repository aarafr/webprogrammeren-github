const input = require("readline-sync");

let x = parseInt(input.question("Geef een getal aan: "));
let y: number = 2;

let result = (x%y);

// Andere mogelijkheid is result != 1) // 
if(result == 0){
    console.log("Het is een even getal")
}
else{
    console.log("Het is een oneven getal");
}

export{};