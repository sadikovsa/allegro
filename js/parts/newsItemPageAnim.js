const newsItemPageAnim = () => {

    let news = document.querySelector('.news-one');
    let newsWrapper = document.querySelector('.news-one__content');
    let newsImg = document.querySelectorAll('.news-one img')[0];
    let newsTitle = document.querySelector('.news-one__content .news-one__title');
    let newsText = document.querySelector('.news-one__content p');


    const newsItemAnim = gsap.timeline({
            duration: 0.8,
            paused: true,
        })
        .from(newsTitle, {
            autoAlpha: 0,
            x: -300,
        })
        .from(newsText, {
            autoAlpha: 0,
            y: 400,
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
                if (destination.index == 0) {

                } else if (destination.index == 1) {
                    newsItemAnim.timeScale(1).restart();
                }
            },
            onLeave: function (origin, destination, direction) {
                if (origin.index == 0) {

                } else if (origin.index == 1) {
                    newsItemAnim.timeScale(1).reverse();
                }
            },
        });

    } else {


    }
}
export default newsItemPageAnim;