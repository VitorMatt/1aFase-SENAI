/*7) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 
e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e 
mostrar o total que receberá em reais. */

const rendimentoCadaDezKgDePlastico = 2
const rendimentoCadaTrintaKgDePapel = 3
const rendimentoCadaCinquentaKgDeMetal = 5
var quantidadePlastico
var valorTotalPlastico
var quantidadePapel
var valorTotalPapel
var quantidadeMetal
var valorTotalMetal
var totalValorMateriais

quantidadePlastico = Number(prompt('Digite a quantidade de plástico (em Kg) que deseja entregar à fábrica: '))
quantidadePapel = Number(prompt('Digite a quantidade de papel (em Kg) que deseja entregar à fábrica: '))
quantidadeMetal = Number(prompt('Digite a quantidade de metal (em Kg) que deseja entregar à fábrica: '))

valorTotalPlastico = quantidadePlastico * rendimentoCadaDezKgDePlastico / 10

valorTotalPapel = quantidadePapel * rendimentoCadaTrintaKgDePapel / 30

valorTotalMetal = quantidadeMetal * rendimentoCadaCinquentaKgDeMetal / 50

totalValorMateriais = valorTotalPlastico + valorTotalPapel + valorTotalMetal

alert ('O valor total que você tem à receber é: R$' + totalValorMateriais + '.')