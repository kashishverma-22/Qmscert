/* =========================================================
   QMSCERT CONTACT PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* =======================================================
     CONTACT FORM
  ======================================================= */

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      /* -----------------------------------------------
         GET FORM VALUES
      ----------------------------------------------- */

      const name = document.getElementById("fullName");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const certificate = document.getElementById("certificate");
      const message = document.getElementById("message");

      /* -----------------------------------------------
         ERROR ELEMENTS
      ----------------------------------------------- */

      const nameError = document.getElementById("fullNameError");
      const emailError = document.getElementById("emailError");
      const phoneError = document.getElementById("phoneError");
      const certificateError = document.getElementById("certificateError");
      const messageError = document.getElementById("messageError");

      /* -----------------------------------------------
         CLEAR PREVIOUS ERRORS
      ----------------------------------------------- */

      if (nameError) nameError.textContent = "";
      if (emailError) emailError.textContent = "";
      if (phoneError) phoneError.textContent = "";
      if (certificateError) certificateError.textContent = "";
      if (messageError) messageError.textContent = "";

      if (name) name.closest(".form-group").classList.remove("error");
      if (email) email.closest(".form-group").classList.remove("error");
      if (phone) phone.closest(".form-group").classList.remove("error");
      if (certificate)
        certificate.closest(".form-group").classList.remove("error");
      if (message) message.closest(".form-group").classList.remove("error");

      /* -----------------------------------------------
         VALIDATION
      ----------------------------------------------- */

      let isValid = true;

      /* NAME */
      if (!name || name.value.trim() === "") {
        if (nameError) nameError.textContent = "Please enter your full name.";
        if (name) name.closest(".form-group").classList.add("error");
        isValid = false;
      }

      /* EMAIL */
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || email.value.trim() === "") {
        if (emailError)
          emailError.textContent = "Please enter your email address.";
        if (email) email.closest(".form-group").classList.add("error");
        isValid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        if (emailError)
          emailError.textContent = "Please enter a valid email address.";
        if (email) email.closest(".form-group").classList.add("error");
        isValid = false;
      }

      /* PHONE */
      const phonePattern = /^[0-9]{10}$/;

      if (!phone || phone.value.trim() === "") {
        if (phoneError)
          phoneError.textContent = "Please enter your phone number.";
        if (phone) phone.closest(".form-group").classList.add("error");
        isValid = false;
      } else if (!phonePattern.test(phone.value.trim())) {
        if (phoneError)
          phoneError.textContent =
            "Please enter a valid 10-digit phone number.";
        if (phone) phone.closest(".form-group").classList.add("error");
        isValid = false;
      }

      /* CERTIFICATE */
      if (!certificate || certificate.value === "") {
        if (certificateError)
          certificateError.textContent = "Please select a certification.";
        if (certificate)
          certificate.closest(".form-group").classList.add("error");
        isValid = false;
      }

      /* MESSAGE */
      if (!message || message.value.trim() === "") {
        if (messageError)
          messageError.textContent = "Please enter your message.";
        if (message) message.closest(".form-group").classList.add("error");
        isValid = false;
      }

      /* -----------------------------------------------
         STOP IF INVALID
      ----------------------------------------------- */

      if (!isValid) {
        return;
      }

      /* -----------------------------------------------
         SHOW SUCCESS STATUS
      ----------------------------------------------- */

      const formStatus = document.getElementById("formStatus");

      if (formStatus) {
        formStatus.className = "form-status success";
        formStatus.textContent =
          "Thank you! Your message has been submitted successfully. We will contact you shortly.";

        setTimeout(function () {
          formStatus.className = "form-status";
          formStatus.textContent = "";
        }, 6000);
      }

      /* -----------------------------------------------
         RESET FORM
      ----------------------------------------------- */

      contactForm.reset();
    });
  }

  /* =======================================================
     ONLY NUMBERS IN PHONE
  ======================================================= */

  const phoneInput = document.getElementById("phone");

  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "").slice(0, 10);
    });
  }

  /* =======================================================
     REMOVE ERROR WHILE TYPING
  ======================================================= */

  const formInputs = document.querySelectorAll(
    "#contactForm input, #contactForm textarea, #contactForm select",
  );

  formInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      this.closest(".form-group").classList.remove("error");

      const errorId = this.id + "Error";
      const errorElement = document.getElementById(errorId);

      if (errorElement) {
        errorElement.textContent = "";
      }
    });

    input.addEventListener("change", function () {
      this.closest(".form-group").classList.remove("error");

      const errorId = this.id + "Error";
      const errorElement = document.getElementById(errorId);

      if (errorElement) {
        errorElement.textContent = "";
      }
    });
  });

  /* =======================================================
     BACK TO TOP
  ======================================================= */

  const backTop = document.getElementById("backTop");

  if (backTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
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
  }

  /* =======================================================
     MOBILE NAVBAR TOGGLE
  ======================================================= */

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      const icon = menuToggle.querySelector("i");

      if (icon) {
        if (navMenu.classList.contains("active")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });
  }

  /* =======================================================
     MOBILE DROPDOWN
  ======================================================= */

  const dropdowns = document.querySelectorAll(".nav-dropdown");

  dropdowns.forEach(function (dropdown) {
    const button = dropdown.querySelector(".dropdown-toggle");

    if (!button) return;

    button.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  });

  /* =======================================================
     CLOSE MOBILE MENU WHEN LINK CLICKED
  ======================================================= */

  const navLinks = document.querySelectorAll(
    ".nav-menu a:not(.dropdown-toggle)",
  );

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 991) {
        navMenu.classList.remove("active");

        const icon = menuToggle?.querySelector("i");

        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });
  });

  /* =======================================================
     SMOOTH SCROLL
  ======================================================= */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId && targetId !== "#" && document.querySelector(targetId)) {
        e.preventDefault();

        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});


