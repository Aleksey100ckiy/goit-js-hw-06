const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const takeUlRef = document.querySelector('.gallery')
// const array = [];
// const createList = options => {
//   return options.map(option => {
//     // let onceEl = document.createElement('li');
//     // onceEl.classList.add('item');
    
//     // const imageEl = document.createElement('img');
//     // imageEl.src = option.url;
//     // imageEl.alt = option.alt;
//     // imageEl.classList.add('image');
    
//     // imageEl.width = 400;
//     // onceEl.appendChild(imageEl);
//     return onceEl;
//   });
// };

const imagesMap = images.map(({url, alt}) =>
(`<li>
<img class="item" src="${url}" alt="${alt}" width = 400>
</li>`)
).join('');
takeUlRef.insertAdjacentHTML("afterbegin", imagesMap);
// console.log(imagesMap);





    
   