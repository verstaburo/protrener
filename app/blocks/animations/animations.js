/* eslint-disable no-unused-vars */
// http://animejs.com/
import anime from 'animejs';

const $ = window.$;

export default function mainPageAnimation() {
  if ($('.valve').length > 0 && $('.js').length > 0 && $(window).innerWidth() >= 1024 && !$('.valve').hasClass('no-animate')) {
    const animationTimeline = anime.timeline();
    animationTimeline
      .add({
        targets: '.valve',
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 250,
      })
      .add({
        targets: '.header',
        translateY: ['-100%', 0],
        easing: 'easeOutExpo',
        duration: 1000,
        offset: 250,
      })
      .add({
        targets: '#path-gray-brush',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInQuad',
        duration: 1300,
        offset: 0,
      })
      .add({
        targets: '#path-red-brush',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInQuad',
        duration: 1200,
        offset: 1100,
      })
      .add({
        targets: '.banner',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 500,
        offset: 1700,
      })
      .add({
        targets: '.contacts',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 500,
        offset: 800,
      })
      .add({
        targets: '.link-list__item',
        translateX: ['-40px', 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 500,
        offset: 800,
        delay(el, i, l) {
          return i * 150;
        },
        complete() {
          $('.valve').addClass('no-click');
        },
      })
      .add({
        targets: '.sport-navigation__title',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 700,
        offset: 800,
      });
    $('.valve').addClass('no-animate');
  } else {
    $('.valve').addClass('no-animate');
  }
}
/* eslint-enable no-unused-vars */
