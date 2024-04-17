/**
 * Diseñar un modulo llamado calculadora, en este módulo debe exportar una
clase con los siguientes metodos:

a. Suma
b. Resta
c. Multiplicación
d. División

Al momento de realizar cada operación el sistema debe validar que no se
presenten errores, si al momento de su ejecución se presenta algún error, el
sistema debe enviar un mensaje personalizado indicando el tipo de error
para que el usuario lo solucione y continue realizando los cálculos básicos
de las matemáticas.
 */

import { calculadora } from "../modules/export5.js";

let proceso = parseInt(prompt("Ingrese la operacion que quiere realizar \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir"));
let operaciones = new calculadora();
let a = parseFloat(prompt("Ingrese el valor del numero 1"));
let b = parseFloat(prompt("Ingrese el valor del numero 2"));

if (proceso === 1) {
    console.log(`El resultado de la Suma es: ${operaciones.suma(a, b)}`);
}
else if (proceso === 2) {
    console.log(`El resultado de la Resta es: ${operaciones.resta(a, b)}`);
}
else if (proceso === 3) {
    console.log(`El resultado de la Multiplicacion es: ${operaciones.mult(a, b)}`);
}
else if (proceso === 4) {
    console.log(`El resultado de la Division es: ${operaciones.div(a, b)}`)
}