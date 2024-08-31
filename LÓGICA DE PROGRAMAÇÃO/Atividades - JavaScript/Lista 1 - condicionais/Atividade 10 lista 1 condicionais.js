/*10) Faça um programa que verifique a idade de uma pessoa e forneça um desconto no cinema. 
Deve ser perguntado o valor do ingresso e a idade. Se ela tiver 12 anos ou menos, conceda um desconto de 50% no ingresso do cinema. 
Se ela tiver de 13 a 17 anos, conceda um desconto de 25%. Caso contrário (18 anos ou mais), não conceda nenhum desconto. 
Mostrar ao final o valor que a pessoa deve pagar.*/

let idadePessoa
let valorIngresso
let valorDesconto
let valorTotal

idadePessoa = Number(prompt('Qual sua idade?'))

valorIngresso = Number(prompt('Qual o valor do ingresso?'))

if (idadePessoa<=12){

    valorDesconto = valorIngresso * 50 / 100

    valorTotal = valorIngresso - valorDesconto

    alert ('Valor total: R$' + valorIngresso + '\nValor total com desconto: R$' + valorTotal)
} else if (idadePessoa>12 && idadePessoa<18){

    valorDesconto = valorIngresso * 25 / 100

    valorTotal = valorIngresso - valorDesconto
    alert ('Valor total: R$' + valorIngresso + '\nValor total com desconto: R$' + valorTotal)
} else {

    alert ('Você não tem nenhum desconto.\nValor total: R$' + valorIngresso)

}


