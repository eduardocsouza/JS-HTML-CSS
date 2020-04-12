let um = [7, 8 ,9]
console.log(um[1] + 2)

//adicionar mais valor ao vector.btn
//o num[3] está informando que o vector num irá receber um valor na posição 3.
um[3] = 4;
console.log(um)
/**
 * um.push(): o push servi para adicionar valor ao array sem precisar saber 
 * qual posição está disponível. 
 */

um.push(5)
console.log(`Adicionado com um um.push(5) ${um}`)

/**
 * o length é um atributo utilizado para saber o tamanho do vector.
 */
console.log(`saber tamanho do vector >>> ${um.length}`)

/**
 * o um.sort(): Uma função utilizada para ordenar os valor do vector em ordem crescente.btn
 * 
 */
console.log(`Ordenando o vector com a função sort >>> ${um.sort()}`)

/**
 * para pecorrer coleções como array utilizaremos o a função for.
 */

for(let i = 0; i < um.length; i++){
    console.log(`meu elemento ${[i]}º de valor = ${um[i]}`)
}

/**
 * Mesmo exemplo acima. só que dessa vez estamos utilizando o for in. 
 * Uma forma mais simplificada. 
 */

 for( let i in um){
    console.log(um[i])
 }

 /**
  * indexOf: Utilizado para ralizar buscas dentro do array. 
  * informamos o valor e ele nos traz a chave onde o valor se encontra. 
  * 
  * Obs: se o indexOf retornar -1 é porque o valor informado não existe. 
  */

let nome = ['eduardo', 'thaynara', 'aldenise']
console.log(`index >> [${nome.indexOf('thaynara')}] << onde o valor se encontra`)