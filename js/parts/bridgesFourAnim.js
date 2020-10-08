let bridgeFour = document.querySelector('.bridges-four');
let bridgeFourImg = document.querySelector('.bridges-four .bridges-img');
let bridgeFourTitle = document.querySelector('.bridges-four .title');
let bridgeFourText = document.querySelector('.bridges-four .text');
let bridgeFourBtn = document.querySelector('.bridges-four .btn');



let bridgesFourAnim;
if (window.innerWidth > 1199) {
    bridgesFourAnim = gsap.timeline({
            paused: true,
            duration: 0.8,
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
}
export default bridgesFourAnim;