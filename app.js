//Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");


console.log("El numero que has introducido es: " + numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    console.log(`Felicidades, has acertado el numero secreto: ${numeroSecreto}`);
} else {
    console.log("Lo siento, el numero secreto es otro");
}
