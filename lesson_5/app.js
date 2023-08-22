//DOM
var text = document.getElementsByClassName('text')
console.log(text) //результат в виде псевдо массива
text[1].style.color = 'yellow'
text[0].innerHTML = 'hello from js'
//id
var button = document.getElementById('btn')
console.log(button)
//tag
var btn = document.getElementsByTagName('button')
console.log(btn)
button.addEventListener('click', ()=> console.log('click'))
//filter
//
// var array = [
//     {name:'Rustam', age:33},
//     {name:'Rustam', age:32},
//     {name:'Rustam', age:24},
//     {name:'Rustam', age:76},
//     {name:'Rustam', age:75},
//     {name:'Rustam', age:25},
//     {name:'Rustam', age:66},
// ]
const input = document.querySelector('input')
const buttonDec = document.querySelector('.dec')
const buttonInk = document.querySelector('.ink')

buttonInk.addEventListener('click', ()=>{
    input.value = parseInt(input.value) - 1

})
buttonDec.addEventListener('click', ()=>{
    input.value = parseInt(input.value) + 1
})

