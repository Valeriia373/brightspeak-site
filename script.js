// Кнопка "Привітай мене!"
function sayHello() {
    alert("Привіт! Ласкаво просимо до BrightSpeak!");
}

// Кнопка "Натисни мене"
function changeContent() {
    const p = document.getElementById('welcome-text');
    if (p.textContent === "А що тут в нас?") {
        p.textContent = "Дякуємо за натискання!";
    } else {
        p.textContent = "А що тут в нас?";
    }
}