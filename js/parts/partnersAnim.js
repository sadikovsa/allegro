let partners = document.querySelector('.partners');
let partnersTitle = document.querySelector('.partners .title');
let partnersList = document.querySelector('.partners .partners-slider__wrapper');

const partnersAnim = gsap.timeline({
        paused: true,
        duration: 0.8,
    })
    .from(partnersTitle, {
        x: -600,
        autoAlpha: 0,
    })
    .from(partnersList, {
        x: 600,
        autoAlpha: 0,
    });

export default partnersAnim;