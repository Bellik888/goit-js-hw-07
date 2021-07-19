// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text оновлюючи властивість font - size.
// В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const refs = {
    inputFontSize: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.inputFontSize.addEventListener('change',onChangingTextFontSize);

function onChangingTextFontSize(event) {
    let fontSize = Number(event.currentTarget.value);
    refs.text.style.fontSize = `${ fontSize }px`;
};
