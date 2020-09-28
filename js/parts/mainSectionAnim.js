export default function mainSectionAnim() {
    
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
        if (activeSlide >= mainSliderImg.length) {
            activeSlide = 0;
        }
        mainSliderStart(activeSlide);
        activeSlide++;
    }, 3000)

    return new Promise((resolve) => {
        const tl = gsap.timeline({
            duration: 0.8,
            onComplete: () => {
                resolve();
            }
        })
    });

};