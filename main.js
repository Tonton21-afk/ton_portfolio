document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var scrollThreshold = 50;

    function handleScroll() {
        var scrollPos = window.scrollY;

        if (scrollPos > scrollThreshold) {
            header.classList.add('sticky', 'dark-bg');
        } else {
            header.classList.remove('sticky', 'dark-bg');
        }
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
});