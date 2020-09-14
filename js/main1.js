$(function () {
    // sliders

    $('.main-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev" aria-label="slide prev"></button>',
        nextArrow: '<button type="button" class="slick-next" aria-label="slide next"></button>'
    });


    // burger
    var burger = $('#burgerBtn');
    var mobileContent = $('.header-nav');

    burger.on('change', function () {
        mobileContent.toggleClass('show');
    });

    $(document).on('click', function (e) {
        var target = e.target;
        if (!target.closest('.burger') && !$(target).closest(mobileContent).length) {
            burger.prop('checked', false);
            mobileContent.removeClass('show');
        }
    });


    // tabs

    $('.tabs').on('click', '.tabs-link', function (e) {
        e.preventDefault();
        var active = $(this).data('target');
        var activeTab = $('#' + active);
        $('.tabs .tabs-link').each(function () {
            $(this).removeClass('active');
        });
        $('.tabs-content .tab').each(function () {
            $(this).removeClass('active');
            $(this).removeClass('fade');
        });
        $(this).addClass('active');
        activeTab.addClass('active');
        activeTab.addClass('fade');
    })

    // modal
    $('.modal-open').on('click', function (e) {
        e.preventDefault();
        var modal = $('.' + $(this).attr('data-target'));
        console.log(modal);
        modal.addClass('show');
        $('.backdrop').addClass('show');
        $('body').css('overflow', 'hidden');
    });

    $('.modal .close').on('click', function (e) {
        e.preventDefault();
        $('.modal').removeClass('show');
        $('.backdrop').removeClass('show');
        $('body').attr('style', '');
    })



});


