programa {
  funcao inicio() {

    /*4) Simulador de tr�nsito: Crie um programa que pergunte a idade do usu�rio e, se ele tiver idade suficiente para dirigir 
    (por exemplo, 18 anos), exiba "Voc� pode dirigir"; caso contr�rio, exiba "Voc� ainda n�o pode dirigir".*/

    inteiro idadeUsuario
    inteiro idadeMinimaParaDirigir = 18

    escreva ("\nDigite sua idade: ")
    leia (idadeUsuario)

    se (idadeUsuario<=0 ou idadeUsuario>120){

    escreva ("\nDigite um n�mero v�lido!\n")
    inicio()

    }

    se (idadeUsuario>=idadeMinimaParaDirigir){

    escreva ("\nVoc� pode dirigir tranquilamente!")

    }

    senao{ se (idadeUsuario<idadeMinimaParaDirigir){

    escreva ("\nVoc� ainda n�o pode dirigir! (M�nimo 18 anos).")


    }
    }

  }
}
