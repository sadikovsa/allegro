(function () {
    'use strict';
    document.addEventListener("DOMContentLoaded", function (event) {
        const button = document.querySelector('.scroll-down');
        const mainSlider = document.querySelector('.main-section__slider');
        const mainNewsWrapper = document.querySelector('.main-news__wrapper');
        const bridges = document.querySelector('.bridges');
        const bridgeOne = document.querySelector('.bridges-one');
        const bridgeTwo = document.querySelector('.bridges-two');
        const bridgeThree = document.querySelector('.bridges-three');
        const bridgeFour = document.querySelector('.bridges-four');

        const bridgeOneImg = bridgeOne.querySelector('.bridges-img');
        const bridgeOneTitle = bridgeOne.querySelector('.title');
        bridgeOneTitle.querySelector('.title-text').innerHTML = bridgeOneTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        const bridgeOneTitleBefore = bridgeOneTitle.querySelector('.title-before');
        const bridgeOneTitleText = bridgeOneTitle.querySelectorAll('.letter');

        const bridgeTwoImg = bridgeTwo.querySelector('.bridges-img');
        const bridgeTwoTitle = bridgeTwo.querySelector('.title');
        bridgeTwoTitle.querySelector('.title-text').innerHTML = bridgeTwoTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        const bridgeTwoTitleBefore = bridgeTwoTitle.querySelector('.title-before');
        const bridgeTwoTitleText = bridgeTwoTitle.querySelectorAll('.letter');

        const bridgeThreeImg = bridgeThree.querySelector('.bridges-img');
        const bridgeThreeTitle = bridgeThree.querySelector('.title');
        bridgeThreeTitle.querySelector('.title-text').innerHTML = bridgeThreeTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        const bridgeThreeTitleBefore = bridgeThreeTitle.querySelector('.title-before');
        const bridgeThreeTitleText = bridgeThreeTitle.querySelectorAll('.letter');

        const bridgeFourImg = bridgeFour.querySelector('.bridges-img');
        const bridgeFourTitle = bridgeFour.querySelector('.title');
        const bridgeFourText = bridgeFour.querySelector('.text');
        const bridgeFourBtn = bridgeFour.querySelector('.btn');
        let tl = gsap.timeline({
            delay: 0.5
        });


        gsap.set(bridgeTwo, {
            autoAlpha: 0
        });
        gsap.set(bridgeThree, {
            autoAlpha: 0
        });
        gsap.set(bridgeFour, {
            autoAlpha: 1
        });

        const mainBlockAnimation = () => {
            return new Promise((resolve) => {
                new TimelineMax({
                        onStart() {},
                        onComplete() {
                            resolve();
                        },
                    })

                    .to(mainSlider, 3, {
                        scale: 2.5,
                        rotation: -60,
                        transformOrigin: "50% 70%",
                        autoAlpha: 0,
                        scrollTrigger: {
                            trigger: bridgeOne,
                            start: "top right",
                            end: "top 0px",
                            scrub: true,
                            id: "mainSlider"
                        },
                    }).to(button, {
                        scale: 1.4,
                        autoAlpha: 0,
                        scrollTrigger: {
                            trigger: bridgeOne,
                            start: "top right",
                            end: "top 0px",
                            scrub: true,
                            id: "mainSlider"
                        },
                    })
            });
        }


        const bridgesOneAnimation = () => {
            return new Promise((resolve) => {
                new TimelineMax({
                        onStart() {
                            gsap.set(bridges, {
                                css: {
                                    backgroundColor: '#011F42'
                                }
                            })
                        },
                        onComplete() {
                            bridgeOneTitleText.forEach((item, index) => {

                            })
                            resolve();
                        },
                    })
                    .from(bridgeOneImg, {
                        duration: 1,
                        autoAlpha: 0,
                        x: 2000,
                        ease: "Power3.inOut",
                        scrollTrigger: {
                            trigger: bridgeOne,
                            start: "top center",
                            end: "top left",
                            scrub: true,
                        },
                    })

                    .from(bridgeOneTitleBefore, {
                        duration: 1,
                        delay: 0.8,
                        autoAlpha: 0,
                        top: "100%",
                        scrollTrigger: {
                            trigger: bridgeOne,
                            start: "top center",
                            end: "top left",
                            scrub: true,
                        },
                    })
                bridgeOneTitleText.forEach((item, index) => {
                    gsap.from(item, {
                        duration: 1,
                        delay: 1 + index / 20,
                        autoAlpha: 0,
                        clearProps: 'all',
                        scrollTrigger: {
                            trigger: bridgeOne,
                            start: "top center",
                            end: "top left",
                            scrub: true,
                        },
                    })
                })

            });
        }

        const bridgesTwoAnimation = () => {
            return new Promise((resolve) => {
                new TimelineMax({
                        onStart() {},
                        onComplete() {
                            resolve();
                        },
                    })
                    .to(bridgeOneImg, {
                        duration: 1,
                        y: -300,
                        scrollTrigger: {
                            trigger: bridgeOneImg,
                            start: "top left",
                            end: "bottom top",
                            scrub: true,
                            id: "Second Img Out"
                        },
                    })
                    .to(bridgeOneTitle, {
                        duration: 1,
                        css: {
                            position: 'absolute',
                            translateY: '-300px'
                        },
                        scrollTrigger: {
                            trigger: bridgeOne,
                            start: "top center",
                            end: "bottom 35%",
                            scrub: true,
                            id: "Second Title Out",
                        },
                    })
                    .fromTo(bridgeTwo, {
                        duration: 1,
                        autoAlpha: 1,
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        scrollTrigger: {
                            trigger: bridgeOne,
                            start: "bottom center",
                            end: "+=100",
                            scrub: true,
                            id: "Second section load",

                        },
                    })
                    .from(bridgeTwoTitleBefore, {
                        duration: 1,
                        delay: 0.8,
                        autoAlpha: 0,
                        top: "100%",
                        scrollTrigger: {
                            trigger: bridgeTwo,
                            start: "-250px center",
                            end: "bottom 100%",
                            scrub: true,
                            id: "Thrid Title Before",
                        },
                    })
                    .from(bridgeTwoImg, {
                        duration: 1,
                        autoAlpha: 0,
                        x: 1000,
                        ease: "Power3.inOut",
                        scrollTrigger: {
                            trigger: bridgeTwo,
                            start: "-200px center",
                            end: "bottom 100%",
                            scrub: true,
                            id: "Second Img",
                        },
                        onStart: function () {
                            gsap.set(bridges, {
                                css: {
                                    backgroundColor: '#FB874C'
                                }
                            })
                        }
                    })
                bridgeTwoTitleText.forEach((item, index) => {
                    gsap.from(item, {
                        duration: 1,
                        delay: 1 + index / 20,
                        autoAlpha: 0,
                        clearProps: 'all',
                        scrollTrigger: {
                            trigger: bridgeTwo,
                            start: "-250px center",
                            end: "bottom 50%",
                            id: "Second Title Text",
                        },
                    })
                })


            });
        }

        const bridgesThreeAnimation = () => {
            return new Promise((resolve) => {
                new TimelineMax({
                        onStart() {

                        },
                        onComplete() {
                            resolve();
                        },
                    })
                    .to(bridgeTwoImg, {
                        duration: 1,
                        scrollTrigger: {
                            trigger: bridgeTwoImg,
                            start: "top left",
                            end: "bottom 5%",
                            scrub: true,
                        },
                    })
                    .to(bridgeTwoTitle, {
                        duration: 1,
                        scrollTrigger: {
                            trigger: bridgeTwo,
                            start: "top left",
                            end: "bottom 35%",
                            scrub: true,
                        },
                    })
                    .fromTo(bridgeThree, {
                        duration: 1,
                        autoAlpha: 1,
                    }, {

                        y: 0,
                        autoAlpha: 1,
                        scrollTrigger: {
                            trigger: bridgeTwo,
                            start: "bottom right",
                            end: "+=200",
                            scrub: true,
                        },


                    })

                    .from(bridgeThreeImg, {
                        duration: 1,
                        autoAlpha: 0,
                        y: 400,
                        ease: "Power3.inOut",
                        scrollTrigger: {
                            trigger: bridgeThree,
                            start: "top right",
                            end: "top 40%",
                            scrub: true,
                        },
                    })
                    .from(bridgeThreeTitleBefore, {
                        duration: 1,
                        delay: 0.8,
                        autoAlpha: 0,
                        top: "100%",
                        scrollTrigger: {
                            trigger: bridgeTwo,
                            start: "bottom right",
                            scrub: true,
                        },
                    })
                bridgeThreeTitleText.forEach((item, index) => {
                    gsap.from(item, {
                        duration: 1,
                        delay: 1 + index / 20,
                        autoAlpha: 0,
                        clearProps: 'all',
                        scrollTrigger: {
                            trigger: bridgeTwo,
                            start: "bottom right",
                            scrub: true,
                        },
                    })
                })

            })
        }

        const bridgesFourAnimation = () => {
            return new Promise((resolve) => {
                new TimelineMax({
                        onStart() {

                        },
                        onComplete() {
                            resolve();
                        },
                    })

                    .fromTo(bridgeFour, {
                        duration: 1,
                        autoAlpha: 1,
                    y: "-=100%",
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        scrollTrigger: {
                            trigger: bridgeThree,
                            start: "bottom right",
                            scrub: true,
                            markers: true,
                            id: "Four section load"
                        },
                    })

                    .from(bridgeFourImg, {
                        duration: 1,
                        autoAlpha: 0,
                        scrollTrigger: {
                            trigger: bridgeThree,
                            start: "top right",
                            scrub: true,
                            id: "Four img",
                        },
                    })
                    .from(bridgeFourTitle, {
                        duration: 1,
                        autoAlpha: 0,
                        scrollTrigger: {
                            trigger: bridgeThree,
                            start: "bottom right",
                            scrub: true,
                            markers: true,
                            id: "Four title",
                        },
                    })
                    .from(bridgeFourText, {
                        duration: 1,
                        autoAlpha: 0,
                        scrollTrigger: {
                            trigger: bridgeThree,
                            start: "bottom right",
                            scrub: true,
                            markers: true,
                            id: "Four text",
                        },
                    })
                    .from(bridgeFourBtn, {
                        duration: 1,
                        autoAlpha: 0,
                        scrollTrigger: {
                            trigger: bridgeThree,
                            start: "bottom right",
                            scrub: true,
                            markers: true,
                            id: "Four btn",
                        },
                    })


            })
        }


        mainBlockAnimation();
        bridgesOneAnimation();
        bridgesTwoAnimation();
        bridgesThreeAnimation();
        bridgesFourAnimation();








        button.addEventListener('mouseenter', function () {
            TweenMax.to(button, 0.1, {
                scale: 1.4,
            });
        });
        button.addEventListener('mouseleave', function () {
            TweenMax.to(button, 0.1, {
                scale: 1,
            });
        })

        console.log("DOM fully loaded and parsed");
    });
})();