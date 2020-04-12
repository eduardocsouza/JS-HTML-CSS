function verificar(){
    let num = document.getElementById('num')        
    let tabuada = document.getElementById('tabuada') 

    if(num.value.length == 0){
        alert('Informe um valor')
    }else{
        var n = Number(num.value)
        var mult = 1
        tabuada.innerHTML = ''
        while(mult <= 10){
            let item  = document.createElement('option')
            item.text = `${n} x ${mult} = ${n*mult}`
            item.value = `tabuada${mult}`
            tabuada.appendChild(item) 
            mult++
        }
    }
    


}