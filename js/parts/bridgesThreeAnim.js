export default function bridgesThreeAnim() {
    let bridgeThree = document.querySelector('.bridges-three');
    let bridgeThreeImg = bridgeThree.querySelector('.bridges-img');
    let bridgeThreeTitle = bridgeThree.querySelector('.title');
    bridgeThreeTitle.querySelector('.title-text').innerHTML = bridgeThreeTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let bridgeThreeTitleBefore = bridgeThreeTitle.querySelector('.title-before');
    let bridgeThreeTitleText = bridgeThreeTitle.querySelector('.title-text');

    
    gsap.set(bridgeThreeImg, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(bridgeThreeTitleBefore, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(bridgeThreeTitleText, {
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
            .from(bridgeThreeImg, {
                autoAlpha: 0,
                y: 400,
            })
            .from(bridgeThreeTitleBefore, {
                autoAlpha: 0,
                top: "100%",
            })
            .from(bridgeThreeTitleText, {
                autoAlpha: 0,
                y: -80
            })

    })
};
