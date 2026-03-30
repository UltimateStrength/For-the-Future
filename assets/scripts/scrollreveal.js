
document.addEventListener('DOMContentLoaded', function () {

    // Elementos que vão receber o efeito
    const targets = document.querySelectorAll(
        '.news-item, .proposal-card, .person, .purple-box2 > div > div, .white-box > div'
    );

    targets.forEach(function (el, i) {
        el.classList.add('reveal');
        // Stagger: cada elemento espera um pouco mais que o anterior
        el.style.transitionDelay = Math.min(i * 60, 400) + 'ms';
    });

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target); // dispara só uma vez
            }
        });
    }, {
        threshold: 0.12
    });

    targets.forEach(function (el) {
        observer.observe(el);
    });

});
