// var array = ['a', 'b', 'c', 'd']
// console.log(array[3])
// array[5] = 'f'
// console.log(array[5])
// printDelimiter()
//
// var matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// console.log(matrix[2][0])
// printDelimiter()

// var example = [[[[[[[[[[[[[0]]]]]]]]]]]]]
// console.log(example[0][0][0][0][0][0][0][0][0][0][0][0][0][0])
// printDelimiter()

// переопределение переменных
var num = 10
num = 'star'
console.log(typeof num)
printDelimiter()

//циклы while
var count = 0
while (count<10){
    count++
    console.log(count)
}
printDelimiter()

//метода массива
// var fruits = ['banana','orange','melon', 67]
// fruits.push('lemon','pineapple')
// console.log(fruits)
// var firstFruit = fruits.shift()
// console.log(firstFruit)
// fruits.unshift('qa')
// console.log(fruits)
// var fruit = fruits.pop()
// console.log(fruits)
// console.log(fruit)
// var joinArr = fruits.join()
// console.log(Array.from(joinArr))
// console.log(Array.isArray(joinArr))
// fruits.splice(0,3, 4)
// console.log(fruits)
// fruits.reverse()
// console.log(fruits)
// printDelimiter()

//for
var names = ['azamat','aiperi', 'akmaral', 'kamila', 'maksim', 'tim']
var blackList = ['nurzada', 'elmira', 'tim', 'kamila']
for (var i = 0; i<names.length; i++){
    if (blackList.includes(names[i])){
        console.warn(`${names[i]} in blackList!!!`)
        continue;
    }
    console.log(`welcome,dear gust ${names[i]}`)
}
printDelimiter()
//for of
var numbers = [1,2,3,4,5]
for (var i of numbers){
    console.log(i)
}
printDelimiter()
// for in
var user = {
    name: 'Rustam',
    surname: 'Vundizov',
    phoneNumber: 42,
    isMarried: false,
    object: {
        name2: "john"
    },
    address: null,
}
for (var i in user){
    console.log(user[i])
}
printDelimiter()
// функции
// function-decoration

function printDelimiter() {
    console.log('-'.repeat(70))
}
printDelimiter()
//function-expression
var strLog = function (text) {
    return alert(text)
}
strLog(prompt())

var doCalc = function (num1,num2) {
    var sum = num1 + num2
    return console.log(sum)
}
doCalc (prompt())

