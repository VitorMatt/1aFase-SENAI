programa {
  funcao inicio() {

    /*1) Crie um programa que pe�a ao usu�rio para digitar tr�s notas individualmente (uma por vez), fa�a a m�dia e caso a m�dia seja igual ou maior que 7, 
    mostre uma mensagem "Aprovado!" e a m�dia. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a m�dia. 
    (DESAFIO: Incluir tamb�m uma op��o de "Recupera��o" para m�dias de 5 a 7)*/

    // Declara��o de vari�veis

    real nota1
    real nota2
    real nota3
    real totalNotas
    real quantidadeNotasDigitadas = 3
    real mediaFinal

    // Entrada de dados

   escreva ("Digite a primeira nota: ")
   leia (nota1)

   escreva ("Digite a segunda nota: ")
   leia (nota2)

   escreva ("Digite a terceira nota: ")
   leia (nota3)

   // C�lculos/L�gica

   totalNotas = nota1 + nota2 + nota3

   mediaFinal = totalNotas/quantidadeNotasDigitadas

   // Sa�da de dados

   se (mediaFinal>=7){

   escreva ("\nSua m�dia final � ", mediaFinal, "!\n\nVoc� est� aprovado(a)! Sua notas atingiram � m�dia m�nima esperada.\n")

   }

   senao se (mediaFinal>=5 e mediaFinal<7) {

   escreva ("\nSua m�dia final � ", mediaFinal, "!\n\nVoc� ficou de recupera��o, aguarde a avalia��o de recupera��o para recuperar sua nota.")

   }

   senao {
   escreva ("\nSua m�dia final � ", mediaFinal, "!\n\nVoc� est� reprovado(a)! Sua notas n�o atingiram � m�dia m�nima esperada.\n")
   
   }
    
  }
}
