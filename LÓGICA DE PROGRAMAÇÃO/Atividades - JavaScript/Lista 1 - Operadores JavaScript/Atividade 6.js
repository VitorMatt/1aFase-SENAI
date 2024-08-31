/*6) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, 
realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. */

var imcUsuario
var pesoUsuario
var alturaUsuario

pesoUsuario = Number(prompt('Digite seu peso em kg: '))
alturaUsuario = Number(prompt('Digite sua altura em m: '))

imcUsuario = pesoUsuario / (alturaUsuario * alturaUsuario)

alert ('Resultado IMC: ' + imcUsuario.toFixed(1))

