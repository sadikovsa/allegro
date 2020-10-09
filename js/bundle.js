/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parts_preloaderAnim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/preloaderAnim.js */ "./app/js/parts/preloaderAnim.js");
/* harmony import */ var _parts_mainPageAnim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/mainPageAnim.js */ "./app/js/parts/mainPageAnim.js");
/* harmony import */ var _parts_projectsPageAnim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/projectsPageAnim.js */ "./app/js/parts/projectsPageAnim.js");
/* harmony import */ var _parts_aboutPageAnim_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/aboutPageAnim.js */ "./app/js/parts/aboutPageAnim.js");
/* harmony import */ var _parts_contactsPageAnim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/contactsPageAnim.js */ "./app/js/parts/contactsPageAnim.js");
/* harmony import */ var _parts_newsPageAnim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/newsPageAnim.js */ "./app/js/parts/newsPageAnim.js");
/* harmony import */ var _parts_newsItemPageAnim_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/newsItemPageAnim.js */ "./app/js/parts/newsItemPageAnim.js");
/* harmony import */ var _parts_projectsItemPageAnim_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/projectsItemPageAnim.js */ "./app/js/parts/projectsItemPageAnim.js");
/* harmony import */ var _parts_servicesItemPageAnim_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parts/servicesItemPageAnim.js */ "./app/js/parts/servicesItemPageAnim.js");











