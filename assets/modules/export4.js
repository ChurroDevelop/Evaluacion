/**
 * Diseñar un programa que me permita ingresar n cantidad de palabras por
teclado, al finalizar la carga, se debe enviar como a una función expresada
como único parámetro rest donde nos responderá cual de las palabras
ingresadas es mayor a todas las anteriores.
 */

export let llenar = (n) => {
    let x = [];
    console.warn(`Vas a llenar el array que contiene ${n} elementos`)
    for (let i = 0; i < n; i++) {
        let palabra = prompt(`Ingrese la palabra ${i + 1}`);
        x.push(palabra);
    }
    console.log(`Las palabras ingresadas fueron \n ${x}`);
    return x;
}

export let orden = function(...palabras){
    console.table(palabras.sort());
}