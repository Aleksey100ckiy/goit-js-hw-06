const inputForm = document.querySelector('.login-form');

inputForm.addEventListener('submit', onSubmit);

function onSubmit (event) {

    event.preventDefault();

const { email, password } = event.currentTarget.elements;



if( email.value !== '' || password.value !== ''){

console.log('email', email.value);
console.log('password', password.value);
inputForm.reset();
} else{
    alert('Bсі поля повинні бути заповнені.');
}
};
