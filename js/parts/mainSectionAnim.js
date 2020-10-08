const mainSlider = document.querySelector('.main-section .main-section__slider');
const mainSectionContent = document.querySelector('.main-section .main-section__content');
const mainSliderImg = document.querySelectorAll('.main-section .main-slider__img');
let activeSlide = 0;

export function mainSectionAnim() {
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
};

export const mainSectionLeaveAnim = gsap.timeline({
        duration: 1,
        paused: true,
    })
    .to(mainSlider, {
        scale: 3,
        rotation: -60,
        transformOrigin: "50% 70%",
        autoAlpha: 0
    }).to(mainSectionContent, {
        autoAlpha: 0
    }, '-=0.5');