console.log('hello world')

var name = 'Rustam'

console.log(name)

var nameAndSurname = 'Vundizov Rustam'

console.log(name + ' ' + nameAndSurname)

var text = 'привет'

console.log(typeof text) // метод для того. что бы узнать тип

//методы строк

console.log(text.toUpperCase()) //верхний регистр
console.log(text.toLowerCase()) //нижний регистр
console.log(text.length) //считает количество букв
console.log(text.repeat(5)) // повторение

number

var number = 'text'

console.log(typeof number.toString())

var number2 = 3

console.log(number - number2)
console.log(number + number2)
console.log(number / number2)
console.log(number * number2)
console.log(number ** number2)
console.log(number + number2)

var isMarried = false

console.log(isMarried)

var userName = prompt('enter your name')
var userSurname = prompt('enter your surname')
var userAge = prompt('enter your age')

if (userAge <= 18) {
    console.log('привет ' + userName)
} else if (userAge >= 19 && userAge <= 50) {
    console.log('здраствуйте ' + userSurname, userName)
} else if (userAge >= 51 && userAge <= 85) {
    console.log('добро пожаловать ' + userSurname, userName)
} else {
    alert('введите коректные данные!')
}





















