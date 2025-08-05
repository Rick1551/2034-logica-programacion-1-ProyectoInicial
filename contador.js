let contadorUp = 0;
let contadorDown = 10;

function contarProgresivo() {
    contadorUp++;
    console.log("Contador: " + contadorUp);
}

function contarRegresivo() {
    contadorDown--;
    console.log("Contador: " + contadorDown);
}

function contador() {
    while (contadorUp < 10 && contadorDown > 0) {
    alert("Contador progresivo: " + contadorUp + "\nContador regresivo: " + contadorDown);
    contarProgresivo();
    contarRegresivo();
}
}


