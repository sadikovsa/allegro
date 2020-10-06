let bridgeThree = document.querySelector('.bridges-three');
let bridgeThreeImg = bridgeThree.querySelector('.bridges-img');
let bridgeThreeTitle = bridgeThree.querySelector('.title');
let bridgeThreeTitleBefore = bridgeThreeTitle.querySelector('.title-before');
let bridgeThreeTitleText = bridgeThreeTitle.querySelector('.title-text');

const bridgesThreeAnim = gsap.timeline({
        paused: true,
        duration: 1,
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
    });

export default bridgesThreeAnim;