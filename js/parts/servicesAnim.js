export default function servicesAnim() {
    let mainServicesFirst = document.querySelector('.services-first');
    let mainServicesFirstTitle = mainServicesFirst.querySelector('.title-big');
    let mainServicesFirstLine1 = mainServicesFirst.querySelector('.services-line.one');
    let mainServicesFirstLine2 = mainServicesFirst.querySelector('.services-line.two');

    gsap.set(mainServicesFirstTitle, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainServicesFirstLine1, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainServicesFirstLine2, {
        clearProps: 'all',
        autoAlpha: 0
    });

    return new Promise((resolve) => {
        const tl = gsap.timeline({
                duration: 0.8,
                onComplete: () => {
                    resolve();
                }
            })
            .from(mainServicesFirstTitle, {
                autoAlpha: 0,
                x: -200
            })
            .from(mainServicesFirstLine1, {
                y: -200,
                autoAlpha: 0,
            })
            .from(mainServicesFirstLine2, {
                y: 200,
                autoAlpha: 0,
            })
    })
};