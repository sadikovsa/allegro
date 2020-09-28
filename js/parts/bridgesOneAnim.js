export default function bridgesOneAnim() {
    let bridgeOne = document.querySelector('.bridges-one');
    let bridgeOneImg = bridgeOne.querySelector('.bridges-img');
    let bridgeOneTitle = bridgeOne.querySelector('.title');
    bridgeOneTitle.querySelector('.title-text').innerHTML = bridgeOneTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let bridgeOneTitleBefore = bridgeOneTitle.querySelector('.title-before');
    let bridgeOneTitleText = bridgeOneTitle.querySelector('.title-text');
    gsap.set(bridgeOneTitleBefore, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(bridgeOneTitleText, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(bridgeOneImg, {
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
            .from(bridgeOneImg, {
                autoAlpha: 0,
                x: 2000,
            })
            .from(bridgeOneTitleBefore, {
                autoAlpha: 0,
                top: "100%",
            })
            .from(bridgeOneTitleText, {
                autoAlpha: 0,
                y: -80
            })

    });
};