var piedra = 1;
var papel = 2;
var tijera = 3;


function game(a, b) {
    if (a === 1 && b === 1) {
        console.log("Empate");
    } else if (a === 1 && b === 2) {
        console.log("Gana jugador B");
    } else if (a === 1 && b === 3) {
        console.log("Gana jugador A");
    } else if (a === 2 && b === 2) {
        console.log("Empate");
    } else if (a === 2 && b === 1) {
        console.log("Gana jugador A");
    } else if (a === 2 && b === 3) {
        console.log("Gana jugador B");
    } else if (a === 3 && b === 3) {
        console.log("Empate");
    } else if (a === 3 && b === 1) {
        console.log("Gana jugador B");
    } else if (a === 3 && b === 2) {
        console.log("Gana jugador A");
    }

}