let mainServicesOne = document.querySelectorAll('.services-one')[0];
let mainServicesOneTitle = mainServicesOne.querySelector('.title');
let mainServicesOneImg = mainServicesOne.querySelector('.services-img');
let mainServicesOneText = mainServicesOne.querySelector('.text');

const servicesOne1Anim = gsap.timeline({
        paused: true,
        duration: 1,
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