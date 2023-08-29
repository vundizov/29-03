function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    if (answer.style.display === "none") {
        answer.style.display = "block";
        button.innerHTML = "Скрыть ответ";
        button.style.backgroundColor = "red";
    } else {
        answer.style.display = "none";
        button.innerHTML = "Показать ответ";
        button.style.backgroundColor = "green";
    }
}