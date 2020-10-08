let mainServicesOne = document.querySelector('.services-one.two');
let mainServicesOneTitle = document.querySelector('.services-one.two .title');
let mainServicesOneImg = document.querySelector('.services-one.two .services-img');
let mainServicesOneText = document.querySelector('.services-one.two .text');

const servicesOne2Anim = gsap.timeline({
        paused: true,
        duration: 0.8,
    })
    .from(mainServicesOneTitle, {
        y: 300,
        autoAlpha: 0,
    })
    .from(mainServicesOneText, {
        y: 400,
        autoAlpha: 0,
    })
    .from(mainServicesOneImg, {
        x: 400,
        autoAlpha: 0,
    });


export default servicesOne2Anim;