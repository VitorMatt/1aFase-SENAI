// 8) Você é um colecionador de vinis e resolveu ir ao sebo para comprar alguns vinis raros. 
// Porém, você tem apenas R$200 para gastar. Faça um programa que pergunte o nome do vinil e o valor, 
// repetidamente. Caso o valor ultrapasse R$200, encerrar (desconsiderando o último vinil). Mostrar na tela:

// a) O total gasto em reais dos vinis.
// b) O valor que sobrou em dinheiro.
// c) Quantos vinis foram comprados.
// d) A média de preço dos vinis.
// e) O vinil mais caro e o mais barato.

const valorInicial = 200;
let valorRestante = valorInicial;
let valorGasto = 0;
let quantidadevinisComprados = 0;
let somaValoresVinis = 0;
let nomeVinil = prompt('Digite o nome do vinil');
let valorVinil = Number(prompt('Digite o valor do vinil'));
let vinilMaisCaro = nomeVinil;
let valorVinilMaisCaro = valorVinil;
let vinilMaisBarato = nomeVinil;
let valorVinilMaisBarato = valorVinil;
let mediaPrecoVinis;

valorGasto += valorVinil;
valorRestante -= valorVinil;
quantidadevinisComprados++;

while (valorRestante>0){

    nomeVinil = prompt('Digite o nome do vinil');
    valorVinil = Number(prompt('Digite o valor do vinil'));

    if (valorVinil>valorRestante){

        break;
    }

    if (valorVinil>valorVinilMaisCaro){

        valorVinilMaisCaro = valorVinil;
        vinilMaisCaro = nomeVinil;
    } else if (valorVinil<valorVinilMaisBarato){

        valorVinilMaisBarato = valorVinil;
        vinilMaisBarato = nomeVinil;
    }

    valorGasto += valorVinil;
    valorRestante -= valorVinil;
    quantidadevinisComprados++;
}

if (valorRestante==0 && quantidadevinisComprados==1){

    alert(`Valor gasto: ${valorGasto}\nValor restante: ${valorRestante}\nQuantidade de vinis comprados: ${quantidadevinisComprados}`);
} else if (valorRestante<0 && quantidadevinisComprados==1){

    alert('Ops... Parece que este vinil está muito caro para suas condições');
} else if (valorRestante<0 && quantidadevinisComprados>1){

    alert(`O último vinil foi desconsiderado por causa que não havia dinheiro suficiente.\nValor gasto: ${valorGasto}\nValor restante: ${valorRestante}\nQuantidade de vinis comprados: ${quantidadevinisComprados}\nVinil mais barato: ${vinilMaisBarato}\nValor: ${valorVinilMaisBarato}\nVinil mais caro: ${vinilMaisCaro}\nValor: ${valorVinilMaisCaro}`);
} else {

    alert(`Valor gasto: ${valorGasto}\nValor restante: ${valorRestante}\nQuantidade de vinis comprados: ${quantidadevinisComprados}\nVinil mais barato: ${vinilMaisBarato}\nValor: ${valorVinilMaisBarato}\nVinil mais caro: ${vinilMaisCaro}\nValor: ${valorVinilMaisCaro}`);
}