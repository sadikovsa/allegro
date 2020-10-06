let mainServicesTwo = document.querySelectorAll('.services-two')[0];
let mainServicesTwoTitle = mainServicesTwo.querySelector('.title');
let mainServicesTwoImg = mainServicesTwo.querySelector('.services-img');
let mainServicesTwoText = mainServicesTwo.querySelector('.text');

const servicesTwo1Anim = gsap.timeline({
        paused: true,
        duration: 1,
    })
    .from(mainServicesTwoImg, {
        x: -400,
        autoAlpha: 0,
    })
    .from(mainServicesTwoTitle, {
        autoAlpha: 0,
        y: 300,
    })

    .from(mainServicesTwoText, {
        y: 400,
        autoAlpha: 0,
    });

export default servicesTwo1Anim;