    let opcaoEscolhida
    let valorDigitado
    let resultadoCelsiusParaFahrenheit
    let resultadoFahrenheitParaCelsius
    let resultadoCelsiusParaKelvin
    let resultadoKelvinParaCelsius
    let resultadoFahrenheitParaKelvin
    let resultadoKelvinParaFahrenheit
    
    function converte(){

    if (opcaoEscolhida.value==1){

    resultadoCelsiusParaFahrenheit.value = (Number(valorDigitado.value) * 1.8) + 32

    } else if (opcaoEscolhida.value==2){

    resultadoFahrenheitParaCelsius.value = (Number(valorDigitado.value) - 32) / 1.8

    } else if (opcaoEscolhida.value==3){

    resultadoCelsiusParaKelvin.value = Number(valorDigitado.value) + 273.15

    } else if {

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
