// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити, 
// після чого рендериться колекція. При натисканні на кнопку Очистити, 
// колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число.
// Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.



const refs = {
    controlsDiv: document.querySelector('#controls'),
    btnRender: document.querySelector('[data-action="render"]'),
    btnDestroy: document.querySelector('[data-action="destroy"]'),
    wrapperDiv: document.querySelector('#boxes'),
    input: document.querySelector('input'),
};
refs.btnRender.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', onDestroyCollection);



function createBoxes(amount) {
    amount = refs.input.value;
    let arr = [];

   for (let i = 0; i < `${amount}`; i++) {
       arr.push(i);
   }
    let startWidth = 20;
    let startHeight = 20;
    arr.map(el => {
        const div = document.createElement('div');
        div.setAttribute('style', 'display: block; margin: 20px auto;  background-color: rgb(220,20,60); ');
        div.style.width = (startWidth += 10) + 'px';
        div.style.height = (startHeight += 10) + 'px';
        refs.wrapperDiv.append(div);
    })
};


function onDestroyCollection() {
    refs.wrapperDiv.innerHTML = '';
    refs.input.value = '';
};



