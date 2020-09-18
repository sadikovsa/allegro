import pageTransition from './pageTransition.js';

export default function scrollToBLock() {
    function getSamePageAnchor(link) {
        if (
            link.protocol !== window.location.protocol ||
            link.host !== window.location.host ||
            link.pathname !== window.location.pathname ||
            link.search !== window.location.search
        ) {
            return false;
        }

        return link.hash;
    }

    function scrollToHash(hash, e) {
        const elem = hash ? document.querySelector(hash) : false;
        if (elem) {
            if (e) e.preventDefault();

            gsap.to(window, {
                onStart: () => {
                    pageTransition();
                },
                duration: 0,
                scrollTo: {
                    y: elem,
                    offsetY: -200
                },
            });
        }
    }

    // If a link's href is within the current page, scroll to it instead
    document.querySelectorAll('.header-nav ul li a[href]').forEach(a => {
        a.addEventListener('click', e => {
            scrollToHash(getSamePageAnchor(a), e);
        });
    });

    // Scroll to the element in the URL's hash on load
    scrollToHash(window.location.hash);
};
