import preloaderAnim from './parts/preloaderAnim.js';

import mainPageAnim from './parts/mainPageAnim.js';

import projectOneAnim from './parts/projectOneAnim.js';
import contactsAnim from './parts/contactsAnim.js';
import newsAnim from './parts/newsAnim.js';
import newsItemAnim from './parts/newsItemAnim.js';
import servicesItemAnim from './parts/servicesItemAnim.js';
import aboutAnim from './parts/aboutAnim.js';
import aboutLicence from './parts/aboutLicence.js';
import projectsAnim from './parts/projectsAnim.js';
import mainSliders from './parts/mainSliders.js';




document.addEventListener("DOMContentLoaded", function (event) {
    
    let url = window.location.pathname.split('/');
    url = url[url.length - 1].split(".html")[0];

    if (url === '' || url === 'index') {
        mainPageAnim();
    } else if (url === 'projects_item') {
        projectOneAnim();
    } else if (url === 'contacts') {
        contactsAnim();
    } else if (url === 'news') {
        newsAnim();
    } else if (url === 'news_item') {
        newsItemAnim();
    } else if (url === 'services') {
        servicesItemAnim();
    } else if (url === 'about') {
        aboutAnim();
        aboutLicence();
    } else if (url === 'projects') {
        projectsAnim();
    }
    
    
    
    

    mainSliders();
    preloaderAnim();


});