let mainServicesOne = document.querySelector('.services-one.one');
let mainServicesOneTitle = document.querySelector('.services-one.one .title');
let mainServicesOneImg = document.querySelector('.services-one.one .services-img');
let mainServicesOneText = document.querySelector('.services-one.one .text');

const servicesOne1Anim = gsap.timeline({
        paused: true,
        duration: 0.8,
    })
    .from(mainServicesOneTitle, {
        y: 300,
        autoAlpha: 0,
    })
    .from(mainServicesOneImg, {
        y: 400,
        autoAlpha: 0,
    })
    .from(mainServicesOneText, {
        y: 500,
        autoAlpha: 0,
    });


export default servicesOne1Anim;