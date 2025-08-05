function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Variables
let numeroSecreto = getRandomNumber(1, 10);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'intento';
let maximosIntentos = 4;



//Bucle
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor:"));

    console.log("El numero que has introducido es: " + numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        alert(`Felicidades, has acertado el numero secreto: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}.`);
    } else {
        if(numeroUsuario < numeroSecreto) {
            alert("El numero secreto es mayor que el que has introducido");
        } else {
            alert("El numero secreto es menor que el que has introducido");
        }
        //Incremento de intentos
        intentos++;
        //palabraVeces = 'intentos';
        if (intentos >maximosIntentos){
            alert("Llegaste al numero maximo de intentos" + maximosIntentos + ". El numero secreto era: " + numeroSecreto);
            break;
        }
    }

} 