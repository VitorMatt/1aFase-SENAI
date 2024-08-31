// 3) Escreva um programa no qual o usuário digite dois vetores com 3 elementos cada (primeiro os elementos de um, depois os de outro) e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.

let vetorUm = [];
let vetorDois = [];
let vetorTres = [];
let numeroAdicionado;

for (i=0; i<3; i++){

    numeroAdicionado = Number(prompt(`Digite o número ${i + 1} número do vetor 1`));
    vetorUm.push(numeroAdicionado);
}

for (i=0; i<3; i++){

    numeroAdicionado = Number(prompt(`Digite o número ${i + 1} do vetor 2`));
    vetorDois.push(numeroAdicionado);
}

for (i=0; i<vetorUm.length; i++){

    vetorTres.push(vetorUm[i]);
    vetorTres.push(vetorDois[i]);
}

alert(`Primeiro vetor: ${vetorUm}\nSegundo vetor: ${vetorDois}\nVetor com os valores do primeiro e do segundo intercalados: ${vetorTres}`);