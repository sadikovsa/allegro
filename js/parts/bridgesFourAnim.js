export default function bridgesFourAnim() {
    let bridgeThree = document.querySelector('.bridges-three');
    let bridgeFour = document.querySelector('.bridges-four');
    let bridgeFourImg = bridgeFour.querySelector('.bridges-img');
    let bridgeFourTitle = bridgeFour.querySelector('.title');
    let bridgeFourText = bridgeFour.querySelector('.text');
    let bridgeFourBtn = bridgeFour.querySelector('.btn');

    gsap.set(bridgeFourImg, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(bridgeFourTitle, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(bridgeFourText, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(bridgeFourBtn, {
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
            .from(bridgeFourImg, {
                autoAlpha: 0,
                y: 400
            })
            .from(bridgeFourTitle, {
                autoAlpha: 0,
                y: 600,
            })
            .from(bridgeFourText, {
                autoAlpha: 0,
                y: 800,
            })
            .from(bridgeFourBtn, {
                autoAlpha: 0,
                y: 1000,
            })
    })
};