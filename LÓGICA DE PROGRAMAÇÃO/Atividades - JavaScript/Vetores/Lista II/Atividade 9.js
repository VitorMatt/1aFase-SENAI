// 9) Palíndromo é aquele elemento que, se lido de trás para frente e de frente para trás, é o mesmo. 
// Exemplos: 616, 2112 2442, 87655678. 
// Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. 
// (DESAFIO: fazer com 7 números e com palavras. Pesquisar o método de string splitovo que é muito legalzão).

let palindromo = [];
let ePalindromo = false;
let itemAdicionado;
let resposta;

resposta = prompt('Digite se você quer saber se um número ou uma palavra é palíndromo.').toLowerCase();

if (resposta=='numero' || resposta=='número'){

    for (i=0; i<7; i++){

        itemAdicionado = Number(prompt('Digite um número'));
        palindromo.push(itemAdicionado);
    }

    for (i=0; i<palindromo.length; i++){

        if (palindromo[i]==palindromo[palindromo.length-(i + 1)]){

            ePalindromo = true;
        } else {

            ePalindromo = false;
            break;
        }
    }

    if (ePalindromo==true){

        console.log('O número é um palíndromo.');
    } else {

        console.log('O número não é um palíndromo.');
    }

} else if (resposta=='palavra'){

    palindromo = prompt('Digite a palavra');
    
    palindromo.split('');

    for (i=0; i<palindromo.length; i++){

        if (palindromo[i]==palindromo[palindromo.length-(i + 1)]){

            ePalindromo = true;
        } else {

            ePalindromo = false;
            break;
        }
    }

    if (ePalindromo==true){

        console.log('A palavra é um palíndromo.');
    } else {

        console.log('A palavra não é um palíndromo.');
    }
}