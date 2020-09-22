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

var _servicesOneAnim = _interopRequireDefault(require("./parts/servicesOneAnim.js"));

var _servicesTwoAnim = _interopRequireDefault(require("./parts/servicesTwoAnim.js"));

var _servicesThreeAnim = _interopRequireDefault(require("./parts/servicesThreeAnim.js"));

var _servicesFourAnim = _interopRequireDefault(require("./parts/servicesFourAnim.js"));

var _partnersAnim = _interopRequireDefault(require("./parts/partnersAnim.js"));

var _mainNewsAnim = _interopRequireDefault(require("./parts/mainNewsAnim.js"));

var _projectOneAnim = _interopRequireDefault(require("./parts/projectOneAnim.js"));

var _contactsAnim = _interopRequireDefault(require("./parts/contactsAnim.js"));

var _newsAnim = _interopRequireDefault(require("./parts/newsAnim.js"));

var _newsItemAnim = _interopRequireDefault(require("./parts/newsItemAnim.js"));

var _servicesItemAnim = _interopRequireDefault(require("./parts/servicesItemAnim.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function (event) {
  'use strict';

  let url = window.location.pathname.split('/');
  url = url[url.length - 1].split(".html")[0];

  if (url === '' || url === 'index') {
    (0, _mainSectionAnim.default)();
    (0, _bridgesOneAnim.default)();
    (0, _bridgesTwoAnim.default)();
    (0, _bridgesThreeAnim.default)();
    (0, _bridgesFourAnim.default)();
    (0, _featuresAnim.default)();
    (0, _projectsFirstAnim.default)();
    (0, _projectsSecondAnim.default)();
    (0, _servicesAnim.default)();
    (0, _servicesOneAnim.default)();
    (0, _servicesTwoAnim.default)();
    (0, _servicesThreeAnim.default)();
    (0, _servicesFourAnim.default)();
    (0, _partnersAnim.default)();
    (0, _mainNewsAnim.default)();
    (0, _scrollToBlock.default)();
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
  }

  (0, _preloaderAnim.default)();
  window.addEventListener("DOMMouseScroll", handleScroll);
  window.addEventListener("mousewheel", handleScroll);

  function wheelDistance(e) {
    if (!e) {
      e = window.event;
    }

    var w = e.wheelDelta,
        d = e.detail;

    if (d) {
      return -d / 3; // Firefox; 
    } // IE, Safari, Chrome & other browsers 


    return w / 120;
  }

  function handleScroll(e) {
    var delta = wheelDistance(e);
    var time = 1000;
    var distance = 100;
    $('html, body').stop().animate({
      scrollTop: $(window).scrollTop() - distance * delta
    }, time);
  }
});

},{"./parts/bridgesFourAnim.js":2,"./parts/bridgesOneAnim.js":3,"./parts/bridgesThreeAnim.js":4,"./parts/bridgesTwoAnim.js":5,"./parts/contactsAnim.js":6,"./parts/featuresAnim.js":7,"./parts/mainNewsAnim.js":8,"./parts/mainSectionAnim.js":9,"./parts/newsAnim.js":10,"./parts/newsItemAnim.js":11,"./parts/partnersAnim.js":13,"./parts/preloaderAnim.js":14,"./parts/projectOneAnim.js":15,"./parts/projectsFirstAnim.js":16,"./parts/projectsSecondAnim.js":17,"./parts/scrollToBlock.js":18,"./parts/servicesAnim.js":19,"./parts/servicesFourAnim.js":20,"./parts/servicesItemAnim.js":21,"./parts/servicesOneAnim.js":22,"./parts/servicesThreeAnim.js":23,"./parts/servicesTwoAnim.js":24}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bridgesFourAnim;

