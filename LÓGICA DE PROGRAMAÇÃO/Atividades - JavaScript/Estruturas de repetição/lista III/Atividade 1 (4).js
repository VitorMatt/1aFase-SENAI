// 1) Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia.

let quantidadeMoedasUmCentavo = 0
let quantidadeMoedasCincoCentavos = 0
let quantidadeMoedasDezCentavos = 0
let quantidadeMoedasVinteCincoCentavos = 0
let quantidadeMoedasCinquentaCentavos = 0
let moedaEscolhida

do {

    moedaEscolhida = Number(prompt('Qual moeda você deseja depositar no cofre?'));

    switch(moedaEscolhida){

        case 1: 
        quantidadeMoedasUmCentavo++
        break

        case 5: 
        quantidadeMoedasCincoCentavos++
        break

        case 10: 
        quantidadeMoedasDezCentavos++
        break

        case 25: 
        quantidadeMoedasVinteCincoCentavos++
        break

        case 50: 
        quantidadeMoedasCinquentaCentavos++
        break

        case 0:
            break

        default:
            alert('Digite valores válidos! (1, 5, 10, 25 e 50)');
    }

} while (moedaEscolhida!=0);

alert(`Quantidade de moedas de 1 centavo depositadas: ${quantidadeMoedasUmCentavo}\nQuantidade de moedas de 5 centavos depositadas: ${quantidadeMoedasCincoCentavos}\nQuantidade de moedas de 10 centavos depositadas: ${quantidadeMoedasDezCentavos}\nQuantidade de moedas de 25 centavos depositadas: ${quantidadeMoedasVinteCincoCentavos}\nQuantidade de moedas de 50 centavos depositadas: ${quantidadeMoedasCinquentaCentavos}`);