export default function newsAnim() {
    let mainNews = document.querySelector('.main-news');
    let mainNewsTitle = mainNews.querySelector('.title');

    gsap.set(mainNewsTitle, {
        clearProps: 'all',
        autoAlpha: 0
    });

    return new Promise((resolve) => {
        const tl = gsap.timeline({
                duration: 0.8,
                onComplete: () => {
                    resolve();
                }
            })
            .from(mainNewsTitle, {
                x: -600,
                autoAlpha: 0,
            })
    })
};