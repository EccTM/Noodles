$(document).ready(function () {
    // Theme variable
    theme = "light";

    // Load the theme preference from localStorage
    const preferredTheme = localStorage.getItem("theme");

    // Select the stylesheet <link>
    const themeLink = document.querySelector("#theme-link");

    // Select the button
    const btn = document.querySelector(".btn-theme-toggle");

    // If the current theme in localStorage is "dark"
    if (preferredTheme == "dark") {
        // switch to "style-dark.css"
        theme = "dark";
        themeLink.href = "css/style-dark.css";
    }

    // Listen for a click on the button
    btn.addEventListener("click", function () {
        // If the current URL contains "style-light.css"
        if (themeLink.getAttribute("href") == "css/style-light.css") {
            // switch to dark
            theme = "dark";
            themeLink.href = "css/style-dark.css";
        } else {
            // switch to light
            theme = "light";
            themeLink.href = "css/style-light.css";
        }
        // Then save the choice in localStorage
        localStorage.setItem("theme", theme);
    });
});