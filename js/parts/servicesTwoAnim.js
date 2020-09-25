export default function servicesTwoAnim() {
    let mainServices = document.querySelector('.main-services');
    let mainServicesTwo = mainServices.querySelector('.services-two');
    let mainServicesTwoContent1 = mainServicesTwo.querySelector('.services-two__content.one');
    let mainServicesTwoContent1Title = mainServicesTwoContent1.querySelector('.title');
    mainServicesTwoContent1Title.querySelector('.title-text').innerHTML = mainServicesTwoContent1Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let mainServicesTwoContent1TitleText = mainServicesTwoContent1.querySelectorAll('.letter');
    let mainServicesTwoContent1Img = mainServicesTwoContent1.querySelector('img');
    let mainServicesTwoContent1Text = mainServicesTwoContent1.querySelector('.text');
    let mainServicesTwoContent2 = mainServicesTwo.querySelector('.services-two__content.two');
    let mainServicesTwoContent2Title = mainServicesTwoContent2.querySelector('.title');
    mainServicesTwoContent2Title.querySelector('.title-text').innerHTML = mainServicesTwoContent2Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let mainServicesTwoContent2TitleText = mainServicesTwoContent2.querySelectorAll('.letter');
    let mainServicesTwoContent2Img = mainServicesTwoContent2.querySelector('img');
    let mainServicesTwoContent2Text = mainServicesTwoContent2.querySelector('.text');
    return new Promise((resolve) => {
        const t1 = gsap.timeline({
                duration: 2,
                onStart() {},
                onComplete() {
                    resolve();
                },
            })
            .from(mainServicesTwoContent1TitleText, {
                delay: 0.3,
                autoAlpha: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: mainServicesTwoContent1,
                    start: "top 450px",
                    end: 'bottom bottom',
                    scrub: true,
                },
            })
            .from(mainServicesTwoContent1Img, {
                delay: 0.5,
                x: 400,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesTwoContent1,
                    start: "top 420px",
                    end: 'bottom bottom',
                    scrub: true,

                },
            })
            .from(mainServicesTwoContent1Text, {
                delay: 0.8,
                y: 400,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesTwoContent1,
                    start: "top 400px",
                    end: 'bottom bottom',
                    scrub: true,
                },
            })

            .from(mainServicesTwoContent2TitleText, {
                delay: 0.3,
                autoAlpha: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: mainServicesTwoContent2,
                    start: "top 180px",
                    end: 'bottom bottom',
                    scrub: true,
                },
            })
            .from(mainServicesTwoContent2Img, {
                delay: 0.5,
                y: 600,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesTwoContent2,
                    start: "top 180px",
                    end: 'bottom right',
                    scrub: true,

                },
            })
            .from(mainServicesTwoContent2Text, {
                delay: 0.8,
                y: 800,
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: mainServicesTwoContent2,
                    start: "top 150px",
                    end: 'bottom right',
                    scrub: true,
                },
            })
    })
};