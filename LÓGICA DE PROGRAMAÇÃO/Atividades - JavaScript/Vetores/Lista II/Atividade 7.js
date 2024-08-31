// 7) Criar uma lista com 6 notas, ao final realizar a média das notas descartando a primeira e a última. Mostra na tela a média.

let notas = [];
let somaNotas = 0;
let mediaNotas;

for (i=0; i<6; i++){

    numeroAdicionado = Number(prompt('Digite uma nota'));
    notas.push(numeroAdicionado);
}

const quantidadeNotas = notas.length;

for (i=notas.length - (notas.length-1); i<notas.length - 1; i++){

    somaNotas += notas[i];
}

mediaNotas = somaNotas / quantidadeNotas;

console.log(somaNotas);