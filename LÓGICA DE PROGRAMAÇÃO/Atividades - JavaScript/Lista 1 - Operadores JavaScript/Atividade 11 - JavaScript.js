/*11) Um sistema de reservas de ingressos do cinema, que deve permitir que o usuário
escolha o filme, o horário e o número de ingressos desejados. Após a seleção, deve ser
exibido o total a ser pago. Exibir ao usuário opções de filmes e horários. Os valores do
ingresso devem ser pré-definidos*/

const valorIngressoInteira = 36
const valorIngressoMeia = 18
var valorIngresso
var valorTotal = 0

function Ingressos(){

    const sessaoUm = '13:40'
    const sessaoDois = '14:50'
    const sessaoTres = '16:00'
    const sessaoQuatro = '17:20'
    const sessaoCinco = '19:30'
    const sessaoSeis = '21:30'
    let respostaUsuarioInteiroOuMeia
    let respostaUsuario
    let sessaoEscolhida
    let totalIngressosReservados = 0

    respostaUsuario = prompt('Comprar ingresso?')

    if (respostaUsuario=='sim' || respostaUsuario=='Sim'){

    
        alert ('Sessões disponíveis:\nSessão 1 - 13:40\nSessão 2 - 14:50\nSessão 3 - 16:00\nSessão 4 - 17:20\nSessão 5 - 19:30\nSessão 6 - 21:30')

    
        sessaoEscolhida = prompt('Escolha uma sessão.')


    if (sessaoEscolhida==1 || sessaoEscolhida=='13:40'){

        sessaoEscolhida = sessaoUm

    }

    else if (sessaoEscolhida==2 || sessaoEscolhida=='14:50'){

        sessaoEscolhida = sessaoDois

    }

    else if (sessaoEscolhida==3 || sessaoEscolhida=='16:00'){

        sessaoEscolhida = sessaoTres
    
    }

    else if (sessaoEscolhida==4 || sessaoEscolhida=='17:20'){

        sessaoEscolhida = sessaoQuatro
    
    }

    else if (sessaoEscolhida==5 || sessaoEscolhida=='19:30'){

        sessaoEscolhida = sessaoCinco
    
    }

    else if (sessaoEscolhida==6 || sessaoEscolhida=='21:30'){

        sessaoEscolhida = sessaoSeis
    
    }

    else {

        alert ('Resposta inválida, tente novamente!')
        Ingressos()
    }


    while (respostaUsuario=='Sim' || respostaUsuario=='sim'){

    respostaUsuarioInteiroOuMeia = prompt('Inteira ou meia?')


    if (respostaUsuarioInteiroOuMeia=='Inteira' || respostaUsuarioInteiroOuMeia=='inteira'){

        valorIngresso = valorIngressoInteira
    
    }

    else if (respostaUsuarioInteiroOuMeia=='Meia' || respostaUsuarioInteiroOuMeia=='meia'){

        valorIngresso = valorIngressoMeia
    
    }

    else {

        alert ('Resposta inválida, tente novamente!')
        Ingressos()
    }

    valorTotal = valorTotal + valorIngresso
    totalIngressosReservados = totalIngressosReservados + 1

    respostaUsuario = prompt('Deseja comprar outro ingresso?')
    }

    if (respostaUsuario=='não' || respostaUsuario=='Não'){

    
        alert ('Quantidade de ingressos reservados: ' + totalIngressosReservados + '\nSessão escolhida: ' + sessaoEscolhida + '\nValor total à pagar: R$' + valorTotal)
       
    }

    else {

        alert ('Digite uma resposta válida! Tente novamente.')
        Ingressos()
    }

    }
    else if (respostaUsuario=='não' || respostaUsuario=='Não'){


       alert('Ok...Volte mais tarde!')
    }

    else {

        alert ('Digite uma resposta válida! Tente novamente.')
        Ingressos()
    }
}

