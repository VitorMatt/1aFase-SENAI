/*1) Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], com [idade] anos, [nacionalidade], reside no endereço [endereço]". 
Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.*/

let nomeUsuario
let idadeUsuario
let nacionalidadeUsuario
let enderecoUsuario

nomeUsuario = prompt ('Digite seu nome: ')
idadeUsuario = Number(prompt ('Digite sua idade: '))
nacionalidadeUsuario = prompt ('Digite sua nacionalidade: ')
enderecoUsuario = prompt ('Digite seu endereço: ')

alert ('Cliente ' + nomeUsuario + ', com ' + idadeUsuario + ' anos, ' + nacionalidadeUsuario + ', reside no endereço ' + enderecoUsuario + '.')
