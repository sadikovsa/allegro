let mainServicesTwo = document.querySelectorAll('.services-two.one');
let mainServicesTwoTitle = document.querySelector('.services-two.one .title');
let mainServicesTwoImg = document.querySelector('.services-two.one .services-img');
let mainServicesTwoText = document.querySelector('.services-two.one .text');

const servicesTwo1Anim = gsap.timeline({
        paused: true,
        duration: 0.8,
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