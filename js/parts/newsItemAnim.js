export default function newsItemAnim() {
    let news = document.querySelector('.news-one');
    let newsWrapper = news.querySelector('.news-one__content');
    let newsImg = news.querySelectorAll('img')[0];
    let newsTitle = news.querySelector('.news-one__title');
    let newsText = news.querySelector('p');

    return new Promise((resolve) => {
        const tl = gsap.timeline({
            duration: 2,
            onComplete: () => {
                resolve();
            }
        })
            .from(newsTitle, {
                delay: 1.2,
                autoAlpha: 0,
                x: -300,
                scrollTrigger: {
                    trigger: newsImg,
                    start: "50% 0",
                    end: "bottom 0",
                    scrub: true,
                },
            })
            .from(newsText, {
                delay: 1.2,
                autoAlpha: 0,
                y: 400,
                scrollTrigger: {
                    trigger: newsImg,
                    start: "50% 0",
                    end: "bottom 0",
                    scrub: true,
                },
            })



    })
};