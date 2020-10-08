let mainNews = document.querySelector('.main-news');
let mainNewsTitle = document.querySelector('.main-news .title');
let mainNewsList = document.querySelector('.main-news .main-news__wrapper');

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

export default mainNewsAnim;