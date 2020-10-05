import {
    mainSectionAnim,
    mainSectionLeaveAnim
} from './mainSectionAnim.js';
import bridgesOneAnim from './bridgesOneAnim.js';
import bridgesTwoAnim from './bridgesTwoAnim.js';
import bridgesThreeAnim from './bridgesThreeAnim.js';
import bridgesFourAnim from './bridgesFourAnim.js';
import featuresAnim from './featuresAnim.js';
import projectsFirstAnim from './projectsFirstAnim.js';
import projectsSecondAnim from './projectsSecondAnim.js';
import servicesAnim from './servicesAnim.js';
import servicesOne1Anim from './servicesOne1Anim.js';
import servicesOne2Anim from './servicesOne2Anim.js';
import servicesTwo1Anim from './servicesTwo1Anim.js';
import servicesTwo2Anim from './servicesTwo2Anim.js';
import servicesThree1Anim from './servicesThree1Anim.js';
import servicesThree2Anim from './servicesThree2Anim.js';
import servicesFour1Anim from './servicesFour1Anim.js';
import servicesFour2Anim from './servicesFour2Anim.js';
import servicesFour3Anim from './servicesFour3Anim.js';
import partnersAnim from './partnersAnim.js';
import mainNewsAnim from './mainNewsAnim.js';

const mainPageAnim = () => {

    const header = document.querySelector('.header');

    if (window.innerWidth > 1199) {

        let animated = false;

        new fullpage('#fullpage', {
            licenseKey: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
            lockAnchors: false,
            autoScrolling: true,
//            scrollOverflow: true,
//            scrollOverflowReset: true,
//            scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk=',
            afterLoad: function (origin, destination, direction) {
                animated = false;
                if (destination.index === 0) {
                    mainSectionAnim();
                }
            },
            onLeave: function (origin, destination, direction) {


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

    } else {
        // burger
        projectsSecondAnim();
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
    }
}
export default mainPageAnim;