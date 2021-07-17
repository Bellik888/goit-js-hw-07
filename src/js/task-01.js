// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories, 
// знайде і виведе в консоль текст заголовка елемента(тега h2) і 
// кількість елементів в категорії(всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4



const refs = {
    categories: document.querySelector('#categories'),
    items: document.querySelectorAll('.item'),
    
};

//   Кількість категорій  ul#categories:
const quantityCategories = refs.categories.children.length;
console.log(`У списку ${quantityCategories} категорії`);


//  Заголовки тега h2 i кількість елементів в категорії:
refs.items.forEach(item => {
    console.log(`Категорія : ${item.querySelector('h2').textContent}`);
    console.log(`Кількість елементів: ${item.querySelector('ul').children.length}`);
});





