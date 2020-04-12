function carregar(){
    var msg = document.getElementById('msg');
    var foto = document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    //escrevendo uma mensagem na div de id=msg.
    msg.innerHTML = `Agora são ${hora}:${minutos}.`

    //alterando a foto utilizando a div que contém uma tag img com o id=foto.
    if (hora >= 0 && hora < 12){
        //iremos trocar a foto com o comando abaixo.
        foto.src = './img/manha.png'
    }else if(hora >= 12 && hora < 18){
        foto.src = './img/tarde.png'
    }else{
        foto.src = './img/noite.png'
    }
}