let messBox = document.getElementById('message-popup');
let formBox = document.getElementById('container');
let bgBox = document.getElementById('message-show');
let showPass = document.querySelector('#userPass');

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
            subResult.innerHTML = "Please check your information"
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
