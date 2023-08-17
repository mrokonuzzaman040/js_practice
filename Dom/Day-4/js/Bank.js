//id="user-email"
//id="user-password"
//id="btn-submit"

document.getElementById("btn-submit").addEventListener("click", function () {

//get the email addess inside the input fild
const emailFidl = document.getElementById('user-email');
const emailData = emailFidl.value;

//get the password from the input fild
const passFild = document.getElementById('user-password');
const passData = passFild.value;

if(emailData === 'test@gmail.com' && passData=== 'Test1234'){
    window.location.href = './dashboard.html'
}
else{
    alert('Bhag Vosrike');
}
});