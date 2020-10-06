let mainNews = document.querySelector('.main-news');
let mainNewsTitle = mainNews.querySelector('.title');

const mainNewsAnim = gsap.timeline({
        paused: true,
        duration: 1,
    })
    .from(mainNewsTitle, {
        x: -600,
        autoAlpha: 0,
    });

export default mainNewsAnim;