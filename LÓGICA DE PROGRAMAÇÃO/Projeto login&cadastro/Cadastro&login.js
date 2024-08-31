let mensagem = document.getElementById('mensagem')
let nome = document.getElementById('nome')
let idade = document.getElementById('idade')
let email = document.getElementById('email')
let cpf = document.getElementById('cpf')
let senha = document.getElementById('senha')
let confirmacaoSenha = document.getElementById('confirmacaoSenha')

function cadastrar(){
     
    let cadastroUsuario = {nome: nome.value, cpf: cpf.value, idade: idade.value, email: email.value, senha: senha.value}

    usuario = JSON.stringify(cadastroUsuario)

    localStorage.setItem("Usuario", usuario)
}

function cadastro(){

    cadastrar()

    let checkbox = document.getElementById('checkbox')
            
    if (checkbox.checked){

        if (senha.value==confirmacaoSenha.value){

            window.location.href='login.html'
        } else {

            mensagem.innerHTML = 'As senhas devem ser iguais!'
        }

    } else {

        mensagem.innerHTML = 'Aceite os termos para se cadastrar.'
    }
}

function login(){

    let senhaDigitada = document.getElementById('senhaDigitada')

    if (senhaDigitada.value==usuario.senha){

        mensagem.innerHTML = 'Login efetuado!'
    } else {

        mensagem.innerHTML = 'Senha incorreta!'
    }
}