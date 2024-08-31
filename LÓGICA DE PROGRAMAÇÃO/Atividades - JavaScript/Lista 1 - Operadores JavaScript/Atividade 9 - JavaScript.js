/*9) Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são
necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15
reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito
somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um
programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na
tela o total cobrado pelo passeio.*/

function passeioBalao(){

const metrosCubicosDeGasPorCadaCincoMinutos = 10
const minutosPorCadaDezMetrosCubicos = 5
const valorMetroCubicoDeGas = 15
const maximoPessoasPorBalao = 4
const taxaPorPessoa = 20
var quantidadeDeGasUtilizado
var pessoasQueIraoAoPasseio
var tempoTotalPasseio
var valorTotalpasseio

pessoasQueIraoAoPasseio = Number(prompt('Quantas pessoas irão ao passeio?\nResposta: '))

tempoTotalPasseio = Number(prompt('Quanto tempo de passeio?\nResposta: '))

if (pessoasQueIraoAoPasseio>maximoPessoasPorBalao){


    alert ('São apenas 4 pessoas por balão!')
    passeioBalao()
}

else if (pessoasQueIraoAoPasseio<=0){


    alert ('Digite um valor válido!')
    passeioBalao()
}

else{

quantidadeDeGasUtilizado = (tempoTotalPasseio * metrosCubicosDeGasPorCadaCincoMinutos) / minutosPorCadaDezMetrosCubicos

valorTotalpasseio = (pessoasQueIraoAoPasseio * taxaPorPessoa) + (quantidadeDeGasUtilizada * valorMetroCubicoDeGas)

alert ('Valor total do passeio: R$' + valorTotalpasseio + '.')
}
}
passeioBalao()