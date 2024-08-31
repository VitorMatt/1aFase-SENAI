/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let vetor = [27, 499, 47, 21, 19, 0, 255, 388, 1001, 200]
let numeroEscolhido = Number(prompt('Digite um número'))
let posicaoNumero

if (vetor.includes(numeroEscolhido)){
    
    posicaoNumero = vetor.indexOf(numeroEscolhido)
} else {

    alert('O número não está incluído no vetor.')
}

console.log(posicaoNumero)