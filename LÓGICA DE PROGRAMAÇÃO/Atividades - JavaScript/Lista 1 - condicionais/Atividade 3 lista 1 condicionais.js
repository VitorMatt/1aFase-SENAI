/*3) Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.*/

let numeroUm
let numeroDois

numeroUm = Number(prompt('Digite o primeiro número.'))

numeroDois = Number(prompt('Digite o segundo número.'))

if (numeroUm>numeroDois){

    alert(numeroUm + ' é o número maior!')
} else if (numeroDois>numeroUm){

    alert(numeroDois + ' é o número maior!')
} else {

    alert ('Os números são iguais!')
}