export default function featuresAnim() {

    let mainFeatures = document.querySelector('.features');
    let mainFeaturesTitle = mainFeatures.querySelector('.title');
    let mainFeaturesList = mainFeatures.querySelector('.features-list');
    let mainFeaturesListItem = mainFeaturesList.querySelectorAll('li');

    gsap.set(mainFeaturesTitle, {
        clearProps: 'all',
        autoAlpha: 0
    });
    gsap.set(mainFeaturesListItem, {
        clearProps: 'all',
        autoAlpha: 0
    });

    return new Promise((resolve) => {
        const tl = gsap.timeline({
                duration: 0.8,
                onComplete: () => {
                    resolve();
                }
            })
            .from(mainFeaturesTitle, {
                autoAlpha: 0,
                x: -400
            })
            .from(mainFeaturesListItem, {
                y: -40,
                autoAlpha: 0,
                stagger: 0.1,
            })

    })

};