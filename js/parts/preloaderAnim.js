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
        auto: false, // Don't automatically initialize everything with class 'odometer'
        selector: preloaderCounter, // Change the selector used to automatically find things to be animated
        format: 'd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
        duration: 10000, // Change how long the javascript expects the CSS animation to take
        theme: 'default', // Specify the theme (if you have more than one theme css file on the page)
    };
    let v = 0;
    let t = 100;
    let speed = 1000;
    let o = new Odometer({
        el: preloaderCounter,
        value: 0,
        duration: 10000,
        format: 'd',
        theme: 'default',
        minIntegerLen: 1,
        maxIntegerLen: 1,
    });
    o.render();



    let timer = setTimeout(() => {
        o.update(32);
        preloaderOverlay.style.transform = 'translateY(' + 68 + '%)';
        setTimeout(() => {
            o.update(60);
            preloaderOverlay.style.transform = 'translateY(' + 40 + '%)';
            setTimeout(() => {
                o.update(99);
                preloaderOverlay.style.transform = 'translateY(' + 0 + '%)';
                setTimeout(() => {
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
                    clearInterval(timer);
                }, 1500)

            }, 1500)
        }, 1500)
    }, 1500)




    //    let timer = setInterval(() => {
    //        if (t > 0) {
    //            t--;
    //            preloaderOverlay.style.transform = 'translateY(' + t + '%)';
    //        } else {
    //            clearInterval(timer);
    //            window.scrollTo(0, 0);
    //            html.style.overflow = 'inherit';
    //            gsap.to(preloaderImg, {
    //                duration: 1,
    //                css: {
    //                    top: headerLogo.offsetTop,
    //                    left: headerLogo.offsetLeft,
    //                    maxWidth: '200px',
    //                    scale: 1,
    //                    translateY: 0,
    //                    opacity: 0
    //                },
    //                onStart: function () {
    //                    gsap.to(preloader, {
    //                        delay: 0.3,
    //                        autoAlpha: 0
    //                    })
    //                    gsap.to(headerLogo, {
    //                        delay: 0.5,
    //                        autoAlpha: 1
    //                    })
    //                }
    //            })
    //
    //        }
    //    }, 40)

};