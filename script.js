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
            gen = 'um homem'
            if(idade >= 0 && idade < 10 ){
                img.setAttribute ('src','meninokd.png')
            }else if (idade < 21) {
                img.setAttribute ('src','menino.png')
            }else if (idade < 50 ) {
                img.setAttribute ('src','adulto.png')
            }else{
                img.setAttribute ('src','idoso.png')
            }
        } else if (sex[1].checked){
            gen =  'uma mulher'
            if(idade >= 0 && idade < 10 ){
                img.setAttribute ('src','meninakd.png')
            }else if (idade < 21) {
                img.setAttribute ('src','menina.png')
            }else if (idade < 50 ) {
                img.setAttribute ('src','adulta.png')
            }else{
                img.setAttribute ('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}