//2) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 
// 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, 
// perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. 
// Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. 
// Criar uma variável com um valor que represente o saldo inicial.

const opcaoUm = 1
const opcaoDois = 2
const opcaoTres = 3
const saldoInicial = 1400
let saldoFinal
let numeroContaBancariaUsuario
let tipoOperacaoEscolhida
let valorDepositoOuSaque

numeroContaBancariaUsuario = Number(prompt('Digite o número de sua conta bancária.'))

tipoOperacaoEscolhida = Number(prompt('Escolha o tipo de operação que deseja executar.\n1) Saldo\n2) Depósito\n3) Saque'))

switch (tipoOperacaoEscolhida){

    case 1:
        alert('Valor de seu saldo: R$' + saldoInicial + '.')
        break

    case 2:

        valorDepositoOuSaque = Number(prompt('Digite o valor que deseja depositar.'))
        saldoFinal = saldoInicial - valorDepositoOuSaque

        alert('Depósito no valor de R$' + valorDepositoOuSaque + ' realizado com sucesso!\nSaldo restante na conta: R$' + saldoFinal)
        break

    case 3:

        valorDepositoOuSaque = Number(prompt('Digite o valor que deseja sacar.'))
        saldoFinal = saldoInicial - valorDepositoOuSaque

        alert('Depósito no valor de R$' + valorDepositoOuSaque + ' realizado com sucesso!\nSaldo restante na conta: R$' + saldoFinal)
        break

    default:
        alert('Opção inválida!')
}