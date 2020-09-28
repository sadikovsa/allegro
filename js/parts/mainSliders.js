export default function mainSliders() {
    $('.partners-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        appendArrows: '.partners-slider__controls',
        prevArrow: '<button type="button" class="news-prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.762 18.2475L6.37673 9.99988L14.762 1.75226L13.4667 0.476074L3.80958 10.0046L13.4667 19.5237L14.762 18.2475Z" fill="black"/></svg></button>',
        nextArrow: '<button type="button" class="news-next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.23804 18.2475L13.6233 9.99988L5.23804 1.75226L6.53328 0.476074L16.1904 10.0046L6.53328 19.5237L5.23804 18.2475Z" fill="black"/></svg></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    $('.main-news__slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        appendArrows: '.main-news__controls',
        prevArrow: '<button type="button" class="news-prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.762 18.2475L6.37673 9.99988L14.762 1.75226L13.4667 0.476074L3.80958 10.0046L13.4667 19.5237L14.762 18.2475Z" fill="white"/></svg></button>',
        nextArrow: '<button type="button" class="news-next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.23804 18.2475L13.6233 9.99988L5.23804 1.75226L6.53328 0.476074L16.1904 10.0046L6.53328 19.5237L5.23804 18.2475Z" fill="white"/></svg></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
}