function bridgesFourAnim() {
  let bridges = document.querySelector('.bridges');
  let bridgeThree = document.querySelector('.bridges-three');
  let bridgeFour = document.querySelector('.bridges-four');
  let bridgeFourImg = bridgeFour.querySelector('.bridges-img');
  let bridgeFourTitle = bridgeFour.querySelector('.title');
  let bridgeFourText = bridgeFour.querySelector('.text');
  let bridgeFourBtn = bridgeFour.querySelector('.btn');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      delay: 2,
      duration: 2,
      scrollTrigger: {
        trigger: bridgeFour,
        start: "top 250px",
        end: '110% 0',
        scrub: true,
        pin: true,
        onLeave: () => {}
      },
      onComplete: () => {
        resolve();
      }
    }).to(bridgeThree, {
      autoAlpha: 1,
      y: 0
    }).from(bridgeFourImg, {
      delay: 1,
      autoAlpha: 0,
      y: 400
    }).from(bridgeFourTitle, {
      delay: 1.4,
      autoAlpha: 0,
      y: 400
    }).from(bridgeFourText, {
      delay: 1.6,
      autoAlpha: 0,
      y: 400
    }).from(bridgeFourBtn, {
      delay: 1.8,
      autoAlpha: 0,
      y: 400
    }).to(bridgeFourTitle, {
      delay: 2.2,
      autoAlpha: 0,
      x: 600
    }).to(bridgeFourImg, {
      delay: 2.4,
      autoAlpha: 0,
      y: -400
    }).to(bridgeFourText, {
      delay: 2.6,
      autoAlpha: 0,
      x: 600
    }).to(bridgeFourBtn, {
      delay: 2.8,
      autoAlpha: 0,
      x: 600
    });
  });
}

;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bridgesOneAnim;

function bridgesOneAnim() {
  let bridges = document.querySelector('.bridges');
  let bridgeOne = document.querySelector('.bridges-one');
  let bridgeOneImg = bridgeOne.querySelector('.bridges-img');
  let bridgeOneTitle = bridgeOne.querySelector('.title');
  bridgeOneTitle.querySelector('.title-text').innerHTML = bridgeOneTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let bridgeOneTitleBefore = bridgeOneTitle.querySelector('.title-before');
  let bridgeOneTitleText = bridgeOneTitle.querySelectorAll('.letter');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      duration: 2,
      scrollTrigger: {
        trigger: bridgeOne,
        start: "top 0",
        end: "110% 0",
        pin: true,
        scrub: true,
        onEnter: () => {
          gsap.set(bridges, {
            css: {
              backgroundColor: '#060B21'
            }
          });
        },
        onEnterBack: () => {
          gsap.set(bridges, {
            css: {
              backgroundColor: '#060B21'
            }
          });
        }
      },
      onComplete: () => {
        resolve();
      }
    }).to(bridgeOne, {
      y: 0,
      autoAlpha: 1
    }).from(bridgeOneTitleBefore, {
      delay: 1.4,
      autoAlpha: 0,
      top: "100%"
    }).from(bridgeOneTitleText, {
      delay: 1.6,
      autoAlpha: 0,
      stagger: 0.1
    }).from(bridgeOneImg, {
      delay: 4,
      autoAlpha: 0,
      x: 2000
    }).to(bridgeOneImg, {
      delay: 7,
      y: -400,
      autoAlpha: 0
    }).to(bridgeOneTitle, {
      delay: 9,
      y: -400,
      autoAlpha: 0
    });
  });
}

;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bridgesThreeAnim;

function bridgesThreeAnim() {
  let bridges = document.querySelector('.bridges');
  let bridgeThree = document.querySelector('.bridges-three');
  let bridgeThreeImg = bridgeThree.querySelector('.bridges-img');
  let bridgeThreeTitle = bridgeThree.querySelector('.title');
  bridgeThreeTitle.querySelector('.title-text').innerHTML = bridgeThreeTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let bridgeThreeTitleBefore = bridgeThreeTitle.querySelector('.title-before');
  let bridgeThreeTitleText = bridgeThreeTitle.querySelectorAll('.letter');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      delay: 2,
      duration: 2,
      scrollTrigger: {
        trigger: bridgeThree,
        start: "top 50%",
        end: '110% 0',
        scrub: true,
        pin: true,
        onEnterBack: () => {
          gsap.set(bridges, {
            css: {
              backgroundColor: '#FB874C'
            }
          });
        },
        onLeave: () => {
          gsap.set(bridges, {
            css: {
              backgroundColor: '#014E48'
            }
          });
        }
      },
      onComplete: () => {
        resolve();
      }
    }).to(bridgeThree, {
      autoAlpha: 1,
      y: 0
    }).from(bridgeThreeImg, {
      delay: 1.2,
      autoAlpha: 0,
      y: 400
    }).from(bridgeThreeTitleBefore, {
      delay: 1.4,
      autoAlpha: 0,
      top: "100%"
    }).from(bridgeThreeTitleText, {
      delay: 0.4,
      autoAlpha: 0,
      stagger: 0.1
    }).to(bridgeThreeImg, {
      delay: 1.8,
      autoAlpha: 0,
      x: -1000
    }).to(bridgeThreeTitle, {
      delay: 2,
      autoAlpha: 0,
      y: -400
    });
  });
}

