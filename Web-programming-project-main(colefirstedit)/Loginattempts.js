let attempts = 0;
const maxAttempts = 3;
const correctPassword = document.getElementById("password").value;

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const message = document.getElementById("message");
    const loginContainer = document.getElementById("login-container");
    const errorScreen = document.getElementById("error-screen");

    if (passwordInput === correctPassword) {
        message.textContent = "Access Granted!";
        message.style.color = "green";
    } else {
        attempts++;
        message.textContent = `Incorrect password. Attempts: ${attempts}`;

        if (attempts >= maxAttempts) {
            loginContainer.style.display = "none"; 
            errorScreen.style.display = "block"; 
        }
    }
}

const trnInput = document.getElementById("trn");
const storedTrn = localStorage.getItem("RegistrationData");
if (storedTrn) {
    trnInput.addEventListener("input", function () {
        if (trnInput.value !== storedTrn) {
            alert("Error: The inputted value does not match the stored value in local storage.")
        }
    });
} else {
    alert("Error: No data found in local storage.")
}

