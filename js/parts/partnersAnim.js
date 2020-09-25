export default function partnersAnim() {
    let partners = document.querySelector('.partners');
    let partnersTitle = partners.querySelector('.title');
    partnersTitle.querySelector('.title-text').innerHTML = partnersTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let partnersTitleText = partnersTitle.querySelectorAll('.letter');
    let partnersList = partners.querySelector('.partners-list');
    let partnersListItem = partnersList.querySelectorAll('li');

    return new Promise((resolve) => {
        const tl = gsap.timeline({
                delay: 2,
                duration: 2,
                scrollTrigger: {
                    trigger: partners,
                    start: "top top",
                    end: () => innerHeight * 52,
                    pin: true,
                    scrub: true,
                },
                onComplete: () => {
                    resolve();
                }
            })
            .to(partners, {
                autoAlpha: 1,
            })
            .from(partnersTitleText, {
                delay: 2.4,
                stagger: 0.3,
                autoAlpha: 0,
            })
            .from(partnersListItem, {
                delay: 0.3,
                y: -200,
                autoAlpha: 0,
                stagger: 0.4,
            })
            .to(partnersTitle, {
                delay: 4,
                autoAlpha: 0,
                x: -400
            })
            .to(partnersListItem, {
                delay: 0.3,
                y: -400,
                stagger: 0.4,
                autoAlpha: 0,
            })
    })

};