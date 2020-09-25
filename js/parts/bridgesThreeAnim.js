export default function bridgesThreeAnim() {
    let bridges = document.querySelector('.bridges');
    let bridgeThree = document.querySelector('.bridges-three');
    let bridgeThreeImg = bridgeThree.querySelector('.bridges-img');
    let bridgeThreeTitle = bridgeThree.querySelector('.title');
    bridgeThreeTitle.querySelector('.title-text').innerHTML = bridgeThreeTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let bridgeThreeTitleBefore = bridgeThreeTitle.querySelector('.title-before');
    let bridgeThreeTitleText = bridgeThreeTitle.querySelectorAll('.letter');

    return new Promise((resolve) => {
        const tl = gsap.timeline({
                delay: 2,
                duration: 2,
                scrollTrigger: {
                    trigger: bridgeThree,
                    start: "top 350px",
                    end: () => innerHeight * 14,
                    scrub: true,
                    pin: true,
                    onEnterBack: () => {
                        gsap.set(bridges, {
                            css: {
                                backgroundColor: '#FB874C'
                            }
                        })
                    },
                    onLeave: () => {
                        gsap.set(bridges, {
                            css: {
                                backgroundColor: '#014E48'
                            }
                        })
                    }
                },
                onComplete: () => {
                    resolve();
                }
            })
            .to(bridgeThree, {
                autoAlpha: 1,
                y: 0,
            })
            .from(bridgeThreeImg, {
                delay: 1.2,
                autoAlpha: 0,
                y: 400,
            })
            .from(bridgeThreeTitleBefore, {
                delay: 1.4,
                autoAlpha: 0,
                top: "100%",
            })
            .from(bridgeThreeTitleText, {
                delay: 0.4,
                autoAlpha: 0,
                stagger: 0.1,
            })
            .to(bridgeThreeImg, {
                delay: 1.8,
                autoAlpha: 0,
                x: -1000,
            })
            .to(bridgeThreeTitle, {
                delay: 2,
                autoAlpha: 0,
                y: -400
            })

    })
};
