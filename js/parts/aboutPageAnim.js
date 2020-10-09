const aboutPageAnim = () => {
    let aboutMission = document.querySelector('.about-mission');
    let aboutMissionTitle = aboutMission.querySelector('.title');
    let aboutMissionText = aboutMission.querySelector('.text');

    let aboutLicence = document.querySelector('.about-licence');
    let aboutLicenceTitle = aboutLicence.querySelector('.title');
    let aboutLicenceText = aboutLicence.querySelector('ol');
    let aboutLicenceBtn = aboutLicence.querySelector('.btn');


    if (window.innerWidth > 1199) {
        const aboutMissionAnim = gsap.timeline({
                duration: 0.8,
                paused: true,
            })
            .from(aboutMissionTitle, {
                autoAlpha: 0,
            })
            .from(aboutMissionText, {
                autoAlpha: 0,
                y: 400
            })


        const aboutLicenseAnim = gsap.timeline({
                duration: 0.8,
                paused: true,
            })
            .from(aboutLicenceTitle, {
                autoAlpha: 0,
            })
            .from(aboutLicenceText, {
                autoAlpha: 0,
                y: 400
            })
            .from(aboutLicenceBtn, {
                autoAlpha: 0,
                y: 400
            })
        let wrapper = document.querySelector('.main');
        new fullpage('#fullpage', {
            licenseKey: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
            lockAnchors: false,
            autoScrolling: true,
            paddingTop: '80px',
            paddingBottom: '0px',
            scrollingSpeed: 1000,
            fitToSectionDelay: 500,
            //            scrollOverflow: true,
            //            scrollOverflowReset: true,
            //            scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk=',
            afterLoad: function (origin, destination, direction) {
                if (destination.index == 0) {

                } else if (destination.index == 1) {
                    aboutMissionAnim.timeScale(1).restart();
                } else if (destination.index == 2) {
                    aboutLicenseAnim.timeScale(1).restart();
                }
            },
            onLeave: function (origin, destination, direction) {
                if (origin.index == 0) {

                } else if (origin.index == 1) {
                    aboutMissionAnim.timeScale(2).reverse();
                } else if (origin.index == 2) {
                    aboutLicenseAnim.timeScale(2).reverse();
                }
            },
        });

    } else {


    }
}
export default aboutPageAnim;