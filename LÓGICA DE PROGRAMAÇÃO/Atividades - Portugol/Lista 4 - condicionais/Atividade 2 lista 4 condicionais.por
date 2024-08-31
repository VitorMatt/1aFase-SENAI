programa {
  funcao inicio() {

    /*2) Em uma máquina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro. 
    Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

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

   escreva ("\nDigite a sequência desejada de acordo com a tabela abaixo:\n")

   escreva ("\nSequência 1 - CEREJA - CEREJA - CEREJA\nSequência 2 - LARANJA - LARANJA - LARANJA")
   escreva ("\nSequência 3 - CEREJA - LARANJA - CEREJA\nSequência 4 - LARANJA - CEREJA - LARANJA\n")
   
   escreva ("\nEm qual sequência você deseja apostar?\nResposta: ")
   leia (sequenciaEscolhida)

   se (sequenciaEscolhida<1 ou sequenciaEscolhida>4){

   escreva ("\nOpção inválida! Tente novamente.\n")
   inicio()

   }

   senao{ se (sequenciaEscolhida==sequenciaUm){

    valorGanho = 100

   escreva ("\nParábens! Você recebeu um total de R$ ",valorGanho, ".")

   }

   senao{ se (sequenciaEscolhida==sequenciaDois){

    valorGanho = 80

   escreva ("\nParábens! Você recebeu um total de R$ ",valorGanho, ".")

   }

   senao{ se (sequenciaEscolhida==sequenciaTres){

    valorGanho = 50

   escreva ("\nParábens! Você recebeu um total de R$ ",valorGanho, ".")

   }

   senao{ se (sequenciaEscolhida==sequenciaQuatro){

    valorGanho = 25

   escreva ("\nParábens! Você recebeu um total de R$ ",valorGanho, ".")

   }
   }
   }
   }
   }
    
  }
}
