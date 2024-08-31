// 2) Joãozinho mede 1,75m de altura e cresce 1cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3cm por ano. Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.

let alturaJoaozinho = 1.75
let alturaPedrinho = 1.60
let crescimentoPorAnoJoaozinho = 0.01
let crescimentoPorAnoPedrinho = 0.03
let count = 0

while (alturaJoaozinho>=alturaPedrinho){

    alturaPedrinho = alturaPedrinho + 0.03
    alturaJoaozinho = alturaJoaozinho + 0.01
    count++
}

alert('Em ' + count + ' anos, Pedrinho será mais alto que Joãozinho.')