document.addEventListener("DOMContentLoaded", function (event) {
  var url = window.location.pathname.split('/');
  url = url[url.length - 1].split(".html")[0];
  console.log(url);

  if (url === '' || url === 'index') {
    Object(_parts_mainPageAnim_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } else if (url === 'projects_item') {
    Object(_parts_projectsItemPageAnim_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
  } else if (url === 'contacts') {
    Object(_parts_contactsPageAnim_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
  } else if (url === 'news') {
    Object(_parts_newsPageAnim_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  } else if (url === 'news_item') {
    Object(_parts_newsItemPageAnim_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
  } else if (url === 'services' || url === 'services_item') {
    Object(_parts_servicesItemPageAnim_js__WEBPACK_IMPORTED_MODULE_10__["default"])();
  } else if (url === 'about') {
    Object(_parts_aboutPageAnim_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  } else if (url === 'projects') {
    Object(_parts_projectsPageAnim_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  } // burger


  var burger = document.querySelector('#burgerBtn');
  var mobileContent = document.querySelector('.header-nav');
  burger.addEventListener('change', function () {
    mobileContent.classList.toggle('is-open');
  });
  document.addEventListener('click', function (e) {
    var target = e.target;

    if (!target.closest('.burger') && !target.closest('.header-nav')) {
      burger.checked = false;
      mobileContent.classList.remove('is-open');
    }
  });
});

/***/ }),

/***/ "./app/js/parts/aboutPageAnim.js":
/*!***************************************!*\
  !*** ./app/js/parts/aboutPageAnim.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__);


var aboutPageAnim = function aboutPageAnim() {
  var aboutMission = document.querySelector('.about-mission');
  var aboutMissionTitle = aboutMission.querySelector('.title');
  var aboutMissionText = aboutMission.querySelector('.text');
  var aboutLicence = document.querySelector('.about-licence');
  var aboutLicenceTitle = aboutLicence.querySelector('.title');
  var aboutLicenceText = aboutLicence.querySelector('ol');
  var aboutLicenceBtn = aboutLicence.querySelector('.btn');

  if (window.innerWidth > 1199) {
    var aboutMissionAnim = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(aboutMissionTitle, {
      autoAlpha: 0
    }).from(aboutMissionText, {
      autoAlpha: 0,
      y: 400
    });
    var aboutLicenseAnim = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(aboutLicenceTitle, {
      autoAlpha: 0
    }).from(aboutLicenceText, {
      autoAlpha: 0,
      y: 400
    }).from(aboutLicenceBtn, {
      autoAlpha: 0,
      y: 400
    });
    var wrapper = document.querySelector('.main');
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
      afterLoad: function afterLoad(origin, destination, direction) {
        if (destination.index == 0) {} else if (destination.index == 1) {
          aboutMissionAnim.timeScale(1).restart();
        } else if (destination.index == 2) {
          aboutLicenseAnim.timeScale(1).restart();
        }
      },
      onLeave: function onLeave(origin, destination, direction) {
        if (origin.index == 0) {} else if (origin.index == 1) {
          aboutMissionAnim.timeScale(2).reverse();
        } else if (origin.index == 2) {
          aboutLicenseAnim.timeScale(2).reverse();
        }
      }
    });
  } else {}
};

/* harmony default export */ __webpack_exports__["default"] = (aboutPageAnim);

/***/ }),

/***/ "./app/js/parts/contactsPageAnim.js":
/*!******************************************!*\
  !*** ./app/js/parts/contactsPageAnim.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__);


var contactsPageAnim = function contactsPageAnim() {
  var contactsInfo = document.querySelector('.contacts-info');
  var contactsTitle1 = document.querySelectorAll('.contacts-info .title')[0];
  var contactsList1 = document.querySelectorAll('.contacts-info__list')[0];
  var contactsTitle2 = document.querySelectorAll('.contacts-info .title')[1];
  var contactsList2 = document.querySelectorAll('.contacts-info__list')[1];

  if (window.innerWidth > 1199) {
    var contactsInfoAnim = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(contactsTitle1, {
      autoAlpha: 0,
      x: -200
    }).from(contactsList1, {
      autoAlpha: 0,
      y: 400
    }).from(contactsTitle2, {
      autoAlpha: 0,
      x: -200
    }).from(contactsList2, {
      autoAlpha: 0,
      y: 400
    });
    var wrapper = document.querySelector('.main');
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
      afterLoad: function afterLoad(origin, destination, direction) {
        if (destination.index === 0) {} else if (destination.index === 1) {
          contactsInfoAnim.timeScale(1).restart();
        }
      },
      onLeave: function onLeave(origin, destination, direction) {
        if (origin.index === 0) {} else if (origin.index === 1) {
          contactsInfoAnim.timeScale(1).reverse();
        }
      }
    });
  } else {}
};

/* harmony default export */ __webpack_exports__["default"] = (contactsPageAnim);

/***/ }),

/***/ "./app/js/parts/mainPageAnim.js":
/*!**************************************!*\
  !*** ./app/js/parts/mainPageAnim.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);




var mainPageAnim = function mainPageAnim() {
  var mainSlider = document.querySelector('.main-section .main-section__slider');
  var mainSectionContent = document.querySelector('.main-section .main-section__content');
  var mainSliderImg = document.querySelectorAll('.main-section .main-slider__img');
  var activeMainSlide = 0;
  var bridgeOne = document.querySelector('.bridges-one');
  var bridgeOneImg = document.querySelector('.bridges-one .bridges-img');
  var bridgeOneTitle = document.querySelector('.bridges-one .title');
  var bridgeOneTitleBefore = document.querySelector('.bridges-one .title-before');
  var bridgeOneTitleText = document.querySelector('.bridges-one .title-text');
  var bridgeTwo = document.querySelector('.bridges-two');
  var bridgeTwoImg = document.querySelector('.bridges-two .bridges-img');
  var bridgeTwoTitle = document.querySelector('.bridges-two .title');
  var bridgeTwoTitleBefore = document.querySelector('.bridges-two .title-before');
  var bridgeTwoTitleText = document.querySelector('.bridges-two .title-text');
  var bridgeThree = document.querySelector('.bridges-three');
  var bridgeThreeImg = document.querySelector('.bridges-three .bridges-img');
  var bridgeThreeTitle = document.querySelector('.bridges-three .title');
  var bridgeThreeTitleBefore = document.querySelector('.bridges-three .title-before');
  var bridgeThreeTitleText = document.querySelector('.bridges-three .title-text');
  var bridgeFour = document.querySelector('.bridges-four');
  var bridgeFourImg = document.querySelector('.bridges-four .bridges-img');
  var bridgeFourTitle = document.querySelector('.bridges-four .title');
  var bridgeFourText = document.querySelector('.bridges-four .text');
  var bridgeFourBtn = document.querySelector('.bridges-four .btn');
  var mainFeatures = document.querySelector('.features');
  var mainFeaturesTitle = document.querySelector('.features .title');
  var mainFeaturesList = document.querySelector('.features .features-list');
  var mainFeaturesListItem = document.querySelectorAll('.features .features-list li');
  var mainProjectsFirst = document.querySelector('.main-projects__wrap');
  var mainProjectsFirstTitle = document.querySelector('.main-projects__wrap .title-big');
  var mainProjectsFirstLine1 = document.querySelector('.main-projects__wrap .projects-line.first');
  var mainProjectsFirstLine2 = document.querySelector('.main-projects__wrap .projects-line.second');
  var mainProjectsSecond = document.querySelector('.main-projects__info');
  var mainProjectsSecondContent = document.querySelectorAll('.main-projects__info .main-projects__content');
  var mainProjectsSecondIpad = document.querySelector('.main-projects__info .main-projects__ipad');
  var mainProjectsSecondIpadImgs = document.querySelectorAll('.main-projects__info .main-projects__ipad img');
  var mainProjectsSlideControls = document.querySelector('.main-projects__info .projects-gallary__controls');
  var slidePrev = document.querySelector('.main-projects__info .projects-gallary__control.prev');
  var slideNext = document.querySelector('.main-projects__info .projects-gallary__control.next');
  var mainServicesFirst = document.querySelector('.services-first');
  var mainServicesFirstTitle = document.querySelector('.services-first .title-big');
  var mainServicesFirstLine1 = document.querySelector('.services-first .services-line.one');
  var mainServicesFirstLine2 = document.querySelector('.services-first .services-line.two');
  var mainServicesOne = document.querySelector('.services-one.one');
  var mainServicesOneTitle = document.querySelector('.services-one.one .title');
  var mainServicesOneImg = document.querySelector('.services-one.one .services-img');
  var mainServicesOneText = document.querySelector('.services-one.one .text');
  var mainServicesOne2 = document.querySelector('.services-one.two');
  var mainServicesOne2Title = document.querySelector('.services-one.two .title');
  var mainServicesOne2Img = document.querySelector('.services-one.two .services-img');
  var mainServicesOne2Text = document.querySelector('.services-one.two .text');
  var mainServicesTwo = document.querySelectorAll('.services-two.one');
  var mainServicesTwoTitle = document.querySelector('.services-two.one .title');
  var mainServicesTwoImg = document.querySelector('.services-two.one .services-img');
  var mainServicesTwoText = document.querySelector('.services-two.one .text');
  var mainServicesTwo2 = document.querySelector('.services-two.two');
  var mainServicesTwo2Title = document.querySelector('.services-two.two .title');
  var mainServicesTwo2Img = document.querySelector('.services-two.two .services-img');
  var mainServicesTwo2Text = document.querySelector('.services-two.two .text');
  var mainServicesThree = document.querySelector('.services-three.one');
  var mainServicesThreeTitle = document.querySelector('.services-three.one .title');
  var mainServicesThreeImg = document.querySelector('.services-three.one .services-img');
  var mainServicesThreeText = document.querySelector('.services-three.one .text');
  var mainServicesThree2 = document.querySelector('.services-three.two');
  var mainServicesThree2Title = document.querySelector('.services-three.two .title');
  var mainServicesThree2Img = document.querySelector('.services-three.two .services-img');
  var mainServicesThree2Text = document.querySelector('.services-three.two .text');
  var mainServicesFour = document.querySelector('.services-four.one');
  var mainServicesFourTitle = document.querySelector('.services-four.one .title');
  var mainServicesFourImg = document.querySelector('.services-four.one .services-img');
  var mainServicesFourText = document.querySelector('.services-four.one .text');
  var mainServicesFour2 = document.querySelector('.services-four.two');
  var mainServicesFour2Title = document.querySelector('.services-four.two .title');
  var mainServicesFour2Img = document.querySelector('.services-four.two .services-img');
  var mainServicesFour2Text = document.querySelector('.services-four.two .text');
  var mainServicesFour3 = document.querySelector('.services-four.three');
  var mainServicesFour3Title = document.querySelector('.services-four.three .title');
  var mainServicesFour3Img = document.querySelector('.services-four.three .services-img');
  var mainServicesFour3Text = document.querySelector('.services-four.three .text');
  var partners = document.querySelector('.partners');
  var partnersTitle = document.querySelector('.partners .title');
  var partnersList = document.querySelector('.partners .partners-slider__wrapper');
  var mainNews = document.querySelector('.main-news');
  var mainNewsTitle = document.querySelector('.main-news .title');
  var mainNewsList = document.querySelector('.main-news .main-news__wrapper');

  var projectsSliderAnim = function projectsSliderAnim() {
    var activeSlide = 0;

    var changeSlide = function changeSlide() {
      var actSlide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      mainProjectsSecondContent.forEach(function (item, index) {
        item.classList.remove('active');
        mainProjectsSecondIpadImgs[index].classList.remove('active');
      });
      mainProjectsSecondContent[actSlide].classList.add('active');
      mainProjectsSecondIpadImgs[actSlide].classList.add('active');
    };

    changeSlide(activeSlide);
    slidePrev.addEventListener('click', function (e) {
      e.preventDefault();
      activeSlide--;

      if (activeSlide >= 0) {
        changeSlide(activeSlide);
      } else {
        activeSlide = 0;
      }
    });
    slideNext.addEventListener('click', function (e) {
      e.preventDefault();
      activeSlide++;

      if (activeSlide <= mainProjectsSecondContent.length - 1) {
        changeSlide(activeSlide);
      } else {
        activeSlide = mainProjectsSecondContent.length - 1;
      }
    });
  };

  $('.partners-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows: '.partners-slider__controls',
    prevArrow: '<button type="button" class="partners-prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.762 18.2475L6.37673 9.99988L14.762 1.75226L13.4667 0.476074L3.80958 10.0046L13.4667 19.5237L14.762 18.2475Z" fill="black"/></svg></button>',
    nextArrow: '<button type="button" class="partners-next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.23804 18.2475L13.6233 9.99988L5.23804 1.75226L6.53328 0.476074L16.1904 10.0046L6.53328 19.5237L5.23804 18.2475Z" fill="black"/></svg></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 575,
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
        slidesToScroll: 1
      }
    }, {
      breakpoint: 991,
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

  if (window.innerWidth > 1199) {
    function mainSectionAnim() {
      var mainSliderStart = function mainSliderStart() {
        var curSlide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        mainSliderImg.forEach(function (item) {
          item.style.opacity = 0;
        });
        gsap.to(mainSliderImg[curSlide], {
          autoAlpha: 1,
          zIndex: 2
        });
      };

      setInterval(function () {
        activeMainSlide++;

        if (activeMainSlide >= mainSliderImg.length - 1) {
          activeMainSlide = 0;
        }

        mainSliderStart(activeMainSlide);
      }, 3000);
    }

    ;
    var mainSectionLeaveAnim = gsap.timeline({
      duration: 1,
      paused: true
    }).to(mainSlider, {
      scale: 3,
      rotation: -60,
      transformOrigin: "50% 70%",
      autoAlpha: 0
    }).to(mainSectionContent, {
      autoAlpha: 0
    }, '-=0.5');
    var bridgesOneAnim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(bridgeOneImg, {
      autoAlpha: 0,
      x: 2000
    }, '-=1').from(bridgeOneTitleBefore, {
      autoAlpha: 0,
      top: "100%"
    }, '-=0.8').from(bridgeOneTitleText, {
      autoAlpha: 0,
      y: -80
    }, '-=0.5');
    var bridgesTwoAnim = gsap.timeline({
      paused: true,
      duration: 0.8
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
    var bridgesThreeAnim = gsap.timeline({
      paused: true,
      duration: 0.8
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
    var bridgesFourAnim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(bridgeFourImg, {
      autoAlpha: 0,
      y: 400
    }).from(bridgeFourTitle, {
      autoAlpha: 0,
      y: 500
    }).from(bridgeFourText, {
      autoAlpha: 0,
      y: 600
    }).from(bridgeFourBtn, {
      autoAlpha: 0,
      y: 700
    });
    var featuresAnim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(mainFeaturesTitle, {
      autoAlpha: 0,
      x: -400
    }).from(mainFeaturesListItem, {
      y: -40,
      autoAlpha: 0,
      stagger: 0.1
    });
    var projectsFirstAnim = gsap.timeline({
      paused: true,
      duration: 0.8
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
    var projectsSecondAnim = gsap.timeline({
      paused: true,
      duration: 0.8
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
    var servicesAnim = gsap.timeline({
      paused: true,
      duration: 0.8
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
    var servicesOne1Anim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(mainServicesOneTitle, {
      y: 300,
      autoAlpha: 0
    }).from(mainServicesOneImg, {
      y: 400,
      autoAlpha: 0
    }).from(mainServicesOneText, {
      y: 500,
      autoAlpha: 0
    });
    var servicesOne2Anim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(mainServicesOne2Title, {
      y: 300,
      autoAlpha: 0
    }).from(mainServicesOne2Text, {
      y: 400,
      autoAlpha: 0
    }).from(mainServicesOne2Img, {
      x: 400,
      autoAlpha: 0
    });
    var servicesTwo1Anim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(mainServicesTwoImg, {
      x: -400,
      autoAlpha: 0
    }).from(mainServicesTwoTitle, {
      autoAlpha: 0,
      y: 300
    }).from(mainServicesTwoText, {
      y: 400,
      autoAlpha: 0
    });
    var servicesTwo2Anim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(mainServicesTwo2Title, {
      autoAlpha: 0,
      x: -400
    }).from(mainServicesTwo2Img, {
      y: 300,
      autoAlpha: 0
    }).from(mainServicesTwo2Text, {
      y: 400,
      autoAlpha: 0
    });
    var servicesThree1Anim = gsap.timeline({
      paused: true,
      duration: 0.8
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
    var servicesThree2Anim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(mainServicesThree2Img, {
      x: -400,
      autoAlpha: 0
    }).from(mainServicesThree2Title, {
      y: 400,
      autoAlpha: 0
    }).from(mainServicesThree2Text, {
      y: 500,
      autoAlpha: 0
    });
    var servicesFour1Anim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(mainServicesFourTitle, {
      y: 400,
      autoAlpha: 0
    }).from(mainServicesFourImg, {
      y: 500,
      autoAlpha: 0
    }).from(mainServicesFourText, {
      y: 600,
      autoAlpha: 0
    });
    var servicesFour2Anim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(mainServicesFour2Img, {
      x: 400,
      autoAlpha: 0
    }).from(mainServicesFour2Title, {
      y: 400,
      autoAlpha: 0
    }).from(mainServicesFour2Text, {
      y: 600,
      autoAlpha: 0
    });
    var servicesFour3Anim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(mainServicesFour3Img, {
      x: -400,
      autoAlpha: 0
    }).from(mainServicesFour3Title, {
      y: 400,
      autoAlpha: 0
    }).from(mainServicesFour3Text, {
      y: 600,
      autoAlpha: 0
    });
    var partnersAnim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(partnersTitle, {
      x: -600,
      autoAlpha: 0
    }).from(partnersList, {
      x: 600,
      autoAlpha: 0
    });
    var mainNewsAnim = gsap.timeline({
      paused: true,
      duration: 0.8
    }).from(mainNewsTitle, {
      x: -600,
      autoAlpha: 0
    }).from(mainNewsList, {
      x: 600,
      autoAlpha: 0
    });
    var wrapper = document.querySelector('.main');
    new fullpage('#fullpage', {
      licenseKey: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
      lockAnchors: false,
      autoScrolling: true,
      paddingTop: '80px',
      paddingBottom: '0px',
      scrollingSpeed: 1500,
      fitToSectionDelay: 500,
      //            scrollOverflow: true,
      //            scrollOverflowReset: true,
      //            scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk=',
      afterLoad: function afterLoad(origin, destination, direction) {
        if (destination.index === 0) {
          fullpage_api.setScrollingSpeed(3000);
          mainSectionLeaveAnim.timeScale(2).reverse();
          mainSectionAnim();
        } else if (destination.index === 1) {
          fullpage_api.setScrollingSpeed(1500);
          bridgesOneAnim.timeScale(1.5).restart();
        } else if (destination.index === 2) {
          bridgesTwoAnim.timeScale(1).restart();
        } else if (destination.index === 3) {
          bridgesThreeAnim.timeScale(1).restart();
        } else if (destination.index === 4) {
          bridgesFourAnim.timeScale(1).restart();
        } else if (destination.index === 5) {
          featuresAnim.timeScale(1).restart();
        } else if (destination.index === 6) {
          projectsFirstAnim.restart();
        } else if (destination.index === 7) {
          projectsSecondAnim.timeScale(1).restart();
          projectsSliderAnim();
        } else if (destination.index === 8) {
          servicesAnim.timeScale(1).restart();
        } else if (destination.index === 9) {
          servicesOne1Anim.timeScale(1).restart();
        } else if (destination.index === 10) {
          servicesOne2Anim.timeScale(1).restart();
        } else if (destination.index === 11) {
          servicesTwo1Anim.timeScale(1).restart();
        } else if (destination.index === 12) {
          servicesTwo2Anim.timeScale(1).restart();
        } else if (destination.index === 13) {
          servicesThree1Anim.timeScale(1).restart();
        } else if (destination.index === 14) {
          servicesThree2Anim.timeScale(1).restart();
        } else if (destination.index === 15) {
          servicesFour1Anim.timeScale(1).restart();
        } else if (destination.index === 16) {
          servicesFour2Anim.timeScale(1).restart();
        } else if (destination.index === 17) {
          servicesFour3Anim.timeScale(1).restart();
        } else if (destination.index === 18) {
          partnersAnim.timeScale(1).restart();
        } else if (destination.index === 19) {
          mainNewsAnim.timeScale(1).restart();
        }
      },
      onLeave: function onLeave(origin, destination, direction) {
        if (origin.index === 0) {
          mainSectionLeaveAnim.restart();
        } else if (origin.index === 1) {
          bridgesOneAnim.timeScale(2).reverse();
        } else if (origin.index === 2) {
          bridgesTwoAnim.timeScale(2).reverse();
        } else if (origin.index === 3) {
          bridgesThreeAnim.timeScale(2).reverse();
        } else if (origin.index === 4) {
          bridgesFourAnim.timeScale(2).reverse();
        } else if (origin.index === 5) {
          featuresAnim.timeScale(2).reverse();
        } else if (origin.index === 6) {
          projectsFirstAnim.timeScale(2).reverse();
        } else if (origin.index === 7) {
          projectsSecondAnim.timeScale(2).reverse();
        } else if (origin.index === 8) {
          servicesAnim.timeScale(2).reverse();
        } else if (origin.index === 9) {
          servicesOne1Anim.timeScale(2).reverse();
        } else if (origin.index === 10) {
          servicesOne2Anim.timeScale(2).reverse();
        } else if (origin.index === 11) {
          servicesTwo1Anim.timeScale(2).reverse();
        } else if (origin.index === 12) {
          servicesTwo2Anim.timeScale(2).reverse();
        } else if (origin.index === 13) {
          servicesThree1Anim.timeScale(2).reverse();
        } else if (origin.index === 14) {
          servicesThree2Anim.timeScale(2).reverse();
        } else if (origin.index === 15) {
          servicesFour1Anim.timeScale(2).reverse();
        } else if (origin.index === 16) {
          servicesFour2Anim.timeScale(2).reverse();
        } else if (origin.index === 17) {
          servicesFour3Anim.timeScale(2).reverse();
        } else if (origin.index === 18) {
          partnersAnim.timeScale(2).reverse();
        } else if (origin.index === 19) {
          mainNewsAnim.timeScale(2).reverse();
        }
      }
    });
  } else {
    var bridges1 = $('.bridges-one').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.bridges-img').classList.add('fade');
        this.element.querySelector('.bridges-content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var bridges2 = $('.bridges-two').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.bridges-img').classList.add('fade');
        this.element.querySelector('.bridges-content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var bridges3 = $('.bridges-three').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.bridges-img').classList.add('fade');
        this.element.querySelector('.bridges-content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var bridges4 = $('.bridges-four').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.bridges-img').classList.add('fade');
        this.element.querySelector('.bridges-content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var features = $('.features').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.title').classList.add('fade');
        this.element.querySelector('.features-slider__wrap').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var projectsFirst = $('.main-projects__wrap').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.title-big').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var projectsSecond = $('.main-projects__info').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.main-projects__slider').classList.add('fade');
        this.element.querySelector('.main-projects__wrapper').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var servicesFirst = $('.services-first').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.title-big').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var servicesOne1 = $('.services-one.one').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.services-one__content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var servicesOne2 = $('.services-one.two').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.services-one__content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var servicesTwo1 = $('.services-two.one').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.services-two__content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var servicesTwo2 = $('.services-two.two').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.services-two__content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var servicesThree1 = $('.services-three.one').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.services-three__content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var servicesThree2 = $('.services-three.two').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.services-three__content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var servicesFour1 = $('.services-four.one').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.services-four__content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var servicesFour2 = $('.services-four.two').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.services-four__content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    var servicesFour3 = $('.services-four.three').waypoint({
      handler: function handler(direction) {
        this.element.querySelector('.services-four__content').classList.add('fade');
      },
      offset: 'bottom-in-view'
    });
    projectsSliderAnim();
    $('.features-list').slick({
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      appendArrows: '.features-slider__controls',
      prevArrow: '<button type="button" class="features-prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.762 18.2475L6.37673 9.99988L14.762 1.75226L13.4667 0.476074L3.80958 10.0046L13.4667 19.5237L14.762 18.2475Z" fill="black"/></svg></button>',
      nextArrow: '<button type="button" class="features-next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.23804 18.2475L13.6233 9.99988L5.23804 1.75226L6.53328 0.476074L16.1904 10.0046L6.53328 19.5237L5.23804 18.2475Z" fill="black"/></svg></button>',
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (mainPageAnim);

/***/ }),