;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bridgesTwoAnim;

function bridgesTwoAnim() {
  let bridges = document.querySelector('.bridges');
  let bridgeTwo = document.querySelector('.bridges-two');
  let bridgeTwoImg = bridgeTwo.querySelector('.bridges-img');
  let bridgeTwoTitle = bridgeTwo.querySelector('.title');
  bridgeTwoTitle.querySelector('.title-text').innerHTML = bridgeTwoTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let bridgeTwoTitleBefore = bridgeTwoTitle.querySelector('.title-before');
  let bridgeTwoTitleText = bridgeTwoTitle.querySelectorAll('.letter');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      delay: 2,
      duration: 2,
      scrollTrigger: {
        trigger: bridgeTwo,
        start: "top 250px",
        end: 'bottom 0',
        scrub: true,
        pin: true,
        onEnterBack: () => {
          gsap.set(bridges, {
            css: {
              backgroundColor: '#060B21'
            }
          });
        },
        onLeave: () => {
          gsap.set(bridges, {
            css: {
              backgroundColor: '#FB874C'
            }
          });
        }
      },
      onComplete: () => {
        resolve();
      }
    }).to(bridgeTwo, {
      autoAlpha: 1,
      y: 0
    }).from(bridgeTwoTitleBefore, {
      delay: 0.8,
      autoAlpha: 0,
      top: "100%"
    }).from(bridgeTwoImg, {
      autoAlpha: 0,
      x: 1000
    }).from(bridgeTwoTitleText, {
      delay: 0.4,
      autoAlpha: 0,
      stagger: 0.1
    }).to(bridgeTwoImg, {
      y: -300,
      delay: 2,
      autoAlpha: 0
    }).to(bridgeTwoTitle, {
      y: -300,
      delay: 2,
      autoAlpha: 0
    });
  });
}

;

},{}],6:[function(require,module,exports){
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
      duration: 2,
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

},{}],7:[function(require,module,exports){
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
  return new Promise(resolve => {
    const tl = gsap.timeline({
      delay: 2,
      duration: 2,
      scrollTrigger: {
        trigger: mainFeatures,
        start: "top 0",
        end: 'bottom 0',
        scrub: true,
        pin: true,
        onLeave: () => {}
      },
      onComplete: () => {
        resolve();
      }
    }).to(mainFeatures, {
      autoAlpha: 1
    }).from(mainFeaturesTitle, {
      autoAlpha: 0,
      x: -400
    }).from(mainFeaturesListItem, {
      delay: 0.3,
      y: -40,
      autoAlpha: 0,
      stagger: 0.3
    }).to(mainFeaturesTitle, {
      delay: 1.4,
      y: -200,
      autoAlpha: 0
    }).to(mainFeaturesListItem, {
      delay: 2,
      y: -100,
      autoAlpha: 0,
      stagger: 0.3
    });
  });
}

;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = newsAnim;

function newsAnim() {
  let mainNews = document.querySelector('.main-news');
  let mainNewsWrapper = document.querySelector('.main-news__wrapper');
  let mainNewsTitle = mainNews.querySelector('.title');
  mainNewsTitle.querySelector('.title-text').innerHTML = mainNewsTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let mainNewsTitleText = mainNewsTitle.querySelectorAll('.letter');
  let mainNewsList = mainNews.querySelector('.main-news__wrapper');
  let mainNewsListItem = mainNewsList.querySelectorAll('.main-news__item');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      delay: 2,
      duration: 2,
      scrollTrigger: {
        trigger: mainNews,
        start: "top 0",
        end: 'bottom +=1500',
        scrub: true,
        pin: true,
        onLeave: () => {}
      },
      onComplete: () => {
        resolve();
      }
    }).to(mainNews, {
      autoAlpha: 1
    }).from(mainNewsTitleText, {
      delay: 0.3,
      stagger: 0.1,
      autoAlpha: 0
    }).from(mainNewsListItem, {
      delay: 0.8,
      y: 400,
      autoAlpha: 0,
      stagger: 0.5
    });
  });
}

