
 var namee = document.forms['form']['name'];
var password = document.forms['form']['password'];

var name_error = document.getElementById('name-error');
var pass_error = document.getElementById('pass-error');

namee.addEventListener('textInput', name_Verify);
password.addEventListener('textInput', pass_Verify);

function validate(){
	if (namee.value.length == 0) {
		namee.style.border = "1px solid red";
		name_error.style.display = "block";
		namee.focus();
		return false;
	}
	if (password.value.length < 5) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}
    else
    {
        alert('Registration successful');
    }
}
    function name_Verify(){
        if (namee.value.length >= 3) {
            namee.style.border = "1px solid silver";
            name_error.style.display = "none";
            return true;
        }
    }
    function pass_Verify(){
        if (password.value.length >= 5) {
            password.style.border = "1px solid silver";
            pass_error.style.display = "none";
            return true;
        }
    }


