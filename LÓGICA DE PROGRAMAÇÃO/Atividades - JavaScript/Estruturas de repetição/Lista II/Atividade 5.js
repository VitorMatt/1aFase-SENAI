// 5) Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia. 
// Um número primo é aquele que é divisível apenas por um e por ele mesmo. 
// Faça um programa que peça ao usuário para digitar cinco números inteiros e mostre na tela se são primos ou não.

let numeroDigitado
let count = 0

while (count<5){

    numeroDigitado = Number(prompt('Digite um número'))

    if (numeroDigitado%2==0){

        alert('Não é primo!')
    } else if (numeroDigitado==2 || numeroDigitado==3 || numeroDigitado==5 || numeroDigitado==7 || numeroDigitado==9 || numeroDigitado==11){

        alert('Número primo!')
    } else if (numeroDigitado%3!=0 && numeroDigitado%5!=0 && numeroDigitado%7!=0 && numeroDigitado%9!=0 && numeroDigitado%11!=0){

        alert('Número primo!')
    } else {

        alert('Não é primo!')
    }

    count++
}