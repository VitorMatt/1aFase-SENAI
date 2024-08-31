// 5) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)

let nomePessoa = prompt('Digite o nome da pessoa')
let idadePessoa = Number(prompt('Digite a idade da pessoa'))
let nomePessoaComMaiorIdade
let nomePessoaComMenorIdade
let mediaIdadePessoas
let menorIdade
let maiorIdade = 0
let count = 0
let countIdadesIguais = 0
let somaIdadePessoas = 0
const quantidadePessoas = 5

    nomePessoaComMenorIdade = nomePessoa
    menorIdade = idadePessoa
    somaIdadePessoas = idadePessoa
    countIdadesIguais++
    count++

do {

    nomePessoa = prompt('Digite o nome da pessoa')
    idadePessoa = Number(prompt('Digite a idade da pessoa'))

    count++

    somaIdadePessoas = somaIdadePessoas + idadePessoa

    if (idadePessoa>menorIdade){
        
        maiorIdade = idadePessoa 
        nomePessoaComMaiorIdade = nomePessoa  
} else if (idadePessoa==menorIdade){

    countIdadesIguais++
} else {

    menorIdade = nomePessoa
    nomePessoaComMenorIdade = nomePessoa
}
} while (count<5);

mediaIdadePessoas = (somaIdadePessoas / quantidadePessoas).toFixed(2)

if(countIdadesIguais>=2){

    alert(`Você digitou idades iguais!\nMédia das idades: ${mediaIdadePessoas}`)
} else {

    alert(`Média das idades: ${mediaIdadePessoas}\nPessoa com a maior idade: ${nomePessoaComMaiorIdade}\nIdade da pessoa com a maior idade: ${maiorIdade}\nPessoa com a menor idade: ${nomePessoaComMenorIdade}\nIdade da pessoa com a menor idade: ${menorIdade}`)
}