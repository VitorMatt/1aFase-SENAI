function calcularResultado(){

    let respostaUm = document.getElementById('selectUm')
    let respostaDois = document.getElementById('selectDois')
    let respostaTres = document.getElementById('selectTres')
    let resultado = document.getElementById('resultado')
    let pontuacaoFinal

    if (respostaUm.value=='ucrania'){

        Number(respostaUm = 2.5)
    } else {

        Number(respostaUm = 0)
    }

    if (respostaDois.value=='atomo'){

        Number(respostaDois = 2.5)
    } else {

        Number(respostaDois = 0)
    }

    if (respostaTres.value=='1969'){

        Number(respostaTres = 5)
    } else {

        Number(respostaTres = 0)
    }

    if (checkbox.checked){

        pontuacaoFinal = respostaUm + respostaDois + respostaTres

        resultado.innerHTML = pontuacaoFinal
    } else {

        resultado.innerHTML = ''
    }
}

function zerarDados(){

    let resultado = document.getElementById('resultado')

    resultado.innerHTML = ''
}