let numtxt = document.getElementById('camp_n')
let lista = document.getElementById('lista')


let ar = []

function padrao(n){
    if(Number(n) > 0 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function checkList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(padrao(Number(numtxt.value)) && !checkList(Number(numtxt.value), ar)){
        ar.push(Number(numtxt.value))       
        let opt = document.createElement('option')
        let index = ar.indexOf(Number(numtxt.value))
        opt.text = `Valor ${ar[index]} adicionado.`
        opt.value = `index${index}`        
        lista.appendChild(opt)
        
        
        
    }else{
        window.alert('Erro!')
    }

        res.innerHTML = ''
        numtxt.value = ''
        numtxt.focus()
}

function finalizar(){
    if(ar.length == 0){
        alert('Informe um valor antes de finalizar!')

    }else{
        let res = document.getElementById('res')
        let list = ar.length
        let soma = 0
        let maior = ar[0]
        let menor = ar[0]
        
        for(let i = 0; i <ar.length; i++){
            if(ar[i] > maior)
                maior = ar[i]
            if(ar[i] < menor)
                menor = ar[i]
              
        }        
        for(let i in ar){            
            soma += ar[i]
        }        
        let total = soma / list

        res.innerHTML = `<p>Ao todo, temos ${list} números cadastrado.</p>`
        res.innerHTML += `<p>O maior número é ${maior}</p>`
        res.innerHTML += `<p>O menor número é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores são: ${soma}`
        res.innerHTML += `<p>A media dos valores são: ${total}`
    }
    
}





