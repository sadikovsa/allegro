let bridgeOne = document.querySelector('.bridges-one');
let bridgeOneImg = document.querySelector('.bridges-one .bridges-img');
let bridgeOneTitle = document.querySelector('.bridges-one .title');
let bridgeOneTitleBefore = document.querySelector('.bridges-one .title-before');
let bridgeOneTitleText = document.querySelector('.bridges-one .title-text');

let bridgesOneAnim;

if (window.innerWidth > 1199) {
    bridgesOneAnim = gsap.timeline({
            paused: true,
            duration: 0.8,
        })
        .from(bridgeOneImg, {
            autoAlpha: 0,
            x: 2000,
        }, '-=1')
        .from(bridgeOneTitleBefore, {
            autoAlpha: 0,
            top: "100%",
        }, '-=0.8')
        .from(bridgeOneTitleText, {
            autoAlpha: 0,
            y: -80,
        }, '-=0.5');
}

export default bridgesOneAnim;