export default function aboutLicence() {

    let aboutLicence = document.querySelector('.about-licence');
    let aboutLicenceTitle = aboutLicence.querySelector('.title');
    let aboutLicenceText = aboutLicence.querySelector('ol');
    let aboutLicenceBtn = aboutLicence.querySelector('.btn');
    aboutLicenceTitle.querySelector('.title-text').innerHTML = aboutLicenceTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let aboutLicenceTitleText = aboutLicenceTitle.querySelectorAll('.letter');


    return new Promise((resolve) => {
        const tl = gsap.timeline({
                duration: 0.8,
                scrollTrigger: {
                    trigger: aboutLicence,
                    start: "top top",
                    end: () => innerHeight * 8,
                    pin: true,
                    scrub: true,
                },
                onComplete: () => {
                    resolve();
                }
            })
            .to(aboutLicence, {
                y: 0,
                autoAlpha: 1,
            })
            .from(aboutLicenceTitleText, {
                delay: 3,
                autoAlpha: 0,
                stagger: 0.2,
            })
            .from(aboutLicenceText, {
                delay: 3,
                autoAlpha: 0,
                y: 400
            })
            .from(aboutLicenceBtn, {
                delay: 3,
                autoAlpha: 0,
                y: 400
            })
    });
};