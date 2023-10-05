




const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
var length = document.getElementById("length");

form.addEventListener('submit',(e) => {
    e.preventDefault();


    checkInputs();

});


function checkInputs(){     //get value

        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        var x = document.getElementById("password");


        if(usernameValue === ''){
            //showerror
            //add error message
            setErrorFor(username, 'Name cannot be empty');

        } else{
            // add success class
            setSuccessFor(username);
    
        }
        if(emailValue === ' '){
            setErrorFor(email, 'Email cannot be empty');
        }else if(!isEmail(emailValue)){
            setErrorFor(email,'Email is not valid');

        } else{
            setSuccessFor(email);
        }

        if(passwordValue ===''){
            setErrorFor(password, 'Password cannot be empty');
        } else{
            setSuccessFor(password);
        }


        if(isEmail(email.value)){
            alert("Account Registered");
            window.location.replace("login.html")
            return false;
        
        }
        else{
            alert("Login Fail")
        }
           
 }
      





// show error or success message

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error msg inside the small
    small.innerText = message;

    //add error class
    formControl.className = 'label-control error';

}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'label-control success';
}

function isEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}



