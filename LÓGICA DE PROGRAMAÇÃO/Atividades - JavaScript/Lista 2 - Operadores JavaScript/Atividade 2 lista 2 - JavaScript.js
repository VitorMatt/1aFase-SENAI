/*2) Os leões baios são animais territoriais. 
Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, 
nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos 
em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) 
existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.*/

function areaAnimais(){

const kmQuadradosPorIndividuo = 320
const kmQuadradosPorCasal = 400
const quantidadeTotalAnimais = 14
const leoesPorCasal = 2
let quantidadeCasais
let quantidadeIndividuosSolo
let areaDominadaPorCasais
let areaDominadaPorIndividuosSolo
let areaDominadaTotal

quantidadeCasais = Number(prompt('Qual a quantidade de casais formados.'))

if (quantidadeCasais>5 || quantidadeCasais<1){

    alert('Digite um número válido!')
    areaAnimais()
}

else {

    quantidadeIndividuosSolo = quantidadeTotalAnimais - (quantidadeCasais * leoesPorCasal)

    areaDominadaPorCasais = quantidadeCasais * kmQuadradosPorCasal

    areaDominadaPorIndividuosSolo = quantidadeIndividuosSolo *kmQuadradosPorIndividuo

    areaDominadaTotal = areaDominadaPorCasais + areaDominadaPorIndividuosSolo

    alert (`Área dominada por casais: ${areaDominadaPorCasais}Km²\nÁrea dominada por indivíduos solo: ${areaDominadaPorIndividuosSolo}Km²\nÁrea total dominada: ${areaDominadaTotal}Km²`)

}
}
areaAnimais()