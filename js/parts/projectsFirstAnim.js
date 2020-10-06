let mainProjectsFirst = document.querySelector('.main-projects__wrap');
let mainProjectsFirstTitle = mainProjectsFirst.querySelector('.title-big');
let mainProjectsFirstLine1 = mainProjectsFirst.querySelector('.projects-line.first');
let mainProjectsFirstLine2 = mainProjectsFirst.querySelector('.projects-line.second');

const projectsFirstAnim = gsap.timeline({
        paused: true,
        duration: 1,
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