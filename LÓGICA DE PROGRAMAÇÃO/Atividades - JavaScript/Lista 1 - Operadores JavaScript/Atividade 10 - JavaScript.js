/*10) As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em
média 200 anos. A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez.
Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes
de uma baleia dessa espécie por década.*/
    
    const mediaTempoDeVidaBaleia = 200
    const diferencaAnosCadaFilhote = 4 
    const quantidadeDecadasVidaBaleia = 20
    var totalFilhotesLongoVidaBaleia
    var mediaFilhotesBaleiaPorDecada

    totalFilhotesLongoVidaBaleia = mediaTempoDeVidaBaleia/diferencaAnosCadaFilhote

    mediaFilhotesBaleiaPorDecada = totalFilhotesLongoVidaBaleia/quantidadeDecadasVidaBaleia

    alert ('A baleia tem ao longo de sua vida em média de ' + totalFilhotesLongoVidaBaleia + ' filhotes.\nAs baleias tem em média de ' + mediaFilhotesBaleiaPorDecada + ' filhotes por década.')