window.addEventListener('DOMContentLoaded', function () {

    let scrollDirection = 'down';
    let activeScreen = 0;
    const app = document.querySelector('.app');
    const screens = app.querySelectorAll('.section');
    const indexPage = screens[0];
    const secondPage = screens[1];
    const threedPage = screens[2];
    const fourPage = screens[3];
    var tl = gsap.timeline();

    const showIndex = (scrDir) => {
        let sectionImg = indexPage.querySelector('.section-img');
        let sectionTitle = indexPage.querySelector('.section-title');
        gsap.from(sectionTitle, {
            duration: 1,
            x: -1000,
            ease: "expo.inOut",
            onStart: function () {
                indexPage.classList.add('is-animated');
            },
            onComplete: function () {
                indexPage.classList.remove('is-animated');
            }
        })
    };

    const hideIndex = (scrDir) => {
        let sectionImg = indexPage.querySelector('.section-img');
        let sectionTitle = indexPage.querySelector('.section-title');
        gsap.to(sectionImg, {
            duration: 2,
            scale: 3,
            rotation: 360,
            opacity: 0.1,
            ease: "expo.inOut",
            clearProps: "all",
            onStart: function () {
                indexPage.classList.add('is-animated');
            },
            onComplete: function () {
                indexPage.classList.remove('is-animated');
                if (scrDir === 'down') {
                    activeScreen = 1;
                    showActiveScreen(activeScreen);
                    showSecond();
                } else if (scrDir === 'up') {
                    activeScreen = 0;
                    showIndex();
                }
            }
        })
    };

    secondPage.querySelector('.section-title p').innerHTML = secondPage.querySelector('.section-title p').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    threedPage.querySelector('.section-title p').innerHTML = threedPage.querySelector('.section-title p').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    fourPage.querySelector('.section-title p').innerHTML = fourPage.querySelector('.section-title p').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    const showSecond = () => {
        let sectionImg = secondPage.querySelector('.section-img');
        let sectionTitleBefore = secondPage.querySelector('.section-title .title-before');
        let sectionTitle = secondPage.querySelector('.section-title p');
        let sectionTitleText = secondPage.querySelectorAll('.section-title .letter');

        gsap.from(sectionImg, {
            duration: 1,
            opacity: 0,
            x: 1000,
            ease: "expo.in",
            clearProps: "all",
            onStart: function () {
                secondPage.classList.add('is-animated');
            },
        })
        gsap.from(sectionTitleBefore, {
            duration: 1,
            delay: 0.8,
            opacity: 0,
            top: "100%",
            ease: "none",
            clearProps: "all",
            onComplete: function () {
                secondPage.classList.remove('is-animated');
            }
        })
        sectionTitleText.forEach((item, index) => {
            gsap.from(item, {
                duration: 0.6,
                delay: 1 + index / 20,
                opacity: 0,
                ease: "none",
                clearProps: "all",
                onComplete: function () {
                    secondPage.classList.remove('is-animated');
                }
            })
        })
    };

    const hideSecond = (scrDir) => {
        let sectionImg = secondPage.querySelector('.section-img');
        let sectionTitle = secondPage.querySelector('.section-title');
        gsap.to(sectionImg, {
            duration: 1,
            opacity: 0,
            x: -1000,
            ease: "none",
            clearProps: "all",
            onStart: function () {
                secondPage.classList.add('is-animated');
            },
        })
        gsap.to(sectionTitle, {
            duration: 1,
            opacity: 0,
            x: 1000,
            ease: "none",
            clearProps: "all",
            onComplete: function () {
                secondPage.classList.remove('is-animated');
                if (scrDir === 'down') {
                    activeScreen = 2;
                    showActiveScreen(activeScreen);
                    showThreed();
                } else if (scrDir === 'up') {
                    activeScreen = 0;
                    showActiveScreen(activeScreen);
                    showIndex();
                }
            }
        })
    };


    const showThreed = (scrDir) => {
        let sectionImg = threedPage.querySelector('.section-img');
        let sectionTitleBefore = threedPage.querySelector('.section-title .title-before');
        let sectionTitleText = threedPage.querySelectorAll('.section-title .letter');

        gsap.from(sectionTitleBefore, {
            duration: 1,
            delay: 0.8,
            opacity: 0,
            top: "100%",
            ease: "none",
            clearProps: "all",
            onComplete: function () {
                threedPage.classList.remove('is-animated');
            }
        });
        sectionTitleText.forEach((item, index) => {
            gsap.from(item, {
                duration: 0.6,
                delay: 1 + index / 20,
                opacity: 0,
                ease: "none",
                clearProps: "all",
                onComplete: function () {
                    threedPage.classList.remove('is-animated');
                }
            })
        });
        gsap.from(sectionImg, {
            duration: 1,
            opacity: 0,
            x: 1000,
            ease: "none",
            onComplete: function () {
                threedPage.classList.remove('is-animated');
            }
        });
    };

    const hideThreed = (scrDir) => {
        
        let sectionImg = threedPage.querySelector('.section-img');
        let sectionTitle = threedPage.querySelector('.section-title');
        
        gsap.to(sectionTitle, {
            duration: 1,
            opacity: 0,
            x: -1000,
            ease: "none",
            clearProps: "all",
            onStart: function () {
                threedPage.classList.add('is-animated');
            }
        });
        
        gsap.to(sectionImg, {
            duration: 1,
            opacity: 0,
            x: 1000,
            ease: "none",
            clearProps: "all",
            onComplete: function () {
                threedPage.classList.remove('is-animated');
                if (scrDir === 'down') {
                    activeScreen = 3;
                    showActiveScreen(activeScreen);
                    showFour();
                } else if (scrDir === 'up') {
                    activeScreen = 1;
                    showActiveScreen(activeScreen);
                    showSecond();
                }
            }
        });
    };

    const showFour = (scrDir) => {
        let sectionImg = fourPage.querySelector('.section-img');
        let sectionTitleBefore = fourPage.querySelector('.section-title .title-before');
        let sectionTitleText = fourPage.querySelectorAll('.section-title .letter');
        gsap.from(sectionTitleBefore, {
            duration: 1,
            delay: 0.8,
            opacity: 0,
            top: "100%",
            ease: "none",
            clearProps: "all",
            onComplete: function () {
                fourPage.classList.remove('is-animated');
            }
        });
        sectionTitleText.forEach((item, index) => {
            gsap.from(item, {
                duration: 0.6,
                delay: 1 + index / 20,
                opacity: 0,
                ease: "none",
                clearProps: "all",
                onComplete: function () {
                    fourPage.classList.remove('is-animated');
                }
            })
        });
        gsap.from(sectionImg, {
            duration: 1,
            opacity: 0,
            x: -1000,
            ease: "none",
            clearProps: "all",

        })
    };

    const hideFour = (scrDir) => {
        let sectionImg = fourPage.querySelector('.section-img');
        let sectionTitle = fourPage.querySelector('.section-title');
        gsap.to(sectionImg, {
            duration: 1,
            opacity: 0,
            x: -1000,
            ease: "none",
            clearProps: "all",
        })
        gsap.to(sectionTitle, {
            duration: 1,
            opacity: 0,
            x: 1000,
            ease: "none",
            clearProps: "all",
            onComplete: function () {
                fourPage.classList.remove('is-animated');
                if (scrDir === 'down') {
                    activeScreen = 3;
                    showActiveScreen(activeScreen);
                    showFour();
                } else if (scrDir === 'up') {
                    activeScreen = 2;
                    showActiveScreen(activeScreen);
                    showThreed();
                }
            }
        })
    };

    const showActiveScreen = (scrNumber) => {
        screens.forEach(item => {
            item.classList.remove('is-active');
            item.classList.add('is-hidden');
        });
        screens[scrNumber].classList.remove('is-hidden');
        screens[scrNumber].classList.add('is-active');
    }

    showActiveScreen(activeScreen);
    showIndex();

    window.addEventListener('wheel', function (e) {
        if (e.deltaY < 0) {
            scrollDirection = 'up';
        }
        if (e.deltaY > 0) {
            scrollDirection = 'down';
        }

        if (!screens[activeScreen].classList.contains('is-animated') && scrollDirection === 'down' && activeScreen < screens.length - 1) {
            if (activeScreen === 0) {
                hideIndex(scrollDirection);
            }
            if (activeScreen === 1) {
                hideSecond(scrollDirection);
            }
            if (activeScreen === 2) {
                hideThreed(scrollDirection);
            }
            console.log(activeScreen, scrollDirection)
        }
        if (!screens[activeScreen].classList.contains('is-animated') && scrollDirection === 'up' && activeScreen > 0) {
            if (activeScreen === 1) {
                hideSecond(scrollDirection);
            }
            if (activeScreen === 2) {
                hideThreed(scrollDirection);
            }
            if (activeScreen === 3) {
                hideFour(scrollDirection);
            }
            if (activeScreen === 4) {

            }

        }
        console.log(activeScreen, scrollDirection)
        e.stopPropagation();
    });


});