/*8) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. 
Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado 
e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. 
Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. 
Ao final, mostrar a média de litros bebidos por pessoa na festa.*/

const totalPessoas = 45
const litrosDeChoppComprados = 300
var totalLitrosBebidos
var mediaLitrosBebidosPorPessoa
var quantidadeDeLitrosDesperdiçados
var quantidadeDeLitrosRestantes

quantidadeDeLitrosDesperdiçados = Number(prompt('Quantos litros de chopp foram desperdiçados?'))
quantidadeDeLitrosRestantes = Number(prompt('Quantos litros de chopp sobraram?'))

totalLitrosBebidos = litrosDeChoppComprados - (quantidadeDeLitrosDesperdiçados + quantidadeDeLitrosRestantes)

mediaLitrosBebidosPorPessoa = totalLitrosBebidos / totalPessoas

alert ('Total de litros desperdiçados: ' + quantidadeDeLitrosDesperdiçados + 'L\nTotal de litros restantes: ' + quantidadeDeLitrosRestantes + 'L\nTotal de litros bebidos: ' + totalLitrosBebidos + 'L\nMédia de litros bebidos por pessoa na festa: ' + mediaLitrosBebidosPorPessoa.toFixed(1) + '.')