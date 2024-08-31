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

    escreva ("\nOlá, bem-vindo a conversão de escalas de temperatura, segue as opções abaixo:")
    
    escreva ("\n\nConversão de escalas termométricas:\n\n1 - Escala Celsius para Fahrenheit\n2 - Escala Fahrenheit para Celsius")
    escreva ("\n3 - Escala Celsius para Kelvin\n4 - Escala Kelvin para Celsius")
    escreva ("\n5 - Escala Fahrenheit para Kelvin\n6 - Escala Kelvin para Fahrenheit")

    
    escreva ("\n\nDigite qual conversão você deseja fazer: ")
    leia (opcaoEscolhida)

    se (opcaoEscolhida==1){
    escreva ("\nDigite a temperatura que deseja converter: ")
    leia (valorDigitado)

    resultadoCelsiusParaFahrenheit = (valorDigitado * 1.8) + 32
    
    escreva ("O resultado é ", resultadoCelsiusParaFahrenheit, "°F.")}

    senao{

    se (opcaoEscolhida==2){
    escreva ("\nDigite a temperatura que deseja converter: ")
    leia (valorDigitado)

    resultadoFahrenheitParaCelsius = (valorDigitado - 32) / 1.8

    escreva ("O resultado é ", resultadoFahrenheitParaCelsius, "°C.")}

    senao{

    se (opcaoEscolhida==3){
    escreva ("\nDigite a temperatura que deseja converter: ")
    leia (valorDigitado)

    resultadoCelsiusParaKelvin = valorDigitado + 273.15

    escreva ("O resultado é ", resultadoCelsiusParaKelvin, "K.")}

    senao{

    se (opcaoEscolhida==4){
    escreva ("\nDigite a temperatura que deseja converter: ")
    leia (valorDigitado)

    resultadoKelvinParaCelsius = valorDigitado - 273.15

    escreva ("O resultado é ", resultadoKelvinParaCelsius, "°C.")}

    senao {

    se (opcaoEscolhida==5){
    escreva ("\nDigite a temperatura que deseja converter: ")
    leia (valorDigitado)

    resultadoFahrenheitParaCelsius = (valorDigitado - 32) / 1.8

    resultadoFahrenheitParaKelvin = resultadoFahrenheitParaCelsius + 273.15

    escreva ("O resultado é ", resultadoFahrenheitParaKelvin, "K.")}
    
    senao{
          
    se (opcaoEscolhida==6){
    escreva ("\nDigite a temperatura que deseja converter: ")
    leia (valorDigitado)

    resultadoKelvinParaCelsius = valorDigitado - 273.15

    resultadoKelvinParaFahrenheit = (resultadoKelvinParaCelsius * 1.8) + 32

    escreva ("O resultado é ", resultadoKelvinParaFahrenheit, "°F.")}

    senao{ se (opcaoEscolhida>6 ou opcaoEscolhida<1){
    
    escreva ("\nDigite um valor válido! Volte e tente novamente.\n")
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
