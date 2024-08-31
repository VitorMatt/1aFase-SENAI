/*5) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. 
Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos 
(a soma desses quatro, deve ser igual ao total de eleitores). 
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. */

var totalEleitores
var numeroVotosCandidatoX
var numeroVotosCandidatoY
var totalVotosEmBranco
var totalVotosNulos
var somaTotalVotos
var percentualVotosCandidatoX
var percentualVotosCandidatoY
var percentualVotosEmBranco
var percentualVotosNulos

totalEleitores = Number(prompt('Digite o total de eleitores: '))
numeroVotosCandidatoX = Number(prompt('Digite o número de votos do candidato X: '))
numeroVotosCandidatoY = Number(prompt('Digite o número de votos do candidato Y: '))
totalVotosEmBranco = Number(prompt('Digite o número de votos em branco: '))
totalVotosNulos = Number(prompt('Digite o número de votos nulos: '))

somaTotalVotos = numeroVotosCandidatoX + numeroVotosCandidatoY + totalVotosEmBranco + totalVotosNulos

if (somaTotalVotos<totalEleitores || somaTotalVotos>totalEleitores){

    alert('O número total de votos deve ser igual ao número total de eleitores!')
}

else if (somaTotalVotos==totalEleitores){

    percentualVotosCandidatoX = numeroVotosCandidatoX * 100 / totalEleitores

    percentualVotosCandidatoY = numeroVotosCandidatoY * 100 / totalEleitores

    percentualVotosEmBranco = totalVotosEmBranco * 100 / totalEleitores

    percentualVotosNulos = totalVotosNulos * 100 / totalEleitores
    
    alert('Os resultados foram:\n' + percentualVotosCandidatoX.toFixed(1) + '% votaram no candidato X.\n' + percentualVotosCandidatoY.toFixed(1) + '% votaram no candidato Y.\n' + percentualVotosEmBranco.toFixed(1) + '% votaram em branco.\n' + percentualVotosNulos.toFixed(1) + '% votaram nulo.')

}

