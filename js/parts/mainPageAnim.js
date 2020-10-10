const mainPageAnim = () => {
    const mainSlider = document.querySelector('.main-section .main-section__slider');
    const mainSectionContent = document.querySelector('.main-section .main-section__content');
    const mainSliderImg = document.querySelectorAll('.main-section .main-slider__img');
    let activeMainSlide = 0;

    const bridgeOne = document.querySelector('.bridges-one');
    const bridgeOneImg = document.querySelector('.bridges-one .bridges-img');
    const bridgeOneTitle = document.querySelector('.bridges-one .title');
    const bridgeOneTitleBefore = document.querySelector('.bridges-one .title-before');
    const bridgeOneTitleText = document.querySelector('.bridges-one .title-text');

    const bridgeTwo = document.querySelector('.bridges-two');
    const bridgeTwoImg = document.querySelector('.bridges-two .bridges-img');
    const bridgeTwoTitle = document.querySelector('.bridges-two .title');
    const bridgeTwoTitleBefore = document.querySelector('.bridges-two .title-before');
    const bridgeTwoTitleText = document.querySelector('.bridges-two .title-text');

    const bridgeThree = document.querySelector('.bridges-three');
    const bridgeThreeImg = document.querySelector('.bridges-three .bridges-img');
    const bridgeThreeTitle = document.querySelector('.bridges-three .title');
    const bridgeThreeTitleBefore = document.querySelector('.bridges-three .title-before');
    const bridgeThreeTitleText = document.querySelector('.bridges-three .title-text');

    const bridgeFour = document.querySelector('.bridges-four');
    const bridgeFourImg = document.querySelector('.bridges-four .bridges-img');
    const bridgeFourTitle = document.querySelector('.bridges-four .title');
    const bridgeFourText = document.querySelector('.bridges-four .text');
    const bridgeFourBtn = document.querySelector('.bridges-four .btn');

    const mainFeatures = document.querySelector('.features');
    const mainFeaturesTitle = document.querySelector('.features .title');
    const mainFeaturesList = document.querySelector('.features .features-list');
    const mainFeaturesListItem = document.querySelectorAll('.features .features-list li');

    const mainProjectsFirst = document.querySelector('.main-projects__wrap');
    const mainProjectsFirstTitle = document.querySelector('.main-projects__wrap .title-big');
    const mainProjectsFirstLine1 = document.querySelector('.main-projects__wrap .projects-line.first');
    const mainProjectsFirstLine2 = document.querySelector('.main-projects__wrap .projects-line.second');

    const mainProjectsSecond = document.querySelector('.main-projects__info');
    const mainProjectsSecondContent = document.querySelectorAll('.main-projects__info .main-projects__content');
    const mainProjectsSecondIpad = document.querySelector('.main-projects__info .main-projects__ipad');
    const mainProjectsSecondIpadImgs = document.querySelectorAll('.main-projects__info .main-projects__ipad img');
    const mainProjectsSlideControls = document.querySelector('.main-projects__info .projects-gallary__controls');
    const slidePrev = document.querySelector('.main-projects__info .projects-gallary__control.prev');
    const slideNext = document.querySelector('.main-projects__info .projects-gallary__control.next');

    const mainServicesFirst = document.querySelector('.services-first');
    const mainServicesFirstTitle = document.querySelector('.services-first .title-big');
    const mainServicesFirstLine1 = document.querySelector('.services-first .services-line.one');
    const mainServicesFirstLine2 = document.querySelector('.services-first .services-line.two');

    const mainServicesOne = document.querySelector('.services-one.one');
    const mainServicesOneTitle = document.querySelector('.services-one.one .title');
    const mainServicesOneImg = document.querySelector('.services-one.one .services-img');
    const mainServicesOneText = document.querySelector('.services-one.one .text');

    const mainServicesOne2 = document.querySelector('.services-one.two');
    const mainServicesOne2Title = document.querySelector('.services-one.two .title');
    const mainServicesOne2Img = document.querySelector('.services-one.two .services-img');
    const mainServicesOne2Text = document.querySelector('.services-one.two .text');

    const mainServicesTwo = document.querySelectorAll('.services-two.one');
    const mainServicesTwoTitle = document.querySelector('.services-two.one .title');
    const mainServicesTwoImg = document.querySelector('.services-two.one .services-img');
    const mainServicesTwoText = document.querySelector('.services-two.one .text');

    const mainServicesTwo2 = document.querySelector('.services-two.two');
    const mainServicesTwo2Title = document.querySelector('.services-two.two .title');
    const mainServicesTwo2Img = document.querySelector('.services-two.two .services-img');
    const mainServicesTwo2Text = document.querySelector('.services-two.two .text');

    const mainServicesThree = document.querySelector('.services-three.one');
    const mainServicesThreeTitle = document.querySelector('.services-three.one .title');
    const mainServicesThreeImg = document.querySelector('.services-three.one .services-img');
    const mainServicesThreeText = document.querySelector('.services-three.one .text');

    const mainServicesThree2 = document.querySelector('.services-three.two');
    const mainServicesThree2Title = document.querySelector('.services-three.two .title');
    const mainServicesThree2Img = document.querySelector('.services-three.two .services-img');
    const mainServicesThree2Text = document.querySelector('.services-three.two .text');

    const mainServicesFour = document.querySelector('.services-four.one');
    const mainServicesFourTitle = document.querySelector('.services-four.one .title');
    const mainServicesFourImg = document.querySelector('.services-four.one .services-img');
    const mainServicesFourText = document.querySelector('.services-four.one .text');

    const mainServicesFour2 = document.querySelector('.services-four.two');
    const mainServicesFour2Title = document.querySelector('.services-four.two .title');
    const mainServicesFour2Img = document.querySelector('.services-four.two .services-img');
    const mainServicesFour2Text = document.querySelector('.services-four.two .text');

    const mainServicesFour3 = document.querySelector('.services-four.three');
    const mainServicesFour3Title = document.querySelector('.services-four.three .title');
    const mainServicesFour3Img = document.querySelector('.services-four.three .services-img');
    const mainServicesFour3Text = document.querySelector('.services-four.three .text');

    const partners = document.querySelector('.partners');
    const partnersTitle = document.querySelector('.partners .title');
    const partnersList = document.querySelector('.partners .partners-slider__wrapper');

    const mainNews = document.querySelector('.main-news');
    const mainNewsTitle = document.querySelector('.main-news .title');
    const mainNewsList = document.querySelector('.main-news .main-news__wrapper');



    const projectsSliderAnim = () => {
        let activeSlide = 0;
        const changeSlide = (actSlide = 0) => {
            mainProjectsSecondContent.forEach((item, index) => {
                item.classList.remove('active');
                mainProjectsSecondIpadImgs[index].classList.remove('active');
            })

            mainProjectsSecondContent[actSlide].classList.add('active');
            mainProjectsSecondIpadImgs[actSlide].classList.add('active');
        }
        changeSlide(activeSlide);
        slidePrev.addEventListener('click', function (e) {
            e.preventDefault();
            activeSlide--;
            if (activeSlide >= 0) {
                changeSlide(activeSlide);
            } else {
                activeSlide = 0;
            }
        });

        slideNext.addEventListener('click', function (e) {
            e.preventDefault();
            activeSlide++;
            if (activeSlide <= mainProjectsSecondContent.length - 1) {
                changeSlide(activeSlide);
            } else {
                activeSlide = mainProjectsSecondContent.length - 1;
            }
        })
    };


    $('.partners-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        appendArrows: '.partners-slider__controls',
        prevArrow: '<button type="button" class="partners-prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.762 18.2475L6.37673 9.99988L14.762 1.75226L13.4667 0.476074L3.80958 10.0046L13.4667 19.5237L14.762 18.2475Z" fill="black"/></svg></button>',
        nextArrow: '<button type="button" class="partners-next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.23804 18.2475L13.6233 9.99988L5.23804 1.75226L6.53328 0.476074L16.1904 10.0046L6.53328 19.5237L5.23804 18.2475Z" fill="black"/></svg></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    $('.main-news__slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        appendArrows: '.main-news__controls',
        prevArrow: '<button type="button" class="news-prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.762 18.2475L6.37673 9.99988L14.762 1.75226L13.4667 0.476074L3.80958 10.0046L13.4667 19.5237L14.762 18.2475Z" fill="white"/></svg></button>',
        nextArrow: '<button type="button" class="news-next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.23804 18.2475L13.6233 9.99988L5.23804 1.75226L6.53328 0.476074L16.1904 10.0046L6.53328 19.5237L5.23804 18.2475Z" fill="white"/></svg></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    if (window.innerWidth > 1199) {
        function mainSectionAnim() {
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
                activeMainSlide++;
                if (activeMainSlide >= mainSliderImg.length - 1) {
                    activeMainSlide = 0;
                }
                mainSliderStart(activeMainSlide);

            }, 3000)
        };

        //
        //        const mainSectionLeaveAnim = gsap.timeline({
        //                duration: 1,
        //                paused: true,
        //            })
        //            .to(mainSlider, {
        //                scale: 3,
        //                rotation: -60,
        //                transformOrigin: "50% 70%",
        //                autoAlpha: 0
        //            }).to(mainSectionContent, {
        //                autoAlpha: 0
        //            }, '-=0.5');

        const controller = new ScrollMagic.Controller();

        var SliderTimelineMax = new TimelineMax().add([
            TweenMax.to('.main-section__slider', 1, {
                scale: 5,
                rotation: -80,

                autoAlpha: 0,
                ease: Linear.easeNone,
            }),
            TweenMax.to('.main-section__content', 1, {
                autoAlpha: 0,
                ease: Linear.easeNone,
            })
            ]);

        var SliderScrollMagicScene = new ScrollMagic.Scene({
                triggerElement: '.main-section',
                triggerHook: 0,
                duration: '100%',
                offset: 0,
                reverse: true,
            })
            .setTween(SliderTimelineMax)
            .addTo(controller)


        const bridgesOneAnim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(bridgeOneImg, {
                x: 2000,
            })
            .from(bridgeOneTitleBefore, {
                autoAlpha: 0,
                top: "100%",
            })
            .from(bridgeOneTitleText, {
                autoAlpha: 0,
                y: -80,
            });

        const bridgesTwoAnim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(bridgeTwoImg, {
                x: 1000,
            })
            .from(bridgeTwoTitleBefore, {
                autoAlpha: 0,
                top: "100%",
            })

            .from(bridgeTwoTitleText, {
                autoAlpha: 0,
                y: -80
            });

        const bridgesThreeAnim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(bridgeThreeImg, {
                y: "100%",
            })
            .from(bridgeThreeTitleBefore, {
                autoAlpha: 0,
                top: "100%",
            })
            .from(bridgeThreeTitleText, {
                autoAlpha: 0,
                y: -80
            });

        const bridgesFourAnim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(bridgeFourImg, {
                y: "100%"
            })
            .from(bridgeFourTitle, {
                autoAlpha: 0,
                y: 500,
            })
            .from(bridgeFourText, {
                autoAlpha: 0,
                y: 600,
            })
            .from(bridgeFourBtn, {
                autoAlpha: 0,
                y: 700,
            });

        const featuresAnim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainFeaturesTitle, {
                autoAlpha: 0,
                x: -400
            })
            .from(mainFeaturesListItem, {
                y: -40,
                autoAlpha: 0,
                stagger: 0.1,
            });

        const projectsFirstAnim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainProjectsFirstTitle, {
                autoAlpha: 0,
                x: -400
            })
            .from(mainProjectsFirstLine1, {
                x: "-100%",
            })
            .from(mainProjectsFirstLine2, {
                x: "100%",
            });

        const projectsSecondAnim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainProjectsSecondContent[0], {
                autoAlpha: 0,
                y: 400
            })
            .from(mainProjectsSecondIpad, {
                x: 1000,
                autoAlpha: 0,
            })
            .from(mainProjectsSlideControls, {
                x: 1000,
                autoAlpha: 0,
            });

        const servicesAnim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainServicesFirstTitle, {
                autoAlpha: 0,
                x: -200
            })
            .from(mainServicesFirstLine1, {
                y: -500,
            })
            .from(mainServicesFirstLine2, {
                y: 500,
            });

        const servicesOne1Anim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainServicesOneTitle, {
                y: 300,
                autoAlpha: 0,
            })
            .from(mainServicesOneImg, {
                y: 400,
                autoAlpha: 0,
            })
            .from(mainServicesOneText, {
                y: 500,
                autoAlpha: 0,
            });

        const servicesOne2Anim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainServicesOne2Title, {
                y: 300,
                autoAlpha: 0,
            })
            .from(mainServicesOne2Text, {
                y: 400,
                autoAlpha: 0,
            })
            .from(mainServicesOne2Img, {
                x: 400,
                autoAlpha: 0,
            });

        const servicesTwo1Anim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainServicesTwoImg, {
                x: -400,
                autoAlpha: 0,
            })
            .from(mainServicesTwoTitle, {
                autoAlpha: 0,
                y: 300,
            })

            .from(mainServicesTwoText, {
                y: 400,
                autoAlpha: 0,
            });

        const servicesTwo2Anim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainServicesTwo2Title, {
                autoAlpha: 0,
                x: -400,
            })
            .from(mainServicesTwo2Img, {
                y: 300,
                autoAlpha: 0,
            })
            .from(mainServicesTwo2Text, {
                y: 400,
                autoAlpha: 0,
            });

        const servicesThree1Anim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainServicesThreeImg, {
                x: 400,
                autoAlpha: 0,
            })
            .from(mainServicesThreeTitle, {
                y: 400,
                autoAlpha: 0,
            })
            .from(mainServicesThreeText, {
                y: 500,
                autoAlpha: 0,
            });

        const servicesThree2Anim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainServicesThree2Img, {
                x: -400,
                autoAlpha: 0,
            })
            .from(mainServicesThree2Title, {
                y: 400,
                autoAlpha: 0,
            })
            .from(mainServicesThree2Text, {
                y: 500,
                autoAlpha: 0,
            });

        const servicesFour1Anim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainServicesFourTitle, {
                y: 400,
                autoAlpha: 0,
            })
            .from(mainServicesFourImg, {
                y: 500,
                autoAlpha: 0,
            })
            .from(mainServicesFourText, {
                y: 600,
                autoAlpha: 0,
            });

        const servicesFour2Anim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainServicesFour2Img, {
                x: 400,
                autoAlpha: 0,
            })
            .from(mainServicesFour2Title, {
                y: 400,
                autoAlpha: 0,
            })

            .from(mainServicesFour2Text, {
                y: 600,
                autoAlpha: 0,
            });

        const servicesFour3Anim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainServicesFour3Img, {
                x: -400,
                autoAlpha: 0,
            })
            .from(mainServicesFour3Title, {
                y: 400,
                autoAlpha: 0,
            })

            .from(mainServicesFour3Text, {
                y: 600,
                autoAlpha: 0,
            });

        const partnersAnim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(partnersTitle, {
                x: -600,
                autoAlpha: 0,
            })
            .from(partnersList, {
                x: 600,
                autoAlpha: 0,
            });

        const mainNewsAnim = gsap.timeline({
                paused: true,
                duration: 0.8,
            })
            .from(mainNewsTitle, {
                x: -600,
                autoAlpha: 0,
            })
            .from(mainNewsList, {
                x: 600,
                autoAlpha: 0,
            });



        let wrapper = document.querySelector('.main');
        new fullpage('#fullpage', {
            licenseKey: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
            lockAnchors: false,
            autoScrolling: true,
            paddingTop: '80px',
            paddingBottom: '0px',
            scrollingSpeed: 1500,
            fitToSectionDelay: 500,
            lazyLoading: true,
            //            scrollOverflow: true,
            //            scrollOverflowReset: true,
            //            scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk=',
            afterLoad: function (origin, destination, direction) {
                if (destination.index === 0) {
                    mainSectionAnim();
                } else if (destination.index === 1) {
                    bridgesOneAnim.timeScale(1).restart();
                } else if (destination.index === 2) {
                    bridgesTwoAnim.timeScale(1).restart();
                } else if (destination.index === 3) {
                    bridgesThreeAnim.timeScale(1).restart();
                } else if (destination.index === 4) {
                    bridgesFourAnim.timeScale(1).restart();
                } else if (destination.index === 5) {
                    featuresAnim.timeScale(1).restart();
                } else if (destination.index === 6) {
                    projectsFirstAnim.restart();
                } else if (destination.index === 7) {
                    projectsSecondAnim.timeScale(1).restart();
                    projectsSliderAnim();
                } else if (destination.index === 8) {
                    servicesAnim.timeScale(1).restart();
                } else if (destination.index === 9) {
                    servicesOne1Anim.timeScale(1).restart();
                } else if (destination.index === 10) {
                    servicesOne2Anim.timeScale(1).restart();
                } else if (destination.index === 11) {
                    servicesTwo1Anim.timeScale(1).restart();
                } else if (destination.index === 12) {
                    servicesTwo2Anim.timeScale(1).restart();
                } else if (destination.index === 13) {
                    servicesThree1Anim.timeScale(1).restart();
                } else if (destination.index === 14) {
                    servicesThree2Anim.timeScale(1).restart();
                } else if (destination.index === 15) {
                    servicesFour1Anim.timeScale(1).restart();
                } else if (destination.index === 16) {
                    servicesFour2Anim.timeScale(1).restart();
                } else if (destination.index === 17) {
                    servicesFour3Anim.timeScale(1).restart();
                } else if (destination.index === 18) {
                    partnersAnim.timeScale(1).restart();
                } else if (destination.index === 19) {
                    mainNewsAnim.timeScale(1).restart();
                }
            },
            onLeave: function (origin, destination, direction) {
                if (origin.index === 0) {

                } else if (origin.index === 1) {
                    bridgesOneAnim.timeScale(2).reverse();
                } else if (origin.index === 2) {
                    bridgesTwoAnim.timeScale(2).reverse();
                } else if (origin.index === 3) {
                    bridgesThreeAnim.timeScale(2).reverse();
                } else if (origin.index === 4) {
                    bridgesFourAnim.timeScale(2).reverse();
                } else if (origin.index === 5) {
                    featuresAnim.timeScale(2).reverse();
                } else if (origin.index === 6) {
                    projectsFirstAnim.timeScale(2).reverse();
                } else if (origin.index === 7) {
                    projectsSecondAnim.timeScale(2).reverse();
                } else if (origin.index === 8) {
                    servicesAnim.timeScale(2).reverse();
                } else if (origin.index === 9) {
                    servicesOne1Anim.timeScale(2).reverse();
                } else if (origin.index === 10) {
                    servicesOne2Anim.timeScale(2).reverse();
                } else if (origin.index === 11) {
                    servicesTwo1Anim.timeScale(2).reverse();
                } else if (origin.index === 12) {
                    servicesTwo2Anim.timeScale(2).reverse();
                } else if (origin.index === 13) {
                    servicesThree1Anim.timeScale(2).reverse();
                } else if (origin.index === 14) {
                    servicesThree2Anim.timeScale(2).reverse();
                } else if (origin.index === 15) {
                    servicesFour1Anim.timeScale(2).reverse();
                } else if (origin.index === 16) {
                    servicesFour2Anim.timeScale(2).reverse();
                } else if (origin.index === 17) {
                    servicesFour3Anim.timeScale(2).reverse();
                } else if (origin.index === 18) {
                    partnersAnim.timeScale(2).reverse();
                } else if (origin.index === 19) {
                    mainNewsAnim.timeScale(2).reverse();
                }
            },
        });


        if (window.innerWidth > 1199) {
            (function ($) {
                $.fn.wavify = function (options) {

                    //  Options
                    //
                    var settings = $.extend({
                        container: options.container ? options.container : 'body',
                        // Height of wave
                        height: 100,
                        // Amplitude of wave
                        amplitude: 50,
                        // Animation speed
                        speed: .15,
                        // Total number of articulation in wave
                        bones: 3,
                        // Color
                        color: 'rgba(255,255,255, 0.20)'
                    }, options);

                    var wave = this,
                        width = $(settings.container).width(),
                        height = $(settings.container).height(),
                        points = [],
                        lastUpdate,
                        totalTime = 0;

                    //  Set color
                    //
                    TweenLite.set(wave, {
                        attr: {
                            fill: settings.color
                        }
                    });


                    function drawPoints(factor) {
                        var points = [];

                        for (var i = 0; i <= settings.bones; i++) {
                            var x = i / settings.bones * width;
                            var sinSeed = (factor + (i + i % settings.bones)) * settings.speed * 100;
                            var sinHeight = Math.sin(sinSeed / 100) * settings.amplitude;
                            var yPos = Math.sin(sinSeed / 100) * sinHeight + settings.height;
                            points.push({
                                x: x,
                                y: yPos
                            });
                        }

                        return points;
                    }

                    function drawPath(points) {
                        var SVGString = 'M ' + points[0].x + ' ' + points[0].y;

                        var cp0 = {
                            x: (points[1].x - points[0].x) / 2,
                            y: (points[1].y - points[0].y) + points[0].y + (points[1].y - points[0].y)
                        };

                        SVGString += ' C ' + cp0.x + ' ' + cp0.y + ' ' + cp0.x + ' ' + cp0.y + ' ' + points[1].x + ' ' + points[1].y;

                        var prevCp = cp0;
                        var inverted = -1;

                        for (var i = 1; i < points.length - 1; i++) {
                            var cpLength = Math.sqrt(prevCp.x * prevCp.x + prevCp.y * prevCp.y);
                            var cp1 = {
                                x: (points[i].x - prevCp.x) + points[i].x,
                                y: (points[i].y - prevCp.y) + points[i].y
                            };

                            SVGString += ' C ' + cp1.x + ' ' + cp1.y + ' ' + cp1.x + ' ' + cp1.y + ' ' + points[i + 1].x + ' ' + points[i + 1].y;
                            prevCp = cp1;
                            inverted = -inverted;
                        }

                        SVGString += ' L ' + width + ' ' + height;
                        SVGString += ' L 0 ' + height + ' Z';
                        return SVGString;
                    }

                    //  Draw function
                    //
                    //
                    function draw() {
                        var now = window.Date.now();

                        if (lastUpdate) {
                            var elapsed = (now - lastUpdate) / 1000;
                            lastUpdate = now;

                            totalTime += elapsed;

                            var factor = totalTime * Math.PI;
                            TweenMax.to(wave, settings.speed, {
                                attr: {
                                    d: drawPath(drawPoints(factor))
                                },
                                ease: Power1.easeInOut
                            });

                        } else {
                            lastUpdate = now;
                        }

                        requestAnimationFrame(draw);
                    }

                    //  Pure js debounce function to optimize resize method
                    //
                    //
                    function debounce(func, wait, immediate) {
                        var timeout;
                        return function () {
                            var context = this,
                                args = arguments;
                            clearTimeout(timeout);
                            timeout = setTimeout(function () {
                                timeout = null;
                                if (!immediate) func.apply(context, args);
                            }, wait);
                            if (immediate && !timeout) func.apply(context, args);
                        };
                    }

                    //  Redraw for resize with debounce
                    //
                    var redraw = debounce(function () {
                        wave.attr('d', '');
                        points = [];
                        totalTime = 0;
                        width = $(settings.container).width();
                        height = $(settings.container).height();
                        lastUpdate = false;
                        setTimeout(function () {
                            draw();
                        }, 50);
                    }, 250);
                    $(window).on('resize', redraw);


                    //  Execute
                    //
                    return draw();

                };

            }(jQuery));


            $('#feel-the-wave').wavify({
                height: 200,
                bones: 4,
                amplitude: 500,
                color: 'rgba(240, 112, 80, 0.30)',
                speed: .15
            });

            $('#feel-the-wave-two').wavify({
                height: 200,
                bones: 4,
                amplitude: 400,
                color: 'rgba(240, 112, 80, 0.50)',
                speed: .3
            });
            $('#feel-the-wave-three').wavify({
                height: 200,
                bones: 3,
                amplitude: 500,
                color: '#FB874C',
                speed: .3
            });
        }

    } else {
        var bridges1 = $('.bridges-one').waypoint({
            handler: function (direction) {
                this.element.querySelector('.bridges-img').classList.add('fade');
                this.element.querySelector('.bridges-content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })
        var bridges2 = $('.bridges-two').waypoint({
            handler: function (direction) {
                this.element.querySelector('.bridges-img').classList.add('fade');
                this.element.querySelector('.bridges-content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })
        var bridges3 = $('.bridges-three').waypoint({
            handler: function (direction) {
                this.element.querySelector('.bridges-img').classList.add('fade');
                this.element.querySelector('.bridges-content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })
        var bridges4 = $('.bridges-four').waypoint({
            handler: function (direction) {
                this.element.querySelector('.bridges-img').classList.add('fade');
                this.element.querySelector('.bridges-content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })
        var features = $('.features').waypoint({
            handler: function (direction) {
                this.element.querySelector('.title').classList.add('fade');
                this.element.querySelector('.features-slider__wrap').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })
        var projectsFirst = $('.main-projects__wrap').waypoint({
            handler: function (direction) {
                this.element.querySelector('.title-big').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })
        var projectsSecond = $('.main-projects__info').waypoint({
            handler: function (direction) {
                this.element.querySelector('.main-projects__slider').classList.add('fade');
                this.element.querySelector('.main-projects__wrapper').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })
        var servicesFirst = $('.services-first').waypoint({
            handler: function (direction) {
                this.element.querySelector('.title-big').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })

        var servicesOne1 = $('.services-one.one').waypoint({
            handler: function (direction) {
                this.element.querySelector('.services-one__content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })
        var servicesOne2 = $('.services-one.two').waypoint({
            handler: function (direction) {
                this.element.querySelector('.services-one__content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })

        var servicesTwo1 = $('.services-two.one').waypoint({
            handler: function (direction) {
                this.element.querySelector('.services-two__content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })
        var servicesTwo2 = $('.services-two.two').waypoint({
            handler: function (direction) {
                this.element.querySelector('.services-two__content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })

        var servicesThree1 = $('.services-three.one').waypoint({
            handler: function (direction) {
                this.element.querySelector('.services-three__content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })
        var servicesThree2 = $('.services-three.two').waypoint({
            handler: function (direction) {
                this.element.querySelector('.services-three__content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })

        var servicesFour1 = $('.services-four.one').waypoint({
            handler: function (direction) {
                this.element.querySelector('.services-four__content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })
        var servicesFour2 = $('.services-four.two').waypoint({
            handler: function (direction) {
                this.element.querySelector('.services-four__content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })
        var servicesFour3 = $('.services-four.three').waypoint({
            handler: function (direction) {
                this.element.querySelector('.services-four__content').classList.add('fade');
            },
            offset: 'bottom-in-view'
        })


        projectsSliderAnim();
        $('.features-list').slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: false,
            appendArrows: '.features-slider__controls',
            prevArrow: '<button type="button" class="features-prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.762 18.2475L6.37673 9.99988L14.762 1.75226L13.4667 0.476074L3.80958 10.0046L13.4667 19.5237L14.762 18.2475Z" fill="black"/></svg></button>',
            nextArrow: '<button type="button" class="features-next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.23804 18.2475L13.6233 9.99988L5.23804 1.75226L6.53328 0.476074L16.1904 10.0046L6.53328 19.5237L5.23804 18.2475Z" fill="black"/></svg></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
    },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
    },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
    }, {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
    }
  ]
        });
    }
}
export default mainPageAnim;