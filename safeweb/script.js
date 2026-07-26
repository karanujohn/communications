// =========================
// MOBILE NAVIGATION MENU
// =========================

const menuButton = document.getElementById("menuButton");

const navMenu = document.getElementById("navMenu");


menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// =========================
// CLOSE MOBILE MENU
// WHEN A LINK IS CLICKED
// =========================

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add zero before single digits
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;
}

// Update immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);


// =========================
// READ MORE BUTTONS
// =========================

const readMoreButtons =
    document.querySelectorAll(".read-more");


readMoreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "More information about this SafeStart announcement will be available soon."
        );

    });

});

//a study link//




// =========================
// LEARN MORE BUTTONS
// =========================

const learnMoreButtons =
    document.querySelectorAll(".learn-more");


learnMoreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "For more information about this driving class, please contact SafeStart Driving School."
        );

    });

});


// =========================
// CONTACT BUTTON
// =========================

const contactButton =
    document.getElementById("contactButton");


contactButton.addEventListener("click", function () {

    alert(
        "Thank you for contacting SafeStart Driving School. Our team will be happy to assist you."
    );

});