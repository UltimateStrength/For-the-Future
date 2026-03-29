
document.addEventListener('DOMContentLoaded', function () {

    var header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }, { passive: true });


    document.querySelectorAll('a[href*="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var href = this.getAttribute('href');

            var hashIndex = href.indexOf('#');
            var path = href.substring(0, hashIndex);
            var hash = href.substring(hashIndex);

            if (path === '' || path === window.location.pathname.split('/').pop()) {
                var target = document.querySelector(hash);
                if (target) {
                    e.preventDefault();
                    var offset = 100; // altura do header fixo
                    var top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: top, behavior: 'smooth' });
                }
            }
        });
    });


    var footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(function (link) {
        if (link.textContent.includes('2019')) {
            var currentYear = new Date().getFullYear();
            link.textContent = link.textContent.replace('2023', currentYear);
        }
    });

});