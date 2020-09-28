(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _preloaderAnim = _interopRequireDefault(require("./parts/preloaderAnim.js"));

var _scrollToBlock = _interopRequireDefault(require("./parts/scrollToBlock.js"));

var _mainSectionAnim = _interopRequireDefault(require("./parts/mainSectionAnim.js"));

var _bridgesOneAnim = _interopRequireDefault(require("./parts/bridgesOneAnim.js"));

var _bridgesTwoAnim = _interopRequireDefault(require("./parts/bridgesTwoAnim.js"));

var _bridgesThreeAnim = _interopRequireDefault(require("./parts/bridgesThreeAnim.js"));

var _bridgesFourAnim = _interopRequireDefault(require("./parts/bridgesFourAnim.js"));

var _featuresAnim = _interopRequireDefault(require("./parts/featuresAnim.js"));

var _projectsFirstAnim = _interopRequireDefault(require("./parts/projectsFirstAnim.js"));

var _projectsSecondAnim = _interopRequireDefault(require("./parts/projectsSecondAnim.js"));

var _servicesAnim = _interopRequireDefault(require("./parts/servicesAnim.js"));

var _servicesOne1Anim = _interopRequireDefault(require("./parts/servicesOne1Anim.js"));

var _servicesOne2Anim = _interopRequireDefault(require("./parts/servicesOne2Anim.js"));

var _servicesTwo1Anim = _interopRequireDefault(require("./parts/servicesTwo1Anim.js"));

var _servicesTwo2Anim = _interopRequireDefault(require("./parts/servicesTwo2Anim.js"));

var _servicesThree1Anim = _interopRequireDefault(require("./parts/servicesThree1Anim.js"));

var _servicesThree2Anim = _interopRequireDefault(require("./parts/servicesThree2Anim.js"));

var _servicesFour1Anim = _interopRequireDefault(require("./parts/servicesFour1Anim.js"));

var _servicesFour2Anim = _interopRequireDefault(require("./parts/servicesFour2Anim.js"));

var _servicesFour3Anim = _interopRequireDefault(require("./parts/servicesFour3Anim.js"));

var _partnersAnim = _interopRequireDefault(require("./parts/partnersAnim.js"));

var _mainNewsAnim = _interopRequireDefault(require("./parts/mainNewsAnim.js"));

var _projectOneAnim = _interopRequireDefault(require("./parts/projectOneAnim.js"));

var _contactsAnim = _interopRequireDefault(require("./parts/contactsAnim.js"));

var _newsAnim = _interopRequireDefault(require("./parts/newsAnim.js"));

var _newsItemAnim = _interopRequireDefault(require("./parts/newsItemAnim.js"));

var _servicesItemAnim = _interopRequireDefault(require("./parts/servicesItemAnim.js"));

var _aboutAnim = _interopRequireDefault(require("./parts/aboutAnim.js"));

var _aboutLicence = _interopRequireDefault(require("./parts/aboutLicence.js"));

var _projectsAnim = _interopRequireDefault(require("./parts/projectsAnim.js"));

var _mainSliders = _interopRequireDefault(require("./parts/mainSliders.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function (event) {
  const header = document.querySelector('.header');
  let url = window.location.pathname.split('/');
  url = url[url.length - 1].split(".html")[0];

  if (window.innerWidth > 1199) {
    if (url === '' || url === 'index') {//            mainSectionAnim();
      //            bridgesOneAnim();
      //            bridgesTwoAnim();
      //            bridgesThreeAnim();
      //            bridgesFourAnim();
      //            featuresAnim();
      //            projectsFirstAnim();
      //            projectsSecondAnim();
      //            servicesAnim();
      //            servicesOneAnim();
      //            servicesTwoAnim();
      //            servicesThreeAnim();
      //            servicesFourAnim();
      //            partnersAnim();
      //            mainNewsAnim();
      //            scrollToBlock();
    } else if (url === 'projects_item') {
      (0, _projectOneAnim.default)();
    } else if (url === 'contacts') {
      (0, _contactsAnim.default)();
    } else if (url === 'news') {
      (0, _newsAnim.default)();
    } else if (url === 'news_item') {
      (0, _newsItemAnim.default)();
    } else if (url === 'services') {
      (0, _servicesItemAnim.default)();
    } else if (url === 'about') {
      (0, _aboutAnim.default)();
      (0, _aboutLicence.default)();
    } else if (url === 'projects') {
      (0, _projectsAnim.default)();
    }
  } else {
    if (url === 'projects_item') {
      (0, _projectOneAnim.default)();
    } // burger


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
    new WOW().init();
  }

  new fullpage('#fullpage', {
    licenseKey: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
    lockAnchors: false,
    autoScrolling: true,
    onLeave: function (origin, destination, direction) {
      console.log(fullpage_api.getActiveSection().anchor);

      if (destination.index > 0) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }

      if (destination.index === 1) {
        (0, _bridgesOneAnim.default)();
      } else if (destination.index === 2) {
        (0, _bridgesTwoAnim.default)();
      } else if (destination.index === 3) {
        (0, _bridgesThreeAnim.default)();
      } else if (destination.index === 4) {
        (0, _bridgesFourAnim.default)();
      } else if (destination.index === 5) {
        (0, _featuresAnim.default)();
      } else if (destination.index === 6) {
        (0, _projectsFirstAnim.default)();
      } else if (destination.index === 7) {
        (0, _projectsSecondAnim.default)();
      } else if (destination.index === 8) {
        (0, _servicesAnim.default)();
      } else if (destination.index === 9) {
        (0, _servicesOne1Anim.default)();
      } else if (destination.index === 10) {
        (0, _servicesOne2Anim.default)();
      } else if (destination.index === 11) {
        (0, _servicesTwo1Anim.default)();
      } else if (destination.index === 12) {
        (0, _servicesTwo2Anim.default)();
      } else if (destination.index === 13) {
        (0, _servicesThree1Anim.default)();
      } else if (destination.index === 14) {
        (0, _servicesThree2Anim.default)();
      } else if (destination.index === 15) {
        (0, _servicesFour1Anim.default)();
      } else if (destination.index === 16) {
        (0, _servicesFour2Anim.default)();
      } else if (destination.index === 17) {
        (0, _servicesFour3Anim.default)();
      } else if (destination.index === 18) {
        (0, _partnersAnim.default)();
      } else if (destination.index === 19) {
        (0, _mainNewsAnim.default)();
      }
    } //        scrollOverflow: true,

  });
  (0, _mainSliders.default)();
  (0, _preloaderAnim.default)();
});

},{"./parts/aboutAnim.js":2,"./parts/aboutLicence.js":3,"./parts/bridgesFourAnim.js":4,"./parts/bridgesOneAnim.js":5,"./parts/bridgesThreeAnim.js":6,"./parts/bridgesTwoAnim.js":7,"./parts/contactsAnim.js":8,"./parts/featuresAnim.js":9,"./parts/mainNewsAnim.js":10,"./parts/mainSectionAnim.js":11,"./parts/mainSliders.js":12,"./parts/newsAnim.js":13,"./parts/newsItemAnim.js":14,"./parts/partnersAnim.js":16,"./parts/preloaderAnim.js":17,"./parts/projectOneAnim.js":18,"./parts/projectsAnim.js":19,"./parts/projectsFirstAnim.js":20,"./parts/projectsSecondAnim.js":21,"./parts/scrollToBlock.js":22,"./parts/servicesAnim.js":23,"./parts/servicesFour1Anim.js":24,"./parts/servicesFour2Anim.js":25,"./parts/servicesFour3Anim.js":26,"./parts/servicesItemAnim.js":27,"./parts/servicesOne1Anim.js":28,"./parts/servicesOne2Anim.js":29,"./parts/servicesThree1Anim.js":30,"./parts/servicesThree2Anim.js":31,"./parts/servicesTwo1Anim.js":32,"./parts/servicesTwo2Anim.js":33}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = aboutAnim;

