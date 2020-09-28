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
import servicesOne1Anim from './parts/servicesOne1Anim.js';
import servicesOne2Anim from './parts/servicesOne2Anim.js';
import servicesTwo1Anim from './parts/servicesTwo1Anim.js';
import servicesTwo2Anim from './parts/servicesTwo2Anim.js';
import servicesThree1Anim from './parts/servicesThree1Anim.js';
import servicesThree2Anim from './parts/servicesThree2Anim.js';
import servicesFour1Anim from './parts/servicesFour1Anim.js';
import servicesFour2Anim from './parts/servicesFour2Anim.js';
import servicesFour3Anim from './parts/servicesFour3Anim.js';
import partnersAnim from './parts/partnersAnim.js';
import mainNewsAnim from './parts/mainNewsAnim.js';
import projectOneAnim from './parts/projectOneAnim.js';
import contactsAnim from './parts/contactsAnim.js';
import newsAnim from './parts/newsAnim.js';
import newsItemAnim from './parts/newsItemAnim.js';
import servicesItemAnim from './parts/servicesItemAnim.js';
import aboutAnim from './parts/aboutAnim.js';
import aboutLicence from './parts/aboutLicence.js';
import projectsAnim from './parts/projectsAnim.js';
import mainSliders from './parts/mainSliders.js';




document.addEventListener("DOMContentLoaded", function (event) {
    const header = document.querySelector('.header');
    let url = window.location.pathname.split('/');
    url = url[url.length - 1].split(".html")[0];

    if (window.innerWidth > 1199) {
        if (url === '' || url === 'index') {
            //            mainSectionAnim();
            //            bridgesOneAnim();
            //            bridgesTwoAnim();
            //            bridgesThreeAnim();
            //            bridgesFourAnim();
            //            featuresAnim();
            //            projectsFirstAnim();
            //            projectsSecondAnim();
            //            servicesAnim();
            //            servicesOneAnim();
            //            servicesTwoAnim();
            //            servicesThreeAnim();
            //            servicesFourAnim();
            //            partnersAnim();
            //            mainNewsAnim();
            //            scrollToBlock();
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
        } else if (url === 'about') {
            aboutAnim();
            aboutLicence();
        } else if (url === 'projects') {
            projectsAnim();
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

    new fullpage('#fullpage', {
        licenseKey: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
        lockAnchors: false,
        autoScrolling: true,
        onLeave: function (origin, destination, direction) {
            console.log(fullpage_api.getActiveSection().anchor)
            if (destination.index > 0) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
            if (destination.index === 0) {
                mainSectionAnim();
            } else if (destination.index === 1) {
                bridgesOneAnim();
            } else if (destination.index === 2) {
                bridgesTwoAnim();
            } else if (destination.index === 3) {
                bridgesThreeAnim();
            } else if (destination.index === 4) {
                bridgesFourAnim();
            } else if (destination.index === 5) {
                featuresAnim();
            } else if (destination.index === 6) {
                projectsFirstAnim();
            } else if (destination.index === 7) {
                projectsSecondAnim();
            } else if (destination.index === 8) {
                servicesAnim();
            } else if (destination.index === 9) {
                servicesOne1Anim();
            } else if (destination.index === 10) {
                servicesOne2Anim();
            } else if (destination.index === 11) {
                servicesTwo1Anim();
            } else if (destination.index === 12) {
                servicesTwo2Anim();
            } else if (destination.index === 13) {
                servicesThree1Anim();
            } else if (destination.index === 14) {
                servicesThree2Anim();
            } else if (destination.index === 15) {
                servicesFour1Anim();
            } else if (destination.index === 16) {
                servicesFour2Anim();
            } else if (destination.index === 17) {
                servicesFour3Anim();
            } else if (destination.index === 18) {
                partnersAnim();
            } else if (destination.index === 19) {
                mainNewsAnim();
            }
        },
        //        scrollOverflow: true,
    });



    mainSliders();

    preloaderAnim();


});