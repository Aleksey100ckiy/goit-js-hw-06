
const listMain = document.querySelector('#categories' );
   
console.log(`Number of categories: ${listMain.children.length}`)   


let arrayHeaders = document.querySelectorAll('.item h2');

for (let a of arrayHeaders){
    console.log(`Category: ${a.textContent}`);

};

let arrayOfElements = document.querySelectorAll('ul li ul');



for(let a of arrayOfElements){
    console.log(`Elements: ${a.children.length}`);
};
// console.log(...finalArray);
// console.log(a.textContent);

// console.log(array);
// let arrayHeaders = document.querySelectorAll('.item li');


// let finalArray = [];
// let finalObject = {
//     Category: '',
//     Elements: '',
// };  

// finalArray.push(a.textContent);
    // finalOdject.category = a.textContent;