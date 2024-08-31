// 1) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar? “. Quando for adicionado a cereja, mostrar a frase “Sua salada de frutas está pronta!”

let frutaEscolhida

alert('Monte sua salada de frutas!')

while (frutaEscolhida!='cereja'){

    frutaEscolhida = prompt('Qual fruta adicionar?').toLowerCase()
}

alert('Sua salada de frutas está pronta!')