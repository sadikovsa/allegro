let mainServicesThree = document.querySelectorAll('.services-three')[0];
let mainServicesThreeTitle = mainServicesThree.querySelector('.title');
let mainServicesThreeImg = mainServicesThree.querySelector('.services-img');
let mainServicesThreeText = mainServicesThree.querySelector('.text');

const servicesThree1Anim = gsap.timeline({
        paused: true,
        duration: 1,
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