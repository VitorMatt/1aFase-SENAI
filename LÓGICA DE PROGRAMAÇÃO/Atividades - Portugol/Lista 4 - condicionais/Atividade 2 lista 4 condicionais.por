programa {
  funcao inicio() {

    /*2) Em uma m�quina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o jogador pode formar sequ�ncias de frutas que rendem valores em dinheiro. 
    Criar um programa que pergunte ao jogador as tr�s frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

   CEREJA - CEREJA - CEREJA -> R$100
   LARANJA - LARANJA - LARANJA -> R$80
   CEREJA - LARANJA - CEREJA -> R$50
   LARANJA - CEREJA - LARANJA -> R$25*/

   inteiro sequenciaUm = 1
   inteiro sequenciaDois = 2
   inteiro sequenciaTres = 3
   inteiro sequenciaQuatro = 4
   inteiro sequenciaEscolhida
   real valorGanho

   escreva ("\nDigite a sequ�ncia desejada de acordo com a tabela abaixo:\n")

   escreva ("\nSequ�ncia 1 - CEREJA - CEREJA - CEREJA\nSequ�ncia 2 - LARANJA - LARANJA - LARANJA")
   escreva ("\nSequ�ncia 3 - CEREJA - LARANJA - CEREJA\nSequ�ncia 4 - LARANJA - CEREJA - LARANJA\n")
   
   escreva ("\nEm qual sequ�ncia voc� deseja apostar?\nResposta: ")
   leia (sequenciaEscolhida)

   se (sequenciaEscolhida<1 ou sequenciaEscolhida>4){

   escreva ("\nOp��o inv�lida! Tente novamente.\n")
   inicio()

   }

   senao{ se (sequenciaEscolhida==sequenciaUm){

    valorGanho = 100

   escreva ("\nPar�bens! Voc� recebeu um total de R$ ",valorGanho, ".")

   }

   senao{ se (sequenciaEscolhida==sequenciaDois){

    valorGanho = 80

   escreva ("\nPar�bens! Voc� recebeu um total de R$ ",valorGanho, ".")

   }

   senao{ se (sequenciaEscolhida==sequenciaTres){

    valorGanho = 50

   escreva ("\nPar�bens! Voc� recebeu um total de R$ ",valorGanho, ".")

   }

   senao{ se (sequenciaEscolhida==sequenciaQuatro){

    valorGanho = 25

   escreva ("\nPar�bens! Voc� recebeu um total de R$ ",valorGanho, ".")

   }
   }
   }
   }
   }
    
  }
}
