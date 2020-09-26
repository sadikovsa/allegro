export default function aboutAnim() {

    let aboutMission = document.querySelector('.about-mission');
    let aboutMissionTitle = aboutMission.querySelector('.title');
    let aboutMissionText = aboutMission.querySelector('.text');
    aboutMissionTitle.querySelector('.title-text').innerHTML = aboutMissionTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
    let aboutMissionTitleText = aboutMissionTitle.querySelectorAll('.letter');


    return new Promise((resolve) => {
        const tl = gsap.timeline({
                duration: 2,
                scrollTrigger: {
                    trigger: aboutMission,
                    start: "top top",
                    end: () => innerHeight * 4,
                    pin: true,
                    scrub: true,
                },
                onComplete: () => {
                    resolve();
                }
            })
            .to(aboutMission, {
                y: 0,
                autoAlpha: 1,
            })
            .from(aboutMissionTitleText, {
                delay: 3,
                autoAlpha: 0,
                stagger: 0.2,
            })
            .from(aboutMissionText, {
                delay: 3,
                autoAlpha: 0,
                y: 400
            })
    });
};