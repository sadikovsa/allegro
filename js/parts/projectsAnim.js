export default function projectsAnim() {
    let projects = document.querySelector('.projects');
    let projectsItemOne = projects.querySelectorAll('.projects-item')[0];
    let projectsItemOneContent = projectsItemOne.querySelector('.projects-item__left');
    let projectsItemOneImg = projectsItemOne.querySelector('.projects-item__right');

    let projectsItemTwo = projects.querySelectorAll('.projects-item')[1];
    let projectsItemTwoImg = projectsItemTwo.querySelector('.projects-item__left');
    let projectsItemTwoContent = projectsItemTwo.querySelector('.projects-item__right');

    let projectsItemThree = projects.querySelectorAll('.projects-item')[2];
    let projectsItemThreeImg = projectsItemThree.querySelector('.projects-item__left');
    let projectsItemThreeContent = projectsItemThree.querySelector('.projects-item__right');

    let projectsInProgress = document.querySelector('.projects-inprogress');
    let projectsInProgressTitle = projectsInProgress.querySelector('.title-big');
    let projectsInProgressItemOne = projectsInProgress.querySelectorAll('.projects-inprogress__item')[0];
    let projectsInProgressItemOneContent = projectsInProgressItemOne.querySelector('.projects-inprogress__left');
    let projectsInProgressItemOneImg = projectsInProgressItemOne.querySelector('.projects-inprogress__right');

    let projectsInProgressItemTwo = projectsInProgress.querySelectorAll('.projects-inprogress__item')[1];
    let projectsInProgressItemTwoImg = projectsInProgressItemTwo.querySelector('.projects-inprogress__left');
    let projectsInProgressItemTwoContent = projectsInProgressItemTwo.querySelector('.projects-inprogress__right');



    return new Promise((resolve) => {
        const t1 = gsap.timeline({
                duration: 0.8,
                onComplete() {
                    resolve();
                },
            })
            .from(projectsItemOneContent, {
                delay: 1,
                autoAlpha: 0,
                y: 400,
                scrollTrigger: {
                    trigger: projectsItemOne,
                    start: "top 50%",
                    end: 'top center',
                    scrub: true,
                },
            })
            .from(projectsItemOneImg, {
                delay: 2,
                x: 400,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: projectsItemOne,
                    start: "top 50%",
                    end: 'top center',
                    scrub: true,

                },
            })

            .from(projectsItemTwoImg, {
                delay: 1,
                autoAlpha: 0,
                y: 400,
                scrollTrigger: {
                    trigger: projectsItemTwo,
                    start: "top 50%",
                    end: 'bottom bottom',
                    scrub: true,

                },
            })
            .from(projectsItemTwoContent, {
                delay: 2,
                autoAlpha: 0,
                y: 600,
                scrollTrigger: {
                    trigger: projectsItemTwo,
                    start: "top 40%",
                    end: 'bottom bottom',
                    scrub: true,
                },
            })
            .from(projectsItemThreeImg, {
                delay: 1,
                autoAlpha: 0,
                x: -400,
                scrollTrigger: {
                    trigger: projectsItemThree,
                    start: "top 40%",
                    end: 'bottom bottom',
                    scrub: true,

                },
            })
            .from(projectsItemThreeContent, {
                delay: 2,
                autoAlpha: 0,
                y: 400,
                scrollTrigger: {
                    trigger: projectsItemThree,
                    start: "top 40%",
                    end: 'bottom bottom',
                    scrub: true,
                },
            })

        const t2 = gsap.timeline({
                duration: 2,
                onStart() {},
                onComplete() {
                    resolve();
                },
            }).from(projectsInProgressTitle, {
                delay: 1,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: projectsInProgress,
                    start: "top 50%",
                    end: 'top center',
                    scrub: true,
                },
            })
            .from(projectsInProgressItemOneContent, {
                delay: 2,
                y: 400,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: projectsInProgressItemOne,
                    start: "top 50%",
                    end: 'bottom bottom',
                    scrub: true,

                },
            })
            .from(projectsInProgressItemOneImg, {
                delay: 2,
                x: 400,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: projectsInProgressItemOne,
                    start: "top 50%",
                    end: 'bottom bottom',
                    scrub: true,

                },
            })
            .from(projectsInProgressItemTwoImg, {
                delay: 2,
                y: 400,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: projectsInProgressItemTwo,
                    start: "top 50%",
                    end: 'bottom bottom',
                    scrub: true,

                },
            })
            .from(projectsInProgressItemTwoContent, {
                delay: 2,
                x: -400,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: projectsInProgressItemTwo,
                    start: "top 50%",
                    end: 'bottom bottom',
                    scrub: true,

                },
            })

    })
};