function aboutAnim() {
  let aboutMission = document.querySelector('.about-mission');
  let aboutMissionTitle = aboutMission.querySelector('.title');
  let aboutMissionText = aboutMission.querySelector('.text');
  aboutMissionTitle.querySelector('.title-text').innerHTML = aboutMissionTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let aboutMissionTitleText = aboutMissionTitle.querySelectorAll('.letter');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      scrollTrigger: {
        trigger: aboutMission,
        start: "top top",
        end: () => innerHeight * 4,
        pin: true,
        scrub: true
      },
      onComplete: () => {
        resolve();
      }
    }).to(aboutMission, {
      y: 0,
      autoAlpha: 1
    }).from(aboutMissionTitleText, {
      delay: 3,
      autoAlpha: 0,
      stagger: 0.2
    }).from(aboutMissionText, {
      delay: 3,
      autoAlpha: 0,
      y: 400
    });
  });
}

;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = aboutLicence;

function aboutLicence() {
  let aboutLicence = document.querySelector('.about-licence');
  let aboutLicenceTitle = aboutLicence.querySelector('.title');
  let aboutLicenceText = aboutLicence.querySelector('ol');
  let aboutLicenceBtn = aboutLicence.querySelector('.btn');
  aboutLicenceTitle.querySelector('.title-text').innerHTML = aboutLicenceTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let aboutLicenceTitleText = aboutLicenceTitle.querySelectorAll('.letter');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      scrollTrigger: {
        trigger: aboutLicence,
        start: "top top",
        end: () => innerHeight * 8,
        pin: true,
        scrub: true
      },
      onComplete: () => {
        resolve();
      }
    }).to(aboutLicence, {
      y: 0,
      autoAlpha: 1
    }).from(aboutLicenceTitleText, {
      delay: 3,
      autoAlpha: 0,
      stagger: 0.2
    }).from(aboutLicenceText, {
      delay: 3,
      autoAlpha: 0,
      y: 400
    }).from(aboutLicenceBtn, {
      delay: 3,
      autoAlpha: 0,
      y: 400
    });
  });
}

;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bridgesFourAnim;

function bridgesFourAnim() {
  let bridgeThree = document.querySelector('.bridges-three');
  let bridgeFour = document.querySelector('.bridges-four');
  let bridgeFourImg = bridgeFour.querySelector('.bridges-img');
  let bridgeFourTitle = bridgeFour.querySelector('.title');
  let bridgeFourText = bridgeFour.querySelector('.text');
  let bridgeFourBtn = bridgeFour.querySelector('.btn');
  gsap.set(bridgeFourImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(bridgeFourTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(bridgeFourText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(bridgeFourBtn, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      onComplete: () => {
        resolve();
      }
    }).from(bridgeFourImg, {
      autoAlpha: 0,
      y: 400
    }).from(bridgeFourTitle, {
      autoAlpha: 0,
      y: 600
    }).from(bridgeFourText, {
      autoAlpha: 0,
      y: 800
    }).from(bridgeFourBtn, {
      autoAlpha: 0,
      y: 1000
    });
  });
}

