/* =========================
   ANIMATED WELCOME TEXT
========================= */

const textElement = document.getElementById("animated-text");

const text = "Comms Hub";

let index = 0;

let deleting = false;


function typeEffect() {

    if (!deleting) {

        textElement.textContent = text.substring(0, index);

        index++;

        if (index > text.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        textElement.textContent = text.substring(0, index);

        index--;

        if (index === 0) {

            deleting = false;

        }

    }

    setTimeout(typeEffect, deleting ? 80 : 130);

}


typeEffect();


/* =========================
   LOGIN FORM
========================= */

const loginForm = document.getElementById("loginForm");

const message = document.getElementById("message");


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;


    if (email === "" || password === "") {

        message.textContent = "Please fill in all fields.";

        message.style.color = "#E00712";

        return;

    }


    message.textContent = "Login successful!";

    message.style.color = "#007330";


    console.log("Email:", email);

    console.log("Password:", password);

});


/* =========================
   FORGOT PASSWORD
========================= */

const forgotPassword = document.getElementById("forgotPassword");


forgotPassword.addEventListener("click", function(event) {

    event.preventDefault();


    const email = document.getElementById("email").value;


    if (email === "") {

        message.textContent =
            "Enter your email address to reset your password.";

        message.style.color = "#E00712";

    } else {

        message.textContent =
            "Password reset instructions have been sent to your email.";

        message.style.color = "#007330";

    }

});