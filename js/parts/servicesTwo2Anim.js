let mainServicesTwo = document.querySelector('.services-two.two');
let mainServicesTwoTitle = document.querySelector('.services-two.two .title');
let mainServicesTwoImg = document.querySelector('.services-two.two .services-img');
let mainServicesTwoText = document.querySelector('.services-two.two .text');

const servicesTwo2Anim = gsap.timeline({
        paused: true,
        duration: 0.8,
    })
    .from(mainServicesTwoTitle, {
        autoAlpha: 0,
        x: -400,
    })
    .from(mainServicesTwoImg, {
        y: 300,
        autoAlpha: 0,
    })
    .from(mainServicesTwoText, {
        y: 400,
        autoAlpha: 0,
    });

export default servicesTwo2Anim;