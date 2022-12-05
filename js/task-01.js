
const list = document.querySelector('#categories' );
for ( const elem of list.children) {
    console.log(`Number of categories: ${list.children.length}`)

    
}
let firstCategory = document.querySelector('h2');
firstCategory = firstCategory.firstChild.nodeValue; 
console.log(`Category: ${firstCategory}`);
let itemAnimal = document.querySelector('.item ul');
itemAnimal = itemAnimal.children.length;
console.log(`Elements: ${itemAnimal}`);
// console.log(`Category: ${}`);
// console.log(`Elements: ${}`);
// console.log(`Category: ${}`);
// console.log(`Elements: ${}`);


// далі не соображу...