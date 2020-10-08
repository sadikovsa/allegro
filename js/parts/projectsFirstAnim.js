let mainProjectsFirst = document.querySelector('.main-projects__wrap');
let mainProjectsFirstTitle = document.querySelector('.main-projects__wrap .title-big');
let mainProjectsFirstLine1 = document.querySelector('.main-projects__wrap .projects-line.first');
let mainProjectsFirstLine2 = document.querySelector('.main-projects__wrap .projects-line.second');

const projectsFirstAnim = gsap.timeline({
        paused: true,
        duration: 0.8,
    })
    .from(mainProjectsFirstTitle, {
        autoAlpha: 0,
        x: -400
    })
    .from(mainProjectsFirstLine1, {
        x: -1000,
        autoAlpha: 0,
    })
    .from(mainProjectsFirstLine2, {
        x: 1000,
        autoAlpha: 0,
    });


export default projectsFirstAnim;