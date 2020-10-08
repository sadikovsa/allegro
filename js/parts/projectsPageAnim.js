const projectsPageAnim = () => {
    let projectsOne = document.querySelector('.projects.one');
    let projectsOneContent = document.querySelector('.projects.one .projects-item__left');
    let projectsOneImg = document.querySelector('.projects.one .projects-img');

    let projectsTwo = document.querySelector('.projects.two');
    let projectsTwoTitle = document.querySelector('.projects.two .title-small');
    let projectsTwoTitleImg = document.querySelector('.projects.two .projects-img');
    let projectsTwoTitleBtn = document.querySelector('.projects.two .btn');

    let projectsThree = document.querySelector('.projects.three');
    let projectsThreeContent = document.querySelector('.projects.three .projects-item__right');
    let projectsThreeImg = document.querySelector('.projects.three .projects-img');
    let projectsFour = document.querySelector('.projects-inprogress.one');
    let projectsFourTitle = document.querySelector('.projects-inprogress.one .title-big');

    let projectsFive = document.querySelector('.projects-inprogress.two');
    let projectsFiveContent = document.querySelector('.projects-inprogress.two .projects-inprogress__left');
    let projectsFiveImg = document.querySelector('.projects-inprogress.two .projects-img');

    let projectsSix = document.querySelector('.projects-inprogress.three');
    let projectsSixContent = document.querySelector('.projects-inprogress.three .projects-inprogress__right');
    let projectsSixImg = document.querySelector('.projects-inprogress.three .projects-img');


    const projectsOneAnim = gsap.timeline({
            duration: 0.8,
            paused: true,
        })
        .from(projectsOneContent, {
            autoAlpha: 0,
            y: 400,
        })
        .from(projectsOneImg, {
            x: 400,
            autoAlpha: 0,
        });

    const projectsTwoAnim = gsap.timeline({
            duration: 0.8,
            paused: true,
        })
        .from(projectsTwoTitle, {
            autoAlpha: 0,
            y: 400,
        })
        .from(projectsTwoTitleImg, {
            autoAlpha: 0,
            y: 500,
        })
        .from(projectsTwoTitleBtn, {
            autoAlpha: 0,
            y: 600,
        });
    const projectsThreeAnim = gsap.timeline({
            duration: 0.8,
            paused: true,
        })
        .from(projectsThreeImg, {
            x: -400,
            autoAlpha: 0,
        })
        .from(projectsThreeContent, {
            autoAlpha: 0,
            y: 400,
        });

    const projectsFourAnim = gsap.timeline({
            duration: 0.8,
            paused: true,
        })
        .from(projectsFourTitle, {
            autoAlpha: 0,
        });


    const projectsFiveAnim = gsap.timeline({
            duration: 0.8,
            paused: true,
        })
        .from(projectsFiveImg, {
            x: 400,
            autoAlpha: 0,
        })
        .from(projectsFiveContent, {
            autoAlpha: 0,
            y: 400,
        });
    
    const projectsSixAnim = gsap.timeline({
            duration: 0.8,
            paused: true,
        })
        .from(projectsSixImg, {
            x: -400,
            autoAlpha: 0,
        })
        .from(projectsSixContent, {
            autoAlpha: 0,
            y: 400,
        });


    if (window.innerWidth > 1199) {
        let wrapper = document.querySelector('.main');
        new fullpage('#fullpage', {
            licenseKey: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
            lockAnchors: false,
            autoScrolling: true,
            paddingTop: '80px',
            paddingBottom: '0px',
            scrollingSpeed: 1000,
            fitToSectionDelay: 500,
            //            scrollOverflow: true,
            //            scrollOverflowReset: true,
            //            scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk=',
            afterLoad: function (origin, destination, direction) {
                if (destination.index == 0) {
                    projectsOneAnim.timeScale(1).restart();
                } else if (destination.index == 1) {
                    projectsTwoAnim.timeScale(1).restart();
                } else if (destination.index == 2) {
                    projectsThreeAnim.timeScale(1).restart();
                } else if (destination.index == 3) {
                    projectsFourAnim.timeScale(1).restart();
                } else if (destination.index == 4) {
                    projectsFiveAnim.timeScale(1).restart();
                } else if (destination.index == 5) {
                    projectsSixAnim.timeScale(1).restart();
                }
            },
            onLeave: function (origin, destination, direction) {
                if (origin.index === 0) {
                    projectsOneAnim.timeScale(2).reverse();
                } else if (origin.index === 1) {
                    projectsTwoAnim.timeScale(2).reverse();
                } else if (origin.index === 2) {
                    projectsThreeAnim.timeScale(2).reverse();
                } else if (origin.index === 3) {
                    projectsFourAnim.timeScale(2).reverse();
                } else if (origin.index === 4) {
                    projectsFiveAnim.timeScale(2).reverse();
                } else if (origin.index === 5) {
                    projectsSixAnim.timeScale(2).reverse();
                }
            },
        });

    } else {


    }
}
export default projectsPageAnim;