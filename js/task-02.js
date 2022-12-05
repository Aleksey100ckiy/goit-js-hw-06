const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.getElementById('ingredients');

let li1 = document.createElement('li');
li1.classList.add('item');
li1.textContent = ingredients[0];
console.log(li1)

let li2 = document.createElement('li');
li2.classList.add('item');
li2.textContent = ingredients[1];
console.log(li2)


let li3 = document.createElement('li');
li3.classList.add('item');
li3.textContent = ingredients[2];
console.log(li3)

let li4 = document.createElement('li');
li4.classList.add('item');
li4.textContent = ingredients[3];
console.log(li4)

let li5 = document.createElement('li');
li5.classList.add('item');
li5.textContent = ingredients[4];
console.log(li5)

let li6 = document.createElement('li');
li6.classList.add('item');
li6.textContent = ingredients[5];
console.log(li6)

mainList.append(li1,li2, li3, li4, li5, li6);



