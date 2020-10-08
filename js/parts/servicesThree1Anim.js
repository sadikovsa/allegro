let mainServicesThree = document.querySelector('.services-three.one');
let mainServicesThreeTitle = document.querySelector('.services-three.one .title');
let mainServicesThreeImg = document.querySelector('.services-three.one .services-img');
let mainServicesThreeText = document.querySelector('.services-three.one .text');

const servicesThree1Anim = gsap.timeline({
        paused: true,
        duration: 0.8,
    })
    .from(mainServicesThreeImg, {
        x: 400,
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

export default servicesThree1Anim;