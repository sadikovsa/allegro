window.addEventListener('DOMContentLoaded', function () {

    let activeScreen = 0;
    let canChangeScreen = false;
    let disableHold = false;
    const html = document.querySelector('html');
    const app = document.querySelector('.app');
    const screens = app.querySelectorAll('.section');
    const slidesLength = screens.length;
    const indexPage = screens[0];
    const secondPage = screens[1];
    const threedPage = screens[2];
    const fourPage = screens[3];
    var tl = gsap.timeline();
    secondPage.querySelector('.section-title p').innerHTML = secondPage.querySelector('.section-title p').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    threedPage.querySelector('.section-title p').innerHTML = threedPage.querySelector('.section-title p').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    fourPage.querySelector('.section-title p').innerHTML = fourPage.querySelector('.section-title p').textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    const showIndex = () => {
        return new Promise((resolve) => {
            let sectionImg = indexPage.querySelector('.section-img');
            let sectionTitle = indexPage.querySelector('.section-title');

            new TimelineMax({
                    onStart() {
                        indexPage.classList.remove('is-hidden');
                    },
                    onComplete() {
                        canChangeScreen = true;
                        resolve();
                    },
                })
                .from(sectionTitle, {
                    duration: 1,
                    autoAlpha: 0,
                    x: -1000,
                    clearProps: 'all'
                })
        });
    }

    const hideIndex = () => {
        let sectionImg = indexPage.querySelector('.section-img');
        let sectionTitle = indexPage.querySelector('.section-title');
        return new Promise((resolve) => {
            new TimelineMax({
                    onStart() {
                        canChangeScreen = false;
                    },
                    onComplete() {
                        disableHold = false;
                        TweenMax.set(indexPage, {
                            clearProps: 'all'
                        });
                        TweenMax.set(sectionImg, {
                            clearProps: 'all'
                        });
                        TweenMax.set(sectionTitle, {
                            clearProps: 'all'
                        });
                        indexPage.classList.add('is-hidden');
                        resolve();
                    },
                })
                .to(sectionImg, 2, {
                    scale: 3,
                    rotation: 360,
                    autoAlpha: 0,
                })
                .to(indexPage, 0.7, {
                    autoAlpha: 0,
                });
        });
    }

    const showSecond = () => {
        return new Promise((resolve) => {
            let sectionImg = secondPage.querySelector('.section-img');
            let sectionTitleBefore = secondPage.querySelector('.section-title .title-before');
            let sectionTitle = secondPage.querySelector('.section-title p');
            let sectionTitleText = secondPage.querySelectorAll('.section-title .letter');

            new TimelineMax({
                    onStart() {
                        window.scrollTo(0, 0);
                        activeScreen = 1;
                        secondPage.classList.remove('is-hidden');
                        secondPage.style.height = 'calc(100vh - 100px)';
                    },
                    onComplete() {
                        canChangeScreen = true;
                        resolve();
                    },
                })
                .to(secondPage, 0.7, {
                    autoAlpha: 1,
                    y: 100,
                })
                .from(sectionImg, {
                    duration: 1,
                    autoAlpha: 0,
                    x: 1000,
                    clearProps: 'all',

                })
                .from(sectionTitleBefore, {
                    duration: 1,
                    delay: 0.8,
                    autoAlpha: 0,
                    top: "100%",
                    clearProps: 'all',
                })
            sectionTitleText.forEach((item, index) => {
                gsap.from(item, {
                    duration: 1,
                    delay: 1 + index / 20,
                    autoAlpha: 0,
                    clearProps: 'all',
                })
            })
        });
    }

    const hideSecond = () => {
        let sectionImg = secondPage.querySelector('.section-img');
        let sectionTitleBefore = secondPage.querySelector('.section-title .title-before');
        let sectionTitle = secondPage.querySelector('.section-title p');
        let sectionTitleText = secondPage.querySelectorAll('.section-title .letter');
        return new Promise((resolve) => {
            new TimelineMax({
                    onStart() {
                        canChangeScreen = false;
                    },
                    onComplete() {
                        disableHold = false;
                        TweenMax.set(secondPage, {
                            clearProps: 'all'
                        });
                        TweenMax.set(sectionImg, {
                            clearProps: 'all'
                        });
                        TweenMax.set(sectionTitleBefore, {
                            clearProps: 'all'
                        });
                        TweenMax.set(sectionTitleText, {
                            clearProps: 'all'
                        });
                        secondPage.classList.add('is-hidden');
                        resolve();
                    },
                })
                .to(sectionImg, {
                    autoAlpha: 0,
                    x: -1000,
                })
                .to(sectionTitle, {
                    autoAlpha: 0,
                    x: 1000,
                })
                .to(secondPage, 0.7, {
                    autoAlpha: 0,
                });
        });
    }


    const showThird = () => {
        return new Promise((resolve) => {
            let sectionImg = threedPage.querySelector('.section-img');
            let sectionTitleBefore = threedPage.querySelector('.section-title .title-before');
            let sectionTitle = threedPage.querySelector('.section-title p');
            let sectionTitleText = threedPage.querySelectorAll('.section-title .letter');

            new TimelineMax({
                    onStart() {
                        window.scrollTo(0, 0);
                        activeScreen = 2;
                        threedPage.classList.remove('is-hidden');
                        threedPage.style.height = 'calc(100vh - 100px)';
                    },
                    onComplete() {
                        canChangeScreen = true;
                        resolve();
                    },
                })
            .to(threedPage, 0.7, {
                    autoAlpha: 1,
                    y: 100,
                })
                .from(sectionImg, {
                    duration: 1,
                    autoAlpha: 0,
                    x: -1000,
                    clearProps: 'all',

                })
                .from(sectionTitleBefore, {
                    duration: 1,
                    delay: 0.8,
                    autoAlpha: 0,
                    top: "100%",
                    clearProps: 'all',
                })
            sectionTitleText.forEach((item, index) => {
                gsap.from(item, {
                    duration: 0.6,
                    delay: 1 + index / 20,
                    autoAlpha: 0,
                    clearProps: 'all',
                })
            })
        });
    }


    const showActiveScreen = (activeScr) => {
        console.log(activeScr)
        screens.forEach((item, index) => {
            item.classList.add('is-hidden');
        })
        if (activeScr === 0) {
            showIndex();
        } else if (activeScr === 1) {
            showSecond();
        } else if (activeScr === 2) {
            showThird();
        }
    };

    showActiveScreen(0);

    app.addEventListener('mousewheel', (e) => {
        if (innerWidth > 1024) {
            if (!canChangeScreen || disableHold) {
                return false;
            }
            if (e.deltaY > 0) {
                if (activeScreen !== slidesLength - 1) {
                    activeScreen++;
                } else {
                    activeScreen = activeScreen;
                }
            } else if (e.deltaY < 0) {
                if (activeScreen > 0) {
                    activeScreen--;
                } else {
                    activeScreen = 0;
                }
            }
            showActiveScreen(activeScreen);
            console.log(activeScreen)

        }

        return true;
    });

});