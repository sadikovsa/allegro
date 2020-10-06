let partners = document.querySelector('.partners');
let partnersTitle = partners.querySelector('.title');

const partnersAnim = gsap.timeline({
        paused: true,
        duration: 1,
    })
    .from(partnersTitle, {
        x: -600,
        autoAlpha: 0,
    })

export default partnersAnim;