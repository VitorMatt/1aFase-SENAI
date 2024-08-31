// 8) Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. (Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações).

let numeros = [];
let somaMultiplicacoes = 0;
let numero;

numero = Number(prompt('Digite um número.'));
numeros.push(numero);

let numeroMaior = numero;

for (i=0; i<4; i++){

    numero = Number(prompt('Digite um número.'));
    numeros.push(numero);
    
    if (numero>numeroMaior){

        numeroMaior = numero;
    }
}

for (i=0; i<numeros.length; i++){

    if (numeros[i]!=numeroMaior){

        somaMultiplicacoes += (numeros[i] * numeroMaior);
    }
}

console.log(somaMultiplicacoes);