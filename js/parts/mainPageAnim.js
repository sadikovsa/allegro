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
import {
    projectsSliderAnim,
    projectsSecondAnim
} from './projectsSecondAnim.js';
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
    if (window.innerWidth > 1199) {
        new fullpage('#fullpage', {
            licenseKey: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
            lockAnchors: false,
            autoScrolling: true,
            paddingTop: '80px',
            paddingBottom: '0px',
            scrollingSpeed: 2000,
            //            scrollOverflow: true,
            //            scrollOverflowReset: true,
            //            scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk=',
            afterLoad: function (origin, destination, direction) {
                if (destination.index === 0) {
                    mainSectionLeaveAnim.timeScale(2).reverse();
                    mainSectionAnim();
                } else if (destination.index === 1) {
                    bridgesOneAnim.timeScale(1).restart();
                } else if (destination.index === 2) {
                    bridgesTwoAnim.timeScale(1).restart();
                } else if (destination.index === 3) {
                    bridgesThreeAnim.timeScale(1).restart();
                } else if (destination.index === 4) {
                    bridgesFourAnim.timeScale(1).restart();
                } else if (destination.index === 5) {
                    featuresAnim.timeScale(1).restart();
                } else if (destination.index === 6) {
                    projectsFirstAnim.restart();
                } else if (destination.index === 7) {
                    projectsSecondAnim.timeScale(1).restart();
                    projectsSliderAnim();
                } else if (destination.index === 8) {
                    servicesAnim.timeScale(1).restart();
                } else if (destination.index === 9) {
                    servicesOne1Anim.timeScale(1).restart();
                } else if (destination.index === 10) {
                    servicesOne2Anim.timeScale(1).restart();
                } else if (destination.index === 11) {
                    servicesTwo1Anim.timeScale(1).restart();
                } else if (destination.index === 12) {
                    servicesTwo2Anim.timeScale(1).restart();
                } else if (destination.index === 13) {
                    servicesThree1Anim.timeScale(1).restart();
                } else if (destination.index === 14) {
                    servicesThree2Anim.timeScale(1).restart();
                } else if (destination.index === 15) {
                    servicesFour1Anim.timeScale(1).restart();
                } else if (destination.index === 16) {
                    servicesFour2Anim.timeScale(1).restart();
                } else if (destination.index === 17) {
                    servicesFour3Anim.timeScale(1).restart();
                } else if (destination.index === 18) {
                    partnersAnim.timeScale(1).restart();
                } else if (destination.index === 19) {
                    mainNewsAnim.timeScale(1).restart();
                }
            },
            onLeave: function (origin, destination, direction) {
                if (origin.index === 0) {
                    mainSectionLeaveAnim.restart();
                } else if (origin.index === 1) {
                    bridgesOneAnim.timeScale(2).reverse();
                } else if (origin.index === 2) {
                    bridgesTwoAnim.timeScale(2).reverse();
                } else if (origin.index === 3) {
                    bridgesThreeAnim.timeScale(2).reverse();
                } else if (origin.index === 4) {
                    bridgesFourAnim.timeScale(2).reverse();
                } else if (origin.index === 5) {
                    featuresAnim.timeScale(2).reverse();
                } else if (origin.index === 6) {
                    projectsFirstAnim.timeScale(2).reverse();
                } else if (origin.index === 7) {
                    projectsSecondAnim.timeScale(2).reverse();
                } else if (origin.index === 8) {
                    servicesAnim.timeScale(2).reverse();
                } else if (origin.index === 9) {
                    servicesOne1Anim.timeScale(2).reverse();
                } else if (origin.index === 10) {
                    servicesOne2Anim.timeScale(2).reverse();
                } else if (origin.index === 11) {
                    servicesTwo1Anim.timeScale(2).reverse();
                } else if (origin.index === 12) {
                    servicesTwo2Anim.timeScale(2).reverse();
                } else if (origin.index === 13) {
                    servicesThree1Anim.timeScale(2).reverse();
                } else if (origin.index === 14) {
                    servicesThree2Anim.timeScale(2).reverse();
                } else if (origin.index === 15) {
                    servicesFour1Anim.timeScale(2).reverse();
                } else if (origin.index === 16) {
                    servicesFour2Anim.timeScale(2).reverse();
                } else if (origin.index === 17) {
                    servicesFour3Anim.timeScale(2).reverse();
                } else if (origin.index === 18) {
                    partnersAnim.timeScale(2).reverse();
                } else if (origin.index === 19) {
                    mainNewsAnim.timeScale(2).reverse();
                }
            },
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