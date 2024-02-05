let messBox = document.getElementById('message-popup');
let formBox = document.getElementById('container');
let bgBox = document.getElementById('message-show');

function logFunc() {
    let userN = document.getElementById('userName').value;
    let userP = document.getElementById('userPass').value;
    let textResult = document.getElementById('text-indicator');
    let subResult = document.getElementById('text-sub');

    if(userN.length != 0 || userP.length != 0) {
        if(userN == "Jasfer" && userP == "perperper") {
            bgBox.style.background = "green";
            textResult.innerHTML = "Login Successfuly"
            subResult.innerHTML = "Have a great day!"
            messBox.classList.add('open-message');
            formBox.classList.add('close-container');

            isAdmin = true;
        }else {
            bgBox.style.background = "red";
            textResult.innerHTML = "Account doesn't exist"
            subResult.innerHTML = "Please check your information"
            messBox.classList.add('open-message');
            formBox.classList.add('close-container');

            isAdmin = false;
        }
    }else {
        
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