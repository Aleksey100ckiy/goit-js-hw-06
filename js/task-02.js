const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const takeUl = document.querySelector('#ingredients')

const createList = options => {
  return options.map(option => {
    const onceEl = document.createElement('li');
    onceEl.classList.add('item');
    onceEl.textContent = option;
    
    return onceEl;
  });
};
const elements = createList(ingredients);
takeUl.append(...elements);