;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mainSectionAnim;

function mainSectionAnim() {
  let button = document.querySelector('.scroll-down');
  let mainSection = document.querySelector('.main-section');
  let mainSectionContent = mainSection.querySelector('.main-section__content');
  let mainSlider = document.querySelector('.main-section__slider');
  let mainSliderImg = mainSlider.querySelectorAll('.main-slider__img'); // main screen slider

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
      duration: 4,
      scrollTrigger: {
        trigger: mainSection,
        start: "-95px top",
        end: "bottom center",
        scrub: true,
        pin: true
      },
      onComplete: () => {
        resolve();
      }
    }).to(mainSlider, {
      delay: 2,
      scale: 4,
      rotation: -45,
      autoAlpha: 0,
      transformOrigin: "50% 60%"
    }).to(button, {
      delay: 1.2,
      scale: 1.4,
      autoAlpha: 0
    }).to(mainSectionContent, {
      delay: 1.4,
      autoAlpha: 0
    }).to(mainSection, {
      delay: 3,
      background: '#060B21'
    });
  });
  button.addEventListener('mouseenter', function () {
    TweenMax.to(button, 0.1, {
      scale: 1.4
    });
  });
  button.addEventListener('mouseleave', function () {
    TweenMax.to(button, 0.1, {
      scale: 1
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = partnersAnim;

function partnersAnim() {
  let partners = document.querySelector('.partners');
  let partnersTitle = partners.querySelector('.title');
  partnersTitle.querySelector('.title-text').innerHTML = partnersTitle.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let partnersTitleText = partnersTitle.querySelectorAll('.letter');
  let partnersList = partners.querySelector('.partners-list');
  let partnersListItem = partnersList.querySelectorAll('li');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      delay: 2,
      duration: 2,
      scrollTrigger: {
        trigger: partners,
        start: "top 0",
        end: '110% 0',
        pin: true,
        scrub: true
      },
      onComplete: () => {
        resolve();
      }
    }).to(partners, {
      autoAlpha: 1
    }).from(partnersTitleText, {
      delay: 2.4,
      stagger: 0.3,
      autoAlpha: 0
    }).from(partnersListItem, {
      delay: 0.3,
      y: -200,
      autoAlpha: 0,
      stagger: 0.4
    }).to(partnersTitle, {
      delay: 4,
      autoAlpha: 0,
      x: -400
    }).to(partnersListItem, {
      delay: 0.3,
      y: -400,
      stagger: 0.4,
      autoAlpha: 0
    });
  });
}

;

},{}],14:[function(require,module,exports){
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
  gsap.set(preloaderImg, {
    css: {
      translateY: '50%',
      scale: 4,
      top: '50%',
      left: '30%',
      opacity: 1
    }
  });
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

},{}],15:[function(require,module,exports){
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
    console.log(activeSlide);

    if (activeSlide < projectGallaryItems.length - 1) {
      activeSlide++;
      projectGallarySlider(activeSlide);
    } else {
      return false;
    }
  });
  projectGallarySlider();
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 2,

      onStart() {},

      onComplete() {
        resolve();
      }

    }).from(projectOneTitle, {
      delay: 1.4,
      autoAlpha: 0,
      x: -200,
      scrollTrigger: {
        trigger: projectOneImg,
        start: "50% 0",
        end: 'bottom 0',
        scrub: true
      }
    }).from(projectOneText, {
      delay: 2,
      autoAlpha: 0,
      y: 400,
      scrollTrigger: {
        trigger: projectOneImg,
        start: "50% 0",
        end: 'bottom 0',
        scrub: true
      }
    });
  });
}

