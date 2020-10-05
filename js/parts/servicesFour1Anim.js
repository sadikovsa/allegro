export default function servicesFourAnim() {
    let mainServicesFour = document.querySelectorAll('.services-four')[0];
    let mainServicesFourTitle = mainServicesFour.querySelector('.title');
    let mainServicesFourImg = mainServicesFour.querySelector('.services-img');
    let mainServicesFourText = mainServicesFour.querySelector('.text');

    gsap.set(mainServicesFourImg, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainServicesFourTitle, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainServicesFourText, {
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
            .from(mainServicesFourTitle, {
                y: 400,
                autoAlpha: 0,
            })
            .from(mainServicesFourImg, {
                y: 500,
                autoAlpha: 0,
            })
            .from(mainServicesFourText, {
                y: 600,
                autoAlpha: 0,
            })


    })
};