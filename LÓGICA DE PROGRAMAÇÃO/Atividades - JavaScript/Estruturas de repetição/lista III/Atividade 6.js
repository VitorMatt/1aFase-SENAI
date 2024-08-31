// 6) Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, 
// sendo que desses, 25 estão ocupados pelas próximas semanas.  
// Faça um programa que o usuário digite o número de pessoas que entra 
// (com números positivos) e o número de pessoas que saem (com números negativos). 
// Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, 
// sendo X o número a mais de hóspedes que ficariam sem leito. 
// (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres).

const leitosHotel = 130;
const percentualCapacidadeLeitos = 50;
const leitosOcupados = 25;
let valorPercentualCapacidadeLeitos;
let leitosLivresInicial;
let leitosLivresFinal;
let leitosEmFalta;
let quantidadePessoasParaEntrar;
let quantidadePessoasParaSair;

valorPercentualCapacidadeLeitos = (percentualCapacidadeLeitos * leitosHotel) / 100;

leitosLivresInicial = (leitosHotel - valorPercentualCapacidadeLeitos) - leitosOcupados;
leitosLivresFinal = leitosLivresInicial;

do {

    quantidadePessoasParaEntrar = Number(prompt('Digite a quantidade de pessoas que irão entrar'));
    quantidadePessoasParaSair = Number(prompt('Digite a quantidade de pessoas que irão sair'));

    leitosLivresFinal = leitosLivresFinal - (quantidadePessoasParaEntrar - quantidadePessoasParaSair);

} while(leitosLivresFinal>0 && leitosLivresFinal<=40);

if (leitosLivresFinal<0){

    leitosEmFalta = (quantidadePessoasParaEntrar - quantidadePessoasParaSair) - leitosLivresInicial;
    alert('Não é possível pois ultrapassa a capacidade em ' + leitosEmFalta + ' leitos.');
} else if (leitosLivresFinal>40){

    alert('Não é possível sair mais pessoas pois todas as vagas já estão livres.');
} else  if (leitosLivresFinal==0){

    alert('Quantidade de novos leitos ocupados: ' + leitosLivresInicial);
}