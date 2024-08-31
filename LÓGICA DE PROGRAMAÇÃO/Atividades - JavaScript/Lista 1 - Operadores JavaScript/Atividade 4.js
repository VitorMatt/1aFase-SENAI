/*4) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. */

let valorDigitado
let valorConvertido

valorDigitado = Number(prompt('Digite o valor em °C: '))

valorConvertido = valorDigitado * 1.8 + 32

alert ('Resultado: ' + valorConvertido + '°F.')