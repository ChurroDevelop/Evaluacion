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

export class calculadora{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    suma(num1,num2){
        return num1 + num2;
    }
    resta(num1,num2){
        return num1 - num2;
    }
    mult(num1,num2){
        return num1 * num2;
    }
    div(num1,num2){
        try {
            if (num1 === 0 || num2 === 0) {
                throw new Error("No se puede hacer la division ya que contiene un 0");
            }
            else{
                let division = num1 / num2;
                return division;
            }
        } catch (error) {
            console.error(error);
        }
    }
}