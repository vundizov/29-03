const dragAndDrop = () => {
    const card = document.querySelector('.list__card')
    const cells = document.querySelectorAll('.list__cell')
    const dragStart = function () {
        setTimeout(()=>{
            this.classList.add('hide')
        }, 0)
    }
    const dragEnd = function (){
        this.classList.remove('hide')
    }
    const dragOver = function(e) {
        e.preventDefault()
    }
    const dragEnter = function (){
        this.classList.add('hovered')
    }
    const dragLeave = function (){
        this.classList.remove('hovered')
    }
    const dragDrop = function (){
        this.append(card)
        this.classList.remove('hovered')
    }


    cells.forEach((cell)=>{
        cell.addEventListener('dragover', dragOver)
        cell.addEventListener('dragenter', dragEnter)
        cell.addEventListener('dragleave',dragLeave)
        cell.addEventListener('drop', dragDrop)
    })

    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend',dragEnd )
}
dragAndDrop()