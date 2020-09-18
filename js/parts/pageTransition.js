export default function pageTransition() {
    var t1 = gsap.timeline();
    t1.to('ul.transition li', {
        duration: .5,
        scaleY: 1,
        transformOrigin: "bottom left",
        stagger: .2
    })
    t1.to('ul.transition li', {
        duration: .5,
        scaleY: 0,
        transformOrigin: "bottom left",
        stagger: .1,
        delay: .1
    })
};
