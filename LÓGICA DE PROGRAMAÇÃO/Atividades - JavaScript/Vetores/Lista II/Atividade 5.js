// 5) Criar um programa que gere um vetor com 10 números inteiros aleatórios entre 0 e 20. Mostre o vetor na tela. (DESAFIO: O vetor não pode conter números repetidos)

let numerosAleatorios = [];
let numero;

numero = Math.floor(Math.random() * 20);

for (i=0; i<9; i++){

    numero = Math.floor(Math.random() * 20);

    if (numerosAleatorios.includes(numero)){

        if (i>0){

            i--;
        }
    } else {

        numerosAleatorios.push(numero);
    }
}

console.log(numerosAleatorios);