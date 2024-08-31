/*8) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. 
Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados). 
Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).*/

let densidadeDemografica
let totalHabitantes
let area

totalHabitantes = Number (prompt('Quantos habitantes têm em sua região?'))

area = Number (prompt('Qual a área da sua região?'))

densidadeDemografica = totalHabitantes / area

alert ('A densidade demográfica de sua região é ' + densidadeDemografica)

if (densidadeDemografica<25){

    alert ('A densidade demográfica de sua região está baixa.')
} else if (densidadeDemografica>25 && densidadeDemografica<100){

    alert ('A densidade demográfica de sua região está media.')
} else {

    alert ('A densidade demográfica de sua região está alta.')
}
