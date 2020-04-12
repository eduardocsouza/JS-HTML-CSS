function verificar(){

    var fano = document.getElementById('txt')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano || fano.value.length < 4){
        window.alert('[ERRO] valor não informado ou ano não existe')
    }else{
        var checked_radio = document.getElementsByName('radiosex')
        var sexo = checked_radio[0].checked ? 'Homem' : 'Mulher'
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        if(sexo == 'Homem' && idade >= 0 && idade <= 10){
            img.setAttribute('src', './img/bb-man.png')
        }else if(sexo == 'Mulher' && idade >= 0 && idade <= 10){
            img.setAttribute('src', './img/bb-femi.png')
        }else if(sexo == 'Homem' && idade <= 49){
            img.setAttribute('src', './img/jovem-man.png')
        }else if(sexo == 'Mulher' && idade <= 49){
            img.setAttribute('src', './img/jovem-femi.png')
        }else if(sexo == 'Homem' && idade >= 50){
            img.setAttribute('src', './img/idoso-man.png')
        }else{
            img.setAttribute('src', './img/idoso-femi.png')
        }     
    }
    res.innerHTML = `Detectado ${sexo} de ${idade} anos de idade`
    res.appendChild(img)
}
