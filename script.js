// function toggleTheme() {
//     const body = document.body;
//     // Toggle between light and dark classes
//     if (body.classList.contains('light')) {
//         body.classList.remove('light');
//         body.classList.add('dark');
//     } else {
//         body.classList.remove('dark');
//         body.classList.add('light');
//     }
// }

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(savedTheme);

    // Trigger animation by adding .loaded class to .center
    const center = document.querySelector('.center');
    center.classList.add('loaded');
});