let nomeUsuario = document.getElementById('nomeUsuario');
let mensagem = document.getElementById('mensagem');
let vetorUsuarios = [];
let nomeUsuarioDigitado;

function cadastrar(){

    vetorUsuarios.push(nomeUsuario.value);
    mensagem.innerHTML = 'Usuário cadastrado com sucesso!';
}

function editar(){

    let posicaoUsuario;
    let novoNomeDeUsuario;

    nomeUsuarioDigitado = prompt('Digite o nome de usuário que você deseja editar');

    if (vetorUsuarios.indexOf(nomeUsuarioDigitado)!=-1){

        novoNomeDeUsuario = prompt('Digite seu novo nome de usuário.');
        posicaoUsuario = vetorUsuarios.indexOf(nomeUsuarioDigitado);
        vetorUsuarios[posicaoUsuario] = novoNomeDeUsuario;

        mensagem.innerHTML = 'Nome de usuário atualizado com sucesso!';
    } else {

        mensagem.innerHTML = 'Nome de usuário não encontrado!';
    }
}

function excluir(){

    let posicaoUsuario;

    nomeUsuarioDigitado = prompt('Digite o nome de usuário que você deseja excluir');

    if (vetorUsuarios.includes(nomeUsuarioDigitado)){

        posicaoUsuario = vetorUsuarios.indexOf(nomeUsuarioDigitado);
        vetorUsuarios.splice(posicaoUsuario, 1);

        mensagem.innerHTML = 'Nome de usuário excluído com sucesso!';
    } else {

        mensagem.innerHTML = 'Nome de usuário não encontrado!';
    }
}

function listar(){

    if (vetorUsuarios.length!=0){

        mensagem.innerHTML = vetorUsuarios;
    } else {

        mensagem.innerHTML = 'Nenhum usuário cadastrado.';
    }
}