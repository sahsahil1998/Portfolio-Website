document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeToggle.classList = currentTheme === 'night-mode' ? 'fas fa-moon' : 'fas fa-sun';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
        const theme = document.body.classList.contains('night-mode') ? 'night-mode' : 'light-mode';
        localStorage.setItem('theme', theme);
        themeToggle.classList = theme === 'night-mode' ? 'fas fa-moon' : 'fas fa-sun';
    });
});