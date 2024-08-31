// 2) Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120).

let fatorialNumero = Number(prompt('Digite o número que você deseja saber o fatorial.'));

for (i=fatorialNumero - 1; i>0; i--){

    fatorialNumero = fatorialNumero * i
}

alert('O resultado é: ' + fatorialNumero);