const inputForm = document.querySelector('.login-form');

inputForm.addEventListener('submit', onSubmit);

function onSubmit (event) {

    event.preventDefault();

    

    
    const { email, password } = event.currentTarget.elements;

    const formData = new FormData(event.currentTarget);

    if( email.value !== '' || password.value !== '') {

    

    formData.forEach((x, y) => {
        console.log('Name :', y);
        console.log('Value :', x);
    });
    
    inputForm.reset();
} else{
    alert('Bсі поля повинні бути заповнені.');
}
};
