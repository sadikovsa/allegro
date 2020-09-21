export default function newsAnim() {
    let mainNews = document.querySelector('.main-news');
    let mainNewsWrapper = document.querySelector('.main-news__wrapper');
    let mainNewsTitle = mainNews.querySelector('.title');
    mainNewsTitle.querySelector('.title-text').innerHTML = mainNewsTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let mainNewsTitleText = mainNewsTitle.querySelectorAll('.letter');
    let mainNewsList = mainNews.querySelector('.main-news__wrapper');
    let mainNewsListItem = mainNewsList.querySelectorAll('.main-news__item');

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
};
