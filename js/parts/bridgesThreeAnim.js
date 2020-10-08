let bridgeThree = document.querySelector('.bridges-three');
let bridgeThreeImg = document.querySelector('.bridges-three .bridges-img');
let bridgeThreeTitle = document.querySelector('.bridges-three .title');
let bridgeThreeTitleBefore = document.querySelector('.bridges-three .title-before');
let bridgeThreeTitleText = document.querySelector('.bridges-three .title-text');


let bridgesThreeAnim;

if (window.innerWidth > 1199) {
    bridgesThreeAnim = gsap.timeline({
            paused: true,
            duration: 0.8,
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
}

export default bridgesThreeAnim;