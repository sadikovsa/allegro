const headerLogo = document.querySelector('.header-logo');
const preloaderImg = document.querySelector('.preloader-logo');

paceOptions = {
    elements: {
        selectors: ['.preloader-logo']
    }
};
Pace.on('start', function () {
    document.querySelector('html').style.overflow = 'hidden';
    gsap.set(preloaderImg, {
        css: {
            translateY: '50%',
            scale: 4,
            top: '50%',
            left: '30%',
            opacity: 1
        }
    })
    gsap.set(headerLogo, {
        autoAlpha: 0
    })
});

Pace.on('done', function () {
    window.scrollTo(0, 0);
    document.querySelector('html').style.overflow = 'inherit';
    gsap.to(preloaderImg, {
        duration: 1,
        css: {
            top: headerLogo.offsetTop,
            left: headerLogo.offsetLeft,
            maxWidth: '200px',
            scale: 1,
            translateY: 0,
            opacity: 0
        },
        onStart: function () {
            gsap.to(headerLogo, {
                delay: 0.5,
                autoAlpha: 1
            })
        }
    })
});