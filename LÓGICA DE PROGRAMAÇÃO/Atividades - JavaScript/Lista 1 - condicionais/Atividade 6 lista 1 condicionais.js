/*6) Programar para que o usuário digite um número. Caso seja par, mostre "O número é par!", senão, mostre "O número é ímpar!"*/

let numerodigitado

numerodigitado = Number(prompt('Digite um número.'))

if (numerodigitado % 2 != 0){

    alert ('O número é ímpar!')
} else {

    alert ('O número é par!')
}