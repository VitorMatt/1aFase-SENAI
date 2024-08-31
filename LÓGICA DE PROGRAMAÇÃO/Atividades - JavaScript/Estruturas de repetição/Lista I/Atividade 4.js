// 4) Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência". Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente".

let count = 10
let numeroDigitado = Number(prompt('Digite a sequência de números correta'))

while (count==numeroDigitado){

    numeroDigitado = Number(prompt('Digite a sequência de números correta'))

    count--

    if (count==1){
        break
    }
}

if (numeroDigitado!=count){

    alert('Você errou a sequência')
} else {
alert('Você terminou a sequência corretamente')
}