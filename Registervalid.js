const form = document.getElementById('form');
const trn = document.getElementById('trn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const dob = document.getElementById('dob');
const sex = document.getElementsByName('gender'); //radio buttons for gender

function stringify(item) {
    return JSON.stringify(item);
}


document.getElementById('form').addEventListener('submit', function(event) {
	event.preventDefault(); 
	if (checkInputs()) {
        storeFormData();
        calculateAge();
        redirectToPage();
    } else {
        window.alert("Registration Incomplete!");
    }
});

	
	function storeFormData() {
		const trnValue = trn.value.trim();
		const emailValue = email.value.trim();
		const passwordValue = password.value.trim();
		const firstNameValue = firstName.value.trim();
		const lastNameValue = lastName.value.trim();
		const dobValue = dob.value;


		//store gender- radio button value
		try{
			const genderValue = getSelectedGender();
			if (genderValue) {
				localStorage.setItem("sex", stringify(genderValue));
			}
		}catch{
			console.error('Gender not saved!');
		}

		localStorage.setItem("storedUser", stringify(trnValue));
		localStorage.setItem("storedEmail", stringify(emailValue));
		localStorage.setItem("storedPassword", stringify(passwordValue));
		localStorage.setItem("firstName", stringify(firstNameValue));
		localStorage.setItem("lastName", stringify(lastNameValue));
		localStorage.setItem("dob", stringify(dobValue));
	}
	





function redirectToPage() {
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

	if (!getSelectedGender()) {
        setErrorFor(sex[0], 'Please select your sex');
        complete = false;
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

function getSelectedGender() {
    let selectedGender = null;
    sex.forEach(radio => {
        if (radio.checked) {
            selectedGender = radio.value;
        }
    });
    return selectedGender;
}


//calculate the age of the person registering and stores it in local storage
function calculateAge(){
	const dateInput = document.getElementById("dob").value;
    const birthDate = new Date(dateInput);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
	}
	localStorage.setItem("age", stringify(age));

	window.alert(`you are ${age} years old.`)

}










