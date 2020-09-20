export default function bridgesTwoAnim() {
    let bridges = document.querySelector('.bridges');
    let bridgeTwo = document.querySelector('.bridges-two');
    let bridgeTwoImg = bridgeTwo.querySelector('.bridges-img');
    let bridgeTwoTitle = bridgeTwo.querySelector('.title');
    bridgeTwoTitle.querySelector('.title-text').innerHTML = bridgeTwoTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let bridgeTwoTitleBefore = bridgeTwoTitle.querySelector('.title-before');
    let bridgeTwoTitleText = bridgeTwoTitle.querySelectorAll('.letter');

    return new Promise((resolve) => {
        const tl = gsap.timeline({
                delay: 2,
                duration: 2,
                scrollTrigger: {
                    trigger: bridgeTwo,
                    start: "top 250px",
                    end: 'bottom 0',
                    scrub: true,
                    pin: true,
                    onEnterBack: () => {
                        gsap.set(bridges, {
                            css: {
                                backgroundColor: '#060B21'
                            }
                        })
                    },
                    onLeave: () => {
                        gsap.set(bridges, {
                            css: {
                                backgroundColor: '#FB874C'
                            }
                        })
                    }
                },
                onComplete: () => {
                    resolve();
                }
            })

            .to(bridgeTwo, {
                autoAlpha: 1,
                y: 0,
            })
            .from(bridgeTwoTitleBefore, {
                delay: 0.8,
                autoAlpha: 0,
                top: "100%",
            })
            .from(bridgeTwoImg, {
                autoAlpha: 0,
                x: 1000,
            })
            .from(bridgeTwoTitleText, {
                delay: 0.4,
                autoAlpha: 0,
                stagger: 0.1,
            })
            .to(bridgeTwoImg, {
                y: -300,
                delay: 2,
                autoAlpha: 0,
            })
            .to(bridgeTwoTitle, {
                y: -300,
                delay: 2,
                autoAlpha: 0,
            })
    });
};
