let isDarkMode = false;

function toggleDarkMode() {
    const body = document.body;

    if (isDarkMode) {
        body.style.backgroundColor = "#e6e6e6"; // cor de fundo claro
        body.style.color = "#222"
    } else {
        body.style.backgroundColor = "#222"; // cor de fundo escuro
        body.style.color = "#e6e6e6"
    }

    isDarkMode = !isDarkMode;
}