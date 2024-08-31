/*15) Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, 
com equipes de 4 integrantes. O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até 
Cachoeira do Bom Jesus (30km), Trecho 2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até 
Pântano do Sul (30km), Trecho 4 Pântano do Sul até Av. Beira-Mar (35km). Criar um programa que recebe o nome da equipe, 
em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho. Ao final mostrar a 
velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula. Se a velocidade 
média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!", caso a velocidade média fique de 15 a 18km/h 
mostrar uma mensagem "Desempenho bom, mas ainda pode melhorar!" e se a média ficar acima de 18km/h 
mostrar uma mensagem "Desempenho excelente. Parabéns!"*/

const percursoTotal = 140
const percursoTrechoUm = 30
const percursoTrechoDois = 45
const percursoTrechoTres = 30
const percursoTrechoQuatro = 35
const limiteMediaBaixa = 15
const limiteMediaAlta = 18
let nomeEquipe
let nomeIntegranteUm
let nomeIntegranteDois
let nomeIntegranteTres
let nomeIntegranteQuatro
let tempoGastoTrechoUm
let tempoGastoTrechoDois
let tempoGastoTrechoTres
let tempoGastoTrechoQuatro
let tempoTotalGasto
let velocidadeMediaTrechoUm
let velocidadeMediaTrechoDois
let velocidadeMediaTrechoTres
let velocidadeMediaTrechoQuatro
let velocidadeMediaGeral

nomeEquipe = prompt('Digite o nome da sua equipe.')

nomeIntegranteUm = prompt('Digite o nome do primeiro integrante.')

nomeIntegranteDois = prompt('Digite o nome do segundo integrante.')

nomeIntegranteTres = prompt('Digite o nome do terceiro integrante.')

nomeIntegranteQuatro = prompt('Digite o nome do quarto integrante.')

tempoTotalGasto = Number(prompt('Quantas horas durou o percurso inteiro?'))

tempoGastoTrechoUm = Number(prompt('Quantas horas durou o primeiro trecho?'))

tempoGastoTrechoDois = Number(prompt('Quantas horas durou o segundo trecho?'))

tempoGastoTrechoTres = Number(prompt('Quantas horas durou o terceiro trecho?'))

tempoGastoTrechoQuatro = Number(prompt('Quantas horas durou o quarto trecho?'))

velocidadeMediaTrechoUm = percursoTrechoUm / tempoGastoTrechoUm

velocidadeMediaTrechoDois = percursoTrechoDois / tempoGastoTrechoDois

velocidadeMediaTrechoTres = percursoTrechoTres / tempoGastoTrechoTres

velocidadeMediaTrechoQuatro = percursoTrechoQuatro / tempoGastoTrechoQuatro

velocidadeMediaGeral = percursoTotal / tempoTotalGasto

if (velocidadeMediaGeral<limiteMediaBaixa){

    alert(`Desempenho equipe ${nomeEquipe}\nVelocidade média no trecho 1: ${velocidadeMediaTrechoUm}km/h\nVelocidade média no trecho 2: ${velocidadeMediaTrechoDois}km/h\nVelocidade média no trecho 3: ${velocidadeMediaTrechoTres}km/h\nVelocidade média no trecho quatro: ${velocidadeMediaTrechoQuatro}km/h\nVelocidade média geral: ${velocidadeMediaGeral}km/h\nDesempenho pode melhorar bastante!`)
} else if (velocidadeMediaGeral>=limiteMediaBaixa && velocidadeMediaGeral<=limiteMediaAlta){

    alert(`Desempenho equipe ${nomeEquipe}\nVelocidade média no trecho 1: ${velocidadeMediaTrechoUm}km/h\nVelocidade média no trecho 2: ${velocidadeMediaTrechoDois}km/h\nVelocidade média no trecho 3: ${velocidadeMediaTrechoTres}km/h\nVelocidade média no trecho quatro: ${velocidadeMediaTrechoQuatro}km/h\nVelocidade média geral: ${velocidadeMediaGeral}km/h\nDesempenho bom, mas ainda pode melhorar!`)
} else {

    alert(`Desempenho equipe ${nomeEquipe}\nVelocidade média no trecho 1: ${velocidadeMediaTrechoUm}km/h\nVelocidade média no trecho 2: ${velocidadeMediaTrechoDois}km/h\nVelocidade média no trecho 3: ${velocidadeMediaTrechoTres}km/h\nVelocidade média no trecho quatro: ${velocidadeMediaTrechoQuatro}km/h\nVelocidade média geral: ${velocidadeMediaGeral}km/h\nDesempenho excelente. Parabéns!`)
}