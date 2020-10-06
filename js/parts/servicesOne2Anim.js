let mainServicesOne = document.querySelectorAll('.services-one')[1];
let mainServicesOneTitle = mainServicesOne.querySelector('.title');
let mainServicesOneImg = mainServicesOne.querySelector('.services-img');
let mainServicesOneText = mainServicesOne.querySelector('.text');

const servicesOne2Anim = gsap.timeline({
        paused: true,
        duration: 1,
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