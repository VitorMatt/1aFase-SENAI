/*13) Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
  - "Infantil A" de 5 a 10 anos de idade
  - "Juvenil A" de 11 a 17 anos de idade
  - "Senior" com 18 anos de idade ou mais*/

  const categoriaUm = 'Infantil'
  const categoriaDois = 'Juvenil'
  const categoriaTres = 'Senior'
  let idadeUsuario
  
  idadeUsuario = Number(prompt('Qual a sua idade?'))

  if (idadeUsuario>=5 && idadeUsuario<=10){

    alert ('Você pertence a categoria ' + categoriaUm + '.')
  } else if (idadeUsuario>=11 && idadeUsuario<=17){

    alert ('Você pertence a categoria ' + categoriaDois + '.')
  } else {

    alert ('Você pertence a categoria ' + categoriaTres + '.')
  }