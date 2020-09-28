export default function partnersAnim() {
    let partners = document.querySelector('.partners');
    let partnersTitle = partners.querySelector('.title');

    gsap.set(partnersTitle, {
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
            .from(partnersTitle, {
                x: -600,
                autoAlpha: 0,
            })

    })

};