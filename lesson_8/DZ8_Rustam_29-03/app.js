const bgc = document.querySelector('.bgc')
const text = document.querySelector('.text')

const randomColor = function () {
    let colorId = '#'
    let numbers = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++){
        colorId += numbers[Math.floor(Math.random() * 16 )]
    }
    return colorId
}
bgc.addEventListener('click',() => {
    let colors = randomColor()
    bgc.style.backgroundColor = colors
    text.textContent = randomColor()
})




