document.getElementById('submit-login').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');   
    const userEmail = emailField.value;
    // console.log(userEmail);
    
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword)
    if(userEmail == 'abc@gmail.com' && userPassword == 'abc'){
        console.log('Valid User');
        window.location.href='banking.html';

    }
});

