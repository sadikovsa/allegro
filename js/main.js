(function () {
    'use strict';
    document.addEventListener("DOMContentLoaded", function (event) {
        function pageTransition() {
            var t1 = gsap.timeline();
            t1.to('ul.transition li', {
                duration: .5,
                scaleY: 1,
                transformOrigin: "bottom left",
                stagger: .2
            })
            t1.to('ul.transition li', {
                duration: .5,
                scaleY: 0,
                transformOrigin: "bottom left",
                stagger: .1,
                delay: .1
            })
        }

        function delay(n) {
            n = n || 2000;
            return new Promise(done => {
                setTimeout(() => {
                    done();
                }, n)
            })
        }

        barba.init({
            sync: true,
            transitions: [{
                async leave(data) {
                    const done = this.async();
                    pageTransition();
                    await delay(1500);
                    done();
                },
                async enter(data) {

                },
                async once(data) {

                }
    }]
        })
        // Detect if a link's href goes to the current page
        function getSamePageAnchor(link) {
            if (
                link.protocol !== window.location.protocol ||
                link.host !== window.location.host ||
                link.pathname !== window.location.pathname ||
                link.search !== window.location.search
            ) {
                return false;
            }

            return link.hash;
        }

        // Scroll to a given hash, preventing the event given if there is one
        function scrollToHash(hash, e) {
            const elem = hash ? document.querySelector(hash) : false;
            if (elem) {
                if (e) e.preventDefault();

                gsap.to(window, {
                    onStart: () => {
                        pageTransition();
                    },
                    duration: 0,
                    scrollTo: {
                        y: elem,
                        offsetY: -200
                    },
                });
            }
        }

        // If a link's href is within the current page, scroll to it instead
        document.querySelectorAll('.header-nav ul li a[href]').forEach(a => {
            a.addEventListener('click', e => {
                scrollToHash(getSamePageAnchor(a), e);
            });
        });

        // Scroll to the element in the URL's hash on load
        scrollToHash(window.location.hash);

        const button = document.querySelector('.scroll-down');
        const mainSection = document.querySelector('.main-section');
        const mainSectionContent = mainSection.querySelector('.main-section__content');
        const mainSlider = document.querySelector('.main-section__slider');
        const mainSliderImg = mainSlider.querySelectorAll('.main-slider__img');
        const mainNewsWrapper = document.querySelector('.main-news__wrapper');
        const bridges = document.querySelector('.bridges');
        const bridgeOne = document.querySelector('.bridges-one');
        const bridgeTwo = document.querySelector('.bridges-two');
        const bridgeThree = document.querySelector('.bridges-three');
        const bridgeFour = document.querySelector('.bridges-four');

        const mainFeatures = document.querySelector('.features');
        const mainProjects = document.querySelector('.main-projects');
        const mainServices = document.querySelector('.main-services');
        const partners = document.querySelector('.partners');
        const mainNews = document.querySelector('.main-news');

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


        const mainFeaturesTitle = mainFeatures.querySelector('.title');
        const mainFeaturesList = mainFeatures.querySelector('.features-list');
        const mainFeaturesListItem = mainFeaturesList.querySelectorAll('li');


        const mainProjectsFirst = mainProjects.querySelector('.main-projects__wrap');
        const mainProjectsFirstTitle = mainProjectsFirst.querySelector('.title-big');
        const mainProjectsFirstLine1 = mainProjectsFirst.querySelector('.projects-line.first');
        const mainProjectsFirstLine2 = mainProjectsFirst.querySelector('.projects-line.second');

        const mainProjectsSecond = mainProjects.querySelector('.main-projects__info');
        const mainProjectsSecondContent1 = mainProjectsSecond.querySelector('.main-projects__content.one');
        const mainProjectsSecondContent2 = mainProjectsSecond.querySelector('.main-projects__content.two');
        const mainProjectsSecondIpad = mainProjectsSecond.querySelector('.main-projects__ipad');
        const mainProjectsSecondIpadImgs = mainProjectsSecondIpad.querySelectorAll('img');


        const mainServicesFirst = mainServices.querySelector('.services-first');
        const mainServicesFirstTitle = mainServicesFirst.querySelector('.title-big');
        const mainServicesFirstTitleOuter = mainServicesFirst.querySelector('.title-outer');
        const mainServicesFirstLine1 = mainServicesFirst.querySelector('.services-line.one');
        const mainServicesFirstLine2 = mainServicesFirst.querySelector('.services-line.two');

        const mainServicesOne = mainServices.querySelector('.services-one');
        const mainServicesOneContent1 = mainServicesOne.querySelector('.services-one__content.one');
        const mainServicesOneContent1Title = mainServicesOneContent1.querySelector('.title');
        mainServicesOneContent1Title.querySelector('.title-text').innerHTML = mainServicesOneContent1Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        const mainServicesOneContent1TitleText = mainServicesOneContent1.querySelectorAll('.letter');
        const mainServicesOneContent1Img = mainServicesOneContent1.querySelector('img');
        const mainServicesOneContent1Text = mainServicesOneContent1.querySelector('.text');
        const mainServicesOneContent2 = mainServicesOne.querySelector('.services-one__content.two');
        const mainServicesOneContent2Title = mainServicesOneContent2.querySelector('.title');
        mainServicesOneContent2Title.querySelector('.title-text').innerHTML = mainServicesOneContent2Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        const mainServicesOneContent2TitleText = mainServicesOneContent2.querySelectorAll('.letter');
        const mainServicesOneContent2Img = mainServicesOneContent2.querySelector('img');
        const mainServicesOneContent2Text = mainServicesOneContent2.querySelector('.text');
        
        const partnersTitle = partners.querySelector('.title');
        partnersTitle.querySelector('.title-text').innerHTML = partnersTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        const partnersTitleText = partnersTitle.querySelectorAll('.letter');
        const partnersList = partners.querySelector('.partners-list');
        const partnersListItem = partnersList.querySelectorAll('li');
        
        const mainNewsTitle = mainNews.querySelector('.title');
        mainNewsTitle.querySelector('.title-text').innerHTML = mainNewsTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        const mainNewsTitleText = mainNewsTitle.querySelectorAll('.letter');
        const mainNewsList = mainNews.querySelector('.main-news__wrapper');
        const mainNewsListItem = mainNewsList.querySelectorAll('.main-news__item');

        let activeSlide = 0;

        const mainSliderStart = (curSlide = 0) => {
            mainSliderImg.forEach(item => {
                item.style.opacity = 0;
            })

            gsap.to(mainSliderImg[curSlide], {
                autoAlpha: 1,
                zIndex: 2
            })
        }

        setInterval(() => {
            if (activeSlide >= mainSliderImg.length) {
                activeSlide = 0;
            }
            mainSliderStart(activeSlide);
            activeSlide++;
        }, 3000)

        const mainBlockAnimation = () => {
            return new Promise((resolve) => {
                const tl = gsap.timeline({
                        duration: 4,
                        scrollTrigger: {
                            trigger: mainSection,
                            start: "top 0",
                            end: "bottom 0",
                            scrub: true,
                            pin: true,
                            onEnter: function () {


                            }
                        },
                        onComplete: () => {
                            resolve();
                        }
                    })
                    .to(mainSection, {
                        y: 0,
                        autoAlpha: 1,
                    })
                    .to(button, {
                        delay: 1.2,
                        scale: 1.4,
                        autoAlpha: 0,
                    })

                    .to(mainSectionContent, {
                        delay: 1.4,
                        autoAlpha: 0,
                    })

                    .to(mainSlider, {
                        delay: 2,
                        scale: 4,
                        rotation: -45,
                        autoAlpha: 0,
                        transformOrigin: "50% 60%",
                    })
                    .to(mainSection, {
                        delay: 3,
                        background: '#060B21'
                    })

            });
        }


        const bridgesOneAnimation = () => {

            return new Promise((resolve) => {
                const tl = gsap.timeline({
                        duration: 2,
                        scrollTrigger: {
                            trigger: bridgeOne,
                            start: "top 0",
                            end: "bottom 0",
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
                        delay: 1.4,
                        autoAlpha: 0,
                        top: "100%",
                    })
                    .from(bridgeOneTitleText, {
                        delay: 1.6,
                        autoAlpha: 0,
                        stagger: 0.1,
                    })
                    .from(bridgeOneImg, {
                        delay: 4,
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
        }

        const bridgesTwoAnimation = () => {
            return new Promise((resolve) => {
                const tl = gsap.timeline({
                        delay: 2,
                        duration: 2,
                        scrollTrigger: {
                            trigger: bridgeTwo,
                            start: "top 250px",
                            end: 'center 0',
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
        }

        const bridgesThreeAnimation = () => {
            return new Promise((resolve) => {
                const tl = gsap.timeline({
                        delay: 2,
                        duration: 2,
                        scrollTrigger: {
                            trigger: bridgeThree,
                            start: "top 50%",
                            end: 'bottom 0',
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
                    .to(bridgeThreeTitle.querySelector('.title-text'), {
                        delay: 2,
                        autoAlpha: 0,
                        y: -400
                    })
                    .to(bridgeThreeTitleBefore, {
                        delay: 2.2,
                        autoAlpha: 0,
                        y: -400
                    })

            })
        }

        const bridgesFourAnimation = () => {
            return new Promise((resolve) => {
                const tl = gsap.timeline({
                        delay: 2,
                        duration: 2,
                        scrollTrigger: {
                            trigger: bridgeFour,
                            start: "top 250px",
                            end: 'bottom 0',
                            scrub: true,
                            pin: true,
                            onLeave: () => {

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
                    .from(bridgeFourImg, {
                        delay: 1,
                        autoAlpha: 0,
                        y: 400
                    })
                    .from(bridgeFourTitle, {
                        delay: 1.4,
                        autoAlpha: 0,
                        y: 400,
                    })
                    .from(bridgeFourText, {
                        delay: 1.6,
                        autoAlpha: 0,
                        y: 400,
                    })
                    .from(bridgeFourBtn, {
                        delay: 1.8,
                        autoAlpha: 0,
                        y: 400,
                    })
                    .to(bridgeFourTitle, {
                        delay: 2.2,
                        autoAlpha: 0,
                        x: 600,
                    })
                    .to(bridgeFourImg, {
                        delay: 2.4,
                        autoAlpha: 0,
                        y: -400
                    })

                    .to(bridgeFourText, {
                        delay: 2.6,
                        autoAlpha: 0,
                        x: 600,
                    })
                    .to(bridgeFourBtn, {
                        delay: 2.8,
                        autoAlpha: 0,
                        x: 600,
                    })
            })
        }

        const mainFeaturesAnimation = () => {
            return new Promise((resolve) => {
                const tl = gsap.timeline({
                        delay: 2,
                        duration: 2,
                        scrollTrigger: {
                            trigger: mainFeatures,
                            start: "top 0",
                            end: 'bottom 0',
                            scrub: true,
                            pin: true,
                            onLeave: () => {

                            }
                        },
                        onComplete: () => {
                            resolve();
                        }
                    })
                    .to(mainFeatures, {
                        autoAlpha: 1,
                    })

                    .from(mainFeaturesTitle, {
                        autoAlpha: 0,
                        x: -400
                    })
                    .from(mainFeaturesListItem, {
                        delay: 0.3,
                        y: -40,
                        autoAlpha: 0,
                        stagger: 0.3,
                    })
                    .to(mainFeaturesTitle, {
                        delay: 1.2,
                        y: -200,
                        autoAlpha: 0
                    })
                    .to(mainFeaturesListItem, {
                        delay: 1.6,
                        y: -100,
                        autoAlpha: 0,
                        stagger: 0.3,
                    })



            })
        }
        const mainProjectsFirstAnimation = () => {
            return new Promise((resolve) => {
                const tl = gsap.timeline({
                        delay: 2,
                        duration: 2,
                        scrollTrigger: {
                            trigger: mainProjectsFirst,
                            start: "top 0",
                            end: '30% 0',
                            scrub: true,
                            pin: true,
                            onLeave: () => {

                            }
                        },
                        onComplete: () => {
                            resolve();
                        }
                    })

                    .to(mainProjectsFirst, {
                        autoAlpha: 1,
                    })

                    .from(mainProjectsFirstTitle, {
                        autoAlpha: 0,
                        x: -400
                    })
                    .from(mainProjectsFirstLine1, {
                        delay: 0.3,
                        x: -1000,
                        autoAlpha: 0,
                    })
                    .from(mainProjectsFirstLine2, {
                        delay: 0.4,
                        x: 1000,
                        autoAlpha: 0,
                    })
            })
        }

        const mainProjectsSecondAnimation = () => {
            return new Promise((resolve) => {
                const tl = gsap.timeline({
                        delay: 2,
                        duration: 2,
                        scrollTrigger: {
                            trigger: mainProjectsSecond,
                            start: "top 0",
                            end: 'bottom 0',
                            scrub: true,
                            pin: true,
                            onLeave: () => {

                            }
                        },
                        onComplete: () => {
                            resolve();
                        }
                    })
                    .to(mainProjectsSecond, {
                        autoAlpha: 1,
                    })
                    .from(mainProjectsSecondContent1, {
                        delay: 1.4,
                        autoAlpha: 0,
                        y: 400
                    })
                    .from(mainProjectsSecondIpad, {
                        delay: 1.8,
                        x: 1000,
                        autoAlpha: 0,
                    })
                    .to(mainProjectsSecondContent1, {
                        delay: 2,
                        autoAlpha: 0,
                        y: -400,
                    })
                    .from(mainProjectsSecondIpadImgs[1], {
                        delay: 2.2,
                        autoAlpha: 0,
                        zIndex: 10
                    })
                    .from(mainProjectsSecondContent2, {
                        delay: 2.4,
                        autoAlpha: 0,
                        y: 400
                    })
                    .to(mainProjectsSecondIpad, {
                        delay: 2.6,
                        x: 1000,
                        autoAlpha: 0,
                    })
                    .to(mainProjectsSecondContent2, {
                        delay: 3,
                        autoAlpha: 0,
                        y: -400
                    })
            })
        }
        const mainServicesAnimation = () => {
            return new Promise((resolve) => {
                const tl = gsap.timeline({
                        delay: 2,
                        duration: 2,
                        scrollTrigger: {
                            trigger: mainServicesFirst,
                            start: "top 0",
                            end: '50% 0',
                            scrub: true,
                            pin: true,
                            onLeave: () => {
                                //                                gsap.set(mainServices, {
                                //                                    css: {
                                //                                        backgroundColor: '#060B21'
                                //                                    }
                                //                                })    
                            }
                        },
                        onComplete: () => {
                            resolve();
                        }
                    })
                    .to(mainServicesFirst, {
                        autoAlpha: 1,
                    })
                    .from(mainServicesFirstTitle, {
                        delay: 1.2,
                        autoAlpha: 0,
                        x: -200
                    })
                    .from(mainServicesFirstLine1, {
                        delay: 1.4,
                        y: -200,
                        autoAlpha: 0,
                    })
                    .from(mainServicesFirstLine2, {
                        delay: 1.4,
                        y: 200,
                        autoAlpha: 0,
                    })
                    .from(mainServicesFirstTitleOuter, {
                        delay: 1.8,
                        autoAlpha: 0,
                    })
                    .to(mainServicesFirstTitle, {
                        delay: 2.2,
                        autoAlpha: 0,
                        x: -200
                    })
                    .to(mainServicesFirstLine1, {
                        delay: 2.4,
                        y: -200,
                        autoAlpha: 0,
                    })
                    .to(mainServicesFirstLine2, {
                        delay: 2.6,
                        y: 200,
                        autoAlpha: 0,
                    })
                    .to(mainServicesFirstTitleOuter, {
                        delay: 2.8,
                        autoAlpha: 0,
                    })
            })
        }
        const mainServicesOneAnimation = () => {
            return new Promise((resolve) => {

                gsap.from(mainServicesOneContent1TitleText, {
                    delay: 0.3,
                    autoAlpha: 0,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: mainServicesOneContent1,
                        start: "top 350px",
                        end: 'top ',
                        scrub: true,
                    },
                })
                gsap.from(mainServicesOneContent1Img, {
                    delay: 0.5,
                    y: 200,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: mainServicesOneContent1,
                         start: "top 350px",
                        end: 'top -100',
                        scrub: true,
                    },
                })
                gsap.from(mainServicesOneContent1Text, {
                    delay: 0.8,
                    y: 200,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: mainServicesOneContent1,
                         start: "top 350px",
                        end: 'top 0',
                        scrub: true,
                    },
                })

                gsap.from(mainServicesOneContent2TitleText, {
                    delay: 0.3,
                    autoAlpha: 0,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: mainServicesOneContent1,
                        start: "bottom 100px",
                        end: "bottom -=60",
                        scrub: true,
                    },
                })
                gsap.from(mainServicesOneContent2Img, {
                    delay: 0.6,
                    y: 200,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: mainServicesOneContent1,
                        start: "bottom 100px",
                        end: "bottom -=140",
                        scrub: true,
                    },
                })
                gsap.from(mainServicesOneContent2Text, {
                    delay: 1,
                    y: 200,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: mainServicesOneContent1,
                        start: "bottom 100px",
                        end: "bottom -=160",
                        scrub: true,
                    },
                })
            })
        }
 const partnersAnimation = () => {
            return new Promise((resolve) => {
                const tl = gsap.timeline({
                        delay: 2,
                        duration: 2,
                        scrollTrigger: {
                            trigger: partners,
                            start: "top 0",
                            end: 'bottom 0',
                            scrub: true,
                            pin: true,
                            onLeave: () => {

                            }
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
                        delay: 0.8,
                        y: -100,
                        autoAlpha: 0,
                        stagger: 0.3,
                    })
                    .to(partnersTitle, {
                        delay: 4,
                        autoAlpha: 0,
                        x: -400
                    })
                    .to(partnersListItem, {
                        delay: 5,
                        y: -400,
                        stagger: 0.5,
                        autoAlpha: 0,
                    })
            })
        }
 
  const mainNewsAnimation = () => {
            return new Promise((resolve) => {
                const tl = gsap.timeline({
                        delay: 2,
                        duration: 2,
                        scrollTrigger: {
                            trigger: mainNews,
                            start: "top 0",
                            end: 'bottom +=1500',
                            scrub: true,
                            pin: true,
                            onLeave: () => {

                            }
                        },
                        onComplete: () => {
                            resolve();
                        }
                    })

                    .to(mainNews, {
                        autoAlpha: 1,
                    })

                    .from(mainNewsTitleText, {
                        delay: 0.3,
                        stagger: 0.1,
                        autoAlpha: 0,
                    })
                    .from(mainNewsListItem, {
                        delay: 0.8,
                        y: 400,
                        autoAlpha: 0,
                        stagger: 0.5,
                    })
            })
        }




        bridgesOneAnimation();
        mainBlockAnimation();
        bridgesTwoAnimation();
        bridgesThreeAnimation();
        bridgesFourAnimation();
        mainFeaturesAnimation();
        mainProjectsFirstAnimation();
        mainProjectsSecondAnimation();
        mainServicesAnimation();
        mainServicesOneAnimation();
        
        
        partnersAnimation();
        mainNewsAnimation();








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



    });
})();