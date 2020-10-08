 let mainProjectsSecond = document.querySelector('.main-projects__info');
 let mainProjectsSecondContent = document.querySelectorAll('.main-projects__info .main-projects__content');
 let mainProjectsSecondIpad = document.querySelector('.main-projects__info .main-projects__ipad');
 let mainProjectsSecondIpadImgs = document.querySelectorAll('.main-projects__info .main-projects__ipad img');
 let mainProjectsSlideControls = document.querySelector('.main-projects__info .projects-gallary__controls');
 let slidePrev = document.querySelector('.main-projects__info .projects-gallary__control.prev');
 let slideNext = document.querySelector('.main-projects__info .projects-gallary__control.next');

 export const projectsSliderAnim = () => {
     let activeSlide = 0;
     const changeSlide = (actSlide = 0) => {
         mainProjectsSecondContent.forEach((item, index) => {
             item.classList.remove('active');
             mainProjectsSecondIpadImgs[index].classList.remove('active');
         })

         mainProjectsSecondContent[actSlide].classList.add('active');
         mainProjectsSecondIpadImgs[actSlide].classList.add('active');
     }
     changeSlide(activeSlide);
     slidePrev.addEventListener('click', function (e) {
         e.preventDefault();
         activeSlide--;
         if (activeSlide >= 0) {
             changeSlide(activeSlide);
         } else {
             activeSlide = 0;
         }
     });

     slideNext.addEventListener('click', function (e) {
         e.preventDefault();
         activeSlide++;
         if (activeSlide <= mainProjectsSecondContent.length - 1) {
             changeSlide(activeSlide);
         } else {
             activeSlide = mainProjectsSecondContent.length - 1;
         }
     })
 };

 export const projectsSecondAnim = gsap.timeline({
         paused: true,
         duration: 0.8,
     })
     .from(mainProjectsSecondContent[0], {
         autoAlpha: 0,
         y: 400
     })
     .from(mainProjectsSecondIpad, {
         x: 1000,
         autoAlpha: 0,
     })
     .from(mainProjectsSlideControls, {
         x: 1000,
         autoAlpha: 0,
     });