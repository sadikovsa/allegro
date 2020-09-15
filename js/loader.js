const headerLogo = document.querySelector('.header-logo');
const preloaderImg = document.querySelector('.preloader-logo');
gsap.set(preloaderImg, {
    css: {
        translateY: '50%',
        scale: 4,
        top: '50%',
        left: '30%'
    }
})
gsap.set(headerLogo, {
    autoAlpha: 0
})

paceOptions = {
    elements: {
        selectors: ['.preloader-logo']
    }
};
Pace.on('done', function () {
    window.scrollTo(0, 0);
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
})