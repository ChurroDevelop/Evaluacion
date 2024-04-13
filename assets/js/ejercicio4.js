/**
 * Diseñar un programa que me permita ingresar n cantidad de palabras por
teclado, al finalizar la carga, se debe enviar como a una función expresada
como único parámetro rest donde nos responderá cual de las palabras
ingresadas es mayor a todas las anteriores.
 */
import { llenar, orden } from "../modules/export4.js";

let cantidad = parseInt(prompt("Ingrese la cantidad de palabras"));
let rellenar = llenar(cantidad);
let ordenar = orden(...rellenar);