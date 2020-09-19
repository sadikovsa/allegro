export default function projectOneAnim() {
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

        console.log(activeSlide)
        if (activeSlide < projectGallaryItems.length - 1) {
            activeSlide++;
            projectGallarySlider(activeSlide);
        } else {
            return false;
        }
    });
    projectGallarySlider();
};