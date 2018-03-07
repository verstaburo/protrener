/* eslint-disable no-unused-vars */
// http://animejs.com/
import anime from 'animejs';

const $ = window.$;

export default function mainPageAnimation() {
  const animationTimeline = anime.timeline();
  animationTimeline
    .add({
      targets: '.video-bg',
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 2000,
    })
    .add({
      targets: '.link-list__item',
      translateX: ['-40px', 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 500,
      offset: 3500,
      delay(el, i, l) {
        return i * 150;
      },
    })
    .add({
      targets: '.sport-navigation__title',
      translateY: ['-100px', '30px', '-30px', 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 500,
      offset: 3000,
    })
    .add({
      targets: '.social',
      scale: [0, 1],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 500,
      offset: 500,
      delay(el, i, l) {
        return i * 350;
      },
    })
    .add({
      targets: '.banner',
      rotate: ['185deg', 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 500,
      offset: 2000,
    })
    .add({
      targets: '.contacts',
      translateY: ['100%', 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 2000,
      offset: 2500,
    })
    .add({
      targets: '.brushes__item_bottom',
      translateX: ['-100%', 0],
      easing: 'easeOutExpo',
      duration: 2000,
      offset: 1000,
    })
    .add({
      targets: '.brushes__item_top',
      translateX: ['100%', 0],
      easing: 'easeOutExpo',
      duration: 2000,
      offset: 1000,
    })
    .add({
      targets: '.header__search, .header__news',
      translateY: ['-100%', 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 2000,
      delay(el, i, l) {
        return i * 250;
      },
      offset: 0,
    })
    .add({
      targets: '.logo__image',
      scale: [2, 1],
      opacity: [0, 1],
      rotate: '2turn',
      easing: 'easeOutExpo',
      duration: 2000,
      offset: 500,
    });
}
/* eslint-enable no-unused-vars */
