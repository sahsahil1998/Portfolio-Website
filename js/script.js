document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply the initial theme and update the icon and hover text
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        updateIconAndHoverText(currentTheme);
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.body.classList.toggle('night-mode') ? 'night-mode' : 'light-mode';
        localStorage.setItem('theme', theme);
        updateIconAndHoverText(theme);
    });

    function updateIconAndHoverText(theme) {
        if (theme === 'night-mode') {
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
            themeToggle.setAttribute('data-hover-text', 'Switch to light mode');
        } else {
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
            themeToggle.setAttribute('data-hover-text', 'Switch to dark mode');
        }
    }
});