;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bridgesOneAnim;

function bridgesOneAnim() {
  let bridgeOne = document.querySelector('.bridges-one');
  let bridgeOneImg = bridgeOne.querySelector('.bridges-img');
  let bridgeOneTitle = bridgeOne.querySelector('.title');
  bridgeOneTitle.querySelector('.title-text').innerHTML = bridgeOneTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let bridgeOneTitleBefore = bridgeOneTitle.querySelector('.title-before');
  let bridgeOneTitleText = bridgeOneTitle.querySelector('.title-text');
  gsap.set(bridgeOneTitleBefore, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(bridgeOneTitleText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(bridgeOneImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      onComplete: () => {
        resolve();
      }
    }).from(bridgeOneImg, {
      autoAlpha: 0,
      x: 2000
    }).from(bridgeOneTitleBefore, {
      autoAlpha: 0,
      top: "100%"
    }).from(bridgeOneTitleText, {
      autoAlpha: 0,
      y: -80
    });
  });
}

;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bridgesThreeAnim;

function bridgesThreeAnim() {
  let bridgeThree = document.querySelector('.bridges-three');
  let bridgeThreeImg = bridgeThree.querySelector('.bridges-img');
  let bridgeThreeTitle = bridgeThree.querySelector('.title');
  bridgeThreeTitle.querySelector('.title-text').innerHTML = bridgeThreeTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let bridgeThreeTitleBefore = bridgeThreeTitle.querySelector('.title-before');
  let bridgeThreeTitleText = bridgeThreeTitle.querySelector('.title-text');
  gsap.set(bridgeThreeImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(bridgeThreeTitleBefore, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(bridgeThreeTitleText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      onComplete: () => {
        resolve();
      }
    }).from(bridgeThreeImg, {
      autoAlpha: 0,
      y: 400
    }).from(bridgeThreeTitleBefore, {
      autoAlpha: 0,
      top: "100%"
    }).from(bridgeThreeTitleText, {
      autoAlpha: 0,
      y: -80
    });
  });
}

;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bridgesTwoAnim;

function bridgesTwoAnim() {
  let bridgeTwo = document.querySelector('.bridges-two');
  let bridgeTwoImg = bridgeTwo.querySelector('.bridges-img');
  let bridgeTwoTitle = bridgeTwo.querySelector('.title');
  bridgeTwoTitle.querySelector('.title-text').innerHTML = bridgeTwoTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let bridgeTwoTitleBefore = bridgeTwoTitle.querySelector('.title-before');
  let bridgeTwoTitleText = bridgeTwoTitle.querySelector('.title-text');
  gsap.set(bridgeTwoTitleBefore, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(bridgeTwoImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(bridgeTwoTitleText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      onComplete: () => {
        resolve();
      }
    }).from(bridgeTwoImg, {
      autoAlpha: 0,
      x: 1000
    }).from(bridgeTwoTitleBefore, {
      autoAlpha: 0,
      top: "100%"
    }).from(bridgeTwoTitleText, {
      autoAlpha: 0,
      y: -80
    });
  });
}

;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contactsAnim;

function contactsAnim() {
  let contacts = document.querySelector('.contacts');
  let contactsTitle = contacts.querySelector('.title');
  let contactsInfo = document.querySelector('.contacts-info');
  let contactsTitle1 = contactsInfo.querySelectorAll('.title')[0];
  let contactsList1 = contactsInfo.querySelectorAll('.contacts-info__list')[0];
  let contactsTitle2 = contactsInfo.querySelectorAll('.title')[1];
  let contactsList2 = contactsInfo.querySelectorAll('.contacts-info__list')[1];
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 2
    }).to(contacts, {
      autoAlpha: 1
    }).from(contactsTitle, {
      delay: 1.2,
      autoAlpha: 0,
      x: -200
    });
    const t2 = gsap.timeline({
      delay: 2,
      duration: 0.8,
      scrollTrigger: {
        trigger: contactsInfo,
        start: "top 0",
        end: '110% 0',
        scrub: true,
        pin: true,
        onLeave: () => {}
      },
      onComplete: () => {
        resolve();
      }
    }).to(contactsInfo, {
      autoAlpha: 1
    }).from(contactsTitle1, {
      delay: 2,
      autoAlpha: 0,
      x: -200
    }).from(contactsList1, {
      delay: 2,
      autoAlpha: 0,
      y: 400
    }).from(contactsTitle2, {
      delay: 2,
      autoAlpha: 0,
      x: -200
    }).from(contactsList2, {
      delay: 2,
      autoAlpha: 0,
      y: 400
    });
  });
}

;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = featuresAnim;

function featuresAnim() {
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
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      onComplete: () => {
        resolve();
      }
    }).from(mainFeaturesTitle, {
      autoAlpha: 0,
      x: -400
    }).from(mainFeaturesListItem, {
      y: -40,
      autoAlpha: 0,
      stagger: 0.1
    });
  });
}

;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = newsAnim;

function newsAnim() {
  let mainNews = document.querySelector('.main-news');
  let mainNewsTitle = mainNews.querySelector('.title');
  gsap.set(mainNewsTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      onComplete: () => {
        resolve();
      }
    }).from(mainNewsTitle, {
      x: -600,
      autoAlpha: 0
    });
  });
}

;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mainSectionAnim;

