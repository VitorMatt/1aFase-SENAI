// 4) Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.

let numeroDigitado = Number(prompt('Digite um número'));
let numeroMaior = numeroDigitado
let numeroMenor = numeroDigitado

for (i=1; i<10; i++){

    numeroDigitado = Number(prompt('Digite um número'));

    if (numeroDigitado>50 || numeroDigitado<0){

        alert('Digite números entre 0 e 50!');
        i--
    } else {

    if (numeroDigitado>numeroMaior){

        numeroMaior = numeroDigitado
    } else if (numeroDigitado<numeroMenor){

        numeroMenor = numeroDigitado
    }
}
}

alert(`Maior número digitado: ${numeroMaior}\nMenor número digitado: ${numeroMenor}`);