/*4) Faça um programa que solicite o salário e os anos de serviço de um funcionário. 
Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.*/

const bonusSalario = 5
let salarioUsuario
let anosTrabalhados
let valorBonus
let salarioComBonus

salarioUsuario = Number(prompt('Qual o seu salário?'))

anosTrabalhados = Number(prompt('Quantos anos trabalhados você tem?'))

if (anosTrabalhados>5){

valorBonus = salarioUsuario * bonusSalario / 100

salarioComBonus = salarioUsuario + valorBonus

alert (`Parabéns! Você ganhou um bônus de 5% no seu salário.\nSalário mensal: R$${salarioUsuario}\nValor bônus: +R$${valorBonus} (5%)\nSalário final com bônus: R$${salarioComBonus}`)
} else {

    alert('Você ainda não tem bônus para receber!')
}
