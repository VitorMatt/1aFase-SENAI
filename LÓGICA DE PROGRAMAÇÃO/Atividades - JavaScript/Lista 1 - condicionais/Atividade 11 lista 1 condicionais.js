/*11) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 
1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, 
perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. 
Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. 
Criar uma variável com um valor que represente o saldo inicial.*/

let saldoInicial = 350
let numeroContaBancaria
let tipoOperacao
let valorSaque
let valorDeposito
let saldoFinal

numeroContaBancaria = Number(prompt('Digite o número da sua conta bancária.'))

tipoOperacao = Number(prompt('Digite o tipo de operação que deseja realizar.\n1) Saldo\n2) Depósito\n3) Saque'))

if (tipoOperacao==1){

    alert ('Seu saldo atual é de R$' + saldoInicial + '.')
} else if (tipoOperacao==2){

    valorDeposito = Number(prompt('Digite o valor que deseja depositar.'))

    saldoFinal = saldoInicial - valorDeposito

    if (saldoFinal<0){

        alert ('Saldo insuficiente para fazer este depósito!')
    } else{

        alert ('Depósito no valor de R$' + valorDeposito + ' realizado com sucesso!')
    }
} else if (tipoOperacao==3){

    valorSaque = Number(prompt('Digite o valor que deseja sacar.'))

    saldoFinal = saldoInicial - valorSaque

    if (saldoFinal<0){

        alert ('Saldo insuficiente para fazer este depósito!')
    } else {

        alert ('Saque no valor de R$' + valorSaque + ' realizado com sucesso!')
    }
} else {

    alert ('Número inválido!')
}