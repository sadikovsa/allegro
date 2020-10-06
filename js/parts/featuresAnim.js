let mainFeatures = document.querySelector('.features');
let mainFeaturesTitle = mainFeatures.querySelector('.title');
let mainFeaturesList = mainFeatures.querySelector('.features-list');
let mainFeaturesListItem = mainFeaturesList.querySelectorAll('li');

const featuresAnim = gsap.timeline({
        paused: true,
        duration: 1,
    })
    .from(mainFeaturesTitle, {
        autoAlpha: 0,
        x: -400
    })
    .from(mainFeaturesListItem, {
        y: -40,
        autoAlpha: 0,
        stagger: 0.1,
    });

export default featuresAnim;