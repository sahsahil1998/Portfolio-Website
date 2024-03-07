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

    // Check if the form exists on the current page before adding event listener
    const contactForm = document.getElementById('myForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            var formData = new FormData(this); // Grab the form data

            fetch('https://formspree.io/f/mgegzoyd', { // Use your Formspree endpoint
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json' 
                },
            })
            .then(response => {
                if (response.ok) {
                    document.getElementById('myForm').style.display = 'none'; 
                    document.getElementById('formResult').style.display = 'block'; 
                    document.getElementById('formResult').innerHTML = '<p>Thank you for your message!</p>';
                } else {
                    document.getElementById('formResult').style.display = 'block'; 
                    document.getElementById('formResult').innerHTML = '<p>Oops! There was a problem with your submission. Please try again.</p>';
                }
            })
            .catch(error => {
                document.getElementById('formResult').style.display = 'block'; 
                document.getElementById('formResult').innerHTML = '<p>Oops! There was a problem with your submission. Please try again.</p>';
            });
        });
    }
});