function mainSectionAnim() {
  let mainSliderImg = mainSlider.querySelectorAll('.main-slider__img');
  let activeSlide = 0;

  const mainSliderStart = (curSlide = 0) => {
    mainSliderImg.forEach(item => {
      item.style.opacity = 0;
    });
    gsap.to(mainSliderImg[curSlide], {
      autoAlpha: 1,
      zIndex: 2
    });
  };

  setInterval(() => {
    if (activeSlide >= mainSliderImg.length) {
      activeSlide = 0;
    }

    mainSliderStart(activeSlide);
    activeSlide++;
  }, 3000);
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      onComplete: () => {
        resolve();
      }
    });
  });
}

;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mainSliders;

function mainSliders() {
  $('.partners-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows: '.partners-slider__controls',
    prevArrow: '<button type="button" class="news-prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.762 18.2475L6.37673 9.99988L14.762 1.75226L13.4667 0.476074L3.80958 10.0046L13.4667 19.5237L14.762 18.2475Z" fill="black"/></svg></button>',
    nextArrow: '<button type="button" class="news-next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.23804 18.2475L13.6233 9.99988L5.23804 1.75226L6.53328 0.476074L16.1904 10.0046L6.53328 19.5237L5.23804 18.2475Z" fill="black"/></svg></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.main-news__slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    appendArrows: '.main-news__controls',
    prevArrow: '<button type="button" class="news-prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.762 18.2475L6.37673 9.99988L14.762 1.75226L13.4667 0.476074L3.80958 10.0046L13.4667 19.5237L14.762 18.2475Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="news-next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.23804 18.2475L13.6233 9.99988L5.23804 1.75226L6.53328 0.476074L16.1904 10.0046L6.53328 19.5237L5.23804 18.2475Z" fill="white"/></svg></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = newsAnim;

function newsAnim() {
  let news = document.querySelector('.news');
  let newsWrapper = news.querySelector('.news-wrapper');
  let newsItems = newsWrapper.querySelectorAll('.news-item');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 2,
      onComplete: () => {
        resolve();
      }
    });
    newsItems.forEach(item => {
      gsap.from(item, {
        delay: 1.2,
        autoAlpha: 0,
        y: 300,
        scrollTrigger: {
          trigger: news,
          start: "-95px 0",
          end: "-50px 0",
          scrub: true
        }
      });
    });
  });
}

;

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = newsItemAnim;

function newsItemAnim() {
  let news = document.querySelector('.news-one');
  let newsWrapper = news.querySelector('.news-one__content');
  let newsImg = news.querySelectorAll('img')[0];
  let newsTitle = news.querySelector('.news-one__title');
  let newsText = news.querySelector('p');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 2,
      onComplete: () => {
        resolve();
      }
    }).from(newsTitle, {
      delay: 1.2,
      autoAlpha: 0,
      x: -300,
      scrollTrigger: {
        trigger: newsImg,
        start: "50% 0",
        end: "bottom 0",
        scrub: true
      }
    }).from(newsText, {
      delay: 1.2,
      autoAlpha: 0,
      y: 400,
      scrollTrigger: {
        trigger: newsImg,
        start: "50% 0",
        end: "bottom 0",
        scrub: true
      }
    });
  });
}

;

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pageTransition;

function pageTransition() {
  var t1 = gsap.timeline();
  t1.to('ul.transition li', {
    duration: .5,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: .2
  });
  t1.to('ul.transition li', {
    duration: .5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: .1,
    delay: .1
  });
}

;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = partnersAnim;

function partnersAnim() {
  let partners = document.querySelector('.partners');
  let partnersTitle = partners.querySelector('.title');
  gsap.set(partnersTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      onComplete: () => {
        resolve();
      }
    }).from(partnersTitle, {
      x: -600,
      autoAlpha: 0
    });
  });
}

;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preloaderAnim;

