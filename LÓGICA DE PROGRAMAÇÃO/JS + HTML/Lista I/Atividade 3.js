// 3) Criar um sistema clássico de jogos Tower Defense (Defesa de Torre) de acordo com a imagem disponibilizada. A Torre começa com estrutura em 100 e o usuário pode destruir ou construir, digitando valores nos campos e clicando nos botões de menos e mais. O valor de estrutura deve ser atualizado após destruir ou construir.

// A situação da Torre começa como Ativa, mas caso sua estrutura chegue em zero ou abaixo, atualizar a situação para "Destruída".

let estruturaTorre = document.getElementById('estruturaTorre')
let valorDestruido = document.getElementById('opcaoDestruir')
let valorConstruido = document.getElementById('opcaoConstruir')
let situacaoTorre = document.getElementById('situacaoTorre')

function destruicaoTorre(){

    estruturaTorre.value = Number(estruturaTorre.value) -  Number(valorDestruido.value)

    if (estruturaTorre.value<=0){

        situacaoTorre.value = 'DESATIVADA'
    } else {

        situacaoTorre.value = 'ATIVADA'
    }
}

function construcaoTorre(){

    estruturaTorre.value = Number(estruturaTorre.value) + Number(valorConstruido.value)

    if (estruturaTorre.value>0){

        situacaoTorre.value = 'ATIVADA'
    } else {

        situacaoTorre.value = 'DESATIVADA'
    }
}