;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = projectsFirstAnim;

function projectsFirstAnim() {
  let mainProjects = document.querySelector('.main-projects');
  let mainProjectsFirst = mainProjects.querySelector('.main-projects__wrap');
  let mainProjectsFirstTitle = mainProjectsFirst.querySelector('.title-big');
  let mainProjectsFirstLine1 = mainProjectsFirst.querySelector('.projects-line.first');
  let mainProjectsFirstLine2 = mainProjectsFirst.querySelector('.projects-line.second');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      delay: 2,
      duration: 2,
      scrollTrigger: {
        trigger: mainProjectsFirst,
        start: "top 0",
        end: '100% 0',
        scrub: true,
        pin: true,
        onLeave: () => {}
      },
      onComplete: () => {
        resolve();
      }
    }).to(mainProjectsFirst, {
      autoAlpha: 1
    }).from(mainProjectsFirstTitle, {
      autoAlpha: 0,
      x: -400
    }).from(mainProjectsFirstLine1, {
      delay: 1.4,
      x: -1000,
      autoAlpha: 0
    }).from(mainProjectsFirstLine2, {
      delay: 2,
      x: 1000,
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
exports.default = projectsSecondAnim;

function projectsSecondAnim() {
  let mainProjects = document.querySelector('.main-projects');
  let mainProjectsSecond = mainProjects.querySelector('.main-projects__info');
  let mainProjectsSecondContent1 = mainProjectsSecond.querySelector('.main-projects__content.one');
  let mainProjectsSecondContent2 = mainProjectsSecond.querySelector('.main-projects__content.two');
  let mainProjectsSecondIpad = mainProjectsSecond.querySelector('.main-projects__ipad');
  let mainProjectsSecondIpadImgs = mainProjectsSecondIpad.querySelectorAll('img');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      delay: 2,
      duration: 2,
      scrollTrigger: {
        trigger: mainProjectsSecond,
        start: "top 0",
        end: '110% 0',
        scrub: true,
        pin: true,
        onLeave: () => {}
      },
      onComplete: () => {
        resolve();
      }
    }).to(mainProjectsSecond, {
      autoAlpha: 1
    }).from(mainProjectsSecondContent1, {
      delay: 1.4,
      autoAlpha: 0,
      y: 400
    }).from(mainProjectsSecondIpad, {
      delay: 2,
      x: 1000,
      autoAlpha: 0
    }).to(mainProjectsSecondContent1, {
      delay: 4,
      autoAlpha: 0,
      y: -400
    }).from(mainProjectsSecondIpadImgs[1], {
      delay: 4,
      autoAlpha: 0,
      zIndex: 10
    }).from(mainProjectsSecondContent2, {
      delay: 5,
      autoAlpha: 0,
      y: 400
    }).to(mainProjectsSecondContent2, {
      delay: 6,
      autoAlpha: 0,
      y: -400
    }).to(mainProjectsSecondIpad, {
      delay: 7,
      x: 1000,
      autoAlpha: 0
    });
  });
}

