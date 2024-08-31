/*1) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. 
O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. 
Digitar os valores (em metros) da largura e comprimento que deseja a piscina. 
Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, 
sendo que uma caixa de azulejo com 60 unidades custa R$45,50.*/

const azulejosParaCadaMetroQuadrado = 120
const valorSessentaUnidadesAzulejo = 45.50
let valorUnidadeAzulejo
let alturaPscina
let larguraPscina
let areaPscina
let quantidadeAzulejosNecessarios
let valorTotal

valorUnidadeAzulejo = valorSessentaUnidadesAzulejo / 60

alturaPscina = Number(prompt('Digite em metros qual será a altura de sua pscina.'))

larguraPscina = Number(prompt('Digite em metros qual será a largura de sua pscina.'))


areaPscina = alturaPscina * larguraPscina

quantidadeAzulejosNecessarios = areaPscina * azulejosParaCadaMetroQuadrado

valorTotal = quantidadeAzulejosNecessarios * valorUnidadeAzulejo

alert (`Quantidade de azulejos necessários: ${quantidadeAzulejosNecessarios}\nValor Total à ser pago: R$${valorTotal}`)

