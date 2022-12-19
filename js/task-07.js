let inputRef = document.querySelector('#font-size-control');
inputRef.addEventListener('input', changeSize);

let outputRef = document.querySelector('#text');


function changeSize (){
    console.dir(inputRef);
    console.log(inputRef.value)
    outputRef.style.fontSize = inputRef.value +'px';
};


