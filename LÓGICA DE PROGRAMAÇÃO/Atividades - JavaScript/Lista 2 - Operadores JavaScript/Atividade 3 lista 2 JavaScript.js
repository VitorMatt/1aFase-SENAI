/*3) Você é um amante da natureza e adora fazer trilhas. 
Criar um programa que calcule a velocidade média das trilhas que você realiza. Para isso, 
devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas). 
Fazer então o cálculo da velocidade média e mostrar na tela a mensagem 
"Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.*/

var velocidadeMedia
var kmPercorridos
var horasDeDuracaoTrilha

kmPercorridos = Number(prompt('Quantos kilometros foram percorridos?'))

horasDeDuracaoTrilha = Number(prompt('Quantas horas durou a trilha?'))

velocidadeMedia = kmPercorridos / horasDeDuracaoTrilha

alert (`Sua média de velocidade durante essa trilha foi de ${velocidadeMedia}Km/h`)