const pass = document.getElementById('pass');
const confirmation = document.getElementById('confirm-pass');

function checkPass(){
    if(pass.value != confirmation.value)
    {
        confirmation.setCustomValidity('Passwords do not match.');
    }else{
        confirmation.setCustomValidity('');
    }
}