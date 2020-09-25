export default function projectsSecondAnim() {
    let mainProjects = document.querySelector('.main-projects');
    let mainProjectsSecond = mainProjects.querySelector('.main-projects__info');
    let mainProjectsSecondContent1 = mainProjectsSecond.querySelector('.main-projects__content.one');
    let mainProjectsSecondContent2 = mainProjectsSecond.querySelector('.main-projects__content.two');
    let mainProjectsSecondIpad = mainProjectsSecond.querySelector('.main-projects__ipad');
    let mainProjectsSecondIpadImgs = mainProjectsSecondIpad.querySelectorAll('img');

    return new Promise((resolve) => {
        const tl = gsap.timeline({
                delay: 2,
                duration: 2,
                scrollTrigger: {
                    trigger: mainProjectsSecond,
                    start: "top top",
                    end: () => innerHeight * 35,
                    scrub: true,
                    pin: true,
                    onLeave: () => {

                    }
                },
                onComplete: () => {
                    resolve();
                }
            })
            .to(mainProjectsSecond, {
                autoAlpha: 1,
            })
            .from(mainProjectsSecondContent1, {
                delay: 1.4,
                autoAlpha: 0,
                y: 400
            })
            .from(mainProjectsSecondIpad, {
                delay: 2,
                x: 1000,
                autoAlpha: 0,
            })


            .to(mainProjectsSecondContent1, {
                delay: 4,
                autoAlpha: 0,
                y: -400,
            })
            .from(mainProjectsSecondIpadImgs[1], {
                delay: 4,
                autoAlpha: 0,
                zIndex: 10
            })
            .from(mainProjectsSecondContent2, {
                delay: 5,
                autoAlpha: 0,
                y: 400
            })
            .to(mainProjectsSecondContent2, {
                delay: 6,
                autoAlpha: 0,
                y: -400
            })
            .to(mainProjectsSecondIpad, {
                delay: 7,
                x: 1000,
                autoAlpha: 0,
            })

    })

};
