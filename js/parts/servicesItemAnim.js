export default function servicesItemAnim() {
    let services = document.querySelector('.services');
    let servicesImg = services.querySelectorAll('img')[0];
    let servicesTitle1 = services.querySelectorAll('.services-title')[0];
    let servicesText1 = services.querySelectorAll('.text-big')[0];
    let servicesTitle2 = services.querySelectorAll('.services-title')[1];
    let servicesList = services.querySelectorAll('.services-features li');

    return new Promise((resolve) => {
        const tl = gsap.timeline({
                duration: 2,
                onComplete: () => {
                    resolve();
                }
            })
            .from(servicesTitle1, {
                delay: 1.2,
                autoAlpha: 0,
                x: -300,
                scrollTrigger: {
                    trigger: servicesImg,
                    start: "50% 0",
                    end: "bottom 0",
                    scrub: true,
                },
            })
            .from(servicesText1, {
                delay: 1.2,
                autoAlpha: 0,
                y: 400,
                scrollTrigger: {
                    trigger: servicesImg,
                    start: "50% 0",
                    end: "bottom 0",
                    scrub: true,
                },
            })
            .from(servicesTitle2, {
                delay: 1.2,
                autoAlpha: 0,
                x: -300,
                scrollTrigger: {
                    trigger: servicesImg,
                    start: "bottom 0",
                    end: "120% 0",
                    scrub: true,
                },
            })
            .from(servicesList, {
                delay: 0.3,
                autoAlpha: 0,
                y: 300,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: servicesImg,
                    start: "bottom 0",
                    end: "120% 0",
                    scrub: true,
                },
            })



    })
};