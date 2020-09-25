export default function servicesFourAnim() {
    let mainServices = document.querySelector('.main-services');
    let mainServicesFour = mainServices.querySelector('.services-four');
    let mainServicesFourContent1 = mainServicesFour.querySelector('.services-four__content.one');
    let mainServicesFourContent1Title = mainServicesFourContent1.querySelector('.title');
    mainServicesFourContent1Title.querySelector('.title-text').innerHTML = mainServicesFourContent1Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let mainServicesFourContent1TitleText = mainServicesFourContent1.querySelectorAll('.letter');
    let mainServicesFourContent1Img = mainServicesFourContent1.querySelector('img');
    let mainServicesFourContent1Text = mainServicesFourContent1.querySelector('.text');

    let mainServicesFourContent2 = mainServicesFour.querySelector('.services-four__content.two');
    let mainServicesFourContent2Title = mainServicesFourContent2.querySelector('.title');
    let mainServicesFourContent2Img = mainServicesFourContent2.querySelector('img');
    let mainServicesFourContent2Text = mainServicesFourContent2.querySelector('.text');

    let mainServicesFourContent3 = mainServicesFour.querySelector('.services-four__content.three');
    let mainServicesFourContent3Title = mainServicesFourContent3.querySelector('.title');
    mainServicesFourContent3Title.querySelector('.title-text').innerHTML = mainServicesFourContent3Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let mainServicesFourContent3TitleText = mainServicesFourContent3.querySelectorAll('.letter');
    let mainServicesFourContent3Img = mainServicesFourContent3.querySelector('img');
    let mainServicesFourContent3Text = mainServicesFourContent3.querySelector('.text');
    return new Promise((resolve) => {
        const t1 = gsap.timeline({
                duration: 2,
                onStart() {},
                onComplete() {
                    resolve();
                },
            })
            .from(mainServicesFourContent1TitleText, {
                delay: 0.3,
                autoAlpha: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: mainServicesFourContent1,
                    start: "top 350px",
                    end: 'bottom bottom',
                    scrub: true,
                },
            })
            .from(mainServicesFourContent1Img, {
                delay: 0.5,
                y: 400,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesFourContent1,
                    start: "top 350px",
                    end: 'bottom bottom',
                    scrub: true,

                },
            })
            .from(mainServicesFourContent1Text, {
                delay: 0.8,
                y: 600,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesFourContent1,
                    start: "top 350px",
                    end: 'bottom bottom',
                    scrub: true,
                },
            })

            .from(mainServicesFourContent2Img, {
                delay: 0.5,
                x: -600,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesFourContent2,
                    start: "top 50%",
                    end: 'bottom right',
                    scrub: true,

                },
            })
            .from(mainServicesFourContent2Title, {
                delay: 0.8,
                autoAlpha: 0,
                y: 400,
                scrollTrigger: {
                    trigger: mainServicesFourContent2,
                    start: "top 50%",
                    end: 'bottom bottom',
                    scrub: true,
                },
            })
            .from(mainServicesFourContent2Text, {
                delay: 1.2,
                y: 600,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesFourContent2,
                    start: "top 50%",
                    end: 'bottom right',
                    scrub: true,
                },
            })
            .from(mainServicesFourContent3TitleText, {
                delay: 0.3,
                autoAlpha: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: mainServicesFourContent3,
                    start: "top 50%",
                    end: 'bottom right',
                    scrub: true,
                },
            })
            .from(mainServicesFourContent3Img, {
                delay: 0.5,
                y: 500,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesFourContent3,
                    start: "top 50%",
                    end: 'bottom bottom',
                    scrub: true,

                },
            })
            .from(mainServicesFourContent3Text, {
                delay: 0.8,
                y: 600,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesFourContent3,
                    start: "top 50%",
                    end: 'bottom right',
                    scrub: true,
                },
            })
    })
};