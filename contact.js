// Intersection Observer for Scroll Animations
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded'); // Add 'loaded' class for animation
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, observerOptions);

    // Select elements to animate on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
});
