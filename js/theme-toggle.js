// internal theme variable
var theme = "light";

// themeToggle function
function themeToggle() {
    console.log("themeToggle - start theme: " + theme);

    // Body
    document.body.classList.toggle("body-dark");

    // Cards
    var cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("card-dark");
    }

    // Invertable Card Images
    var invertables = document.getElementsByClassName("invertable");

    for (let i = 0; i < invertables.length; i++) {
        invertables[i].classList.toggle("invert");
    }

    // Theme Toggle Image
    var btnThemeToggleImg = document.getElementById("btn-theme-toggle-img");

    btnThemeToggleImg.src="assets/ui/" + theme + "-mode.svg";   

    // Toggle Theme Preference Setting
    if (theme == "light") {
        theme = "dark";
    } else {
        theme = "light";
    }

    // Save Preference to localStorage
    localStorage.setItem("theme", theme);
    console.log("themeToggle - Saved theme: " + theme);
}

function checkThemePreferences() {
    // Load the theme preference from localStorage
    const preferredTheme = localStorage.getItem("theme");

    console.log("preferredTheme: " + preferredTheme);

    // If the current theme in localStorage is "dark" on load
    if (preferredTheme !== null && preferredTheme === "dark") {
        themeToggle();
    }
}

window.onload = checkThemePreferences();
