/*9) Elabore um programa que converta uma quantidade de dólares para reais. 
Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a conversão para reais na tela. 
Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, 
senão exiba uma mensagem de que está barato.*/

let valorDigitado
let valorEmReais
let cotacaoDolar

cotacaoDolar = Number (prompt('Quanto está a cotação do dólar atualmente?'))

valorDigitado = Number (prompt('Digite o valor (em dólar) que deseja converter para reais.'))

valorEmReais = cotacaoDolar * valorDigitado

if (cotacaoDolar>5){
    
    alert ('O valor em reais é: R$' + valorEmReais)
    alert ('O dólar está caro!')
} else {

    alert ('O valor em reais é: R$' + valorEmReais)
    alert ('O dólar está caro!')
}