let mainServicesTwo = document.querySelectorAll('.services-two')[1];
let mainServicesTwoTitle = mainServicesTwo.querySelector('.title');
let mainServicesTwoImg = mainServicesTwo.querySelector('.services-img');
let mainServicesTwoText = mainServicesTwo.querySelector('.text');

const servicesTwo2Anim = gsap.timeline({
        paused: true,
        duration: 1,
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