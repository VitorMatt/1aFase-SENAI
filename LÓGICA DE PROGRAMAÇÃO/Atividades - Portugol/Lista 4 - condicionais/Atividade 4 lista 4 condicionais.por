programa {
  funcao inicio() {

    /*4) Simulador de trânsito: Crie um programa que pergunte a idade do usuário e, se ele tiver idade suficiente para dirigir 
    (por exemplo, 18 anos), exiba "Você pode dirigir"; caso contrário, exiba "Você ainda não pode dirigir".*/

    inteiro idadeUsuario
    inteiro idadeMinimaParaDirigir = 18

    escreva ("\nDigite sua idade: ")
    leia (idadeUsuario)

    se (idadeUsuario<=0 ou idadeUsuario>120){

    escreva ("\nDigite um número válido!\n")
    inicio()

    }

    se (idadeUsuario>=idadeMinimaParaDirigir){

    escreva ("\nVocê pode dirigir tranquilamente!")

    }

    senao{ se (idadeUsuario<idadeMinimaParaDirigir){

    escreva ("\nVocê ainda não pode dirigir! (Mínimo 18 anos).")


    }
    }

  }
}
