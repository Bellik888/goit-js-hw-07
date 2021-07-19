// Лічильник складається зі спана і кнопок,
// які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу



const refs = {
    decrement: document.querySelector('[data-action ="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};

refs.increment.addEventListener('click', onIncrement);
refs.decrement.addEventListener('click', onDecrement);

function onIncrement() {
    refs.value.textContent = Number(refs.value.textContent) + 1;
};

function onDecrement() {
    if (refs.value.textContent > 0) {
        refs.value.textContent = Number(refs.value.textContent) - 1;
    };
};
 
