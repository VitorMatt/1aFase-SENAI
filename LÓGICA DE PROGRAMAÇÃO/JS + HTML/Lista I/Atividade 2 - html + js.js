// 2) Criar uma mini-calculadora SIMPLES, com HTML e JS.
// A calculadora deve ter:

// -> Título, duas labels, dois inputs e quatro botões.
// -> Utilizar os 2 valores dos inputs para realizar a operação do botão clicado.
// -> Mostra o resultado em um alert.

let numeroUm = document.getElementById('numeroUm')
let numeroDois = document.getElementById('numeroDois')
let operadorEscolha = document.getElementById('operadorEscolha')
let mensagem = document.getElementById('mensagem')

function calcularNumeros(){

    if (operadorEscolha.value=='Somar'){

        somaNumeros()
    } else if (operadorEscolha.value=='Subtrair'){

        subtracaoNumeros()
    } else if (operadorEscolha.value=='Multiplicar'){

        multiplicacaoNumeros()
    } else if (operadorEscolha.value=='Dividir'){

        divisaoNumeros()
    }
}

function somaNumeros(){
    
    let somaNumeros = Number(numeroUm.value) + Number(numeroDois.value)
    somaNumeros = somaNumeros.toFixed(2)

    mensagem.innerHTML = 'O resultado é ' + somaNumeros
}
function subtracaoNumeros(){

    let subtracaoNumeros = Number(numeroUm.value) - Number(numeroDois.value)
    subtracaoNumeros = subtracaoNumeros.toFixed(2)


    mensagem.innerHTML = 'O resultado é ' + subtracaoNumeros
}

function multiplicacaoNumeros(){

    let multiplicacaoNumeros = Number(numeroUm.value) * Number(numeroDois.value)
    multiplicacaoNumeros = multiplicacaoNumeros.toFixed(2)

    mensagem.innerHTML = 'O resultado é ' + multiplicacaoNumeros
}

function divisaoNumeros(){

    let divisaoNumeros = Number(numeroUm.value) / Number(numeroDois.value)
    divisaoNumeros = divisaoNumeros.toFixed(2)

    mensagem.innerHTML = 'O resultado é ' + divisaoNumeros
}