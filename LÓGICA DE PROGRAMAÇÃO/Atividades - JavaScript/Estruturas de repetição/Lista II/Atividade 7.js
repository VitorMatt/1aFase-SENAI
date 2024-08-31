// 7) Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do 
// jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, 
// e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. 
// Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. 
// Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, 
// mostrar mensagem na tela "O jogo empatou!". 
// (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).

let nomeJogadorUm = prompt('Jogador 1, digite sue nome')
let nomeJogadorDois = prompt('Jogador 2, digite sue nome')
let numeroCartaJogadorUm
let numeroCartaJogadorDois
let jogadorVencedor
let somaCartasJogadorUm = 0
let somaCartasJogadorDois = 0
let count = 0

while (count<5){

    numeroCartaJogadorUm = parseInt(prompt('Digite o valor da sua carta, ' + nomeJogadorUm))
    numeroCartaJogadorDois = parseInt(prompt('Digite o valor da sua carta, ' + nomeJogadorDois))

    if (numeroCartaJogadorUm<1 || numeroCartaJogadorUm>13 || numeroCartaJogadorDois<1 || numeroCartaJogadorDois>13){

        alert('Digite números entre 1 a 13!')
        break
    } else {

        somaCartasJogadorUm = somaCartasJogadorUm + numeroCartaJogadorUm
        somaCartasJogadorDois = somaCartasJogadorDois + numeroCartaJogadorDois
        count++
    }
}

if (somaCartasJogadorUm>somaCartasJogadorDois){

    jogadorVencedor = nomeJogadorUm
    alert('Soma dos pontos:\nJogador 1: ' + somaCartasJogadorUm + '\nJogador 2: ' + somaCartasJogadorDois + '\n' +jogadorVencedor + ', você é o vencedor!')
} else if (somaCartasJogadorDois>somaCartasJogadorUm){

    jogadorVencedor = nomeJogadorDois
    alert('Soma dos pontos\nJogador 1: ' + somaCartasJogadorUm + '\nJogador 2: ' + somaCartasJogadorDois + '\n' +jogadorVencedor + ', você é o vencedor!')
} else {

    alert('Soma dos pontos\nJogador 1: ' + somaCartasJogadorUm + '\nJogador 2: ' + somaCartasJogadorDois + '\nEmpate!')
}