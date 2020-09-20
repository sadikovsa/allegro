export default function preloaderAnim() {
    let headerLogo = document.querySelector('.header-logo');
    let preloaderImg = document.querySelector('.preloader-logo');
    let preloader = document.querySelector('.preloader');
    let preloaderOverlay = preloader.querySelector('.preloader-overlay');
    let preloaderCounter = document.querySelector('.preloader-counter .counter');
    let html = document.querySelector('html');
    html.style.overflow = 'hidden';
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
    window.odometerOptions = {
        auto: false
    };
    let v = 0;
    let t = 100;
    let speed = 1000;
    let o = new Odometer({
        el: preloaderCounter,
        value: 0,
        duration: 3000,
        format: 'dd',
        theme: 'default'
    });
    o.render();


    function callback() {
        if (v <= 100) {
            o.update(v++);
            t--;
            preloaderOverlay.style.transform = 'translateY(' + t + '%)';
            speed -= 30; // actually this will kill your browser when goes to 0, but shows the idea 
            setTimeout(callback, speed);
        } else {
            clearInterval(timer);
            window.scrollTo(0, 0);
            html.style.overflow = 'inherit';
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
                    gsap.to(preloader, {
                        delay: 0.3,
                        autoAlpha: 0
                    })
                    gsap.to(headerLogo, {
                        delay: 0.5,
                        autoAlpha: 1
                    })
                }
            })

        }

    }

    let timer = setTimeout(callback, speed);

};