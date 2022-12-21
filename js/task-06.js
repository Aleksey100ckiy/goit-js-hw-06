const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', chechInputLength);

function chechInputLength (){
    let userInput = `${inputEl.value}`;
    if( userInput.length === Number(inputEl.dataset.length)){
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');  
        
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid')
        
    };
    
};
console.dir(inputEl);