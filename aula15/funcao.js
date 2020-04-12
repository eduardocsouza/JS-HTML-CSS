/**
 * função que retorna se é par o impar.
 */

function parimp(n){

    let result = n % 2
    if(result == 0){
        return console.log(`${n} é par`)
    }else{
        return console.log(`${n} é impar`)
    }
}

parimp(9)

console.log("---------------------------------------------------")

/**
 * função que faz um soma
 

 function soma(n1, n2){
     let soma = n1 + n2
     return console.log(`A soma dos númneors ${n1} + ${n2} é = ${soma}`)
 }

 soma(20, 20)

 */

 /**
  * nessa função na parte dos paramentros adicionamos o =1 nos dos parametro 
  * isso informa que. Se o parametro n1 não for adicionando o mesmo receberá 1
  * assim vale também para o n2. 
  */ 
function soma(n1=1, n2=1){
    let soma = n1 + n2
    return console.log(`A soma dos númneors ${n1} + ${n2} é = ${soma}`)
}

 soma()

 /**
  * Existe também a forma de passar uma função para dentro de uma varaiável.btn
  * 
  */

 let v = function soma(n1, n2){
    let soma = n1 + n2
    return console.log(`A soma dos númneors ${n1} + ${n2} é = ${soma}`)
}

v(10, 10)

//fomar recursiva pode chamar a mesma função dentro dela própia. 
function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

