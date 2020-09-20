export default function servicesOneAnim() {
    let mainServices = document.querySelector('.main-services');
    let mainServicesOne = mainServices.querySelector('.services-one');
    let mainServicesOneContent1 = mainServicesOne.querySelector('.services-one__content.one');
    let mainServicesOneContent1Title = mainServicesOneContent1.querySelector('.title');
    mainServicesOneContent1Title.querySelector('.title-text').innerHTML = mainServicesOneContent1Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let mainServicesOneContent1TitleText = mainServicesOneContent1.querySelectorAll('.letter');
    let mainServicesOneContent1Img = mainServicesOneContent1.querySelector('img');
    let mainServicesOneContent1Text = mainServicesOneContent1.querySelector('.text');
    let mainServicesOneContent2 = mainServicesOne.querySelector('.services-one__content.two');
    let mainServicesOneContent2Title = mainServicesOneContent2.querySelector('.title');
    mainServicesOneContent2Title.querySelector('.title-text').innerHTML = mainServicesOneContent2Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let mainServicesOneContent2TitleText = mainServicesOneContent2.querySelectorAll('.letter');
    let mainServicesOneContent2Img = mainServicesOneContent2.querySelector('img');
    let mainServicesOneContent2Text = mainServicesOneContent2.querySelector('.text');

    return new Promise((resolve) => {
        const t1 = gsap.timeline({
                duration: 2,
                onStart() {},
                onComplete() {
                    resolve();
                },
            })
            .from(mainServicesOneContent1TitleText, {
                delay: 0.3,
                autoAlpha: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: mainServicesOneContent1,
                    start: "-30% 0",
                    end: '40% center',
                    scrub: true,
                },
            })
            .from(mainServicesOneContent1Img, {
                delay: 0.5,
                y: 200,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesOneContent1,
                    start: "-30% 0",
                    end: '40% center',
                    scrub: true,
                },
            })
            .from(mainServicesOneContent1Text, {
                delay: 0.8,
                y: 200,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesOneContent1,
                    start: "-30% 0",
                    end: '40% center',
                    scrub: true,
                },
            })

            .from(mainServicesOneContent2TitleText, {
                delay: 0.3,
                autoAlpha: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: mainServicesOneContent1,
                    start: "bottom 30%",
                    end: "bottom 0",
                    scrub: true,
                    markers: true,
                    id: 'services one',
                },
            })
            .from(mainServicesOneContent2Img, {
                delay: 0.6,
                y: 200,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesOneContent1,
                    start: "bottom 30%",
                    end: "bottom 0",
                    scrub: true,
                },
            })
            .from(mainServicesOneContent2Text, {
                delay: 1,
                y: 200,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesOneContent1,
                    start: "bottom 30%",
                    end: "bottom 0",
                    scrub: true,
                },
            })
    })
};