function preloaderAnim() {
  let headerLogo = document.querySelector('.header-logo');
  let preloaderImg = document.querySelector('.preloader-logo');
  let preloader = document.querySelector('.preloader');
  let preloaderOverlay = preloader.querySelector('.preloader-overlay');
  let preloaderCounter = document.querySelector('.preloader-counter .counter');
  let html = document.querySelector('html');
  html.style.overflow = 'hidden';

  if (window.innerWidth > 1199) {
    gsap.set(preloaderImg, {
      css: {
        translateY: '50%',
        scale: 4,
        top: '50%',
        left: '30%',
        opacity: 1
      }
    });
  } else if (window.innerWidth > 767 && window.innerWidth < 1200) {
    gsap.set(preloaderImg, {
      css: {
        translateY: '50%',
        scale: 3,
        top: '50%',
        left: '30%',
        opacity: 1
      }
    });
  } else {
    gsap.set(preloaderImg, {
      css: {
        translateY: '-50%',
        translateX: '-50%',
        scale: 1,
        top: '50%',
        left: '50%',
        opacity: 1
      }
    });
  }

  gsap.set(headerLogo, {
    autoAlpha: 0
  });
  window.odometerOptions = {
    auto: false,
    // Don't automatically initialize everything with class 'odometer'
    selector: preloaderCounter,
    // Change the selector used to automatically find things to be animated
    format: 'd',
    // Change how digit groups are formatted, and how many digits are shown after the decimal point
    duration: 10000,
    // Change how long the javascript expects the CSS animation to take
    theme: 'default' // Specify the theme (if you have more than one theme css file on the page)

  };
  let v = 0;
  let t = 100;
  let speed = 1000;
  let o = new Odometer({
    el: preloaderCounter,
    value: 0,
    duration: 10000,
    format: 'd',
    theme: 'default',
    minIntegerLen: 1,
    maxIntegerLen: 1
  });
  o.render();
  let timer = setTimeout(() => {
    o.update(32);
    preloaderOverlay.style.transform = 'translateY(' + 68 + '%)';
    setTimeout(() => {
      o.update(60);
      preloaderOverlay.style.transform = 'translateY(' + 40 + '%)';
      setTimeout(() => {
        o.update(99);
        preloaderOverlay.style.transform = 'translateY(' + 0 + '%)';
        setTimeout(() => {
          window.scrollTo(0, 0);
          html.style.overflow = 'inherit';
          gsap.to(preloaderImg, {
            duration: 1,
            css: {
              top: headerLogo.offsetTop,
              left: headerLogo.offsetLeft,
              maxWidth: '200px',
              scale: 1,
              translateY: 0,
              opacity: 0
            },
            onStart: function () {
              gsap.to(preloader, {
                delay: 0.3,
                autoAlpha: 0
              });
              gsap.to(headerLogo, {
                delay: 0.5,
                autoAlpha: 1
              });
            }
          });
          clearInterval(timer);
        }, 1500);
      }, 1500);
    }, 1500);
  }, 1500); //    let timer = setInterval(() => {
  //        if (t > 0) {
  //            t--;
  //            preloaderOverlay.style.transform = 'translateY(' + t + '%)';
  //        } else {
  //            clearInterval(timer);
  //            window.scrollTo(0, 0);
  //            html.style.overflow = 'inherit';
  //            gsap.to(preloaderImg, {
  //                duration: 1,
  //                css: {
  //                    top: headerLogo.offsetTop,
  //                    left: headerLogo.offsetLeft,
  //                    maxWidth: '200px',
  //                    scale: 1,
  //                    translateY: 0,
  //                    opacity: 0
  //                },
  //                onStart: function () {
  //                    gsap.to(preloader, {
  //                        delay: 0.3,
  //                        autoAlpha: 0
  //                    })
  //                    gsap.to(headerLogo, {
  //                        delay: 0.5,
  //                        autoAlpha: 1
  //                    })
  //                }
  //            })
  //
  //        }
  //    }, 40)
}

;

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = projectOneAnim;

