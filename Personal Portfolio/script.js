/* =================================
   MOBILE MENU
================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close menu when clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =================================
   DARK MODE
================================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "☾";

        localStorage.setItem("theme", "light");

    }

});


/* Remember theme */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀";

}


/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =================================
   BACK TO TOP
================================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =================================
   MOUSE GLOW EFFECT
================================= */

document.addEventListener("mousemove", event => {

    const glow = document.createElement("div");

    glow.className = "mouse-glow";

    glow.style.left =
        event.clientX + "px";

    glow.style.top =
        event.clientY + "px";

    document.body.appendChild(glow);


    setTimeout(() => {

        glow.remove();

    }, 500);

});


/* =================================
   ADD MOUSE GLOW CSS
================================= */

const glowStyle =
document.createElement("style");

glowStyle.innerHTML = `

.mouse-glow {

    position: fixed;

    width: 12px;

    height: 12px;

    background: #e85d9e;

    border-radius: 50%;

    pointer-events: none;

    transform: translate(-50%, -50%);

    opacity: 0.25;

    filter: blur(4px);

    animation: mouseGlow 0.5s ease forwards;

    z-index: 9999;

}

@keyframes mouseGlow {

    0% {

        transform:
            translate(-50%, -50%)
            scale(1);

        opacity: 0.3;

    }

    100% {

        transform:
            translate(-50%, -50%)
            scale(3);

        opacity: 0;

    }

}

`;

document.head.appendChild(glowStyle);