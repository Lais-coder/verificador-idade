function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!!')
    } else {
        var sex = window.document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')
        if(sex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute ('scr','meninokd.png')
            }else if (idade < 21) {
                // jovem 
                img.setAttribute ('scr','meninokd.png')
            }else if (idade < 50 ) {
                // adulto
            }else{
                // idoso
            }
        } else if (sex[1].checked){
            gen =  'Mulher'
            if(idade >= 0 && idade < 10 ){
                //criança
            }else if (idade < 21) {
                // jovem 
            }else if (idade < 50 ) {
                // adulto
            }else{
                // idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade}`
    }
}