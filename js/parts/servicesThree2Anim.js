let mainServicesThree = document.querySelector('.services-three.two');
let mainServicesThreeTitle = document.querySelector('.services-three.two .title');
let mainServicesThreeImg = document.querySelector('.services-three.two .services-img');
let mainServicesThreeText = document.querySelector('.services-three.two .text');

const servicesThree2Anim = gsap.timeline({
        paused: true,
        duration: 0.8,
    })
    .from(mainServicesThreeImg, {
        x: -400,
        autoAlpha: 0,
    })
    .from(mainServicesThreeTitle, {
        y: 400,
        autoAlpha: 0,
    })
    .from(mainServicesThreeText, {
        y: 500,
        autoAlpha: 0,
    })

export default servicesThree2Anim;