;

},{}],18:[function(require,module,exports){
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

},{"./pageTransition.js":12}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesAnim;

function servicesAnim() {
  let mainServices = document.querySelector('.main-services');
  let mainServicesFirst = mainServices.querySelector('.services-first');
  let mainServicesFirstTitle = mainServicesFirst.querySelector('.title-big');
  let mainServicesFirstTitleOuter = mainServicesFirst.querySelector('.title-outer');
  let mainServicesFirstLine1 = mainServicesFirst.querySelector('.services-line.one');
  let mainServicesFirstLine2 = mainServicesFirst.querySelector('.services-line.two');
  return new Promise(resolve => {
    const tl = gsap.timeline({
      delay: 2,
      duration: 2,
      scrollTrigger: {
        trigger: mainServicesFirst,
        start: "top 0",
        end: '110% 0',
        scrub: true,
        pin: true,
        onLeave: () => {}
      },
      onComplete: () => {
        resolve();
      }
    }).to(mainServicesFirst, {
      autoAlpha: 1
    }).from(mainServicesFirstTitle, {
      delay: 1.2,
      autoAlpha: 0,
      x: -200
    }).from(mainServicesFirstLine1, {
      delay: 1.6,
      y: -200,
      autoAlpha: 0
    }).from(mainServicesFirstLine2, {
      delay: 1.8,
      y: 200,
      autoAlpha: 0
    }).from(mainServicesFirstTitleOuter, {
      delay: 2,
      autoAlpha: 0
    }).to(mainServicesFirstTitle, {
      delay: 2.4,
      autoAlpha: 0,
      x: -200
    }).to(mainServicesFirstLine1, {
      delay: 2.6,
      y: -200,
      autoAlpha: 0
    }).to(mainServicesFirstLine2, {
      delay: 3,
      y: 200,
      autoAlpha: 0
    }).to(mainServicesFirstTitleOuter, {
      delay: 4,
      autoAlpha: 0
    });
  });
}

;

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesFourAnim;

function servicesFourAnim() {
  let mainServices = document.querySelector('.main-services');
  let mainServicesFour = mainServices.querySelector('.services-four');
  let mainServicesFourContent1 = mainServicesFour.querySelector('.services-four__content.one');
  let mainServicesFourContent1Title = mainServicesFourContent1.querySelector('.title');
  mainServicesFourContent1Title.querySelector('.title-text').innerHTML = mainServicesFourContent1Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let mainServicesFourContent1TitleText = mainServicesFourContent1.querySelectorAll('.letter');
  let mainServicesFourContent1Img = mainServicesFourContent1.querySelector('img');
  let mainServicesFourContent1Text = mainServicesFourContent1.querySelector('.text');
  let mainServicesFourContent2 = mainServicesFour.querySelector('.services-four__content.two');
  let mainServicesFourContent2Title = mainServicesFourContent2.querySelector('.title');
  let mainServicesFourContent2Img = mainServicesFourContent2.querySelector('img');
  let mainServicesFourContent2Text = mainServicesFourContent2.querySelector('.text');
  let mainServicesFourContent3 = mainServicesFour.querySelector('.services-four__content.three');
  let mainServicesFourContent3Title = mainServicesFourContent3.querySelector('.title');
  mainServicesFourContent3Title.querySelector('.title-text').innerHTML = mainServicesFourContent3Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let mainServicesFourContent3TitleText = mainServicesFourContent3.querySelectorAll('.letter');
  let mainServicesFourContent3Img = mainServicesFourContent3.querySelector('img');
  let mainServicesFourContent3Text = mainServicesFourContent3.querySelector('.text');
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 2,

      onStart() {},

      onComplete() {
        resolve();
      }

    }).from(mainServicesFourContent1TitleText, {
      delay: 0.3,
      autoAlpha: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: mainServicesFourContent1,
        start: "top 350px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesFourContent1Img, {
      delay: 0.5,
      y: 400,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesFourContent1,
        start: "top 350px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesFourContent1Text, {
      delay: 0.8,
      y: 600,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesFourContent1,
        start: "top 320px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesFourContent2Img, {
      delay: 0.5,
      x: -600,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesFourContent2,
        start: "top 150px",
        end: 'bottom right',
        scrub: true
      }
    }).from(mainServicesFourContent2Title, {
      delay: 0.8,
      autoAlpha: 0,
      y: 400,
      scrollTrigger: {
        trigger: mainServicesFourContent2,
        start: "top 150px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesFourContent2Text, {
      delay: 1.2,
      y: 600,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesFourContent2,
        start: "top 120px",
        end: 'bottom right',
        scrub: true
      }
    }).from(mainServicesFourContent3TitleText, {
      delay: 0.3,
      autoAlpha: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: mainServicesFourContent3,
        start: "top 150px",
        end: 'bottom right',
        scrub: true
      }
    }).from(mainServicesFourContent3Img, {
      delay: 0.5,
      y: 500,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesFourContent3,
        start: "top 150px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesFourContent3Text, {
      delay: 0.8,
      y: 600,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesFourContent3,
        start: "top 120px",
        end: 'bottom right',
        scrub: true
      }
    });
  });
}

