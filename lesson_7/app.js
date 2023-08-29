const input = document.querySelector('#input');
const createButton = document.querySelector('#create_button');
const todoList = document.querySelector('#todo_list');

const createTodo = () => {
    //1
    const div = document.createElement('div');
    const divButton = document.createElement('div');
    const text = document.createElement('h3');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    //2
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

    deleteButton.onclick = () => div.remove()
    editButton.onclick = () => {
        const newText = prompt(`EDIT: ${text.innerText}`).trim()
        newText === '' ? alert('Заполните поле'): text.innerText = newText
    }
    text.addEventListener('click', () => {
        text.classList.toggle('toggle')
    })

};

let emptyInput = () => {
    if (input.value.trim() === '') {
        alert('Заполните поле');
    } else {
        createTodo();
    }
};

createButton.onclick = emptyInput;

window.onkeydown = (event) => {
    if (event.code === 'Enter'){
        createTodo()
    }
}
//truthy and falsy - выражение
//falsy -> false , 0, '', "",``, undefined, null, NaN, -0 0n

// const element = 56
// console.log(element ? 'true' : 'false')
//
//
//
// //7-8 bigint - sumbol
// const num = 78n
// console.log(num)
//
// //ООП
// class Animal {
//     constructor(option) {
//         this.name = option.name
//         this.age = option.age
//         this.hasTail = option.hasTail
//     }
//     voice (){
//         console.log('гра-гра-гра')
//     }
// }
// class Pigs extends Animal {
//     constructor(options) {
//         super(options);
//         this.hooves = options.hooves
//         this.pink_skin = options.pink_skin
//     }
// }
// const peppa = new Pigs( {
//     name:'Peppa',
//     age:5,
//     hasTail:true,
//     hooves: 4,
//     pink_skin: true
// })
// console.log(peppa)
// console.log(Animal)

//madam, i'm adam

const isLetter = (letter) => {
    return letter.toLowerCase() !== letter.toUpperCase()

}

const isStartEndLetter = (l1,l2) => {
  return l1.toLowerCase() === l2.toLowerCase()
}
const isPalindrom = (str) => {
    let start = 0
    let end = str.length - 1

    while (start < end){
        if (!isLetter(str[start])){
            start++
            continue
        }
        if (!isLetter(str[end])){
            end--
            continue
        }
        if (isStartEndLetter(str[start],str[end]))return false
        start++
        end--
    }
    return true
}
console.log(isPalindrom(23))
