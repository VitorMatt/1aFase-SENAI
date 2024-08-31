// 6) Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. 
// Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem 
// “Um dos números digitados era ímpar”.

let numeroDigitado
let mediaNumeros
let somaNumeros = 0
let count = 0
const quantidadeNumeros = 5

do {
    numeroDigitado = Number(prompt('Digite um número'))

    somaNumeros = somaNumeros + numeroDigitado
    count++
} while (count<5 && numeroDigitado%2==0);

if (somaNumeros%2!=0){

alert('Um dos números digitados era ímpar')
} else {

    mediaNumeros = somaNumeros / quantidadeNumeros
    alert('A média dos números digitados é ' + mediaNumeros)
}