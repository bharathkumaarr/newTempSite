document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(savedTheme);


    const projectItems = document.querySelectorAll('.project-item');
    

    const projectUrls = {
        'Texty': 'https://usetexty.vercel.app/',
        'Notesy': 'https://usenotesy.vercel.app/',
        'CodeSync-Live': 'https://github.com/bharathkumaarr/CodeSync-Live',
        'chronoLOCK': 'https://github.com/bharathkumaarr/chronoLOCK',
        'Aura': 'https://github.com/bharathkumaarr/Aura',
        'BrieflyAI': 'https://usebrieflyai.vercel.app/',
        'LinkedIn-Search-Tool': 'https://linkedin-search-tool.vercel.app/'
    };

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectName = item.querySelector('.project-name').textContent.replace(' ↗', '');
            const url = projectUrls[projectName];
            if (url) {
                window.open(url, '_blank');
            }
        });
    });


    projectItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
    });
});


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