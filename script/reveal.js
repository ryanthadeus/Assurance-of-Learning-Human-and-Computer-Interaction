document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');
    const revealSongs = document.querySelectorAll('.content-items');
    const revealAbout = document.querySelectorAll('.about-text');
    const aboutUs = document.querySelectorAll('.content-text');
    const songsPage = document.querySelectorAll('.list-song');

    revealElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200); 
    });
    aboutUs.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200); 
    });
    songsPage.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200); 
    });
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }, index * 200);
            }
        });
    }, observerOptions);

    revealSongs.forEach(element => {
        revealOnScroll.observe(element);
    });

    revealAbout.forEach(element => {
        revealOnScroll.observe(element);
    });
});