//1) Criar um projeto com HTML e JS, onde o usuário possa digitar três notas (inputs) e clicar em um botão para calcular a média (mostrar por alert).

let notaUm = document.getElementById('notaUm')
let notaDois = document.getElementById('notaDois')
let notaTres = document.getElementById('notaTres')

function mediaNotas(){

    const numeroDeNotas = 3
    let somaNotas = Number(notaUm.value) + Number(notaDois.value) + Number(notaTres.value)
    let mediaNotas = somaNotas / numeroDeNotas
    mediaNotas = mediaNotas.toFixed(1)

    alert('Média final: ' + mediaNotas)
}