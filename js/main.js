import preloaderAnim from './parts/preloaderAnim.js';
import scrollToBlock from './parts/scrollToBlock.js';
import mainSectionAnim from './parts/mainSectionAnim.js';
import bridgesOneAnim from './parts/bridgesOneAnim.js';
import bridgesTwoAnim from './parts/bridgesTwoAnim.js';
import bridgesThreeAnim from './parts/bridgesThreeAnim.js';
import bridgesFourAnim from './parts/bridgesFourAnim.js';
import featuresAnim from './parts/featuresAnim.js';
import projectsFirstAnim from './parts/projectsFirstAnim.js';
import projectsSecondAnim from './parts/projectsSecondAnim.js';
import servicesAnim from './parts/servicesAnim.js';
import servicesOneAnim from './parts/servicesOneAnim.js';
import servicesTwoAnim from './parts/servicesTwoAnim.js';
import servicesThreeAnim from './parts/servicesThreeAnim.js';
import servicesFourAnim from './parts/servicesFourAnim.js';
import partnersAnim from './parts/partnersAnim.js';
import mainNewsAnim from './parts/mainNewsAnim.js';
import projectOneAnim from './parts/projectOneAnim.js';
import contactsAnim from './parts/contactsAnim.js';
import newsAnim from './parts/newsAnim.js';
import newsItemAnim from './parts/newsItemAnim.js';
import servicesItemAnim from './parts/servicesItemAnim.js';


document.addEventListener("DOMContentLoaded", function (event) {

    let url = window.location.pathname.split('/');
    url = url[url.length - 1].split(".html")[0];

    if (window.innerWidth > 1199) {
        if (url === '' || url === 'index') {
            mainSectionAnim();
            bridgesOneAnim();
            bridgesTwoAnim();
            bridgesThreeAnim();
            bridgesFourAnim();
            featuresAnim();
            projectsFirstAnim();
            projectsSecondAnim();
            servicesAnim();
            servicesOneAnim();
            servicesTwoAnim();
            servicesThreeAnim();
            servicesFourAnim();
            partnersAnim();
            mainNewsAnim();
            scrollToBlock();
        } else if (url === 'projects_item') {
            projectOneAnim();
        } else if (url === 'contacts') {
            contactsAnim();
        } else if (url === 'news') {
            newsAnim();
        } else if (url === 'news_item') {
            newsItemAnim();
        } else if (url === 'services') {
            servicesItemAnim();
        }

//        window.addEventListener("DOMMouseScroll", handleScroll);
//        window.addEventListener("mousewheel", handleScroll);

        function wheelDistance(e) {
            if (!e) {
                e = window.event;
            }
            var w = e.wheelDelta,
                d = e.detail;
            if (d) {
                return -d / 3; // Firefox; 
            }

            // IE, Safari, Chrome & other browsers 
            return w / 120;
        }

        function handleScroll(e) {
            var delta = wheelDistance(e);
            var time = 1000;
            var distance = 100;

            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop() -
                    (distance * delta)
            }, time);
        }
    } else {

        if (url === 'projects_item') {
            projectOneAnim();
        }
        // burger
        let burger = document.querySelector('#burgerBtn');
        let mobileContent = document.querySelector('.header-nav');

        burger.addEventListener('change', function () {
            mobileContent.classList.toggle('is-open');
        });

        document.addEventListener('click', function (e) {
            let target = e.target;
            if (!target.closest('.burger') && !target.closest('.header-nav')) {
                burger.checked = false;
                mobileContent.classList.remove('is-open');
            }
        });
        
        new WOW().init();
    }
    preloaderAnim();


});