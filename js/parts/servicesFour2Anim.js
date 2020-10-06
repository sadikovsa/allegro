let mainServicesFour = document.querySelectorAll('.services-four')[1];
let mainServicesFourTitle = mainServicesFour.querySelector('.title');
let mainServicesFourImg = mainServicesFour.querySelector('.services-img');
let mainServicesFourText = mainServicesFour.querySelector('.text');

const servicesFour2Anim = gsap.timeline({
        paused: true,
        duration: 1,
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