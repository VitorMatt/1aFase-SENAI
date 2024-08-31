// 6) Fazer um programa que simule uma fila de lotérica. Começa vazia, escolhe A) Entrou pessoa B) Saiu pessoa. Se a fila acumular 5 pessoas, finaliza. 

let filaLoterica = [];
let nomePessoa;
let resposta;

for (i=0; i<5; i++){

    resposta = prompt('Digite A para entrar na fila e B para sair da fila').toUpperCase();

    if (resposta=='A'){

        nomePessoa = prompt('Digite seu nome');
        filaLoterica.push(nomePessoa);
    } else if (i>0) {

        i--
    }
}

alert('Pessoas na fila: ' + filaLoterica);