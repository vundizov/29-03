//ES6+
//rest-параметры
// function getAllSum(...nums) {
//     let sum = nums.reduce((num1, num2)=> num1+num2)
//     console.log(sum)
// }
// getAllSum(4,3,2,4,6,7,8,)
//
// function convertUSD(usd, ...soms) {
//     console.log(usd, soms)
//     return soms.map(som => som / usd)
// //
// }
// console.log(convertUSD(89, 34000,10000,23000,))
//
// const num1 = [1,2,3]
// const num2 = [3,4,5]
// const nums = [...num1, ...num2]
// console.log(nums)
//
// //default-params
// function pushJoin(separator, ...array) {
//     let result = ''
//     for (let i = 0; i < array.length; i++){
//         result += array[i] + (i === array.length -1 ? '' : separator)
//     }
//     return result
// }
//
// console.log(pushJoin( '/', 1,2,3,4,5))

//this-контекст
// const user = {
//     name: 'Rustam',
//     surname: 'Vundizov',
//     phoneNumber: 42,
//     isMarried: false,
//     object: {
//         name2: "john"
//     },
//     address: null,
//     showInfo(){
//         console.log(`${this.name} ${this.surname} and other info`)
//     },
//     showInfo2(){
//         function info() {
//             console.log(`${this.name} ${this.surname} and other info`)
//         }
//         info()
//     }
// }
// user.showInfo()
// user.showInfo2()

//todolist
// const input = document.querySelector('#input')
// const createButton = document.querySelector('#create_button')
// const todoList = document.querySelector('#todo_list')
//
// const createTodo = () => {
//     //1
//
//     const div = document.createElement('div')
//     const divButton = document.createElement('div')
//     const text = document.createElement('h3')
//     const deleteButton = document.createElement('button')
//     const editButton = document.createElement('button')
//     //2
//     div.setAttribute('class', 'block_text')
//     divButton.setAttribute('class', 'div_button')
//     deleteButton.setAttribute('class', 'delete_button')
//     editButton.setAttribute('class', 'edit_button')
//
//     deleteButton.innerText = 'DELETE'
//     editButton.innerText = 'EDIT'
//
//
//     divButton.append(deleteButton, editButton)
//     div.append(text, divButton)
//     todoList.prepend(div)
//
//
// }
// // function textInput() {
// //     let inputCreate = document.querySelector('input').value
// //     document.querySelector(createTodo).innerHTML = inputCreate
// // }
// let emptyInput = (text) => {
//     if (input.value === ''){
//         alert('заполнте граффу')
//     }
//     else {
//         createButton.onclick = () => createTodo()
//     }
// }
//
// createButton.onclick = () => emptyInput()

const input = document.querySelector('#input');
const createButton = document.querySelector('#create_button');
const todoList = document.querySelector('#todo_list');

const createTodo = () => {
    const div = document.createElement('div');
    const divButton = document.createElement('div');
    const text = document.createElement('h3');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    div.setAttribute('class', 'block_text');
    divButton.setAttribute('class', 'div_button');
    deleteButton.setAttribute('class', 'delete_button');
    editButton.setAttribute('class', 'edit_button');

    deleteButton.innerText = 'DELETE';
    editButton.innerText = 'EDIT';

    divButton.append(deleteButton, editButton);
    div.append(text, divButton);

    const inputText = input.value;
    text.innerText = inputText;

    todoList.prepend(div);

    input.value = '';
    deleteButton.addEventListener('click', () => div.remove())
};

function textInput() {
    let inputCreate = document.querySelector('input').value;
    document.querySelector('#create_button').innerHTML = inputCreate;
}

let emptyInput = () => {
    if (input.value === '') {
        alert('Заполните поле');
    } else {
        createTodo();
    }
};

createButton.onclick = emptyInput;


