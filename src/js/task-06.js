// Напиши скрипт, який би при втраті фокуса на інпут,
// перевіряв його вміст на правильну кількість символів.

const refs = {
    input: document.querySelector('#validation-input'),
};
refs.input.addEventListener('blur', onIsInputValid);

function onIsInputValid() {
    let inputValueLength = refs.input.value.length;
    let dataLength = refs.input.dataset.length;
    if (inputValueLength !== Number(dataLength)) {
        refs.input.classList.add('invalid');
    } else {
        refs.input.classList.remove('invalid');
        refs.input.classList.add('valid');
    }
};




