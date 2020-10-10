import preloaderAnim from './parts/preloaderAnim.js';

import mainPageAnim from './parts/mainPageAnim.js';
import projectsPageAnim from './parts/projectsPageAnim.js';
import aboutPageAnim from './parts/aboutPageAnim.js';
import contactsPageAnim from './parts/contactsPageAnim.js';
import newsPageAnim from './parts/newsPageAnim.js';
import newsItemPageAnim from './parts/newsItemPageAnim.js';
import projectsItemPageAnim from './parts/projectsItemPageAnim.js';
import servicesItemPageAnim from './parts/servicesItemPageAnim.js';


document.addEventListener("DOMContentLoaded", function (event) {


    let url = window.location.pathname.split('/');
    url = url[url.length - 1].split(".html")[0];
    console.log(url)
    if (url === '' || url === 'index') {
        mainPageAnim();
    } else if (url === 'projects_item') {
        projectsItemPageAnim();
    } else if (url === 'contacts') {
        contactsPageAnim();
    } else if (url === 'news') {
        newsPageAnim();
    } else if (url === 'news_item') {
        newsItemPageAnim();
    } else if (url === 'services' || url === 'services_item') {
        servicesItemPageAnim();
    } else if (url === 'about') {
        aboutPageAnim();
    } else if (url === 'projects') {
        projectsPageAnim();
    }
    if (window.innerWidth < 1199) {

        [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.onload = function () {
                img.removeAttribute('data-src');
            };
        });

        // burger
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
    }



});