let mainFeatures = document.querySelector('.features');
let mainFeaturesTitle = document.querySelector('.features .title');
let mainFeaturesList = document.querySelector('.features .features-list');
let mainFeaturesListItem = document.querySelectorAll('.features .features-list li');

const featuresAnim = gsap.timeline({
        paused: true,
        duration: 0.8,
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