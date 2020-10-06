let bridgeFour = document.querySelector('.bridges-four');
let bridgeFourImg = bridgeFour.querySelector('.bridges-img');
let bridgeFourTitle = bridgeFour.querySelector('.title');
let bridgeFourText = bridgeFour.querySelector('.text');
let bridgeFourBtn = bridgeFour.querySelector('.btn');

const bridgesFourAnim = gsap.timeline({
        paused: true,
        duration: 1,
    })
    .from(bridgeFourImg, {
        autoAlpha: 0,
        y: 400
    })
    .from(bridgeFourTitle, {
        autoAlpha: 0,
        y: 500,
    })
    .from(bridgeFourText, {
        autoAlpha: 0,
        y: 600,
    })
    .from(bridgeFourBtn, {
        autoAlpha: 0,
        y: 700,
    });

export default bridgesFourAnim;