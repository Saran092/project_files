const toggleThemeButton = document.getElementById('toggle-theme');
const themeStylesheet = document.getElementById('theme-stylesheet');

toggleThemeButton.addEventListener('click', () => {
    if (themeStylesheet.getAttribute('href') === 'light1.css') {
        // Switch to dark mode
        themeStylesheet.setAttribute('href', 'dark1.css');
        toggleThemeButton.src = 'moon_icon.png'; // Change to moon icon
        window.location.href = 'dark1.html'; // Redirect to dark mode HTML
    } else {
        // Switch to light mode
        themeStylesheet.setAttribute('href', 'light1.css');
        toggleThemeButton.src = 'sun_icon.png'; // Change to sun icon
        window.location.href = 'index.html'; // Redirect to light mode HTML
    }
});
