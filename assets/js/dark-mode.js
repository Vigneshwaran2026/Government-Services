// Apply theme from URL
function applyTheme() {
    const params = new URLSearchParams(window.location.search);
    const theme = params.get("theme");

    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

function updateIcons() {
    document.querySelectorAll(".themeIcon").forEach(icon => {
        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    applyTheme();
    updateIcons();
});

// Toggle theme
document.addEventListener("click", function (e) {
    const toggle = e.target.closest(".theme-toggle");

    if (toggle) {
        document.body.classList.toggle("dark-mode");
        updateIcons();
    }
});

// Preserve theme in links
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {

        const isDark = document.body.classList.contains("dark-mode");

        if (isDark && this.href && !this.href.includes("theme=dark")) {
            e.preventDefault();
            window.location.href = this.href + "?theme=dark";
        }

    });
});