const form = document.getElementById('form');
const trn = document.getElementById('trn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const dob = document.getElementById('dob');
const sex = document.getElementById('sex');

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
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const dob = document.getElementById('dob').value;
	const sex = document.getElementById('sex').value;
	
	localStorage.setItem("storedUser", stringify(trn));
	localStorage.setItem("storedEmail", stringify(email));
	localStorage.setItem("storedPassword", stringify(password));
	localStorage.setItem("firstName",stringify(firstName));
	localStorage.setItem("lastName",stringify(lastName));
	localStorage.setItem("dob",stringify(dob));
	localStorage.setItem("sex",stringify(sex));
	

	if(checkInputs() != true){
		window.alert("Registration Incomplete!");
	}else{
		redirectToPage();
		calculateAge();	
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



function checkInputs() {
	let complete = true;
	const trnValue = trn.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const fNameValue = firstName.value.trim();
	const lNameValue = lastName.value.trim(); 
	const dateValue = dob.value;
	const sexValue= sex.value;
	


	if(fNameValue === ''){
		setErrorFor(firstName, 'Please enter your name');
		complete=false;
	}else{
		setSuccessFor(firstName);
	}

	if(lNameValue === ''){
		setErrorFor(lastName, 'Please enter your name');
		complete=false;
	}else{
		setSuccessFor(lastName);
	}

	if(dateValue === ''){
		setErrorFor(dateValue, 'Please enter your date of birth');
		complete=false;
	}else{
		setSuccessFor(dob);
	}

	if(sexValue === ''){
		setErrorFor(sexValue,'Please select your sex');
		complete = false;
	}else{
		setSuccessFor(sex);
	}


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

//calculate the age of the person registering and stores it in local storage
function calculateAge(){
	const dateInput = document.getElementById("dob").value;
	const birthDate = new Date(dateInput);
	const currentDate = new Date();
	const age = (new Date(currentDate - birthDate).getFullYear)
	localStorage.setItem("age", stringify(age));

	window.alert(`you are ${age} YEARS OLD`)
}










