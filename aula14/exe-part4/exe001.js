function verificar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var i  = 0 
    if(inicio.value.length == 0 && fim.value.length == 0 && passo.value.length == 0){
        alert('[ERRO] os campos não podem ser em bracos. ')
    }else if(Number(passo.value) == 1){
            res.innerHTML = 'Contando: '
            for(i = Number(inicio.value); i <= Number(fim.value); i++){
                res.innerHTML += `👉 ${i}`
            }
            res.innerHTML += `👌`
        
        }else if (Number(passo.value) >= 2 && Number(passo.value) != 0){                
                res.innerHTML = 'Contando: '
           for(i = Number(passo.value); i <= Number(fim.value); i = i + Number(passo.value)){
                res.innerHTML += `👉 ${i}`                
           }
           res.innerHTML += `👉 🤚`
        
        }else if(Number(passo.value) == 0){
            alert('Passo não pode ser menor que 1. CONSIDERANDO PASSO 1') 
            res.innerHTML = 'Contando: '
            for(i = 1; i <= Number(fim.value); i++){
                
                res.innerHTML += `👉 ${i}`
            }
            res.innerHTML += `👌`           
        }
    
    
}