export default function servicesTwoAnim() {
    let mainServicesTwo = document.querySelectorAll('.services-two')[1];
    let mainServicesTwoTitle = mainServicesTwo.querySelector('.title');
    let mainServicesTwoImg = mainServicesTwo.querySelector('.services-img');
    let mainServicesTwoText = mainServicesTwo.querySelector('.text');

    gsap.set(mainServicesTwoImg, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainServicesTwoTitle, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainServicesTwoText, {
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
            .from(mainServicesTwoTitle, {
                autoAlpha: 0,
                x: -400,
            })
            .from(mainServicesTwoImg, {
                y: 300,
                autoAlpha: 0,
            })
            .from(mainServicesTwoText, {
                y: 400,
                autoAlpha: 0,
            })
    })
};