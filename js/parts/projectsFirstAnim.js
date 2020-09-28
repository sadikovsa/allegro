export default function projectsFirstAnim() {

    let mainProjectsFirst = document.querySelector('.main-projects__wrap');
    let mainProjectsFirstTitle = mainProjectsFirst.querySelector('.title-big');
    let mainProjectsFirstLine1 = mainProjectsFirst.querySelector('.projects-line.first');
    let mainProjectsFirstLine2 = mainProjectsFirst.querySelector('.projects-line.second');

    gsap.set(mainProjectsFirstTitle, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainProjectsFirstLine1, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainProjectsFirstLine2, {
        clearProps: 'all',
        autoAlpha: 0
    });

    return new Promise((resolve) => {
        const tl = gsap.timeline({
                duration: 0.8,
                onComplete: () => {
                    resolve();
                }
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
            })
    })
};