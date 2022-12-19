const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', chechInputLength);

function chechInputLength (){
    let userInput = `${inputEl.value}`;
    if( userInput.length !== Number(inputEl.dataset.length) ){
        return inputEl.classList.add('invalid')  
    } else{
        return inputEl.classList.add('valid');
    };
};