/***/ "./app/js/parts/newsItemPageAnim.js":
/*!******************************************!*\
  !*** ./app/js/parts/newsItemPageAnim.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__);


var newsItemPageAnim = function newsItemPageAnim() {
  var news = document.querySelector('.news-one');
  var newsWrapper = document.querySelector('.news-one__content');
  var newsImg = document.querySelectorAll('.news-one img')[0];
  var newsTitle = document.querySelector('.news-one__content .news-one__title');
  var newsText = document.querySelector('.news-one__content p');

  if (window.innerWidth > 1199) {
    var newsItemAnim = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(newsTitle, {
      autoAlpha: 0,
      x: -300
    }).from(newsText, {
      autoAlpha: 0,
      y: 400
    });
    var wrapper = document.querySelector('.main');
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
      afterLoad: function afterLoad(origin, destination, direction) {
        if (destination.index == 0) {} else if (destination.index == 1) {
          newsItemAnim.timeScale(1).restart();
        }
      },
      onLeave: function onLeave(origin, destination, direction) {
        if (origin.index == 0) {} else if (origin.index == 1) {
          newsItemAnim.timeScale(1).reverse();
        }
      }
    });
  } else {}
};

/* harmony default export */ __webpack_exports__["default"] = (newsItemPageAnim);

