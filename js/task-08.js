const inputForm = document.querySelector('.login-form');

inputForm.addEventListener('submit', onSubmit);

function onSubmit (event) {

    event.preventDefault();

    

    
    const { email, password } = event.currentTarget.elements;

    const formData = new FormData(event.currentTarget);

    if( email.value == '' || password.value == '') {

    
   return alert('Bсі поля повинні бути заповнені.');
    
    } else{
    formData.forEach((x, y) => {
    console.log({x, y});
    });
    
    
    
    inputForm.reset();
}
};
  //     console.log('Name :', y);
    //     console.log('Value :', x);
