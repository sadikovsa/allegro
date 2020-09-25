export default function projectsFirstAnim() {

    let mainProjects = document.querySelector('.main-projects');
    let mainProjectsFirst = mainProjects.querySelector('.main-projects__wrap');
    let mainProjectsFirstTitle = mainProjectsFirst.querySelector('.title-big');
    let mainProjectsFirstLine1 = mainProjectsFirst.querySelector('.projects-line.first');
    let mainProjectsFirstLine2 = mainProjectsFirst.querySelector('.projects-line.second');

    return new Promise((resolve) => {
        const tl = gsap.timeline({
                delay: 2,
                duration: 2,
                scrollTrigger: {
                    trigger: mainProjectsFirst,
                    start: "top top",
                    end: () => innerHeight * 30,
                    scrub: true,
                    pin: true,
                    onLeave: () => {

                    }
                },
                onComplete: () => {
                    resolve();
                }
            })

            .to(mainProjectsFirst, {
                autoAlpha: 1,
            })

            .from(mainProjectsFirstTitle, {
                autoAlpha: 0,
                x: -400
            })
            .from(mainProjectsFirstLine1, {
                delay: 1.4,
                x: -1000,
                autoAlpha: 0,
            })
            .from(mainProjectsFirstLine2, {
                delay: 2,
                x: 1000,
                autoAlpha: 0,
            })
    })
};