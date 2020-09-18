export default function featuresAnim() {

    let mainFeatures = document.querySelector('.features');
    let mainFeaturesTitle = mainFeatures.querySelector('.title');
    let mainFeaturesList = mainFeatures.querySelector('.features-list');
    let mainFeaturesListItem = mainFeaturesList.querySelectorAll('li');
    return new Promise((resolve) => {
        const tl = gsap.timeline({
                delay: 2,
                duration: 2,
                scrollTrigger: {
                    trigger: mainFeatures,
                    start: "top 0",
                    end: 'bottom 0',
                    scrub: true,
                    pin: true,
                    onLeave: () => {

                    }
                },
                onComplete: () => {
                    resolve();
                }
            })
            .to(mainFeatures, {
                autoAlpha: 1,
            })

            .from(mainFeaturesTitle, {
                autoAlpha: 0,
                x: -400
            })
            .from(mainFeaturesListItem, {
                delay: 0.3,
                y: -40,
                autoAlpha: 0,
                stagger: 0.3,
            })
            .to(mainFeaturesTitle, {
                delay: 1.4,
                y: -200,
                autoAlpha: 0
            })
            .to(mainFeaturesListItem, {
                delay: 2,
                y: -100,
                autoAlpha: 0,
                stagger: 0.3,
            })
    })

};
