programa {
  funcao inicio() {

    /*3) Conversor de moedas: Escreva um programa que converta uma quantidade de dólares em reais. 
    Se o valor do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.*/

    real valorReaisPorDolar
    real valorDolar
    real resultadoEmDolar

    escreva ("\nDigite o valor de 1 dólar em reais: ")
    leia (valorReaisPorDolar)

    se (valorReaisPorDolar<=0){

    escreva ("\nNúmero inválido! Digite novamente.\n")
    inicio()

    }

    escreva ("\nDigite o valor em dólar: ")
    leia (valorDolar)

    se (valorDolar<=0){

    escreva ("\nNúmero inválido! Digite novamente.\n")
    inicio()

    }

    resultadoEmDolar =valorReaisPorDolar * valorDolar

    escreva ("\nO valor em reais é R$ ", resultadoEmDolar, ".")


    
  }
}
