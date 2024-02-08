let messBox = document.getElementById('message-popup');
let formBox = document.getElementById('container');
let bgBox = document.getElementById('message-show');
let showPass = document.querySelector('#userPass');
let signInForm = document.querySelector('.form');
let signUpForm = document.querySelector('.signup-form');

function logFunc() {
    let userN = document.getElementById('userName').value;
    let userP = document.getElementById('userPass').value;
    let textResult = document.getElementById('text-indicator');
    let subResult = document.getElementById('text-sub');

    if(userN.length != 0 || userP.length != 0) {
        if(userN == "Jasfer" && userP == "perperper") {
            textResult.innerHTML = "Login Successfuly";
            subResult.innerHTML = "Welcome back, Chief!";
            messBox.classList.add('open-message');
            formBox.classList.add('close-container');

            isAdmin = true;
        }
        else {
            textResult.innerHTML = "Account doesn't exist"
            subResult.innerHTML = "Please check your information or create a new account"
            messBox.classList.add('open-message');
            formBox.classList.add('close-container');

            isAdmin = false;
        }
    }
    else {
        textResult.innerHTML = "Invalid input"
        subResult.innerHTML = "Please fill all the required forms"
        messBox.classList.add('open-message');
        formBox.classList.add('close-container');

        isAdmin = false;
    }
}

function closeMessage() {
    if(isAdmin == false) {
        messBox.classList.remove('open-message');
        formBox.classList.remove('close-container');
    }else {
        messBox.classList.remove('open-message');
        location.href = "main.html";
    }
}

let isShown = false;
function showPassword() {
    if(!isShown) {
        showPass.setAttribute('type','text');
        isShown = true;
    }
    else {
        showPass.setAttribute('type','password');
        isShown = false;
    }
}

let loginState = true;
function signUp() {
    if(loginState){
        signUpForm.classList.add('signup-form-open');
        signInForm.classList.add('close-form');
        document.querySelector('.register-link').textContent = "Already have an account";
        loginState = false;
    }
    else {
        signUpForm.classList.remove('signup-form-open');
        signInForm.classList.remove('close-form');
        document.querySelector('.register-link').textContent = "Register Now";
        loginState = true;
    }
}