/***/ }),

/***/ "./app/js/parts/newsPageAnim.js":
/*!**************************************!*\
  !*** ./app/js/parts/newsPageAnim.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__);


var newsPageAnim = function newsPageAnim() {
  var news = document.querySelector('.news');
  var newsWrapper = document.querySelector('.news-wrapper');
  var newsItems = document.querySelectorAll('.news-item');

  if (window.innerWidth > 1199) {
    var newsAnim = gsap.timeline({
      duration: 0.8,
      paused: true,
      yoyo: true
    }).from(newsItems, {
      delay: 0.3,
      autoAlpha: 0,
      stagger: 0.1
    });
    var wrapper = document.querySelector('.main');
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
      afterLoad: function afterLoad(origin, destination, direction) {
        if (destination.index === 0) {
          newsAnim.timeScale(1).restart();
        } else if (destination.index === 1) {}
      },
      onLeave: function onLeave(origin, destination, direction) {
        if (origin.index === 0) {
          newsAnim.timeScale(1).reverse();
        } else if (origin.index === 1) {}
      }
    });
  } else {}
};

/* harmony default export */ __webpack_exports__["default"] = (newsPageAnim);

/***/ }),

/***/ "./app/js/parts/preloaderAnim.js":
/*!***************************************!*\
  !*** ./app/js/parts/preloaderAnim.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return preloaderAnim; });
function preloaderAnim() {
  var headerLogo = document.querySelector('.header-logo');
  var preloaderImg = document.querySelector('.preloader-logo');
  paceOptions = {
    elements: {
      selectors: ['.preloader-logo']
    }
  };
  Pace.on('start', function () {
    document.querySelector('html').style.overflow = 'hidden';
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
  });
  Pace.on('done', function () {
    window.scrollTo(0, 0);
    document.querySelector('html').style.overflow = 'inherit';
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
      onStart: function onStart() {
        gsap.to(headerLogo, {
          delay: 0.5,
          autoAlpha: 1
        });
      }
    });
  });
}
;

/***/ }),

