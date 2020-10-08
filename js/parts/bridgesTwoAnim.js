let bridgeTwo = document.querySelector('.bridges-two');
let bridgeTwoImg = document.querySelector('.bridges-two .bridges-img');
let bridgeTwoTitle = document.querySelector('.bridges-two .title');
let bridgeTwoTitleBefore = document.querySelector('.bridges-two .title-before');
let bridgeTwoTitleText = document.querySelector('.bridges-two .title-text');

let bridgesTwoAnim;
if (window.innerWidth > 1199) {
    bridgesTwoAnim = gsap.timeline({
            paused: true,
            duration: 0.8,
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
}

export default bridgesTwoAnim;