// 4) Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um alvo
// com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo. 
// Faça um programa que pergunte a pontuação de cada arremesso e ao final 
// mostre o resultado (soma dos pontos) e a classifição: 15 pontos (deus da peteca), 
// de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), 
// de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro).

const arremessosPermitidosPorPessoa = 3
let count = 0
let somaPontos = 0
let pontucaoArremesso

while (count<arremessosPermitidosPorPessoa){

pontucaoArremesso = Number(prompt('Quantos pontos você fez? (De 0 a 5)'))

if (pontucaoArremesso<0 || pontucaoArremesso>5){

    alert('Resposta inválida!')
}

else {

count = count + 1

somaPontos = somaPontos + pontucaoArremesso

}
}

switch (true){

    case somaPontos == 15:
        alert('Total de pontos: '+ somaPontos + '\nDeus da peteca!')
        break

    case somaPontos>=10 && somaPontos<15:
        alert('Total de pontos: '+ somaPontos + '\nPetequeiro profissa!')
        break

    case somaPontos>=5 && somaPontos<10:
        alert('Total de pontos: '+ somaPontos + '\nPetequeiro de final de semana:)')
        break

    case somaPontos>=1 && somaPontos<5:
        alert('Total de pontos: '+ somaPontos + '\nPseudo-petequeiro!')
        break

    default:
        alert('Total de pontos: '+ somaPontos + '\nNunca petequeiro:(')
}