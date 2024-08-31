// 3) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. 
// A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis
// 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete. 
// 4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). 
// Mostrar na tela o valor da compra de acordo com a opção escolhida.

const valorFrete = 12.50
const descontoAssinantePremiumOuGold = 20
const descontoAssinanteSilver = 10
let valorCompra 
let categoriaAssinante
let valorDesconto
let valorTotalComDesconto

categoriaAssinante = Number(prompt('Qual tipo de assinante você é?\n1) Assinante Premium\n2) Assinante Gold\n3) Assinante Silver\n4) Não assinante'))

valorCompra = Number(prompt('Qual o valor da sua compra?'))

switch (categoriaAssinante){

    case 1:
        valorDesconto = valorCompra * descontoAssinantePremiumOuGold / 100
        valorTotalComDesconto = valorCompra - valorDesconto

        alert('Valor da compra: R$ ' + valorCompra + '\nDesconto: -R$ ' + valorDesconto + '\nValor total com desconto: R$ ' + valorTotalComDesconto)
        break
    case 2:
        valorDesconto = valorCompra * descontoAssinantePremiumOuGold / 100
        valorTotalComDesconto = (valorCompra - valorDesconto) + valorFrete

        alert('Valor da compra: R$ ' + valorCompra + '\nDesconto: -R$ ' + valorDesconto + '\nValor do frete: +R$ ' + valorFrete + '\nValor total com desconto: R$ ' + valorTotalComDesconto)
        break

    case 3:
        valorDesconto = valorCompra * descontoAssinanteSilver / 100
        valorTotalComDesconto = (valorCompra - valorDesconto) + valorFrete

        alert('Valor da compra: R$ ' + valorCompra + '\nDesconto: -R$ ' + valorDesconto + '\nValor do frete: +R$ ' + valorFrete + '\nValor total com desconto: R$ ' + valorTotalComDesconto)
        break

    case 4:
        valorCompra = valorCompra + valorFrete

        alert('Valor do frete: +R$ ' + valorFrete + '\nValor total: R$ ' + valorCompra)
        break

    default:
        alert('resposta inválida!')
}