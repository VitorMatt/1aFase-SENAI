// 3) Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.

let numeroMultas
let valorMulta
let pontosPerdidos
let totalPontosPerdidos = 0
let somaValorMultas = 0
let count = 0
const limitePontos = 21

numeroMultas = Number(prompt('Quantas multas você deseja cadastrar?'))

while (count<numeroMultas){

    valorMulta = Number(prompt('Qual o valor da multa'))
    pontosPerdidos = Number(prompt('Quantos pontos foram perdidos?'))
    count++
    somaValorMultas = somaValorMultas + valorMulta
    totalPontosPerdidos = totalPontosPerdidos + pontosPerdidos
}

if (totalPontosPerdidos>=21){

    alert('Total pontos perdidos: ' + totalPontosPerdidos + '\nValor total multas: ' + somaValorMultas + '\nVocê está irregular!')
} else {
    
    alert('Total pontos perdidos: ' + totalPontosPerdidos + '\nValor total multas: ' + somaValorMultas + '\nVocê está regular!')
}
