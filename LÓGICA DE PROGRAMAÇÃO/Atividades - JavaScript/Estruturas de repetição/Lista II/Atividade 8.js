// 8) Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). 
// Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada, 
// deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". 
// Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas. 
// (DESAFIO: Gerar um número aleatório utilizando Math.random e Math.floor)

let numeroDigitado
let numeroTentativas = 0
const numeroSecreto = (Math.floor(Math.random() * 100))

do {

    numeroDigitado = Number(prompt('Adivinhe o número de 1 a 100.'))
    numeroTentativas++

    if (numeroDigitado<numeroSecreto){

        alert('O número é maior que ' + numeroDigitado)
    } else if (numeroDigitado>numeroSecreto){

        alert('O número é menor que ' + numeroDigitado)
    }

} while (numeroDigitado!=numeroSecreto);

alert ('Você acertou o número secreto!\nNúmero secreto: ' + numeroSecreto + '\nNúmero de tentativas: ' + numeroTentativas)