/***/ "./app/js/parts/projectsItemPageAnim.js":
/*!**********************************************!*\
  !*** ./app/js/parts/projectsItemPageAnim.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__);


var projectsItemPageAnim = function projectsItemPageAnim() {
  var projectOne = document.querySelector('.projects-one.two');
  var projectOneTitle = document.querySelector('.projects-one.two .title-small');
  var projectOneText = document.querySelector('.projects-one.two .text-big');
  var projectGallaryTitle = document.querySelector('.projects-one__gallary .title-small');
  var projectGallary = document.querySelector('.projects-one__gallary .projects-gallary');
  $('.projects-gallary').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    appendArrows: '.projects-gallary__controls',
    prevArrow: '<button class="projects-gallary__control prev"><span>Предыдущая</span><img src="img/icons/arrow-left.svg" alt="preview"> </button>',
    nextArrow: '<button class="projects-gallary__control next"><img src="img/icons/arrow-right.svg" alt="next"><span>Следующая</span>       </button>'
  });

  if (window.innerWidth > 1199) {
    var projectsItem = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(projectOneTitle, {
      autoAlpha: 0,
      x: -200
    }).from(projectOneText, {
      autoAlpha: 0,
      y: 400
    });
    var projectsItemSlider = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(projectGallaryTitle, {
      autoAlpha: 0,
      x: -200
    }).from(projectGallary, {
      autoAlpha: 0,
      x: 400
    });
    var wrapper = document.querySelector('.main');
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
      afterLoad: function afterLoad(origin, destination, direction) {
        if (destination.index == 0) {} else if (destination.index == 1) {
          projectsItem.timeScale(1).restart();
        } else if (destination.index == 2) {
          projectsItemSlider.timeScale(1).restart();
        }
      },
      onLeave: function onLeave(origin, destination, direction) {
        if (origin.index == 0) {} else if (origin.index == 1) {
          projectsItem.timeScale(1).reverse();
        } else if (origin.index == 2) {
          projectsItemSlider.timeScale(1).reverse();
        }
      }
    });
  } else {}
};

/* harmony default export */ __webpack_exports__["default"] = (projectsItemPageAnim);

