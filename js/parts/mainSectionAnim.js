export function mainSectionAnim() {
    let mainSlider = document.querySelector('.main-section__slider');
    let mainSliderImg = mainSlider.querySelectorAll('.main-slider__img');
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
        activeSlide++;
        if (activeSlide >= mainSliderImg.length - 1) {
            activeSlide = 0;
        }
        mainSliderStart(activeSlide);

    }, 3000)

    return new Promise((resolve) => {
        gsap.set(mainSlider, {
            clearProps: 'All'
        });
        const tl = gsap.timeline({
            duration: 0.8,
            onComplete: () => {
                resolve();
            }
        });
    });

};

export function mainSectionLeaveAnim() {

    let mainSlider = document.querySelector('.main-section__slider');
    return new Promise((resolve) => {
        gsap.set(mainSlider, {
            clearProps: 'All'
        });
        const tl = gsap.timeline({
            duration: 0.8,
            onComplete: () => {
                resolve();
            }
        }).to(mainSlider, 3, {
            scale: 2.5,
            rotation: -60,
            transformOrigin: "50% 70%",
            autoAlpha: 0
        });

    });
};