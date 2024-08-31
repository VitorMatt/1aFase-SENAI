/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

let tarefas = []

for (i=0; i<3; i++){
    tarefas.push(prompt('Ana, adicione um item a lista.'))
}

tarefas.splice(1, 1)

tarefas.push('Ligar ao médico')

console.log(tarefas)