const input = require("readline-sync");

let teRadenGetal: number = 20;

let getal: number = -1;
do{
    getal = parseInt(input.question("Geef een getal tussen 0 en 30: "));

        if(getal < teRadenGetal){
            console.log("Tip: Hoger!");
         }
        else if (teRadenGetal < getal){
            console.log("Tip: Lager!");
        }
} while(getal != teRadenGetal);

console.log("Proficiat! Je hebt het juiste getal gevonden.")


export{};