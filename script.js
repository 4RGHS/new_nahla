// document.addEventListener("DOMContentLoaded", function() {
//     const modeToggleCheckbox = document.getElementById('mode-toggle');

//     // Function to set the theme
//     const setTheme = (theme) => {
//         if (theme === 'dark') {
//             document.body.classList.add('dark-mode');
//             document.body.setAttribute('data-theme', 'dark');
//             modeToggleCheckbox.checked = true;
//         } else {
//             document.body.classList.remove('dark-mode');
//             document.body.setAttribute('data-theme', 'light');
//             modeToggleCheckbox.checked = false;
//         }
//         localStorage.setItem('mode', theme);
//     };

//     // Check for saved user preference in localStorage
//     const savedMode = localStorage.getItem('mode');

//     if (savedMode) {
//         // If there's a saved preference, use it
//         setTheme(savedMode);
//     } else {
//         // Otherwise, use system preference
//         const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//         if (systemPrefersDark) {
//             setTheme('dark');
//         } else {
//             setTheme('light');
//         }
//     }

//     // Toggle mode on checkbox change
//     modeToggleCheckbox.addEventListener('change', function() {
//         const newMode = modeToggleCheckbox.checked ? 'dark' : 'light';
//         setTheme(newMode);
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const themeIcon = document.getElementById('theme-icon');

    // Function to toggle the theme
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeIcon.textContent = newTheme === 'dark' ? '🌞' : '🌙'; // Update the icon
        localStorage.setItem('theme', newTheme);
    };

    // Initialize theme icon based on current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    themeIcon.textContent = currentTheme === 'dark' ? '🌞' : '🌙';

    // Event listener for the toggle button
    themeToggleButton.addEventListener('click', toggleTheme);
});




// Set the theme as early as possible to prevent flash of white
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }
})();