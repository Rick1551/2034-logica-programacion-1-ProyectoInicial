//Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'intento';
//Bucle
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

    console.log("El numero que has introducido es: " + numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        alert(`Felicidades, has acertado el numero secreto: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if(numeroUsuario < numeroSecreto) {
            alert("El numero secreto es mayor que el que has introducido");
        } else {
            alert("El numero secreto es menor que el que has introducido");
        }
        //Incremento de intentos
        intentos++;
        palabraVeces = 'intentos';
    }

} 