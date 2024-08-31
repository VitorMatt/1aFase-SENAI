/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let array = []

array.push(prompt('Adicione um item a lista.'))
array.push(prompt('Adicione um item a lista.'))
array.push(prompt('Adicione um item a lista.'))

if (array[2]!='leite'){

    array.push('leite')
}

console.log(array)