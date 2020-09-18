export default function bridgesFourAnim() {
    let bridges = document.querySelector('.bridges');
    let bridgeThree = document.querySelector('.bridges-three');
    let bridgeFour = document.querySelector('.bridges-four');
    let bridgeFourImg = bridgeFour.querySelector('.bridges-img');
    let bridgeFourTitle = bridgeFour.querySelector('.title');
    let bridgeFourText = bridgeFour.querySelector('.text');
    let bridgeFourBtn = bridgeFour.querySelector('.btn');
    return new Promise((resolve) => {
        const tl = gsap.timeline({
                delay: 2,
                duration: 2,
                scrollTrigger: {
                    trigger: bridgeFour,
                    start: "top 250px",
                    end: 'bottom 0',
                    scrub: true,
                    pin: true,
                    onLeave: () => {

                    }
                },
                onComplete: () => {
                    resolve();
                }
            })
            .to(bridgeThree, {
                autoAlpha: 1,
                y: 0,
            })
            .from(bridgeFourImg, {
                delay: 1,
                autoAlpha: 0,
                y: 400
            })
            .from(bridgeFourTitle, {
                delay: 1.4,
                autoAlpha: 0,
                y: 400,
            })
            .from(bridgeFourText, {
                delay: 1.6,
                autoAlpha: 0,
                y: 400,
            })
            .from(bridgeFourBtn, {
                delay: 1.8,
                autoAlpha: 0,
                y: 400,
            })
            .to(bridgeFourTitle, {
                delay: 2.2,
                autoAlpha: 0,
                x: 600,
            })
            .to(bridgeFourImg, {
                delay: 2.4,
                autoAlpha: 0,
                y: -400
            })

            .to(bridgeFourText, {
                delay: 2.6,
                autoAlpha: 0,
                x: 600,
            })
            .to(bridgeFourBtn, {
                delay: 2.8,
                autoAlpha: 0,
                x: 600,
            })
    })
};
