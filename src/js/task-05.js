// Напиши скрипт який, при наборі тексту в інпут input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};


refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    event.currentTarget.value === '' ? refs.output.textContent = 'незнайомець' : refs.output.textContent = event.currentTarget.value
    
 };