let mainServicesFour = document.querySelector('.services-four.one');
let mainServicesFourTitle = document.querySelector('.services-four.one .title');
let mainServicesFourImg = document.querySelector('.services-four.one .services-img');
let mainServicesFourText = document.querySelector('.services-four.one .text');

const servicesFour1Anim = gsap.timeline({
        paused: true,
        duration: 0.8,
    })
    .from(mainServicesFourTitle, {
        y: 400,
        autoAlpha: 0,
    })
    .from(mainServicesFourImg, {
        y: 500,
        autoAlpha: 0,
    })
    .from(mainServicesFourText, {
        y: 600,
        autoAlpha: 0,
    });

export default servicesFour1Anim;