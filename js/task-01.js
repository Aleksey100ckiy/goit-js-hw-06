
const listMain = document.querySelector('#categories' );
   
console.log(`Number of categories: ${listMain.children.length}`)   

const itemsMain = [...listMain.children];
itemsMain.forEach((element) => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.childElementCount);
  });