function projectOneAnim() {
  let projectOne = document.querySelector('.projects-one');
  let projectOneImg = projectOne.querySelector('img');
  let projectOneTitle = projectOne.querySelector('.title-small');
  let projectOneText = projectOne.querySelector('.text-big');
  let projectGallary = document.querySelector('.projects-gallary');
  let projectGallaryItems = projectGallary.querySelectorAll('.projects-gallary__item');
  let projectGallaryPrev = projectGallary.querySelector('.projects-gallary__control.prev');
  let projectGallaryNext = projectGallary.querySelector('.projects-gallary__control.next'); // main screen slider

  let activeSlide = 0;

  const projectGallarySlider = (curSlide = 0) => {
    projectGallaryItems.forEach(item => {
      item.classList.remove('is-active', 'fade');
      item.classList.add('is-hidden');
    });
    projectGallaryItems[curSlide].classList.remove('is-hidden');
    projectGallaryItems[curSlide].classList.add('is-active', 'fade');
  };

  projectGallaryPrev.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(activeSlide);

    if (activeSlide > 0) {
      activeSlide--;
      projectGallarySlider(activeSlide);
    } else {
      return false;
    }
  });
  projectGallaryNext.addEventListener('click', function (e) {
    e.preventDefault();

    if (activeSlide < projectGallaryItems.length - 1) {
      activeSlide++;
      projectGallarySlider(activeSlide);
    } else {
      return false;
    }
  });
  projectGallarySlider();

  if (window.innerWidth > 1199) {
    return new Promise(resolve => {
      const t1 = gsap.timeline({
        duration: 0.8,

        onComplete() {
          resolve();
        }

      }).from(projectOneTitle, {
        delay: 1.4,
        autoAlpha: 0,
        x: -200,
        scrollTrigger: {
          trigger: projectOneImg,
          start: "top top",
          end: 'bottom top',
          scrub: true
        }
      }).from(projectOneText, {
        delay: 2,
        autoAlpha: 0,
        y: 400,
        scrollTrigger: {
          trigger: projectOneImg,
          start: "top top",
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }
}

;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = projectsAnim;

function projectsAnim() {
  let projects = document.querySelector('.projects');
  let projectsItemOne = projects.querySelectorAll('.projects-item')[0];
  let projectsItemOneContent = projectsItemOne.querySelector('.projects-item__left');
  let projectsItemOneImg = projectsItemOne.querySelector('.projects-item__right');
  let projectsItemTwo = projects.querySelectorAll('.projects-item')[1];
  let projectsItemTwoImg = projectsItemTwo.querySelector('.projects-item__left');
  let projectsItemTwoContent = projectsItemTwo.querySelector('.projects-item__right');
  let projectsItemThree = projects.querySelectorAll('.projects-item')[2];
  let projectsItemThreeImg = projectsItemThree.querySelector('.projects-item__left');
  let projectsItemThreeContent = projectsItemThree.querySelector('.projects-item__right');
  let projectsInProgress = document.querySelector('.projects-inprogress');
  let projectsInProgressTitle = projectsInProgress.querySelector('.title-big');
  let projectsInProgressItemOne = projectsInProgress.querySelectorAll('.projects-inprogress__item')[0];
  let projectsInProgressItemOneContent = projectsInProgressItemOne.querySelector('.projects-inprogress__left');
  let projectsInProgressItemOneImg = projectsInProgressItemOne.querySelector('.projects-inprogress__right');
  let projectsInProgressItemTwo = projectsInProgress.querySelectorAll('.projects-inprogress__item')[1];
  let projectsInProgressItemTwoImg = projectsInProgressItemTwo.querySelector('.projects-inprogress__left');
  let projectsInProgressItemTwoContent = projectsInProgressItemTwo.querySelector('.projects-inprogress__right');
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 0.8,

      onComplete() {
        resolve();
      }

    }).from(projectsItemOneContent, {
      delay: 1,
      autoAlpha: 0,
      y: 400,
      scrollTrigger: {
        trigger: projectsItemOne,
        start: "top 50%",
        end: 'top center',
        scrub: true
      }
    }).from(projectsItemOneImg, {
      delay: 2,
      x: 400,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: projectsItemOne,
        start: "top 50%",
        end: 'top center',
        scrub: true
      }
    }).from(projectsItemTwoImg, {
      delay: 1,
      autoAlpha: 0,
      y: 400,
      scrollTrigger: {
        trigger: projectsItemTwo,
        start: "top 50%",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(projectsItemTwoContent, {
      delay: 2,
      autoAlpha: 0,
      y: 600,
      scrollTrigger: {
        trigger: projectsItemTwo,
        start: "top 40%",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(projectsItemThreeImg, {
      delay: 1,
      autoAlpha: 0,
      x: -400,
      scrollTrigger: {
        trigger: projectsItemThree,
        start: "top 40%",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(projectsItemThreeContent, {
      delay: 2,
      autoAlpha: 0,
      y: 400,
      scrollTrigger: {
        trigger: projectsItemThree,
        start: "top 40%",
        end: 'bottom bottom',
        scrub: true
      }
    });
    const t2 = gsap.timeline({
      duration: 2,

      onStart() {},

      onComplete() {
        resolve();
      }

    }).from(projectsInProgressTitle, {
      delay: 1,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: projectsInProgress,
        start: "top 50%",
        end: 'top center',
        scrub: true
      }
    }).from(projectsInProgressItemOneContent, {
      delay: 2,
      y: 400,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: projectsInProgressItemOne,
        start: "top 50%",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(projectsInProgressItemOneImg, {
      delay: 2,
      x: 400,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: projectsInProgressItemOne,
        start: "top 50%",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(projectsInProgressItemTwoImg, {
      delay: 2,
      y: 400,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: projectsInProgressItemTwo,
        start: "top 50%",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(projectsInProgressItemTwoContent, {
      delay: 2,
      x: -400,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: projectsInProgressItemTwo,
        start: "top 50%",
        end: 'bottom bottom',
        scrub: true
      }
    });
  });
}

;

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = projectsFirstAnim;

function projectsFirstAnim() {
  let mainProjectsFirst = document.querySelector('.main-projects__wrap');
  let mainProjectsFirstTitle = mainProjectsFirst.querySelector('.title-big');
  let mainProjectsFirstLine1 = mainProjectsFirst.querySelector('.projects-line.first');
  let mainProjectsFirstLine2 = mainProjectsFirst.querySelector('.projects-line.second');
  gsap.set(mainProjectsFirstTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainProjectsFirstLine1, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainProjectsFirstLine2, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      onComplete: () => {
        resolve();
      }
    }).from(mainProjectsFirstTitle, {
      autoAlpha: 0,
      x: -400
    }).from(mainProjectsFirstLine1, {
      x: -1000,
      autoAlpha: 0
    }).from(mainProjectsFirstLine2, {
      x: 1000,
      autoAlpha: 0
    });
  });
}

;

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = projectsSecondAnim;

function projectsSecondAnim() {
  let mainProjectsSecond = document.querySelector('.main-projects__info');
  let mainProjectsSecondContent = mainProjectsSecond.querySelectorAll('.main-projects__content');
  let mainProjectsSecondIpad = mainProjectsSecond.querySelector('.main-projects__ipad');
  let mainProjectsSecondIpadImgs = mainProjectsSecondIpad.querySelectorAll('img');
  let mainProjectsSlideControls = mainProjectsSecond.querySelector('.projects-gallary__controls');
  let slidePrev = mainProjectsSecond.querySelector('.projects-gallary__control.prev');
  let slideNext = mainProjectsSecond.querySelector('.projects-gallary__control.next');
  let activeSlide = 0;

  const changeSlide = (actSlide = 0) => {
    console.log(actSlide);
    mainProjectsSecondContent.forEach((item, index) => {
      item.classList.remove('active');
      mainProjectsSecondIpadImgs[index].classList.remove('active');
    });
    mainProjectsSecondContent[actSlide].classList.add('active');
    mainProjectsSecondIpadImgs[actSlide].classList.add('active');
  };

  changeSlide(activeSlide);
  slidePrev.addEventListener('click', function (e) {
    console.log('prev');
    e.preventDefault();
    activeSlide--;

    if (activeSlide >= 0) {
      changeSlide(activeSlide);
    } else {
      activeSlide = 0;
    }
  });
  slideNext.addEventListener('click', function (e) {
    console.log('next');
    e.preventDefault();
    activeSlide++;

    if (activeSlide <= mainProjectsSecondContent.length - 1) {
      changeSlide(activeSlide);
    } else {
      activeSlide = mainProjectsSecondContent.length - 1;
    }
  });
  gsap.set(mainProjectsSecondContent[0], {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainProjectsSecondIpad, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainProjectsSlideControls, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      onComplete: () => {
        resolve();
      }
    }).from(mainProjectsSecondContent[0], {
      autoAlpha: 0,
      y: 400
    }).from(mainProjectsSecondIpad, {
      x: 1000,
      autoAlpha: 0
    }).from(mainProjectsSlideControls, {
      x: 1000,
      autoAlpha: 0
    });
  });
}

;

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollToBLock;

var _pageTransition = _interopRequireDefault(require("./pageTransition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollToBLock() {
  function getSamePageAnchor(link) {
    if (link.protocol !== window.location.protocol || link.host !== window.location.host || link.pathname !== window.location.pathname || link.search !== window.location.search) {
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
          (0, _pageTransition.default)();
        },
        duration: 0,
        scrollTo: {
          y: elem,
          offsetY: -200
        }
      });
    }
  } // If a link's href is within the current page, scroll to it instead


  document.querySelectorAll('.header-nav ul li a[href]').forEach(a => {
    a.addEventListener('click', e => {
      scrollToHash(getSamePageAnchor(a), e);
    });
  }); // Scroll to the element in the URL's hash on load

  scrollToHash(window.location.hash);
}

;

},{"./pageTransition.js":15}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesAnim;

function servicesAnim() {
  let mainServicesFirst = document.querySelector('.services-first');
  let mainServicesFirstTitle = mainServicesFirst.querySelector('.title-big');
  let mainServicesFirstLine1 = mainServicesFirst.querySelector('.services-line.one');
  let mainServicesFirstLine2 = mainServicesFirst.querySelector('.services-line.two');
  gsap.set(mainServicesFirstTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesFirstLine1, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesFirstLine2, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      onComplete: () => {
        resolve();
      }
    }).from(mainServicesFirstTitle, {
      autoAlpha: 0,
      x: -200
    }).from(mainServicesFirstLine1, {
      y: -200,
      autoAlpha: 0
    }).from(mainServicesFirstLine2, {
      y: 200,
      autoAlpha: 0
    });
  });
}

;

},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesFourAnim;

