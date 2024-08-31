// 5) O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.

const limiteDias = 8
let alturaCume = 8848
let somaAlturaEscalada = 0
let quantidadeDiasNecessarios = 0
let alturaEscalada

do {

    alturaEscalada = Number(prompt('Qual a altura escalada em metros?'));
    somaAlturaEscalada += alturaEscalada
    quantidadeDiasNecessarios++

} while (somaAlturaEscalada<alturaCume);

if (quantidadeDiasNecessarios>=limiteDias){

    alert('Você deve voltar, pois corre risco de ficar sem oxigênio.');
    alert('Quantidade de dias necessários para finalizar a escalada: ' + quantidadeDiasNecessarios);
} else {
    
    alert('Quantidade de dias necessários para finalizar a escalada: ' + quantidadeDiasNecessarios);
}