export default function newsAnim() {
    let news = document.querySelector('.news');
    let newsWrapper = news.querySelector('.news-wrapper');
    let newsItems = newsWrapper.querySelectorAll('.news-item');

    return new Promise((resolve) => {
        const tl = gsap.timeline({
            duration: 2,
            onComplete: () => {
                resolve();
            }
        });
        newsItems.forEach(item => {
            gsap.from(item, {
                delay: 1.2,
                autoAlpha: 0,
                y: 300,
                scrollTrigger: {
                    trigger: news,
                    start: "-95px 0",
                    end: "-50px 0",
                    scrub: true,
                },
            })
        })



    })
};