//DZ6 NO/1
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
//DZ6 NO/2
let array1 = ['Капитал Карлмарсона', 'Русский', 'Красная шапочка', 'война и мир']
let array2 = array1.filter(filter => filter.includes('н') || filter.includes('Н'))
console.log(array2)