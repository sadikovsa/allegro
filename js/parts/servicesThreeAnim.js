export default function servicesThreeAnim() {
    let mainServices = document.querySelector('.main-services');
    let mainServicesThree = mainServices.querySelector('.services-three');
    let mainServicesThreeContent1 = mainServicesThree.querySelector('.services-three__content.one');
    let mainServicesThreeContent1Title = mainServicesThreeContent1.querySelector('.title');
    mainServicesThreeContent1Title.querySelector('.title-text').innerHTML = mainServicesThreeContent1Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let mainServicesThreeContent1TitleText = mainServicesThreeContent1.querySelectorAll('.letter');
    let mainServicesThreeContent1Img = mainServicesThreeContent1.querySelector('img');
    let mainServicesThreeContent1Text = mainServicesThreeContent1.querySelector('.text');
    let mainServicesThreeContent2 = mainServicesThree.querySelector('.services-three__content.two');
    let mainServicesThreeContent2Title = mainServicesThreeContent2.querySelector('.title');
    mainServicesThreeContent2Title.querySelector('.title-text').innerHTML = mainServicesThreeContent2Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let mainServicesThreeContent2TitleText = mainServicesThreeContent2.querySelectorAll('.letter');
    let mainServicesThreeContent2Img = mainServicesThreeContent2.querySelector('img');
    let mainServicesThreeContent2Text = mainServicesThreeContent2.querySelector('.text');


    return new Promise((resolve) => {
        const t1 = gsap.timeline({
                duration: 2,
                onStart() {},
                onComplete() {
                    resolve();
                },
            })
            .from(mainServicesThreeContent1TitleText, {
                delay: 0.3,
                autoAlpha: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: mainServicesThreeContent1,
                    start: "top 350px",
                    end: 'bottom bottom',
                    scrub: true,
                },
            })
            .from(mainServicesThreeContent1Img, {
                delay: 0.5,
                x: 400,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesThreeContent1,
                    start: "top 350px",
                    end: 'bottom bottom',
                    scrub: true,

                },
            })
            .from(mainServicesThreeContent1Text, {
                delay: 0.8,
                y: 600,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesThreeContent1,
                    start: "top 320px",
                    end: 'bottom bottom',
                    scrub: true,
                },
            })
            .from(mainServicesThreeContent2TitleText, {
                delay: 0.3,
                autoAlpha: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: mainServicesThreeContent2,
                    start: "top 150px",
                    end: 'bottom bottom',
                    scrub: true,
                },
            })
            .from(mainServicesThreeContent2Img, {
                delay: 0.5,
                x: -600,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesThreeContent2,
                    start: "top 150px",
                    end: 'bottom right',
                    scrub: true,

                },
            })
            .from(mainServicesThreeContent2Text, {
                delay: 0.8,
                y: 600,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesThreeContent2,
                    start: "top 120px",
                    end: 'bottom right',
                    scrub: true,
                },
            })
    })
};