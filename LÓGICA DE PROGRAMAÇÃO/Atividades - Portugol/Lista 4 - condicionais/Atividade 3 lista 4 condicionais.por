programa {
  funcao inicio() {

    /*3) Conversor de moedas: Escreva um programa que converta uma quantidade de d�lares em reais. 
    Se o valor do d�lar estiver acima de 5 reais, exiba uma mensagem informando que est� caro, sen�o exiba uma mensagem de que est� barato.*/

    real valorReaisPorDolar
    real valorDolar
    real resultadoEmDolar

    escreva ("\nDigite o valor de 1 d�lar em reais: ")
    leia (valorReaisPorDolar)

    se (valorReaisPorDolar<=0){

    escreva ("\nN�mero inv�lido! Digite novamente.\n")
    inicio()

    }

    escreva ("\nDigite o valor em d�lar: ")
    leia (valorDolar)

    se (valorDolar<=0){

    escreva ("\nN�mero inv�lido! Digite novamente.\n")
    inicio()

    }

    resultadoEmDolar =valorReaisPorDolar * valorDolar

    escreva ("\nO valor em reais � R$ ", resultadoEmDolar, ".")


    
  }
}
