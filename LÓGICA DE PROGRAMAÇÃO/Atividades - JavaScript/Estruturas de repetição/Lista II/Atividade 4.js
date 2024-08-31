// 4) Em uma competição de dardos, os competidores se classificam para a próxima fase caso consigam 75% ou mais da pontuação total, que é 60 pontos. Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem. Menos que isso, é eliminado. Cada arremesso pode marcar de 0 a 10 pontos, dependendo da precisão. Criar um programa para armazenar a pontuação dos 6 arremessos de um competidor e ao final mostrar uma mensagem com sua pontuação, seu desempenho (percentual) e se ele está classificado, se foi para a repescagem ou se está desclassificado.

const pontuacaoTotal = 60
const percentualProximaFase = 75
const percentualRepescagem = 50
const quantidadeArremessos = 6
let valorPercentualProximaFase
let valorPercentualRepescagem
let pontuacaoArremessoRodada
let somaArremessos = 0
let count = 0

while (count<quantidadeArremessos){

    pontuacaoArremessoRodada = Number(prompt('Digite a pontuação que você fez.'))

    if (pontuacaoArremessoRodada>10 || pontuacaoArremessoRodada<0){

        somaArremessos = 0
        count = 0

        alert('Você deve digitar números de 0 a 10.')
    } else {

        somaArremessos = somaArremessos + pontuacaoArremessoRodada
        count++
    }
}

valorPercentualProximaFase = (percentualProximaFase * pontuacaoTotal) / 100
valorPercentualRepescagem = (percentualRepescagem * pontuacaoTotal) / 100

if (somaArremessos>=valorPercentualProximaFase){

    alert('Parabéns, você passou para a próxima fase!\nPontuação total: ' + somaArremessos)
} else if (somaArremessos<valorPercentualProximaFase && somaArremessos>=valorPercentualRepescagem){

    alert('Quase lá! Você ficou para a repercagem.\nPontuação total: ' + somaArremessos)
} else {

    alert('Você foi eliminado!\nPontuação total: ' + somaArremessos)
}
