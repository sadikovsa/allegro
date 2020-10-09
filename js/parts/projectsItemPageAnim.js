const projectsItemPageAnim = () => {
    let projectOne = document.querySelector('.projects-one.two');
    let projectOneTitle = document.querySelector('.projects-one.two .title-small');
    let projectOneText = document.querySelector('.projects-one.two .text-big');

    let projectGallaryTitle = document.querySelector('.projects-one__gallary .title-small');
    let projectGallary = document.querySelector('.projects-one__gallary .projects-gallary');




    $('.projects-gallary').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        appendArrows: '.projects-gallary__controls',
        prevArrow: '<button class="projects-gallary__control prev"><span>Предыдущая</span><img src="img/icons/arrow-left.svg" alt="preview"> </button>',
        nextArrow: '<button class="projects-gallary__control next"><img src="img/icons/arrow-right.svg" alt="next"><span>Следующая</span>       </button>',
    });

    if (window.innerWidth > 1199) {

        const projectsItem = gsap.timeline({
                duration: 0.8,
                paused: true,
            })
            .from(projectOneTitle, {
                autoAlpha: 0,
                x: -200,
            })
            .from(projectOneText, {
                autoAlpha: 0,
                y: 400,
            })

        const projectsItemSlider = gsap.timeline({
                duration: 0.8,
                paused: true,
            })
            .from(projectGallaryTitle, {
                autoAlpha: 0,
                x: -200,
            })
            .from(projectGallary, {
                autoAlpha: 0,
                x: 400,
            })

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

                } else if (destination.index == 1) {
                    projectsItem.timeScale(1).restart();
                } else if (destination.index == 2) {
                    projectsItemSlider.timeScale(1).restart();
                }
            },
            onLeave: function (origin, destination, direction) {
                if (origin.index == 0) {

                } else if (origin.index == 1) {
                    projectsItem.timeScale(1).reverse();
                } else if (origin.index == 2) {
                    projectsItemSlider.timeScale(1).reverse();
                }
            },
        });

    } else {


    }
}
export default projectsItemPageAnim;