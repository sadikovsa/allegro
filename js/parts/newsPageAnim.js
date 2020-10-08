const newsPageAnim = () => {
    let news = document.querySelector('.news');
    let newsWrapper = document.querySelector('.news-wrapper');
    let newsItems = document.querySelectorAll('.news-item');


    const newsAnim = gsap.timeline({
            duration: 0.8,
            paused: true,
        yoyo: true,
        })
        .from(newsItems, {
            delay: 0.3,
            autoAlpha: 0,
            stagger: 0.1
        })

    if (window.innerWidth > 1199) {
        let wrapper = document.querySelector('.main');
        new fullpage('#fullpage', {
            licenseKey: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
            lockAnchors: false,
            autoScrolling: true,
            paddingTop: '80px',
            paddingBottom: '0px',
            scrollingSpeed: 1000,
            fitToSectionDelay: 500,
            //            scrollOverflow: true,
            //            scrollOverflowReset: true,
            //            scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk=',
            afterLoad: function (origin, destination, direction) {
                if (destination.index === 0) {
                    newsAnim.timeScale(1).restart();
                } else if (destination.index === 1) {

                }
            },
            onLeave: function (origin, destination, direction) {
                if (origin.index === 0) {
                    newsAnim.timeScale(1).reverse();
                } else if (origin.index === 1) {

                }
            },
        });

    } else {


    }
}
export default newsPageAnim;