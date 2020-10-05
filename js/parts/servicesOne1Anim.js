export default function servicesOneAnim() {
    let mainServicesOne = document.querySelectorAll('.services-one')[0];
    let mainServicesOneTitle = mainServicesOne.querySelector('.title');
    let mainServicesOneImg = mainServicesOne.querySelector('.services-img');
    let mainServicesOneText = mainServicesOne.querySelector('.text');

    gsap.set(mainServicesOneImg, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainServicesOneTitle, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainServicesOneText, {
        clearProps: 'all',
        autoAlpha: 0
    });

    return new Promise((resolve) => {
        const t1 = gsap.timeline({
                duration: 0.8,
                onComplete() {
                    resolve();
                },
            })
            .from(mainServicesOneTitle, {
                y: 300,
                autoAlpha: 0,
            })
            .from(mainServicesOneImg, {
                y: 400,
                autoAlpha: 0,
            })
            .from(mainServicesOneText, {
                y: 500,
                autoAlpha: 0,
            })

    })
};