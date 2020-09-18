export default function mainSectionAnim() {
    let button = document.querySelector('.scroll-down');
    let mainSection = document.querySelector('.main-section');
    let mainSectionContent = mainSection.querySelector('.main-section__content');
    let mainSlider = document.querySelector('.main-section__slider');
    let mainSliderImg = mainSlider.querySelectorAll('.main-slider__img');
    // main screen slider
    let activeSlide = 0;

    const mainSliderStart = (curSlide = 0) => {
        mainSliderImg.forEach(item => {
            item.style.opacity = 0;
        })

        gsap.to(mainSliderImg[curSlide], {
            autoAlpha: 1,
            zIndex: 2
        })
    }

    setInterval(() => {
        if (activeSlide >= mainSliderImg.length) {
            activeSlide = 0;
        }
        mainSliderStart(activeSlide);
        activeSlide++;
    }, 3000)

    return new Promise((resolve) => {
        const tl = gsap.timeline({
                duration: 4,
                scrollTrigger: {
                    trigger: mainSection,
                    start: "-95px top",
                    end: "bottom center",
                    scrub: true,
                    pin: true,
                },
                onComplete: () => {
                    resolve();
                }
            })
            .to(mainSlider, {
                delay: 2,
                scale: 4,
                rotation: -45,
                autoAlpha: 0,
                transformOrigin: "50% 60%",
            })
            .to(button, {
                delay: 1.2,
                scale: 1.4,
                autoAlpha: 0,
            })

            .to(mainSectionContent, {
                delay: 1.4,
                autoAlpha: 0,
            })
            .to(mainSection, {
                delay: 3,
                background: '#060B21'
            })

    });

    button.addEventListener('mouseenter', function () {
        TweenMax.to(button, 0.1, {
            scale: 1.4,
        });
    });
    button.addEventListener('mouseleave', function () {
        TweenMax.to(button, 0.1, {
            scale: 1,
        });
    })

};

