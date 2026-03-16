document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll reveal animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log('Observing:', entry.target, 'isIntersecting:', entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);


    const revealElements = document.querySelectorAll('.section-title, .project-card');
    revealElements.forEach(el => observer.observe(el));

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.parentElement.style.padding = '10px 50px';
            navbar.parentElement.style.background = 'rgba(12, 12, 14, 0.95)';
        } else {
            navbar.parentElement.style.padding = '20px 50px';
            navbar.parentElement.style.background = 'rgba(12, 12, 14, 0.8)';
        }
    });
});
