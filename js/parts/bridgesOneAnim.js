let bridgeOne = document.querySelector('.bridges-one');
let bridgeOneImg = bridgeOne.querySelector('.bridges-img');
let bridgeOneTitle = bridgeOne.querySelector('.title');
let bridgeOneTitleBefore = bridgeOneTitle.querySelector('.title-before');
let bridgeOneTitleText = bridgeOneTitle.querySelector('.title-text');

const bridgesOneAnim = gsap.timeline({
        paused: true,
        duration: 1,
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
        y: -80,
    });

export default bridgesOneAnim;