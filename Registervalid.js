const form = document.getElementById('form');
const trn = document.getElementById('trn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function stringify(item) {
    return JSON.stringify(item);
}


document.getElementById('form').addEventListener('submit', function(event) {
	event.preventDefault(); 
	checkInputs();
	
	const trn = document.getElementById('trn').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const form = document.getElementById('form');
	
	
	localStorage.setItem("storedUser", stringify(trn));
	localStorage.setItem("storedEmail", stringify(email));
	localStorage.setItem("storedPassword", stringify(password));

	if(checkInputs() != true){
		window.alert("Registration Incomplete!");
	}else{
		redirectToPage();	
	}

});

function redirectToPage() {
	event.preventDefault();
	window.location.href = "Login.html";
}

function reset(){
	document.getElementById("trn").value= '';
	document.getElementById("email").value= '';
	document.getElementById("password").value= '';
}

/*
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
*/

function checkInputs() {
	let complete = true;
	const trnValue = trn.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(trnValue === '') {
		setErrorFor(trn, 'TRN cannot be blank');
		complete= false;
	} else {
		setSuccessFor(trn);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		complete= false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		complete = false;
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		complete=false;
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
		complete = false;
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
		complete = false;
	} else{
		setSuccessFor(password2);
	}

	return complete;
}

/*
//Stores trn as as registrationdata
document.getElementById('form').addEventListener('submit', function (event) {
	event.preventDefault();

	var registrationData = {
		trn: document.getElementById('trn').value,
		email: document.getElementById('email').value,
		password: document.getElementById('password').value,
		password2: document.getElementById('password2').value};
	localStorage.setItem('registrationData', JSON.stringify(registrationData));
});
*/

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













