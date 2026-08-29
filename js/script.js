
/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

/* MOBILE DROPDOWN */

document.querySelectorAll(".dropdown-toggle").forEach(function (button) {
    button.addEventListener("click", function (e) {
        if (window.innerWidth <= 992) {
            e.preventDefault();

            const parent = this.parentElement;

            parent.classList.toggle("open");
        }
    });
});

/* CLOSE MOBILE MENU */

document.querySelectorAll(".nav-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        if (window.innerWidth <= 992) {
            navMenu.classList.remove("active");

            menuToggle.querySelector("i").classList.remove("fa-xmark");
            menuToggle.querySelector("i").classList.add("fa-bars");
        }
    });
});

/* BACK TO TOP */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }
});

backTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

/* PHONE ONLY NUMBERS */

const phoneInput = document.querySelector('input[name="phone"]');

phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
});

/* FORM */

const form = document.getElementById("consultationForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const phone = phoneInput.value.trim();

    if (!/^[6-9][0-9]{9}$/.test(phone)) {
        alert("Please enter a valid 10 digit mobile number.");

        phoneInput.focus();

        return;
    }

    alert("Thank you! Your consultation request has been submitted.");

    form.reset();
});
