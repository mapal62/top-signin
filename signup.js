console.log('link OK');

let WarningText = '';

const form = document.querySelector("#signUpForm");
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
    }
});

function messageBox(text) {
    alert(text);
}
