/*2) Crie uma programa que verifique se uma pessoa pode dirigir. 
Deve ser perguntada a a idade da pessoa e se ela tiver idade suficiente para dirigir (18 anos ou mais), 
exiba "Você pode dirigir", caso contrário, exiba "Você ainda não pode dirigir".*/

let idadePessoa
const idadeMinimaParaDirigir = 18

idadePessoa = Number(prompt('Qual sua idade? '))

if (idadePessoa>=idadeMinimaParaDirigir && idadePessoa<120){

    alert ('Você pode dirigir')
} else if (idadepessoa<idadeMinimaParaDirigir && idadePessoa>0){

    alert ('Você ainda não pode dirigir')
} else {

    alert ('Digite um número válido!')
}