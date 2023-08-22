//DZ5 NO/1
let op
function func() {

    let result;
    const num1 = Number(document.querySelector("#one").value);
    const num2 = Number(document.querySelector("#two").value);
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    document.querySelector("#result").innerHTML = result;
}
//DZ5 NO/2
const input = document.querySelector('#there')
const buttonDec = document.querySelector('.dec')
const buttonInk = document.querySelector('.ink')

buttonDec.onclick = () => {
    input.value = parseInt(input.value) - 1
}
buttonInk.onclick = () => {
    input.value = parseInt(input.value) + 1
}
//DZ5 NO/3
let newPrompt = document.querySelector('.prompt')
let textP = document.querySelector('.text')

newPrompt.addEventListener('click', () => {
    let promptWindows = prompt('введите текст')
    document.querySelector('.text').innerHTML = promptWindows
})