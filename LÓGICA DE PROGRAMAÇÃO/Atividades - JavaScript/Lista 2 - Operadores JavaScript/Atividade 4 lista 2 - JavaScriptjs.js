/*4) Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. 
A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. 
O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.*/

let notaUm
let notaDois
let notaTres
let somaNotas
let pesoNotaUm
let pesoNotaDois
let pesoNotaTres
let somaPesos
let mediaPonderada

notaUm = Number(prompt('Digite a primeira nota.'))

pesoNotaUm = Number(prompt('Digite o peso desta nota em relação ao trimestre.'))

notaDois = Number(prompt('Digite a segunda nota.'))

pesoNotaDois = Number(prompt('Digite o peso desta nota em relação ao trimestre.'))

notaTres = Number(prompt('Digite a terceira nota.'))

pesoNotaTres = Number(prompt('Digite o peso desta nota em relação ao trimestre.'))

somaNotas = (notaUm*pesoNotaUm) + (notaDois*pesoNotaDois) + (notaTres*pesoNotaTres)

somaPesos = pesoNotaUm + pesoNotaDois + pesoNotaTres

mediaPonderada = somaNotas/somaPesos

alert('Média das notas: ' + mediaPonderada)