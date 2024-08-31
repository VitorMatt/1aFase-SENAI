// 1) Criar um programa onde o usuário digite o seu ano de nascimento e retorne a geração a qual ele pertence:

// Sem Geração (até 1945)
// Baby Boomers (nascidos entre 1946 e 1964)
// Geração X (1965-1980)
// Geração Y ou Millennials (1981-1996)
// Geração Z (1997-2010)
// Geração Alfa (a partir de 2011)

const semGeracao = 1945
const babyBoomers = 1964
const geracaoX = 1980
const geracaoY = 1996
const geracaoZ = 2010
const anoAtual = 2024
let anoNascimentoUsuario

anoNascimentoUsuario = Number(prompt('Qual o ano de seu nascimento?'))

switch (true){

    case anoNascimentoUsuario<=semGeracao:
        alert ('Você NÃO tem geração!!')
        break
    
    case anoNascimentoUsuario>semGeracao && anoNascimentoUsuario<=babyBoomers:
        alert('Você pertence à geração "Baby Boomers"!')
        break

    case anoNascimentoUsuario>babyBoomers && anoNascimentoUsuario<=geracaoX:
        alert('Você pertence à geração X!')
        break

    case anoNascimentoUsuario>geracaoX && anoNascimentoUsuario<=geracaoY:
        alert('Você pertence à geração Y!')
        break

    case anoNascimentoUsuario>geracaoY && anoNascimentoUsuario<=geracaoZ:
        alert('Você pertence à geração Z!')
        break

    case anoNascimentoUsuario>geracaoZ && anoNascimentoUsuario<=anoAtual:
        alert('Você pertence à geração Alfa!')
        break

    default:
        alert('Número inválido! Digite um número até 2024!')
}