;

},{}],21:[function(require,module,exports){
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
      duration: 2,
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

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesOneAnim;

function servicesOneAnim() {
  let mainServices = document.querySelector('.main-services');
  let mainServicesOne = mainServices.querySelector('.services-one');
  let mainServicesOneContent1 = mainServicesOne.querySelector('.services-one__content.one');
  let mainServicesOneContent1Title = mainServicesOneContent1.querySelector('.title');
  mainServicesOneContent1Title.querySelector('.title-text').innerHTML = mainServicesOneContent1Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let mainServicesOneContent1TitleText = mainServicesOneContent1.querySelectorAll('.letter');
  let mainServicesOneContent1Img = mainServicesOneContent1.querySelector('img');
  let mainServicesOneContent1Text = mainServicesOneContent1.querySelector('.text');
  let mainServicesOneContent2 = mainServicesOne.querySelector('.services-one__content.two');
  let mainServicesOneContent2Title = mainServicesOneContent2.querySelector('.title');
  mainServicesOneContent2Title.querySelector('.title-text').innerHTML = mainServicesOneContent2Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let mainServicesOneContent2TitleText = mainServicesOneContent2.querySelectorAll('.letter');
  let mainServicesOneContent2Img = mainServicesOneContent2.querySelector('img');
  let mainServicesOneContent2Text = mainServicesOneContent2.querySelector('.text');
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 2,

      onStart() {},

      onComplete() {
        resolve();
      }

    }).from(mainServicesOneContent1TitleText, {
      delay: 0.3,
      autoAlpha: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: mainServicesOneContent1,
        start: "-30% 0",
        end: '40% center',
        scrub: true
      }
    }).from(mainServicesOneContent1Img, {
      delay: 0.5,
      y: 200,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesOneContent1,
        start: "-30% 0",
        end: '40% center',
        scrub: true
      }
    }).from(mainServicesOneContent1Text, {
      delay: 0.8,
      y: 200,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesOneContent1,
        start: "-30% 0",
        end: '40% center',
        scrub: true
      }
    }).from(mainServicesOneContent2TitleText, {
      delay: 0.3,
      autoAlpha: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: mainServicesOneContent1,
        start: "bottom 30%",
        end: "bottom 0",
        scrub: true
      }
    }).from(mainServicesOneContent2Img, {
      delay: 0.6,
      y: 200,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesOneContent1,
        start: "bottom 30%",
        end: "bottom 0",
        scrub: true
      }
    }).from(mainServicesOneContent2Text, {
      delay: 1,
      y: 200,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesOneContent1,
        start: "bottom 30%",
        end: "bottom 0",
        scrub: true
      }
    });
  });
}

;

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesThreeAnim;

