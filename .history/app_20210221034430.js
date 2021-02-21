document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: "nav ul a",
    translateX: [-100, 0],
    easing: "easeOutElastic(10, 2)",
    duration: 500,
    delay: (el, i) => {
      return 1000 + 100 * i;
    },
    opacity: [0, 1],
  }),
    anime({
      targets: ".name",
      translateY: [50, 0],
      easing: "easeInOutQuad",
      duration: 500,
      delay: (el, i) => {
        return 1000 + 100 * i;
      },
      opacity: [0, 1],
    }),
    anime({
      targets: ".overlay",
      translateY: [100, 0],
      easing: "easeInOutQuad",
      duration: 500,
      delay: (el, i) => {
        return 500 + 100 * i;
      },
      opacity: [0, 1],
    });
  anime({
    targets: ".nav-socials",
    translateY: [100, 0],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => {
      return 1800 + 100 * i;
    },
    opacity: [0, 1],
  });

  anime({
    targets: ".hidetext",
    translateY: [100, 0],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => {
      return 1800 + 100 * i;
    },
    opacity: [0, 1],
  });
  anime({
    targets: ".hidetext-2",
    translateY: [-50, 0],
    easing: "easeInOutQuad",
    duration: 800,
    delay: (el, i) => {
      return 1800 + 100 * i;
    },
    opacity: [0, 1],
  });

  anime({
    targets: ".hero-image img",
    translateX: [-10, 0],
    easing: "easeOutQuad",
    duration: 900,
    delay: (el, i) => {
      return 2000 + 100 * i;
    },
    opacity: [0, 1],
  });

  anime({
    targets: " .hero-image p",
    translateY: [-50, 0],
    easing: "easeOutQuad",
    duration: 900,
    delay: anime.stagger(250, { start: 1800 }),
    opacity: [0, 1],
  });
  anime({
    targets: " .hero-image",
    translateY: [-350, 0],
    easing: "easeOutQuad",
    duration: 1000,

    delay: (el, i) => {
      return 1000 + 100 * i;
    },
    opacity: [0, 1],
  });

  anime({
    targets: ".btn",
    translateY: [100, 0],
    easing: "easeInOutQuad",
    duration: 700,
    delay: (el, i) => {
      return 3000 + 100 * i;
    },
    opacity: [0, 1],
  });
  anime({
    targets: ".btn-scroll",
    translateY: [-100, 0],
    easing: "easeInOutQuad",
    duration: 700,
    delay: (el, i) => {
      return 3000 + 100 * i;
    },
    opacity: [0, 1],
  });
});

const sidePortfolio = document.querySelector("#side-portfolio");
const sideContact = document.querySelector("#side-contact");
const btn = document.querySelector("button");

function updateSpan(e) {
  const items = e.target;
  if (items.classList.contains("span-btn")) {
    document.querySelector(".span-btn").innerText = "down";
  } else {
  }
}
btn.addEventListener("mouseover", updateSpan);

sidePortfolio.addEventListener("click", (e) => {
  TweenMax.to(".first", 1.9, {
    delay: 0.2,
    top: "-1000%",
    ease: Expo.easeInOut,
  });

  TweenMax.to(".second", 1.9, {
    delay: 0.3,
    top: "-1000%",
    ease: Expo.easeInOut,
  });

  TweenMax.to(".third", 1.9, {
    delay: 0.4,
    top: "-1000%",
    ease: Expo.easeInOut,
  });

  anime({
    targets: ".card",
    translateX: [-40, 0],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => {
      return 500 + 100 * i;
    },
    opacity: [0, 1],
  });
});

sideContact.addEventListener("click", () => {
  // OVERLAY
  anime({
    targets: ".container",
    translateX: [-40, 0],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => {
      return 500 + 100 * i;
    },
    opacity: [0, 1],
  });
});

// modal

const open = document.getElementById("open");
const modalSection = document.getElementById("mobile-nav-content");
const navLinks = document.querySelector(".nav-links");
const close = document.getElementById("close");
const links = document.querySelectorAll(".link");
// to open the mobile nav

open.addEventListener("click", () => {
  showNav();
});
close.addEventListener("click", () => {
  showNav();
});

function showNav() {
  if (modalSection.style.display == "none") {
    modalSection.style.display = "flex";
  } else {
    modalSection.style.display = "none";
  }
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    modalSection.style.display = "none";
  });
});

// using GSAP Animation for part of the mobile view

let tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
tl.to("#create", { y: "0%", duration: 0.7, stagger: 0.8, delay: 1 });

// VARIABLES TO VALIDATE THE CONTACT FORM

const form = document.getElementById("form-body");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");

// creating the function for showing the success

function showSuccess(input) {
  const formContent = input.parentElement;
  formContent.className = "app-form-group success";
}

// SHOW ERROR
function showError(input, message) {
  const formContent = input.parentElement;
  formContent.className = "app-form-group error";
  const small = formContent.querySelector("small");
  small.innerText = message;
}
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Name is required");
  } else {
    showSuccess(username);
  }
  validateEmail(email);
  validateNumber(number);
  checkLength(username,min,max);
});

// Email checker>>>
function validateEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// to validate number
function validateNumber(num) {
  const numStr = /^-?(\d+\.?\d*)$|(\d*\.?\d+)$/;
  if (numStr.test(num.value.toString())) {
    showSuccess(num);
  } else {
    showError(num, "Number is not valid");
  }
}

// check lENGTH for userName

function checkLength(input, min, max) {
  // if (input.value.length < min) {
  //   showError(input, ``);
  // }
  console
}
