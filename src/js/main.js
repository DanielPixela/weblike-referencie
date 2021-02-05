/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-unused-vars */

// Import styles
import '../sass/app.scss';

// Import aos library to scroll animations
import AOS from 'aos';

// Import swiper carousel
import Swiper, { Autoplay } from 'swiper';
import { multiply, sum } from 'lodash-es';

Swiper.use([Autoplay]);

// Aos initialization
AOS.init({
  disable: 'phone',
});

// Import all images
function importAll(require) {
  return require.keys().reduce((acc, next) => {
    acc[next.replace('../', '')] = require(next);
    return acc;
  }, {});
}

const images = importAll(
  require.context('../img', false, /\.(png|jpe?g|svg)$/)
);

/* 
**********
Responsive menu opening 
**********
*/
const el = {
  button: $('.toggle-sidebar'),
  respNav: $('.responsive-nav'),
};
const page = $('html');
const arrEl = Object.values(el);

el.button.on('click', (e) => {
  arrEl.forEach((item) => {
    item.toggleClass('opened');
  });
  page.toggleClass('noscroll');
});

/* 
**********
Sticky menu
**********
*/
const headerEl = $('header');
const hambButton = $('.toggle-sidebar');

window.addEventListener('scroll', () => {
  const pageOffset = window.pageYOffset;

  if (pageOffset > 0) {
    headerEl.addClass('smaller');
    hambButton.css({ '-webkit-transform': 'translateY(-24px)' });
  } else {
    headerEl.removeClass('smaller');
    hambButton.css({ '-webkit-transform': 'translateY(0)' });
  }
});

/*
*********
SWIPER SLIDER
*********
*/
const mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    530: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 4,
    },
  },
});

/* 
*********
SCROLL TO TOP
*********
*/
$('.scrollTop').on('click', (event) => {
  $('html,body').animate({ scrollTop: 0 }, 'slow');
  event.preventDefault();
});