function servicesThreeAnim() {
  let mainServices = document.querySelector('.main-services');
  let mainServicesThree = mainServices.querySelector('.services-three');
  let mainServicesThreeContent1 = mainServicesThree.querySelector('.services-three__content.one');
  let mainServicesThreeContent1Title = mainServicesThreeContent1.querySelector('.title');
  mainServicesThreeContent1Title.querySelector('.title-text').innerHTML = mainServicesThreeContent1Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let mainServicesThreeContent1TitleText = mainServicesThreeContent1.querySelectorAll('.letter');
  let mainServicesThreeContent1Img = mainServicesThreeContent1.querySelector('img');
  let mainServicesThreeContent1Text = mainServicesThreeContent1.querySelector('.text');
  let mainServicesThreeContent2 = mainServicesThree.querySelector('.services-three__content.two');
  let mainServicesThreeContent2Title = mainServicesThreeContent2.querySelector('.title');
  mainServicesThreeContent2Title.querySelector('.title-text').innerHTML = mainServicesThreeContent2Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let mainServicesThreeContent2TitleText = mainServicesThreeContent2.querySelectorAll('.letter');
  let mainServicesThreeContent2Img = mainServicesThreeContent2.querySelector('img');
  let mainServicesThreeContent2Text = mainServicesThreeContent2.querySelector('.text');
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 2,

      onStart() {},

      onComplete() {
        resolve();
      }

    }).from(mainServicesThreeContent1TitleText, {
      delay: 0.3,
      autoAlpha: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: mainServicesThreeContent1,
        start: "top 350px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesThreeContent1Img, {
      delay: 0.5,
      x: 400,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesThreeContent1,
        start: "top 350px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesThreeContent1Text, {
      delay: 0.8,
      y: 600,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesThreeContent1,
        start: "top 320px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesThreeContent2TitleText, {
      delay: 0.3,
      autoAlpha: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: mainServicesThreeContent2,
        start: "top 150px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesThreeContent2Img, {
      delay: 0.5,
      x: -600,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesThreeContent2,
        start: "top 150px",
        end: 'bottom right',
        scrub: true
      }
    }).from(mainServicesThreeContent2Text, {
      delay: 0.8,
      y: 600,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesThreeContent2,
        start: "top 120px",
        end: 'bottom right',
        scrub: true
      }
    });
  });
}

;

},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = servicesTwoAnim;

function servicesTwoAnim() {
  let mainServices = document.querySelector('.main-services');
  let mainServicesTwo = mainServices.querySelector('.services-two');
  let mainServicesTwoContent1 = mainServicesTwo.querySelector('.services-two__content.one');
  let mainServicesTwoContent1Title = mainServicesTwoContent1.querySelector('.title');
  mainServicesTwoContent1Title.querySelector('.title-text').innerHTML = mainServicesTwoContent1Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let mainServicesTwoContent1TitleText = mainServicesTwoContent1.querySelectorAll('.letter');
  let mainServicesTwoContent1Img = mainServicesTwoContent1.querySelector('img');
  let mainServicesTwoContent1Text = mainServicesTwoContent1.querySelector('.text');
  let mainServicesTwoContent2 = mainServicesTwo.querySelector('.services-two__content.two');
  let mainServicesTwoContent2Title = mainServicesTwoContent2.querySelector('.title');
  mainServicesTwoContent2Title.querySelector('.title-text').innerHTML = mainServicesTwoContent2Title.querySelector('.title-text').textContent.replace(/([^\x00-\x80]|\w|\-)/g, "<span class='letter'>$&</span>");
  let mainServicesTwoContent2TitleText = mainServicesTwoContent2.querySelectorAll('.letter');
  let mainServicesTwoContent2Img = mainServicesTwoContent2.querySelector('img');
  let mainServicesTwoContent2Text = mainServicesTwoContent2.querySelector('.text');
  return new Promise(resolve => {
    const t1 = gsap.timeline({
      duration: 2,

      onStart() {},

      onComplete() {
        resolve();
      }

    }).from(mainServicesTwoContent1TitleText, {
      delay: 0.3,
      autoAlpha: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: mainServicesTwoContent1,
        start: "top 450px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesTwoContent1Img, {
      delay: 0.5,
      x: 400,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesTwoContent1,
        start: "top 420px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesTwoContent1Text, {
      delay: 0.8,
      y: 400,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesTwoContent1,
        start: "top 400px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesTwoContent2TitleText, {
      delay: 0.3,
      autoAlpha: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: mainServicesTwoContent2,
        start: "top 150px",
        end: 'bottom bottom',
        scrub: true
      }
    }).from(mainServicesTwoContent2Img, {
      delay: 0.5,
      y: 600,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesTwoContent2,
        start: "top 150px",
        end: 'bottom right',
        scrub: true
      }
    }).from(mainServicesTwoContent2Text, {
      delay: 0.8,
      y: 800,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainServicesTwoContent2,
        start: "top 130px",
        end: 'bottom right',
        scrub: true
      }
    });
  });
}

;

},{}]},{},[1]);
