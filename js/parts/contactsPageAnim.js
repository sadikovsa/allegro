const contactsPageAnim = () => {

    let contactsInfo = document.querySelector('.contacts-info');
    let contactsTitle1 = document.querySelectorAll('.contacts-info .title')[0];
    let contactsList1 = document.querySelectorAll('.contacts-info__list')[0];

    let contactsTitle2 = document.querySelectorAll('.contacts-info .title')[1];
    let contactsList2 = document.querySelectorAll('.contacts-info__list')[1];


    if (window.innerWidth > 1199) {
        const contactsInfoAnim = gsap.timeline({
                duration: 0.8,
                paused: true,
            })
            .from(contactsTitle1, {
                autoAlpha: 0,
                x: -200
            })
            .from(contactsList1, {
                autoAlpha: 0,
                y: 400
            })
            .from(contactsTitle2, {
                autoAlpha: 0,
                x: -200
            })
            .from(contactsList2, {
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
                if (destination.index === 0) {

                } else if (destination.index === 1) {
                    contactsInfoAnim.timeScale(1).restart();
                }
            },
            onLeave: function (origin, destination, direction) {
                if (origin.index === 0) {

                } else if (origin.index === 1) {
                    contactsInfoAnim.timeScale(1).reverse();
                }
            },
        });

    } else {


    }
}
export default contactsPageAnim;