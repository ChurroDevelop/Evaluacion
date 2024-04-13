/**
 * Diseñar un programa que permita validar el tipo de tarjeta de crédito que
registra el operador, para ello debemos tener en cuenta que las diferentes
tarjetas tienen diferentes nomenclaturas:

• American Express: 15 dígitos y empieza por (34 – 37)
• Diners Club: tiene 14 dígitos y empieza por (300 – 305 o 36 - 38)
• Discover: tiene 16 dígitos y empieza por (6011)
• Mastercard: tiene 16 dígitos y empieza por (51 – 55)
• Visa: tiene: 16 dígitos y empieza por (4)

El programa solo se debe permitir el ingreso de enteros positivos y máximo
16 caracteres, si el operador ingresa un carácter no permitido se debe
mostrar por pantalla el error y solicitar nuevamente el número de su tarjeta
de crédito.

Para este ejercicio se solicita trabajar con módulos, expresiones regulares y
condicionales. Si está permitido solicitar al operador el tipo de su tarjeta de
crédito
 */
import { exp1, exp2, exp3, exp4, exp5 } from "../modules/export1.js";
let tarjeta = parseInt(prompt("Ingrese el tipo de tarjeta \n 1. American Express \n 2. Diners Club \n 3. Discover \n 4. Mastercard \n 5. Visa"));
if (tarjeta === 1) {
    console.log("Has registrado American Express \n Recuerda que empieza por 34-35-36-37 \n 15 Caracteres")
    for(;true;){
        let numero = parseInt(prompt("Ingrese su numero de tarjeta American Express"));
        if (exp1.test(numero) === true) {
            console.log("Se ha verificado su tarjeta American Express");
            break;
        }
        else{
            console.error("No se a detectado la tarjeta, vuelva a intentarlo");
        }
    }
}
else if(tarjeta === 2){
    console.log("Has registrado Diners Club \n Recuera que empieza desde el 301 hasta el 305 o del 36 al 38 \n 14 Caracteres");
    for(;true;){
        let numero = parseInt(prompt("Ingrese el numero de su tarjeta Diners Club"));
        if (exp2.test(numero) === true) {
            console.log("Se ha validado su tarjeta Diners Club");
            break;
        }
        else{
            console.error("No se a detectado la tarjeta, vuelva a intentarlo");
        }
    }
}
else if (tarjeta === 3) {
    console.log("Has registrado Discover \n Recuerda que empieza con 6011 \n 16 Caracteres");
    for(;true;){
        let numero = parseInt(prompt("Ingrese el numero de su tarjeta Discover"));
        if (exp3.test(numero) === true) {
            console.log("Se a validado su tarjeta Discover");
            break;
        }
        else{
            console.error("No se a detectado la tarjeta, vuelva a intentarlo");
        }
    }
}
else if (tarjeta === 4) {
    console.log("Has registrado Mastercard \n Recuerda que empieza desde el 51 hasta el 55 \n 16 Caracteres");
    for(;true;){
        let numero = parseInt(prompt("Ingrese el numero de su tarjeta Mastercard"));
        if (exp4.test(numero) === true) {
            console.log("Se ha validado su tarjeta Mastercard");
            break;
        }
        else{
            console.error("No se a detectado la tarjeta, vuelva a intentarlo");
        }
    }
}
else if (tarjeta === 5) {
    console.log("Has registrado Visa \n Recuerda que empieza con 4 \n 16 Caracteres");
    while(true){
        let numero = parseInt(prompt("Ingrese el numero de su tarjeta Visa"));
        if (exp5.test(numero) === true) {
            console.log("Se a validad su tarjeta Visa");
            break;
        }
        else{
            console.error("No se a detectado la tarjeta, vuelva a intentarlo");
        }
    }
}
