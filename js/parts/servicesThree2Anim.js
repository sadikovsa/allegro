export default function servicesThreeAnim() {
    let mainServicesThree = document.querySelectorAll('.services-three')[1];
    let mainServicesThreeTitle = mainServicesThree.querySelector('.title');
    let mainServicesThreeImg = mainServicesThree.querySelector('.services-img');
    let mainServicesThreeText = mainServicesThree.querySelector('.text');

    gsap.set(mainServicesThreeTitle, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainServicesThreeImg, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainServicesThreeText, {
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
            .from(mainServicesThreeImg, {
                x: -400,
                autoAlpha: 0,
            })
            .from(mainServicesThreeTitle, {
                y: 400,
                autoAlpha: 0,
            })
            .from(mainServicesThreeText, {
                y: 500,
                autoAlpha: 0,
            })

    })
};