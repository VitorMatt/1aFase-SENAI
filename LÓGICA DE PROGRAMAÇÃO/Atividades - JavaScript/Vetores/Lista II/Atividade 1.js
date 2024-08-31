// 1) Desenvolva um programa que o usuário digite 10 números positivos e inteiros, ao final mostre o valor do resultado do somatório da primeira metade dos números menos o somatório da segunda metade. (Somatório da primeira metade - Somatório da segunda metade)

let numeros = [];
let somatorioPrimeiraMetade = 0;
let somatorioSegundaMetade = 0;
let numeroAdicionado;
let resultadoFinal;

for (i=0; i<10; i++){

    numeroAdicionado = Number(prompt('Adicione um número'));
    numeros.push(numeroAdicionado);
}

for (i=0; i<numeros.length/2; i++){

    somatorioPrimeiraMetade += numeros[i];
}

for (i=numeros.length/2; i<numeros.length; i++){

    somatorioSegundaMetade += numeros[i];
}

resultadoFinal = somatorioPrimeiraMetade - somatorioSegundaMetade;

alert('Resultado: ' + resultadoFinal);