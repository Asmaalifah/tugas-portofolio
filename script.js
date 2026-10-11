/*ganti tema*/
const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
    const savedTheme = localStorage.getItem("portfolio-theme") || "light";

    function setTheme(theme) {
        document.documentElement.dataset.theme = theme;

        const isDark = theme === "dark";
        themeToggle.setAttribute("aria-pressed", String(isDark));
        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );
        themeToggle.textContent = isDark ? "☀️" : "🌙";
    }

    setTheme(savedTheme);

    themeToggle.addEventListener("click", () => {
        const nextTheme =
            document.documentElement.dataset.theme === "dark" ? "light" : "dark";

        setTheme(nextTheme);
        localStorage.setItem("portfolio-theme", nextTheme);
    });
}

/* Automatic greeting */
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 4 && hour < 10) {
        greeting = "Good Morning ⛅";
    } else if (hour >= 10 && hour < 15) {
        greeting = "Good Afternoon 🌞";
    } else if (hour >= 15 && hour < 18) {
        greeting = "Good Evening 🌇";
    } else {
        greeting = "Good Night 🌙";
    }

    const greetingElement = document.querySelector("#time-greeting");
    if (!greetingElement) return;

    greetingElement.textContent = greeting;
}

updateGreeting();

/* Typing effect for intro */
(() => {
    const nameElement = document.querySelector("#intro-name");
    const introScreen = document.querySelector(".intro-screen");
    if (!nameElement || !introScreen) return;

    const name = "HELLO, I'm Alipaa 👋😊";
    let index = 0;

    function typeNextLetter() {
        if (index < name.length) {
            nameElement.textContent += name[index];
            index += 1;
            setTimeout(typeNextLetter, 120);
        } else {
            setTimeout(() => {
                introScreen.classList.add("is-hidden");
            }, 1000);
        }
    }

    typeNextLetter();
})();