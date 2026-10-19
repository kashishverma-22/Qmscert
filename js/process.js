/* =========================================================
   QMS Global - PROCESS PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================================================
       MOBILE MENU TOGGLE
  ========================================================= */

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
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
  }

  /* =========================================================
       MOBILE DROPDOWN
  ========================================================= */

  const dropdowns = document.querySelectorAll(".nav-dropdown");

  dropdowns.forEach(function (dropdown) {
    const button = dropdown.querySelector(".dropdown-toggle");

    if (!button) return;

    button.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();

        dropdowns.forEach(function (item) {
          if (item !== dropdown) {
            item.classList.remove("open");
          }
        });

        dropdown.classList.toggle("open");
      }
    });
  });

  /* =========================================================
       CLOSE MOBILE MENU AFTER CLICKING LINK
  ========================================================= */

  const navLinks = document.querySelectorAll(".nav-menu a:not(.dropdown-toggle)");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 991 && navMenu) {
        navMenu.classList.remove("active");

        if (menuToggle) {
          const icon = menuToggle.querySelector("i");
          if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
          }
        }
      }
    });
  });

  /* =========================================================
       RESET MOBILE MENU ON DESKTOP
  ========================================================= */

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

  /* =========================================================
       HEADER SCROLL EFFECT
  ========================================================= */

  const header = document.querySelector(".header");

  function headerScroll() {
    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", headerScroll);
  headerScroll();

  /* =========================================================
       BACK TO TOP
  ========================================================= */

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

  /* =========================================================
       SMOOTH SCROLL FOR INTERNAL LINKS
  ========================================================= */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* =========================================================
       FAQ ACCORDION
  ========================================================= */

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    const question = item.querySelector(".faq-question");

    if (question) {
      question.addEventListener("click", function () {
        const isActive = item.classList.contains("active");

        // Close all other FAQs
        faqItems.forEach(function (otherItem) {
          otherItem.classList.remove("active");
        });

        // Toggle current
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });

  // Open first FAQ by default
  if (faqItems.length > 0) {
    faqItems[0].classList.add("active");
  }

  /* =========================================================
       CONSULTATION BUTTON
  ========================================================= */

  const consultationButtons = document.querySelectorAll('a[href="#consultation"]');

  consultationButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      const consultation = document.querySelector("#consultation");

      if (consultation) {
        e.preventDefault();
        consultation.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    });
  });

  /* =========================================================
       ESC KEY - CLOSE MOBILE MENU / DROPDOWNS
  ========================================================= */

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

  /* =========================================================
       CLICK OUTSIDE - CLOSE MOBILE DROPDOWN
  ========================================================= */

  document.addEventListener("click", function (e) {
    if (window.innerWidth > 991) return;

    if (!e.target.closest(".nav-dropdown") && !e.target.closest(".menu-toggle")) {
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("open");
      });
    }
  });

  console.log("QMS Global Process Page JS Loaded Successfully");
});

/* =========================================================
   QMS Global - PROCESS PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================================================
       MOBILE MENU TOGGLE - FIXED
  ========================================================= */

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
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
  }

  /* =========================================================
       MOBILE DROPDOWN
  ========================================================= */

  const dropdowns = document.querySelectorAll(".nav-dropdown");

  dropdowns.forEach(function (dropdown) {
    const button = dropdown.querySelector(".dropdown-toggle");

    if (!button) return;

    button.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        e.stopPropagation();

        dropdowns.forEach(function (item) {
          if (item !== dropdown) {
            item.classList.remove("open");
          }
        });

        dropdown.classList.toggle("open");
      }
    });
  });

  /* =========================================================
       CLOSE MOBILE MENU AFTER CLICKING LINK
  ========================================================= */

  const navLinks = document.querySelectorAll(".nav-menu a:not(.dropdown-toggle)");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 991 && navMenu) {
        navMenu.classList.remove("active");

        if (menuToggle) {
          const icon = menuToggle.querySelector("i");
          if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
          }
        }
      }
    });
  });

  /* =========================================================
       RESET MOBILE MENU ON DESKTOP
  ========================================================= */

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

  /* =========================================================
       CLICK OUTSIDE - CLOSE MOBILE MENU
  ========================================================= */

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

  /* =========================================================
       ESC KEY - CLOSE MOBILE MENU / DROPDOWNS
  ========================================================= */

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

  /* =========================================================
       HEADER SCROLL EFFECT
  ========================================================= */

  const header = document.querySelector(".header");

  function headerScroll() {
    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", headerScroll);
  headerScroll();

  /* =========================================================
       BACK TO TOP
  ========================================================= */

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

  /* =========================================================
       SMOOTH SCROLL FOR INTERNAL LINKS
  ========================================================= */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* =========================================================
       FAQ ACCORDION
  ========================================================= */

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    const question = item.querySelector(".faq-question");

    if (question) {
      question.addEventListener("click", function () {
        const isActive = item.classList.contains("active");

        faqItems.forEach(function (otherItem) {
          otherItem.classList.remove("active");
        });

        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });

  if (faqItems.length > 0) {
    faqItems[0].classList.add("active");
  }

  /* =========================================================
       CONSULTATION BUTTON
  ========================================================= */

  const consultationButtons = document.querySelectorAll('a[href="#consultation"]');

  consultationButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      const consultation = document.querySelector("#consultation");

      if (consultation) {
        e.preventDefault();
        consultation.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    });
  });

});