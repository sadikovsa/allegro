let bridgeTwo = document.querySelector('.bridges-two');
let bridgeTwoImg = bridgeTwo.querySelector('.bridges-img');
let bridgeTwoTitle = bridgeTwo.querySelector('.title');
let bridgeTwoTitleBefore = bridgeTwoTitle.querySelector('.title-before');
let bridgeTwoTitleText = bridgeTwoTitle.querySelector('.title-text');


const bridgesTwoAnim = gsap.timeline({
        paused: true,
        duration: 1,
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
    });

export default bridgesTwoAnim;