// 2) Cria um programa onde o usuário digite 5 números inteiros. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.

let numerosInt = [];
let numerosImparesDigitados = [];
let somaNumerosImpares = 0;
let numeroAdicionado;

for (i=0; i<5; i++){

    numeroAdicionado = Number(prompt(`Digite o número ${i + 1}\n do vetor`));
    numerosInt.push(numeroAdicionado);
}

for (i=0; i<5; i++){

    if (numerosInt[i]%2!=0){

        numerosImparesDigitados.push(numerosInt[i]);
    }
}

for (i=0; i<numerosImparesDigitados.length; i++){

    somaNumerosImpares += Number(numerosImparesDigitados[i]);
}

console.log(`Vetor: ${numerosInt}\nSoma dos números ímpares: ${somaNumerosImpares}`);