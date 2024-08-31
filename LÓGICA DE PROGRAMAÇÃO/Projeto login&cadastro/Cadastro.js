function cadastro(){

    let senha = document.getElementById('senha')
    let confirmacaoSenha = document.getElementById('confirmacaoSenha')
    localStorage.setItem(senha)
    localStorage.setItem(confirmacaoSenha)
    let pa = document.getElementById('pa')

    if (senha.value==confirmacaoSenha.value){

       'http://127.0.0.1:5500/login.html' + window.location.href 
    }
}
