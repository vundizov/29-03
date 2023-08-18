//DZ4 NO/1
function reverseString (string){
    return string.split ('').reverse().join("");
}
alert(reverseString('hello'))

//DZ4 NO/2
function calculateAverage(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    var sum = numbers.reduce((total, num) => total + num, 0)
    var average = sum / numbers.length
    return average
}

var average = calculateAverage(24, 63, 67, 234)
console.log(`Средняя арифметическая: ${average}`)

//DZ4 NO/3
var array = ["name", "John", "lastname", "Black", "age", "23"]

var arrayObject = {}
for (let i = 0; i < array.length; i += 2) {
    var key = array[i]
    var value = array[i + 1]
    arrayObject[key] = value
}

console.log(arrayObject)

//DZ4 NO/4
const array1 = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, "uioo"]

const arrayType = {}

for (var item of array1) {
    var typeOf = typeof item
    if (!arrayType[typeOf]) {
        arrayType[typeOf] = []
    }
    arrayType[typeOf].push(item);
}

var endArrays = Object.values(arrayType).sort((a, b) => a.length - b.length)

console.log(endArrays)


