var date = new Date()
var diaSem = date.getDay()

switch(diaSem){
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sábado')
        break
    case 7:
        console.log('domingo')
        break
    default:
        console.log('Erro! dia não existe')
        break
}