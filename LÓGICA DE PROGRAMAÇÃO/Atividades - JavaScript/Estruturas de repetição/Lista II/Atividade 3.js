// 3) Em um jogo de Tower Defense, o castelo (torre) tem um total de 500 de HP. Faça um programa no qual o usuário possa escolher entre 3 tipos de ataque e um de defesa: 

// A) Ataque Bomba -100HP
// B) Ataque Granada -80HP
// C) Ataque Arqueiro -40HP
// D) Defesa Escudo +20HP

const ataqueBomba = 100
const ataqueGranada = 80
const ataqueArqueiro = 40
const defesaEscudo = 20
let hpTorre = 500
let countRodadas = 0

while (hpTorre>0){
    
    let opcaoEscolhida = prompt('Digite qual ataque/defesa você deseja realizar.\nA) Ataque Bomba -100HP\nB) Ataque Granada -80HP\nC) Ataque Arqueiro -40HP\nD) Defesa Escudo +20HP').toLowerCase()

    switch (opcaoEscolhida){

        case 'a':
            hpTorre = hpTorre - ataqueBomba
            break
        
        case 'b':
            hpTorre = hpTorre - ataqueGranada
            break

        case 'c':
            hpTorre = hpTorre - ataqueArqueiro
            break

        case 'd':
            hpTorre = hpTorre + defesaEscudo
            break
    }

    alert('Hp total da torre: ' + hpTorre)
    countRodadas++
}

alert('A torre está desativada!\nTotal de rodadas: ' + countRodadas)