function servicesFourAnim() {
  let mainServicesFour = document.querySelectorAll('.services-four')[0];
  let mainServicesFourTitle = mainServicesFour.querySelector('.title');
  let mainServicesFourImg = mainServicesFour.querySelector('.services-img');
  let mainServicesFourText = mainServicesFour.querySelector('.text');
  gsap.set(mainServicesFourImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesFourTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesFourText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 0.8,

      onComplete() {
        resolve();
      }

    }).from(mainServicesFourImg, {
      x: 400,
      autoAlpha: 0
    }).from(mainServicesFourTitle, {
      y: 400,
      autoAlpha: 0
    }).from(mainServicesFourText, {
      y: 600,
      autoAlpha: 0
    });
  });
}

;

},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesFourAnim;

function servicesFourAnim() {
  let mainServicesFour = document.querySelectorAll('.services-four')[1];
  let mainServicesFourTitle = mainServicesFour.querySelector('.title');
  let mainServicesFourImg = mainServicesFour.querySelector('.services-img');
  let mainServicesFourText = mainServicesFour.querySelector('.text');
  gsap.set(mainServicesFourImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesFourTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesFourText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 0.8,

      onComplete() {
        resolve();
      }

    }).from(mainServicesFourImg, {
      x: -400,
      autoAlpha: 0
    }).from(mainServicesFourTitle, {
      y: 400,
      autoAlpha: 0
    }).from(mainServicesFourText, {
      y: 600,
      autoAlpha: 0
    });
  });
}

;

},{}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesFourAnim;

function servicesFourAnim() {
  let mainServicesFour = document.querySelectorAll('.services-four')[2];
  let mainServicesFourTitle = mainServicesFour.querySelector('.title');
  let mainServicesFourImg = mainServicesFour.querySelector('.services-img');
  let mainServicesFourText = mainServicesFour.querySelector('.text');
  gsap.set(mainServicesFourImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesFourTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesFourText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 0.8,

      onComplete() {
        resolve();
      }

    }).from(mainServicesFourImg, {
      x: 400,
      autoAlpha: 0
    }).from(mainServicesFourTitle, {
      y: 400,
      autoAlpha: 0
    }).from(mainServicesFourText, {
      y: 600,
      autoAlpha: 0
    });
  });
}

;

},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesItemAnim;

function servicesItemAnim() {
  let services = document.querySelector('.services');
  let servicesImg = services.querySelectorAll('img')[0];
  let servicesTitle1 = services.querySelectorAll('.services-title')[0];
  let servicesText1 = services.querySelectorAll('.text-big')[0];
  let servicesTitle2 = services.querySelectorAll('.services-title')[1];
  let servicesList = services.querySelectorAll('.services-features li');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 0.8,
      onComplete: () => {
        resolve();
      }
    }).from(servicesTitle1, {
      delay: 1.2,
      autoAlpha: 0,
      x: -300,
      scrollTrigger: {
        trigger: servicesImg,
        start: "50% 0",
        end: "bottom 0",
        scrub: true
      }
    }).from(servicesText1, {
      delay: 1.2,
      autoAlpha: 0,
      y: 400,
      scrollTrigger: {
        trigger: servicesImg,
        start: "50% 0",
        end: "bottom 0",
        scrub: true
      }
    }).from(servicesTitle2, {
      delay: 1.2,
      autoAlpha: 0,
      x: -300,
      scrollTrigger: {
        trigger: servicesImg,
        start: "bottom 0",
        end: "120% 0",
        scrub: true
      }
    }).from(servicesList, {
      delay: 0.3,
      autoAlpha: 0,
      y: 300,
      stagger: 0.3,
      scrollTrigger: {
        trigger: servicesImg,
        start: "bottom 0",
        end: "120% 0",
        scrub: true
      }
    });
  });
}

