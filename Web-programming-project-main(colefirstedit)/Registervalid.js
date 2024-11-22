const form = document.getElementById('form');
const trn = document.getElementById('trn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	
	const trnValue = trn.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(trnValue === '') {
		setErrorFor(trn, 'TRN cannot be blank');
	} else {
		setSuccessFor(trn);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords do not match');
	} else{
		setSuccessFor(password2);
	}
}

let attempts = 0;
const maxAttempts = 3;
const correctPassword = "password";
/**
 * Checks the input password against the correct password.
 * If the password is correct, changes the text of the message div to "Access Granted!" and changes the text color to green.
 * If the password is incorrect, increments the attempts counter and changes the text of the message div to "Incorrect password. Attempts: [attempts]".
 * If the number of attempts exceeds the maximum number of attempts, redirects to the error page.
 */
function checkPassword() {
	const passwordInput = document.getElementById("password").value;
	const message = document.getElementById("message");
	if (passwordInput === correctPassword) {
		message.textContent = "Access Granted!";
		message.style.color = "green";
	} else {
		attempts++;
		message.textContent = `Incorrect password. Attempts: ${attempts}`;

		if (attempts >= maxAttempts) {
			message.textContent = "Too many incorrect attempts. Redirecting to error page";
			window.location.href = "errorpg.html";
		}
	}
}
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

                













