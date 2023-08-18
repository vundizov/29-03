
var htmlTag = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol','br']
var object = {}
for (var i = 0; i < htmlTag.length; i++){
    if (object.hasOwnProperty(htmlTag[i])){
        object[htmlTag[i]] += 1
    }else {
        object[htmlTag[i]] = 1
    }
}
console.log(object)
//метод sort и ананимные функции
console.log(Object.keys(object).sort(function (t1, t2) {
    return object[t1] - object[t2]
}))

// стрелочные функции
var array = [1,'2',3]
var getPosition = (element, array) => {
    for (var i = 0; i < array.length; i++){
        if (array[i] === element){
            return console.log(i)
        } else {
            console.log('not found')
        }
    }
}
getPosition(3, array)

var sayHello = (text) => console.log(text)
sayHello('25352')

// тернарные операторы
var getMax = (num1, num2) => console.log(num1 > num2 ? num1 :num2)
getMax(2,5)

var age = prompt('age')
console.log(age < 18 ? 'not go':'go')

// HOF - hide ordered function функции высшего порядка
// callback-function
var alertName =  (funcName) => funcName ()

var windowName = () => alert('Rustam')
alertName(windowName)

function buttonClick (){
    return console.log('click')
}
var button = document.querySelector('.btn')

button.addEventListener('click', buttonClick)


var arrayFunction = (array2) => {
    var sum = 0
    for (var i = 0; i < array2.length; i++){
        sum += array2[i]
    }
    return console.log(sum)
}
arrayFunction(12,1)
//DOM
console.dir(document)
console.dir(document.body.style.backgroundColor = 'green')
