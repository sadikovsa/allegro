export default function projectOneAnim() {
    let projectOne = document.querySelector('.projects-one');
    let projectOneImg = projectOne.querySelector('img');
    let projectOneTitle = projectOne.querySelector('.title-small');
    let projectOneText = projectOne.querySelector('.text-big');


    let projectGallary = document.querySelector('.projects-gallary');
    let projectGallaryItems = projectGallary.querySelectorAll('.projects-gallary__item');
    let projectGallaryPrev = projectGallary.querySelector('.projects-gallary__control.prev');
    let projectGallaryNext = projectGallary.querySelector('.projects-gallary__control.next');
    // main screen slider
    let activeSlide = 0;

    const projectGallarySlider = (curSlide = 0) => {
        projectGallaryItems.forEach(item => {
            item.classList.remove('is-active', 'fade');
            item.classList.add('is-hidden');
        })

        projectGallaryItems[curSlide].classList.remove('is-hidden');
        projectGallaryItems[curSlide].classList.add('is-active', 'fade');
    };
    projectGallaryPrev.addEventListener('click', function (e) {
        e.preventDefault();

        console.log(activeSlide)
        if (activeSlide > 0) {
            activeSlide--;
            projectGallarySlider(activeSlide);
        } else {
            return false;
        }
    });
    projectGallaryNext.addEventListener('click', function (e) {
        e.preventDefault();
        if (activeSlide < projectGallaryItems.length - 1) {
            activeSlide++;
            projectGallarySlider(activeSlide);
        } else {
            return false;
        }
    });
    projectGallarySlider();


    if (window.innerWidth > 1199) {
        return new Promise((resolve) => {
            const t1 = gsap.timeline({
                    duration: 2,
                    onStart() {},
                    onComplete() {
                        resolve();
                    },
                })
                .from(projectOneTitle, {
                    delay: 1.4,
                    autoAlpha: 0,
                    x: -200,
                    scrollTrigger: {
                        trigger: projectOneImg,
                        start: "50% 0",
                        end: 'bottom 0',
                        scrub: true,
                    },
                })
                .from(projectOneText, {
                    delay: 2,
                    autoAlpha: 0,
                    y: 400,
                    scrollTrigger: {
                        trigger: projectOneImg,
                        start: "50% 0",
                        end: 'bottom 0',
                        scrub: true,
                    },
                })
        })
    }

};