//DZ3 NO/1
var arrNums = [123,234,256,345,456,567,543,67,23,28,50]
var newArray = []
for (var i = 0; i < arrNums.length; i++){
 if (arrNums[i].toString()[0] === '2' || arrNums[i].toString()[0] === '5'){
  newArray.push(arrNums[i])
   }
 }
console.log(newArray)



//DZ3 NO/2
var dataType = function (data) {
 console.log(typeof data)
}
  dataType(false)
  dataType(43)
  dataType('hello world!')

//DZ3 NO/3
var arrayTeg = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol','br']
var objectTeg = {}
for (var teg of arrayTeg){
    if (objectTeg [teg]){
        objectTeg [teg]++
    }else {
        objectTeg [teg] = 1
    }
}
console.log(objectTeg)
