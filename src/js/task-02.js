// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
// після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement().



const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  ingredientsRef.appendChild(item);
});

console.log(ingredientsRef);
