let mainServicesFirst = document.querySelector('.services-first');
let mainServicesFirstTitle = mainServicesFirst.querySelector('.title-big');
let mainServicesFirstLine1 = mainServicesFirst.querySelector('.services-line.one');
let mainServicesFirstLine2 = mainServicesFirst.querySelector('.services-line.two');

const servicesAnim = gsap.timeline({
        paused: true,
        duration: 1,
    })
    .from(mainServicesFirstTitle, {
        autoAlpha: 0,
        x: -200
    })
    .from(mainServicesFirstLine1, {
        y: -200,
        autoAlpha: 0,
    })
    .from(mainServicesFirstLine2, {
        y: 200,
        autoAlpha: 0,
    });

export default servicesAnim;