/* =========================================================
   QMSCERT CONTACT PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =======================================================
     MOBILE NAVBAR TOGGLE - FIXED
  ======================================================= */

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navMenu.classList.toggle("active");

      const icon = menuToggle.querySelector("i");

      if (icon) {
        if (navMenu.classList.contains("active")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });

  }

  /* =======================================================
     MOBILE DROPDOWN
  ======================================================= */

  const dropdowns = document.querySelectorAll(".nav-dropdown");

  dropdowns.forEach(function (dropdown) {

    const button = dropdown.querySelector(".dropdown-toggle");

    if (!button) return;

    button.addEventListener("click", function (e) {

      if (window.innerWidth <= 991) {
        e.preventDefault();
        e.stopPropagation();

        // Close other dropdowns
        dropdowns.forEach(function (item) {
          if (item !== dropdown) {
            item.classList.remove("open");
          }
        });

        dropdown.classList.toggle("open");
      }

    });

  });

  /* =======================================================
     CLOSE MOBILE MENU WHEN LINK CLICKED
  ======================================================= */

  const navLinks = document.querySelectorAll(".nav-menu a:not(.dropdown-toggle)");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      if (window.innerWidth <= 991) {

        navMenu.classList.remove("active");

        const icon = menuToggle?.querySelector("i");

        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }

      }

    });

  });

  /* =======================================================
     RESET MOBILE MENU ON DESKTOP
  ======================================================= */

  window.addEventListener("resize", function () {

    if (window.innerWidth > 991) {

      if (navMenu) {
        navMenu.classList.remove("active");
      }

      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("open");
      });

      if (menuToggle) {
        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }

    }

  });

  /* =======================================================
     CLICK OUTSIDE - CLOSE MOBILE MENU
  ======================================================= */

  document.addEventListener("click", function (e) {

    if (window.innerWidth <= 991) {

      const isMenuClick = e.target.closest(".nav-menu") || e.target.closest(".menu-toggle");

      if (!isMenuClick) {
        navMenu.classList.remove("active");

        const icon = menuToggle?.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }

        dropdowns.forEach(function (dropdown) {
          dropdown.classList.remove("open");
        });
      }

    }

  });

  /* =======================================================
     ESC KEY - CLOSE MOBILE MENU
  ======================================================= */

  document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

      if (navMenu) {
        navMenu.classList.remove("active");
      }

      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("open");
      });

      if (menuToggle) {
        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }

    }

  });

  /* =======================================================
     CONTACT FORM
  ======================================================= */

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

      e.preventDefault();

      /* -----------------------------------------------
         GET FORM VALUES
      ----------------------------------------------- */

      const name = document.getElementById("fullName");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const certificate = document.getElementById("certificate");
      const message = document.getElementById("message");

      /* -----------------------------------------------
         ERROR ELEMENTS
      ----------------------------------------------- */

      const nameError = document.getElementById("fullNameError");
      const emailError = document.getElementById("emailError");
      const phoneError = document.getElementById("phoneError");
      const certificateError = document.getElementById("certificateError");
      const messageError = document.getElementById("messageError");

      /* -----------------------------------------------
         CLEAR PREVIOUS ERRORS
      ----------------------------------------------- */

      if (nameError) nameError.textContent = "";
      if (emailError) emailError.textContent = "";
      if (phoneError) phoneError.textContent = "";
      if (certificateError) certificateError.textContent = "";
      if (messageError) messageError.textContent = "";

      if (name) name.closest(".form-group").classList.remove("error");
      if (email) email.closest(".form-group").classList.remove("error");
      if (phone) phone.closest(".form-group").classList.remove("error");
      if (certificate) certificate.closest(".form-group").classList.remove("error");
      if (message) message.closest(".form-group").classList.remove("error");

      /* -----------------------------------------------
         VALIDATION
      ----------------------------------------------- */

      let isValid = true;

      /* NAME */
      if (!name || name.value.trim() === "") {
        if (nameError) nameError.textContent = "Please enter your full name.";
        if (name) name.closest(".form-group").classList.add("error");
        isValid = false;
      }

      /* EMAIL */
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || email.value.trim() === "") {
        if (emailError) emailError.textContent = "Please enter your email address.";
        if (email) email.closest(".form-group").classList.add("error");
        isValid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        if (emailError) emailError.textContent = "Please enter a valid email address.";
        if (email) email.closest(".form-group").classList.add("error");
        isValid = false;
      }

      /* PHONE */
      const phonePattern = /^[0-9]{10}$/;

      if (!phone || phone.value.trim() === "") {
        if (phoneError) phoneError.textContent = "Please enter your phone number.";
        if (phone) phone.closest(".form-group").classList.add("error");
        isValid = false;
      } else if (!phonePattern.test(phone.value.trim())) {
        if (phoneError) phoneError.textContent = "Please enter a valid 10-digit phone number.";
        if (phone) phone.closest(".form-group").classList.add("error");
        isValid = false;
      }

      /* CERTIFICATE */
      if (!certificate || certificate.value === "") {
        if (certificateError) certificateError.textContent = "Please select a certification.";
        if (certificate) certificate.closest(".form-group").classList.add("error");
        isValid = false;
      }

      /* MESSAGE */
      if (!message || message.value.trim() === "") {
        if (messageError) messageError.textContent = "Please enter your message.";
        if (message) message.closest(".form-group").classList.add("error");
        isValid = false;
      }

      /* -----------------------------------------------
         STOP IF INVALID
      ----------------------------------------------- */

      if (!isValid) {
        return;
      }

      /* -----------------------------------------------
         SHOW SUCCESS STATUS
      ----------------------------------------------- */

      const formStatus = document.getElementById("formStatus");

      if (formStatus) {
        formStatus.className = "form-status success";
        formStatus.textContent = "Thank you! Your message has been submitted successfully. We will contact you shortly.";

        setTimeout(function () {
          formStatus.className = "form-status";
          formStatus.textContent = "";
        }, 6000);
      }

      /* -----------------------------------------------
         RESET FORM
      ----------------------------------------------- */

      contactForm.reset();

    });

  }

  /* =======================================================
     ONLY NUMBERS IN PHONE
  ======================================================= */

  const phoneInput = document.getElementById("phone");

  if (phoneInput) {

    phoneInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "").slice(0, 10);
    });

  }

  /* =======================================================
     REMOVE ERROR WHILE TYPING
  ======================================================= */

  const formInputs = document.querySelectorAll(
    "#contactForm input, #contactForm textarea, #contactForm select"
  );

  formInputs.forEach(function (input) {

    input.addEventListener("input", function () {
      this.closest(".form-group").classList.remove("error");

      const errorId = this.id + "Error";
      const errorElement = document.getElementById(errorId);

      if (errorElement) {
        errorElement.textContent = "";
      }
    });

    input.addEventListener("change", function () {
      this.closest(".form-group").classList.remove("error");

      const errorId = this.id + "Error";
      const errorElement = document.getElementById(errorId);

      if (errorElement) {
        errorElement.textContent = "";
      }
    });

  });

  /* =======================================================
     BACK TO TOP
  ======================================================= */

  const backTop = document.getElementById("backTop");

  if (backTop) {

    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        backTop.classList.add("show");
      } else {
        backTop.classList.remove("show");
      }
    });

    backTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

  }

  /* =======================================================
     SMOOTH SCROLL
  ======================================================= */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (e) {

      const targetId = this.getAttribute("href");

      if (targetId && targetId !== "#" && document.querySelector(targetId)) {

        e.preventDefault();

        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });

});