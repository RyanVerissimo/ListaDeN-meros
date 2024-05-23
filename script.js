let num = document.getElementById('txtNumber')
let list = document.getElementById('list')
let res = document.getElementById('res')
let btnAdd = document.getElementById('add')
let btnFinish = document.getElementById('finish')
let values = []

btnAdd.addEventListener('click', toAdd)
btnFinish.addEventListener('click', toFinish)

function isNumber(n) {
    Number(n) >= 1 && Number(n) <= 100?true:false
}

function inList(n, l) {
    l.indexOf(Number(n)) != -1?true:false
}

function toAdd() {
    let number = Number(num.value)
    if(isNumber(number) && !inList(number, values)) {
        values.push(number)
        let item = document.createElement('option')
        item.text = `Valor ${number} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já inserido')
    }
}

function toFinish() {
    if(values.length === 0) {
        alert('Adicione valores antes')
    } else {
        let total = value.length
        let sum= 0
        let avarage = 0
        let bigger = values[0]
        let smaller = values[0]

        for(let pos in values) {
            sum += values[pos]
            if(values[pos] > bigger){
                bigger = values[pos]
            }
            if(values[pos] <smaller) {
                smaller = values[pos]
            }
            avarage = sum/total
            res.innerHTML = `<p>O total de número adicionados é: ${total}<p/>`
            res.innerHTML = `<p>A soma dos números adicionados: ${sum}<p/>`
            res.innerHTML = `<p>A média entre os números adicionados: ${avarage}<p/>`
            res.innerHTML = `<p>O maior número adicionado: ${bigger}<p/>`
            res.innerHTML = `<p>O menor número adicionado: ${smaller}<p/>`
        }
    }
}