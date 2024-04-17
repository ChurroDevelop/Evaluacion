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
export function sumar(...n){
    console.log("Has entrado a la operacion de sumar");
    let suma = 0;
    n.forEach((item) =>{
        suma += item
    })
    console.log(`El resultado de la suma es de ${suma} \n Numeros ${n}`)
}

// export function numerosPrimos(...n){
//     console.log("Has entrado a la operacion de contar numeros primos");
//     let primos = [];
//     for (let i = 0; i < n.length; i++) {
//         let primoInicio = true;
//         let div = 2;
//         let numero = n[i];
//         while (div < numero) {
//             if (numero % div === 0) {
//                 primoInicio = false
//                 break;
//             }
//             div++;
//         }
//         if (primoInicio) {
//             primos.push(numero);
//         }
//     }
//     console.log(`los numeros primos que se encontraron fueron \n Numeros Primos: ${primos}`);
// }

export function numerosPrimos(...n){
    console.log("Has entrado a la operacion de contar numeros primos");
    let primos = [];
    for (let i = 0; i < n.length; i++) {
        let primoInicio = true;
        let div = 2;
        let numero = n[i];
        while (div < numero) {
            if (numero % div === 0) {
                primoInicio = false
                break;
            }
            div++;
        }
        if (primoInicio && numero !== 1) {
            primos.push(numero);
        }
    }
    console.log(`los numeros primos que se encontraron fueron \n Numeros Primos: ${primos}`);
}

export function numerosPares(...n){
    console.log("Has entrado a la operacion de contar numeros pares");
    n.forEach((item) =>{
        if (item % 2 === 0) {
            console.log(`El numero ${item} es par`)
        }
        else{
            console.log(`El numero ${item} es impar`);
        }
    })
}

export function promedioPrimos(...n){
    console.log("Has entrado a la operacion del promedio de numeros primos");
    let primos = [];
    let suma = 0;
    let contPrimos = 0;
    for (let i = 0; i < n.length; i++) {
        let primoInicio = true;
        let div = 2;
        let numero = n[i];
        while (div < numero) {
            if (numero % div === 0) {
                primoInicio = false
                break;
            }
            div++;
        }
        if (primoInicio) {
            suma += numero;
            contPrimos++;
            primos.push(numero);
        }
    }
    let promedio = suma / contPrimos;
    console.log(`Se encontraron ${contPrimos} \n Los numeros son ${primos} \n La suma es de esos numeros es: ${suma} \n Su promedio es: ${promedio}`);
}

export function PromedioPares(...n){
    console.log("Has entrado a la operacion del promedio de numeros pares");
    let suma = 0;
    let contPrimos = 0;
    n.forEach((item) =>{
        if (item % 2 === 0) {
            console.log(`Se agrego el numero ${item} a la suma por ser par`);
            suma += item;
            contPrimos++;
        }
        else{
            console.log(`No se agrego el numero ${item} por ser impar`);
        }
    })
    let promedio = suma / contPrimos;
    console.log(`El total de numeros pares encontrados fueron ${contPrimos} \n La suma es de ${suma} \n El promedio es: ${promedio}`);
}