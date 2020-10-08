let mainServicesFour = document.querySelector('.services-four.two');
let mainServicesFourTitle = document.querySelector('.services-four.two .title');
let mainServicesFourImg = document.querySelector('.services-four.two .services-img');
let mainServicesFourText = document.querySelector('.services-four.two .text');

const servicesFour2Anim = gsap.timeline({
        paused: true,
        duration: 0.8,
    })
    .from(mainServicesFourImg, {
        x: 400,
        autoAlpha: 0,
    })
    .from(mainServicesFourTitle, {
        y: 400,
        autoAlpha: 0,
    })

    .from(mainServicesFourText, {
        y: 600,
        autoAlpha: 0,
    });

export default servicesFour2Anim;