/***/ }),

/***/ "./app/js/parts/projectsPageAnim.js":
/*!******************************************!*\
  !*** ./app/js/parts/projectsPageAnim.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__);


var projectsPageAnim = function projectsPageAnim() {
  var projectsOne = document.querySelector('.projects.one');
  var projectsOneContent = document.querySelector('.projects.one .projects-item__left');
  var projectsOneImg = document.querySelector('.projects.one .projects-img');
  var projectsTwo = document.querySelector('.projects.two');
  var projectsTwoTitle = document.querySelector('.projects.two .title-small');
  var projectsTwoTitleImg = document.querySelector('.projects.two .projects-img');
  var projectsTwoTitleBtn = document.querySelector('.projects.two .btn');
  var projectsThree = document.querySelector('.projects.three');
  var projectsThreeContent = document.querySelector('.projects.three .projects-item__right');
  var projectsThreeImg = document.querySelector('.projects.three .projects-img');
  var projectsFour = document.querySelector('.projects-inprogress.one');
  var projectsFourTitle = document.querySelector('.projects-inprogress.one .title-big');
  var projectsFive = document.querySelector('.projects-inprogress.two');
  var projectsFiveContent = document.querySelector('.projects-inprogress.two .projects-inprogress__left');
  var projectsFiveImg = document.querySelector('.projects-inprogress.two .projects-img');
  var projectsSix = document.querySelector('.projects-inprogress.three');
  var projectsSixContent = document.querySelector('.projects-inprogress.three .projects-inprogress__right');
  var projectsSixImg = document.querySelector('.projects-inprogress.three .projects-img');

  if (window.innerWidth > 1199) {
    var projectsOneAnim = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(projectsOneContent, {
      autoAlpha: 0,
      y: 400
    }).from(projectsOneImg, {
      x: 400,
      autoAlpha: 0
    });
    var projectsTwoAnim = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(projectsTwoTitle, {
      autoAlpha: 0,
      y: 400
    }).from(projectsTwoTitleImg, {
      autoAlpha: 0,
      y: 500
    }).from(projectsTwoTitleBtn, {
      autoAlpha: 0,
      y: 600
    });
    var projectsThreeAnim = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(projectsThreeImg, {
      x: -400,
      autoAlpha: 0
    }).from(projectsThreeContent, {
      autoAlpha: 0,
      y: 400
    });
    var projectsFourAnim = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(projectsFourTitle, {
      autoAlpha: 0
    });
    var projectsFiveAnim = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(projectsFiveImg, {
      x: 400,
      autoAlpha: 0
    }).from(projectsFiveContent, {
      autoAlpha: 0,
      y: 400
    });
    var projectsSixAnim = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(projectsSixImg, {
      x: -400,
      autoAlpha: 0
    }).from(projectsSixContent, {
      autoAlpha: 0,
      y: 400
    });
    var wrapper = document.querySelector('.main');
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
      afterLoad: function afterLoad(origin, destination, direction) {
        if (destination.index == 0) {
          projectsOneAnim.timeScale(1).restart();
        } else if (destination.index == 1) {
          projectsTwoAnim.timeScale(1).restart();
        } else if (destination.index == 2) {
          projectsThreeAnim.timeScale(1).restart();
        } else if (destination.index == 3) {
          projectsFourAnim.timeScale(1).restart();
        } else if (destination.index == 4) {
          projectsFiveAnim.timeScale(1).restart();
        } else if (destination.index == 5) {
          projectsSixAnim.timeScale(1).restart();
        }
      },
      onLeave: function onLeave(origin, destination, direction) {
        if (origin.index === 0) {
          projectsOneAnim.timeScale(2).reverse();
        } else if (origin.index === 1) {
          projectsTwoAnim.timeScale(2).reverse();
        } else if (origin.index === 2) {
          projectsThreeAnim.timeScale(2).reverse();
        } else if (origin.index === 3) {
          projectsFourAnim.timeScale(2).reverse();
        } else if (origin.index === 4) {
          projectsFiveAnim.timeScale(2).reverse();
        } else if (origin.index === 5) {
          projectsSixAnim.timeScale(2).reverse();
        }
      }
    });
  } else {}
};

/* harmony default export */ __webpack_exports__["default"] = (projectsPageAnim);

