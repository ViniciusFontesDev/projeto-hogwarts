function escolhido(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var sexo = document.getElementsByName('sexo')
    var casa = document.getElementsByName('casa')
    if (sexo[0].checked && casa[0].checked){
        //Masc. Grifinória
        msg.innerText = 'Homem da Grifinória!!!'
        img.src = 'escolha/imagem/logogrifinoria.png'  
        document.body.style.background = '#7F0909'
    } else if (sexo[0].checked && casa[1].checked){
        //Masc. Sonserina
        msg.innerText = 'Homem da Sonserina!!!'
        img.src = 'escolha/imagem/logosonserina.png'  
        document.body.style.background = '#0D3A2D'
    } else if (sexo[0].checked && casa[2].checked){
        //Masc. Corvinal
        msg.innerText = 'Homem da Corvinal!!!'
        img.src = 'escolha/imagem/logocorvinal.png'  
        document.body.style.background = '#0E1A40'
    } else if (sexo[0].checked && casa[3].checked){
        //Masc. Lufa-Lufa
        msg.innerText = 'Homem da Lufa-Lufal!!!'
        img.src = 'escolha/imagem/logolufalufa.png'  
        document.body.style.background = '#FFDB00'
    } else if (sexo[1].checked && casa[0].checked){
        //Fem. Grifinória
        msg.innerText = 'Mulher da Grifinórial!!!'
        img.src = 'escolha/imagem/logogrifinoria.png'  
        document.body.style.background = '#7F0909'
    } else if (sexo[1].checked && casa[1].checked){
        //Fem. Sonserina
        msg.innerText = 'Mulher da Sonserina!!!'
        img.src = 'escolha/imagem/logosonserina.png'  
        document.body.style.background = '#0D3A2D'
    } else if (sexo[1].checked && casa[2].checked){
        //Fem. Corvinal 
        msg.innerText = 'Mulher da Corvinal!!!'
        img.src = 'escolha/imagem/logocorvinal.png'  
        document.body.style.background = '#0E1A40'
    } else{
        //Fem. Lufa-Lufa
        msg.innerText = 'Mulher da Lufa-Lufal!!!'
        img.src = 'escolha/imagem/logolufalufa.png'  
        document.body.style.background = '#FFDB00'
    }
}