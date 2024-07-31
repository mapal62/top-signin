console.log('link OK');

let WarningText = '';

const rightContent = document.querySelector(".signup");
const loginBox = document.querySelector("#login");
const loginLink = rightContent.querySelector(".loginlink a");
loginLink.addEventListener("click", switchToLogin);

const form = document.querySelector("#signUpForm");
const formElements = form.querySelector("fieldset");
const fname = form.querySelector("input[name='fname']");
const lname = form.querySelector("input[name='lname']");
const email = form.querySelector("input[name='email']");
const phone = form.querySelector("input[name='phone']");
const password = form.querySelector("input[name='password']");
const confirmPass = form.querySelector("input[name='confirm']");
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("SUBMITTED",
        fname.value,lname.value,email.value,phone.value,
    password.value,confirmPass.value);
    if (password.value !== confirmPass.value) {

        WarningText = 'Please check password!';
        messageBox(WarningText);
        confirmPass.focus();
        return;
    }
    if (lname.value === '') {
        WarningText = 'Any last name?';
        messageBox(WarningText);
        lname.value = '.';
        lname.focus();
        return;
    }

    // not any issue
    WarningText = 'REGISTERED!';
    WarningText += `\n e-mail: ${email.value}`;
    WarningText += `\n password: ${password.value}`;
    messageBox(WarningText);
    window.location.reload();   
});

function messageBox(text) {
    alert(text);
}

function switchToLogin() {
    rightContent.style.opacity = '0.2';
    formElements.disabled = true;
    loginBox.style.display = 'block';
}

loginBox.addEventListener("submit",function(e){
    e.preventDefault();
    WarningText = 'LOGIN in progress!';
    WarningText += `\n e-mail: ${email.value}`;
    WarningText += `\n password: ${password.value}`;
    messageBox(WarningText);
    window.location.reload();
});
