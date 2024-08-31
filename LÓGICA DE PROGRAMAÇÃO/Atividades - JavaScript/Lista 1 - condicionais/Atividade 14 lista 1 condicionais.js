/*14) Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose. 
Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é 
intolerante à lactose (segunda pergunta). Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. 
Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose ou não. 
Ao final, informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não pode "Dieta inadequada, 
contém alimentos aos quais o paciente é intolerante!".*/

let nomeUsuario
let respostaUsuario
let eCeliaco = false
let eIntolerante = false
let alimentoUmTemLactose = false
let alimentoUmTemGluten = false
let alimentoDoisTemLactose = false
let alimentoDoisTemGluten = false
let alimentoTresTemLactose = false
let alimentoTresTemGluten = false

nomeUsuario = prompt('Digite seu nome.')

respostaUsuario.toUpperCase() = prompt('Você é celíaco?')

if (respostaUsuario=='SIM'){

    eCeliaco = true
}

respostaUsuario .toUpperCase()= prompt('Você é intolerante a lactose?')

if (respostaUsuario=='SIM'){

    eIntolerante = true
}

prompt('Digite o primeiro alimento.')

respostaUsuario .toUpperCase()= prompt('O alimento contém glúten?')

if (respostaUsuario=='SIM'){

    alimentoUmTemGluten = true
}

respostaUsuario.toUpperCase() = prompt('O alimento contém lactose?')

if (respostaUsuario=='SIM'){

    alimentoUmTemLactose = true
}

prompt('Digite o segundo alimento.')

respostaUsuario.toUpperCase() = prompt('O alimento contém glúten?')

if (respostaUsuario=='SIM'){

    alimentoDoisTemGluten = true
}

respostaUsuario.toUpperCase() = prompt('O alimento contém lactose?')

if (respostaUsuario=='SIM'){

    alimentoDoisTemLactose = true
}

prompt('Digite o terceiro alimento.')

respostaUsuario = prompt('O alimento contém glúten?')

if (respostaUsuario=='SIM'){

    alimentoTresTemGluten = true
}

respostaUsuario = prompt('O alimento contém lactose?')

if (respostaUsuario=='SIM'){

    alimentoTresTemLactose = true
}

if (eCeliaco==false && eIntolerante==false){

    alert(nomeUsuario + ', a sua dieta está adequada!')

} else if (eCeliaco==true && eIntolerante==false){

    if (alimentoUmTemGluten==true || alimentoDoisTemGluten==true || alimentoTresTemGluten==true){

    alert(nomeUsuario + ', a sua dieta não está adequada!')
} else {
    alert(nomeUsuario + ', a sua dieta está adequada!')
}

} else if (eCeliaco==false && eIntolerante==true){

    if (alimentoUmTemLactose==true || alimentoDoisTemLactose==true || alimentoTresTemLactose==true){

    alert(nomeUsuario + ', a sua dieta não está adequada!')
} else{

    alert(nomeUsuario + ', a sua dieta está adequada!')
} 

} else {

    alert ('A sua dieta está adequada!')
}