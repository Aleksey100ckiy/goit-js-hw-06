const inputEl = document.querySelector('#name-input');
const outputSpanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) =>{
    return event.currentTarget.value 
    ? (outputSpanEl.textContent = event.currentTarget.value)
    : (outputSpanEl.textContent = 'Anonymous'); 

});