// 2) Crie um programa que solicite a senha de um usuário e depois, 
// peça pra digitar novamente até que as duas senhas sejam correspondentes.

let senhaUsuario
let confirmacaoSenha

do {

    senhaUsuario = prompt('Digite sua senha').toUpperCase()
    confirmacaoSenha = prompt('Confirme sua senha').toUpperCase()

    if (senhaUsuario!=confirmacaoSenha){

        alert('Senhas incorretas!')
    }
} while (senhaUsuario!=confirmacaoSenha);

alert('Senhas corretas!')