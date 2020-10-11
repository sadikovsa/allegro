const servicesItemPageAnim = () => {

    let services = document.querySelector('.service');
    let servicesImg = document.querySelectorAll('.service.one')[0];
    let servicesTitle = document.querySelectorAll('.service.two .service-title')[0];
    let servicesText = document.querySelectorAll('.service.two .text-big')[0];
    let servicesList = document.querySelectorAll('.service.two .service-features li');


    if (window.innerWidth > 1199) {
        
        const servicesItemAnim = gsap.timeline({
                duration: 0.8,
                paused: true,
            })
            .from(servicesTitle, {
                autoAlpha: 0,
                x: -300,
            })
            .from(servicesText, {
                autoAlpha: 0,
                y: 400,
            })
            .from(servicesList, {
                delay: 0.3,
                autoAlpha: 0,
                y: 300,
                stagger: 0.3,
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
                    servicesItemAnim.timeScale(1).restart();
                }
            },
            onLeave: function (origin, destination, direction) {
                if (origin.index == 0) {

                } else if (origin.index == 1) {
                    servicesItemAnim.timeScale(1).reverse();
                }
            },
        });

    } else {


    }
}
export default servicesItemPageAnim;