/**
 * Diseñar un programa que me solicite por teclado n cantidad de números, al
finalizar la carga de los números el programa debe enviar los números a
una función expresada como único parámetro rest donde serán ordenados
de mayor a menor para luego mostrarlos en una tabla por consola.
 */

export let llenar = (n) => {
    let x = []
    console.warn(`Vas a llenar tu arreglo que tendra ${n} elementos`);
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese valor del elementor ${i + 1}`));
        x.push(num);
    }
    console.log(`Esta es tu array ${x}`);
    return x;
}

export let ordenar = function(...numeros){
    console.table(numeros.sort(function(a,b){return b - a}));
}
