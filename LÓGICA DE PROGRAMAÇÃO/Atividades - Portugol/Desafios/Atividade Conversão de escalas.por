programa {
  funcao inicio() {
    converte()
  }

    funcao converte(){

    inteiro opcaoEscolhida
    real valorDigitado
    real resultadoCelsiusParaFahrenheit
    real resultadoFahrenheitParaCelsius
    real resultadoCelsiusParaKelvin
    real resultadoKelvinParaCelsius
    real resultadoFahrenheitParaKelvin
    real resultadoKelvinParaFahrenheit

    escreva ("\nOl�, bem-vindo a convers�o de escalas de temperatura, segue as op��es abaixo:")
    
    escreva ("\n\nConvers�o de escalas termom�tricas:\n\n1 - Escala Celsius para Fahrenheit\n2 - Escala Fahrenheit para Celsius")
    escreva ("\n3 - Escala Celsius para Kelvin\n4 - Escala Kelvin para Celsius")
    escreva ("\n5 - Escala Fahrenheit para Kelvin\n6 - Escala Kelvin para Fahrenheit")

    
    escreva ("\n\nDigite qual convers�o voc� deseja fazer: ")
    leia (opcaoEscolhida)

    se (opcaoEscolhida==1){
    escreva ("\nDigite a temperatura que deseja converter: ")
    leia (valorDigitado)

    resultadoCelsiusParaFahrenheit = (valorDigitado * 1.8) + 32
    
    escreva ("O resultado � ", resultadoCelsiusParaFahrenheit, "�F.")}

    senao{

    se (opcaoEscolhida==2){
    escreva ("\nDigite a temperatura que deseja converter: ")
    leia (valorDigitado)

    resultadoFahrenheitParaCelsius = (valorDigitado - 32) / 1.8

    escreva ("O resultado � ", resultadoFahrenheitParaCelsius, "�C.")}

    senao{

    se (opcaoEscolhida==3){
    escreva ("\nDigite a temperatura que deseja converter: ")
    leia (valorDigitado)

    resultadoCelsiusParaKelvin = valorDigitado + 273.15

    escreva ("O resultado � ", resultadoCelsiusParaKelvin, "K.")}

    senao{

    se (opcaoEscolhida==4){
    escreva ("\nDigite a temperatura que deseja converter: ")
    leia (valorDigitado)

    resultadoKelvinParaCelsius = valorDigitado - 273.15

    escreva ("O resultado � ", resultadoKelvinParaCelsius, "�C.")}

    senao {

    se (opcaoEscolhida==5){
    escreva ("\nDigite a temperatura que deseja converter: ")
    leia (valorDigitado)

    resultadoFahrenheitParaCelsius = (valorDigitado - 32) / 1.8

    resultadoFahrenheitParaKelvin = resultadoFahrenheitParaCelsius + 273.15

    escreva ("O resultado � ", resultadoFahrenheitParaKelvin, "K.")}
    
    senao{
          
    se (opcaoEscolhida==6){
    escreva ("\nDigite a temperatura que deseja converter: ")
    leia (valorDigitado)

    resultadoKelvinParaCelsius = valorDigitado - 273.15

    resultadoKelvinParaFahrenheit = (resultadoKelvinParaCelsius * 1.8) + 32

    escreva ("O resultado � ", resultadoKelvinParaFahrenheit, "�F.")}

    senao{ se (opcaoEscolhida>6 ou opcaoEscolhida<1){
    
    escreva ("\nDigite um valor v�lido! Volte e tente novamente.\n")
    escreva ("\n------------------------------------------------\n")
    converte()
    
    }
    }
    }
    }
    }
    }
    }

  }
}
