// 7) Em jogos de tabuleiro do gênero RPG, um dos dados que pode ser utilizado é o dado D20. 
// Esse dado possui 20 faces ou "lados" com valores de 1 a 20. Criar um sistema simples de jogo, 
// onde no início é solicitado o número de jogadores e para cada jogador deve-se armazenar valores 
// de quatro jogadas de um D20. A pontuação do jogador é definida excluindo o primeiro e o último valor, 
// somando então os valores da segunda e terceira jogadas. Ao final mostrar o jogador vencedor. 
// (DESAFIO: validar os valores de 1 a 20, ou seja, caso um valor digitado não esteja entre dentro dos valores do dado, 
// repetir a pergunta)

let numeroJogadores = Number(prompt('Digite o número de jogadores'));
let nomeJogador;
let pontuacaoJogador;
let somaPontuacaoJogador = 0;
let pontuacaoMaior;
let jogadorVencedor;
let count = 0;

for (i=0; i<numeroJogadores; i++){
    
    nomeJogador = prompt('Digite seu nome');

    for (count=0; count<4; count++){

        pontuacaoJogador = Number(prompt('Digite o valor do dado'));

        if (count==1 || count==2){

            somaPontuacaoJogador += pontuacaoJogador;
        } 
    }

    if (i==0){

        pontuacaoMaior = somaPontuacaoJogador;
        jogadorVencedor = nomeJogador;
    } else if (somaPontuacaoJogador>pontuacaoMaior){

        pontuacaoMaior = somaPontuacaoJogador;
        jogadorVencedor = nomeJogador;
    } 

    somaPontuacaoJogador = 0;
}

alert('Jogador vencedor: ' + jogadorVencedor + '\nSoma dos pontos: ' + pontuacaoMaior);