/*7) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) 
e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).*/

let alturaUsuario
let pesoUsuario
let imcUsuario

alturaUsuario = Number(prompt('Qual sua altura?'))

pesoUsuario = Number(prompt('Qual seu peso?'))

imcUsuario = pesoUsuario / (alturaUsuario**2)

if (imcUsuario<18){

    alert ('Seu IMC está ' + imcUsuario.toFixed(2) + '.\nVocê está abaixo do peso.')
} else if (imcUsuario>=18 && imcUsuario<=25){

    alert ('Seu IMC está ' + imcUsuario.toFixed(2) + '.\nVocê está no peso ideal.')
} else if (imcUsuario>25){

    alert ('Seu IMC está ' + imcUsuario.toFixed(2) + '.\nVocê está acima do peso.')
}