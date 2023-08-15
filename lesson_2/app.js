//4)undefined неопределёный тип данных
let lesson = undefined
console.log(lesson)
//5)null нулевой тип данных
var lesson2 = null
console.log(typeof lesson2)

//NaN not a number
// var notANumber = 67 * 'text'
// console.log(notANumber)
//
// // switch..case
// var age = Number(prompt('age'))
// switch (age){
//     case 24:
//         console.error('Error')
//         break
//     case 25:
//         console.error('Error')
//         break
//     case 26:
//         alert('OK')
//         break
//     default:
//         console.log('unknow age')
// }

// var color = prompt('введите цвет сфктофора')
// switch (color){
//     case 'red':
//         console.log('stop')
//         break
//     case 'yellow':
//         console.log('приготовьтесь')
//         break
//     case 'green':
//         console.log('start')
//         break
//     default:
//         console.log('вводите ккоректный цвет')
// }
// object
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
console.log(user.name)

// добавление
user.course = 'geeks'
console.log(user)
// удаление
delete user.object
console.log(user)
// изменить
user['isMarried'] = undefined
console.log(user)
// metod object
console.log(Object.values(user))
console.log(Object.keys(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('address'))

// array
var array = ['text', 78, null, undefined, true,[1,2,3], {}, NaN]
console.log(typeof array)
//индефикация
console.log(array[4])
console.log(array.length-1)
console.log(array[5][2])
console.log(array[0][2])
//циклы
//for
for (var i = 0; i <= 10; i++){
    console.log(i)
}

var array2 = ['rustam', 'alim', 'ismail']
for (var i = 0; i < array2.length; i++){
    if (array2[i][0] === 'a' || array2[i][0] === 'A'){
        console.log(`имя которое начинается с буквы а - ${array2[i]}`)
    }else {
        console.log(`остальные имена - ${array2[i]}`)
    }
}