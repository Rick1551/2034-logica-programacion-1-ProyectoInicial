function final() {
    nombre = "Ricardo Saldaña";

    console.log("Bienvenido al juego final");
    console.log("!Hola, " + nombre + "!");
    alert("Hola, " + nombre + "! Bienvenido al juego final.");

    let lenguaje = prompt("¿Cual es el lenguaje de programación que estás aprendiendo?");
    console.log("Estás aprendiendo " + lenguaje + ".");

    valor1 = 5;
    valor2 = 10;
    resultado = valor1 + valor2;
    console.log("El resultado de la suma es: " + resultado);

    let edad = parseInt(prompt("Ingresa tu edad:"));
    edad >= 18 ? console.log("Eres mayor de edad.") : console.log("Eres menor de edad.");

    let numero = parseInt(prompt("Ingresa un número:"));
    if(numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }

    console.log("Fin del juego final");
}

final();