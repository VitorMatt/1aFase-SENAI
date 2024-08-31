programa {
  funcao inicio() {

    /*1) Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. 
    Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno.*/

    real ladoUmTriangulo
    real ladoDoisTriangulo
    real ladoTresTriangulo
    
    escreva ("\nDigite o valor do primeiro lado do triângulo: ")
    leia (ladoUmTriangulo)

    escreva ("Digite o valor do segundo lado do triângulo: ")
    leia (ladoDoisTriangulo)

    escreva ("Digite o valor do terceiro lado do triângulo: ")
    leia (ladoTresTriangulo)

    se (ladoUmTriangulo==ladoDoisTriangulo e ladoUmTriangulo==ladoTresTriangulo e ladoDoisTriangulo==ladoTresTriangulo){

    escreva ("\nO triângulo é equilátero.")

    }

    senao{ se (ladoUmTriangulo==ladoDoisTriangulo){

    escreva ("\nO triângulo é isósceles.")

    }

    senao{ se (ladoDoisTriangulo==ladoTresTriangulo){

    escreva ("\nO triângulo é isósceles.")

    }

    senao{ se (ladoUmTriangulo==ladoTresTriangulo){

    escreva ("\nO triângulo é isósceles.")

    }

    senao{ se (ladoUmTriangulo!=ladoDoisTriangulo e ladoUmTriangulo!=ladoTresTriangulo e ladoDoisTriangulo!=ladoTresTriangulo){

    escreva ("\nO triângulo é escaleno.")

    }
    }
    }
    }
    }

  }
}
