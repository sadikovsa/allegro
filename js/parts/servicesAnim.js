let mainServicesFirst = document.querySelector('.services-first');
let mainServicesFirstTitle = document.querySelector('.services-first .title-big');
let mainServicesFirstLine1 = document.querySelector('.services-first .services-line.one');
let mainServicesFirstLine2 = document.querySelector('.services-first .services-line.two');

const servicesAnim = gsap.timeline({
        paused: true,
        duration: 0.8,
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