// 3) Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **).

let numero = Number(prompt('Digite um número'));
let expoenteNumero = Number(prompt('Digite o valor do expoente.'));
let resultado = numero

if (expoenteNumero==0){

    alert('Resultado: 1');
} else {

    for (i=1; i<expoenteNumero; i++){
    
    resultado = resultado * numero
    }
    
    alert('Resultado: ' + resultado);
}