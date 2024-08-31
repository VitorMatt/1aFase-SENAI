//1) Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido.

let numeroDigitado = Number(prompt('Digite um número.'))
let multiplicadorTabuaba = 1
let resultado

while (multiplicadorTabuaba<=10){

    resultado = numeroDigitado * multiplicadorTabuaba

    alert(`${numeroDigitado} x ${multiplicadorTabuaba} = ${resultado}`)
    multiplicadorTabuaba++
}
