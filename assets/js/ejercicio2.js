/**
 * Diseñar un programa que me solicite ingresar n cantidad de números por
teclado, luego de ingresar los números el programa me debe solicitar que
operación deseo realizar:

a. Sumar los números
b. Contar los números primos
c. Contar los números pares
d. Calcular el promedio de los números primos
e. Calcular el promedio de números pares

Para este ejercicio se solicita trabajar con módulos.
 */
import { sumar, numerosPrimos, numerosPares, promedioPrimos, PromedioPares } from "../modules/export2.js";

let cantidad = parseInt(prompt("Ingrese la cantidad de numeros"));
let operación = parseInt(prompt("Que operacion desea realizar \n 1. Suma \n 2. Contar numeros primos \n 3. Contar numeros pares \n 4. Promedio de numeros primos \n 5. Promedio de numeros pares"));
let numeros = [];

for (let i = 0; i < cantidad; i++) {
    let n = parseInt(prompt(`Ingrese el numero ${i+1}`));
    numeros.push(n)
}

if (operación === 1) {
    console.warn("Has elejido la operacion de sumar");
    sumar(...numeros);
}
else if (operación === 2) {
    console.warn("Has elejido la operacion de contar numero primos");
    numerosPrimos(...numeros);
}
else if (operación === 3) {
    console.warn("Has elejido la operacion de contar numeros pares");
    numerosPares(...numeros);
}
else if (operación === 4) {
    console.warn("Has elejdio la operacion de calcular el promedio de numeros primos");
    promedioPrimos(...numeros)
}
else if (operación === 5) {
    console.warn("Has elejido la operacion de calcula el promedio de numeros pares");
    PromedioPares(...numeros);
}