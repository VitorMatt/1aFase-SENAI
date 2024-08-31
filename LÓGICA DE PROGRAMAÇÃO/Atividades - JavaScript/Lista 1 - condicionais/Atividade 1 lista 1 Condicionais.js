/*1) Crie um programa onde o usuário digite um número e informe se é positivo ou negativo.*/

let numeroDigitado

numeroDigitado = Number(prompt('Digite um número.'))

if (numeroDigitado>0){

    alert('O número é positivo!') 
} else if (numeroDigitado<0){

    alert('O número é negativo!')
} else {

    alert ('O número é 0!')
}