programa {
  funcao inicio() {

    /*1) Elabore um programa que leia tr�s lados de um tri�ngulo e mostre na tela se ele � equil�tero, is�sceles ou escaleno. 
    Quando os tr�s lados forem iguais trata-se de um tri�ngulo equil�tero, dois lados iguais � um tri�ngulo is�sceles e os tr�s lados diferentes � um tri�ngulo escaleno.*/

    real ladoUmTriangulo
    real ladoDoisTriangulo
    real ladoTresTriangulo
    
    escreva ("\nDigite o valor do primeiro lado do tri�ngulo: ")
    leia (ladoUmTriangulo)

    escreva ("Digite o valor do segundo lado do tri�ngulo: ")
    leia (ladoDoisTriangulo)

    escreva ("Digite o valor do terceiro lado do tri�ngulo: ")
    leia (ladoTresTriangulo)

    se (ladoUmTriangulo==ladoDoisTriangulo e ladoUmTriangulo==ladoTresTriangulo e ladoDoisTriangulo==ladoTresTriangulo){

    escreva ("\nO tri�ngulo � equil�tero.")

    }

    senao{ se (ladoUmTriangulo==ladoDoisTriangulo){

    escreva ("\nO tri�ngulo � is�sceles.")

    }

    senao{ se (ladoDoisTriangulo==ladoTresTriangulo){

    escreva ("\nO tri�ngulo � is�sceles.")

    }

    senao{ se (ladoUmTriangulo==ladoTresTriangulo){

    escreva ("\nO tri�ngulo � is�sceles.")

    }

    senao{ se (ladoUmTriangulo!=ladoDoisTriangulo e ladoUmTriangulo!=ladoTresTriangulo e ladoDoisTriangulo!=ladoTresTriangulo){

    escreva ("\nO tri�ngulo � escaleno.")

    }
    }
    }
    }
    }

  }
}
