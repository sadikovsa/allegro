let mainServicesFour = document.querySelector('.services-four.three');
let mainServicesFourTitle = document.querySelector('.services-four.three .title');
let mainServicesFourImg = document.querySelector('.services-four.three .services-img');
let mainServicesFourText = document.querySelector('.services-four.three .text');

const servicesFour3Anim = gsap.timeline({
        paused: true,
        duration: 0.8,
    })
    .from(mainServicesFourImg, {
        x: -400,
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

export default servicesFour3Anim;