programa {
  funcao inicio() {

    /*5) Verificador de idade para desconto no cinema: 
    Escreva um programa que pergunte a idade do usu�rio e, se ele tiver menos de 12 anos, conceda um desconto de 50% no ingresso do cinema; 
    se ele tiver entre 12 e 18 anos, conceda um desconto de 25%; caso contr�rio, n�o conceda nenhum desconto.*/

    inteiro idadeUsuario
    inteiro descontoMenosDeDozeAnos = 50
    inteiro descontoEntreDozeEDezoitoAnos = 25

    escreva ("\nOl�, digite sua idade para saber seu desconto no cinema: ")
    leia (idadeUsuario)

    se (idadeUsuario<0 ou idadeUsuario>120){

    escreva ("\nDigite uma resposta v�lida! Por favor, tente novamente.\n")
    inicio()

    }

    senao{ se (idadeUsuario<12){

    escreva ("\nVoc� tem 50% de desconto! :)")

    }

    senao{ se (idadeUsuario>=12 e idadeUsuario<18){

    escreva ("\nVoc� tem 25% de desconto! ^-^")
    
    }

    senao{ se (idadeUsuario>=18){

    escreva ("\nInfelizmente voc� n�o tem nenhum desconto.\n:(")

    }
    }
    }
    }
    
  }
}
