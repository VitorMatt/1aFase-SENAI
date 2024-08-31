/*5) Desenvolver um programa que receba um número inteiro e verifique se ele é múltiplo de 3. 
Após digitar o número, mostrar uma das seguintes mensagens na tela “É múltiplo de 3!” ou “Não é múltiplo de 3”.*/

let numeroDigitado

numeroDigitado = Number(prompt('Digite um número.'))

if (numeroDigitado % 3 != 0){

    alert ('Não é múltiplo de 3!')
} else {

    alert ('É múltiplo de 3!')
}