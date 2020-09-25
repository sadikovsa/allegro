export default function bridgesOneAnim() {
    let bridges = document.querySelector('.bridges');
    let bridgeOne = document.querySelector('.bridges-one');
    let bridgeOneImg = bridgeOne.querySelector('.bridges-img');
    let bridgeOneTitle = bridgeOne.querySelector('.title');
    bridgeOneTitle.querySelector('.title-text').innerHTML = bridgeOneTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let bridgeOneTitleBefore = bridgeOneTitle.querySelector('.title-before');
    let bridgeOneTitleText = bridgeOneTitle.querySelectorAll('.letter');


    return new Promise((resolve) => {
        const tl = gsap.timeline({
                duration: 2,
                scrollTrigger: {
                    trigger: bridgeOne,
                    start: "top top",
                    end: () => innerHeight * 5,
                    pin: true,
                    scrub: true,
                    onEnter: () => {
                        gsap.set(bridges, {
                            css: {
                                backgroundColor: '#060B21'
                            }
                        })
                    },
                    onEnterBack: () => {
                        gsap.set(bridges, {
                            css: {
                                backgroundColor: '#060B21'
                            }
                        })
                    }
                },
                onComplete: () => {
                    resolve();
                }
            })
            .to(bridgeOne, {
                y: 0,
                autoAlpha: 1,
            })
            .from(bridgeOneTitleBefore, {
                delay: 2,
                autoAlpha: 0,
                top: "100%",
            })
            .from(bridgeOneTitleText, {
                delay: 3,
                autoAlpha: 0,
                stagger: 0.2,
            })
            .from(bridgeOneImg, {
                delay: 5,
                autoAlpha: 0,
                x: 2000,
            })
            .to(bridgeOneImg, {
                delay: 7,
                y: -400,
                autoAlpha: 0,
            })
            .to(bridgeOneTitle, {
                delay: 9,
                y: -400,
                autoAlpha: 0,
            })
    });
};