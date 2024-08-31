/*3) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY)
e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. */

let anoNascimentoUsuario
let anoAtual
let idadeUsuarioEmAnos
let idadeUsuarioEmMeses
let idadeUsuarioEmSemanas
let idadeUsuarioEmDias

anoNascimentoUsuario = Number(prompt ('Digite o ano de seu nascimento: '))
anoAtual = Number(prompt ('Digite o ano atual: '))

idadeUsuarioEmAnos = anoAtual - anoNascimentoUsuario

idadeUsuarioEmMeses = idadeUsuarioEmAnos * 12

idadeUsuarioEmSemanas = idadeUsuarioEmAnos * 52

idadeUsuarioEmDias = idadeUsuarioEmAnos * 365

alert ('Idade em anos: ' + idadeUsuarioEmAnos + '\nEm meses: ' + idadeUsuarioEmMeses + '\nEm semanas: ' + idadeUsuarioEmSemanas + '\nEm dias: ' + idadeUsuarioEmDias)
