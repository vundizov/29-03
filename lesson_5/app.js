//DOM
// var text = document.getElementsByClassName('text')
// console.log(text) //результат в виде псевдо массива
// text[1].style.color = 'yellow'
// text[0].innerHTML = 'hello from js'
// //id
// var button = document.getElementById('btn')
// console.log(button)
// //tag
// var btn = document.getElementsByTagName('button')
// console.log(btn)
// button.addEventListener('click', ()=> console.log('click'))
//filter
var array = [
    {name:'Rustam', age:33},
    {name:'kamila', age:32},
    {name:'malik', age:24},
    {name:'umar', age:76},
    {name:'alim', age:75},
    {name:'igor', age:25},
    {name:'andrey', age:66},
]

let arrayFilter = array.filter(user => user.name.includes('u'))
console.log(arrayFilter);
let arrayAge = array.filter(age => age.age > 47)
console.log(arrayAge)
//map
const arrayMap = [23,35,67,23,12]
let arrayResiltat = arrayMap.map((number, index) => number / index)
console.log(arrayResiltat)
// const input = document.querySelector('input')
// const buttonDec = document.querySelector('.dec')
// const buttonInk = document.querySelector('.ink')
//
// buttonInk.addEventListener('click', ()=>{
//     input.value = parseInt(input.value) - 1
//
// })
// buttonDec.addEventListener('click', ()=>{
//     input.value = parseInt(input.value) + 1
// })