/***/ }),

/***/ "./app/js/parts/servicesItemPageAnim.js":
/*!**********************************************!*\
  !*** ./app/js/parts/servicesItemPageAnim.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_0__);


var servicesItemPageAnim = function servicesItemPageAnim() {
  var services = document.querySelector('.services');
  var servicesImg = document.querySelectorAll('.services.one')[0];
  var servicesTitle = document.querySelectorAll('.services.two .services-title')[0];
  var servicesText = document.querySelectorAll('.services.two .text-big')[0];
  var servicesList = document.querySelectorAll('.services.two .services-features li');

  if (window.innerWidth > 1199) {
    var servicesItemAnim = gsap.timeline({
      duration: 0.8,
      paused: true
    }).from(servicesTitle, {
      autoAlpha: 0,
      x: -300
    }).from(servicesText, {
      autoAlpha: 0,
      y: 400
    }).from(servicesList, {
      delay: 0.3,
      autoAlpha: 0,
      y: 300,
      stagger: 0.3
    });
    var wrapper = document.querySelector('.main');
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
      afterLoad: function afterLoad(origin, destination, direction) {
        if (destination.index == 0) {} else if (destination.index == 1) {
          servicesItemAnim.timeScale(1).restart();
        }
      },
      onLeave: function onLeave(origin, destination, direction) {
        if (origin.index == 0) {} else if (origin.index == 1) {
          servicesItemAnim.timeScale(1).reverse();
        }
      }
    });
  } else {}
};

/* harmony default export */ __webpack_exports__["default"] = (servicesItemPageAnim);

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reverse.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reverse.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map