export default function servicesAnim() {
    let mainServices = document.querySelector('.main-services');
    let mainServicesFirst = mainServices.querySelector('.services-first');
    let mainServicesFirstTitle = mainServicesFirst.querySelector('.title-big');
    let mainServicesFirstTitleOuter = mainServicesFirst.querySelector('.title-outer');
    let mainServicesFirstLine1 = mainServicesFirst.querySelector('.services-line.one');
    let mainServicesFirstLine2 = mainServicesFirst.querySelector('.services-line.two');

    return new Promise((resolve) => {
        const tl = gsap.timeline({
                delay: 2,
                duration: 2,
                scrollTrigger: {
                    trigger: mainServicesFirst,
                    start: "top 0",
                    end: 'bottom 0',
                    scrub: true,
                    pin: true,
                    onLeave: () => {}
                },
                onComplete: () => {
                    resolve();
                }
            })
            .to(mainServicesFirst, {
                autoAlpha: 1,
            })
            .from(mainServicesFirstTitle, {
                delay: 1.2,
                autoAlpha: 0,
                x: -200
            })
            .from(mainServicesFirstLine1, {
                delay: 1.6,
                y: -200,
                autoAlpha: 0,
            })
            .from(mainServicesFirstLine2, {
                delay: 1.8,
                y: 200,
                autoAlpha: 0,
            })
            .from(mainServicesFirstTitleOuter, {
                delay: 2,
                autoAlpha: 0,
            })
            .to(mainServicesFirstTitle, {
                delay: 2.4,
                autoAlpha: 0,
                x: -200
            })
            .to(mainServicesFirstLine1, {
                delay: 2.6,
                y: -200,
                autoAlpha: 0,
            })
            .to(mainServicesFirstLine2, {
                delay: 3,
                y: 200,
                autoAlpha: 0,
            })
            .to(mainServicesFirstTitleOuter, {
                delay: 4,
                autoAlpha: 0,
            })
    })
};
