let vetorUsernames = [];
let opcaoDigitada;
let userDigitado;
let novoUser;

do {

    opcaoDigitada = Number(prompt(`>>>>>> MENU <<<<<<\n\n1) Cadastrar\n2) Editar\n3) Excluir\n4) Listar\n5) Sair\n\nEscolha uma opção`));

    switch (opcaoDigitada){

        case 1:
            userDigitado = prompt('Digite o nome de usuário para cadastrar.');
            vetorUsernames.push(userDigitado);

            alert('Usuário cadastrado!');
            break;

        case 2:
            userDigitado = prompt('Digite seu nome de usuário');

            if (vetorUsernames.includes(userDigitado)){

                novoUser = prompt('Digite seu novo nome de usuário');
                posicaoUser = vetorUsernames.indexOf(userDigitado);
                vetorUsernames[posicaoUser] = novoUser;

                alert('User atualizado com sucesso!');
            } else {

                alert('Nome de usuário não encontrado!');
            }
            break;

        case 3:
            userDigitado = prompt('Digite o nome de usuário á excluir.');

            if (vetorUsernames.includes(userDigitado)){

                posicaoUser = vetorUsernames.indexOf(userDigitado);
                vetorUsernames.splice(posicaoUser, 1);
                alert('Nome de usuário excluído com sucesso');
            } else {

                alert('Nome de usuário não encontrado!');
            }
            break;

        case 4:
            if (vetorUsernames.length == 0){

                alert('Usuários cadastrados:\nNenhum usuário cadastrado.');
            } else {
                
                alert('Usuários cadastrados:\n' + vetorUsernames);
            }
            break;

        case 5:
            alert('Você saiu!');
            break;

        default:
            alert('Opção inválida!');
    }

} while(opcaoDigitada!=5);