;

},{}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesOneAnim;

function servicesOneAnim() {
  let mainServicesOne = document.querySelectorAll('.services-one')[0];
  let mainServicesOneTitle = mainServicesOne.querySelector('.title');
  let mainServicesOneImg = mainServicesOne.querySelector('.services-img');
  let mainServicesOneText = mainServicesOne.querySelector('.text');
  gsap.set(mainServicesOneImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesOneTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesOneText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 0.8,

      onComplete() {
        resolve();
      }

    }).from(mainServicesOneImg, {
      x: -400,
      autoAlpha: 0
    }).from(mainServicesOneTitle, {
      y: 300,
      autoAlpha: 0
    }).from(mainServicesOneText, {
      y: 400,
      autoAlpha: 0
    });
  });
}

;

},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesOneAnim;

function servicesOneAnim() {
  let mainServicesOne = document.querySelectorAll('.services-one')[1];
  let mainServicesOneTitle = mainServicesOne.querySelector('.title');
  let mainServicesOneImg = mainServicesOne.querySelector('.services-img');
  let mainServicesOneText = mainServicesOne.querySelector('.text');
  gsap.set(mainServicesOneTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesOneText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesOneImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 0.8,

      onComplete() {
        resolve();
      }

    }).from(mainServicesOneTitle, {
      y: 300,
      autoAlpha: 0
    }).from(mainServicesOneText, {
      y: 400,
      autoAlpha: 0
    }).from(mainServicesOneImg, {
      x: 400,
      autoAlpha: 0
    });
  });
}

;

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesThreeAnim;

function servicesThreeAnim() {
  let mainServicesThree = document.querySelectorAll('.services-three')[0];
  let mainServicesThreeTitle = mainServicesThree.querySelector('.title');
  let mainServicesThreeImg = mainServicesThree.querySelector('.services-img');
  let mainServicesThreeText = mainServicesThree.querySelector('.text');
  gsap.set(mainServicesThreeTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesThreeImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesThreeText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 0.8,

      onComplete() {
        resolve();
      }

    }).from(mainServicesThreeImg, {
      x: 400,
      autoAlpha: 0
    }).from(mainServicesThreeTitle, {
      y: 400,
      autoAlpha: 0
    }).from(mainServicesThreeText, {
      y: 500,
      autoAlpha: 0
    });
  });
}

;

},{}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesThreeAnim;

function servicesThreeAnim() {
  let mainServicesThree = document.querySelectorAll('.services-three')[1];
  let mainServicesThreeTitle = mainServicesThree.querySelector('.title');
  let mainServicesThreeImg = mainServicesThree.querySelector('.services-img');
  let mainServicesThreeText = mainServicesThree.querySelector('.text');
  gsap.set(mainServicesThreeTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesThreeImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesThreeText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 0.8,

      onComplete() {
        resolve();
      }

    }).from(mainServicesThreeImg, {
      x: -400,
      autoAlpha: 0
    }).from(mainServicesThreeTitle, {
      y: 400,
      autoAlpha: 0
    }).from(mainServicesThreeText, {
      y: 500,
      autoAlpha: 0
    });
  });
}

;

},{}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesTwoAnim;

function servicesTwoAnim() {
  let mainServicesTwo = document.querySelectorAll('.services-two')[0];
  let mainServicesTwoTitle = mainServicesTwo.querySelector('.title');
  let mainServicesTwoImg = mainServicesTwo.querySelector('.services-img');
  let mainServicesTwoText = mainServicesTwo.querySelector('.text');
  gsap.set(mainServicesTwoImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesTwoTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesTwoText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 0.8,

      onComplete() {
        resolve();
      }

    }).from(mainServicesTwoImg, {
      x: 400,
      autoAlpha: 0
    }).from(mainServicesTwoTitle, {
      autoAlpha: 0,
      y: 300
    }).from(mainServicesTwoText, {
      y: 400,
      autoAlpha: 0
    });
  });
}

;

},{}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesTwoAnim;

function servicesTwoAnim() {
  let mainServicesTwo = document.querySelectorAll('.services-two')[1];
  let mainServicesTwoTitle = mainServicesTwo.querySelector('.title');
  let mainServicesTwoImg = mainServicesTwo.querySelector('.services-img');
  let mainServicesTwoText = mainServicesTwo.querySelector('.text');
  gsap.set(mainServicesTwoImg, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesTwoTitle, {
    clearProps: 'all',
    autoAlpha: 0
  });
  gsap.set(mainServicesTwoText, {
    clearProps: 'all',
    autoAlpha: 0
  });
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 0.8,

      onComplete() {
        resolve();
      }

    }).from(mainServicesTwoTitle, {
      autoAlpha: 0,
      x: -400
    }).from(mainServicesTwoImg, {
      y: 300,
      autoAlpha: 0
    }).from(mainServicesTwoText, {
      y: 400,
      autoAlpha: 0
    });
  });
}

;

},{}]},{},[1]);
