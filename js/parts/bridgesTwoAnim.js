export default function bridgesTwoAnim() {
    let bridgeTwo = document.querySelector('.bridges-two');
    let bridgeTwoImg = bridgeTwo.querySelector('.bridges-img');
    let bridgeTwoTitle = bridgeTwo.querySelector('.title');
    bridgeTwoTitle.querySelector('.title-text').innerHTML = bridgeTwoTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let bridgeTwoTitleBefore = bridgeTwoTitle.querySelector('.title-before');
    let bridgeTwoTitleText = bridgeTwoTitle.querySelector('.title-text');


    gsap.set(bridgeTwoTitleBefore, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(bridgeTwoImg, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(bridgeTwoTitleText, {
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
            .from(bridgeTwoImg, {
                autoAlpha: 0,
                x: 1000,
            })
            .from(bridgeTwoTitleBefore, {
                autoAlpha: 0,
                top: "100%",
            })

            .from(bridgeTwoTitleText, {
                 autoAlpha: 0,
                y: -80
            })

    });
};