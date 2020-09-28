export default function contactsAnim() {
    let contacts = document.querySelector('.contacts');
    let contactsTitle = contacts.querySelector('.title');

    let contactsInfo = document.querySelector('.contacts-info');
    let contactsTitle1 = contactsInfo.querySelectorAll('.title')[0];
    let contactsList1 = contactsInfo.querySelectorAll('.contacts-info__list')[0];

    let contactsTitle2 = contactsInfo.querySelectorAll('.title')[1];
    let contactsList2 = contactsInfo.querySelectorAll('.contacts-info__list')[1];


    return new Promise((resolve) => {
        const tl = gsap.timeline({
                duration: 2,
            })
            .to(contacts, {
                autoAlpha: 1,
            })
            .from(contactsTitle, {
                delay: 1.2,
                autoAlpha: 0,
                x: -200
            })
        const t2 = gsap.timeline({
                delay: 2,
                duration: 0.8,
                scrollTrigger: {
                    trigger: contactsInfo,
                    start: "top 0",
                    end: '110% 0',
                    scrub: true,
                    pin: true,
                    onLeave: () => {}
                },
                onComplete: () => {
                    resolve();
                }
            })
            .to(contactsInfo, {
                autoAlpha: 1,
            })
            .from(contactsTitle1, {
                delay: 2,
                autoAlpha: 0,
                x: -200
            })
            .from(contactsList1, {
                delay: 2,
                autoAlpha: 0,
                y: 400
            })
            .from(contactsTitle2, {
                delay: 2,
                autoAlpha: 0,
                x: -200
            })
            .from(contactsList2, {
                delay: 2,
                autoAlpha: 0,
                y: 400
            })

    })
};