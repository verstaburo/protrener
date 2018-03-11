/* eslint-disable no-unused-vars */
// http://animejs.com/
import anime from 'animejs';

const $ = window.$;

export default function loadContent() {
  $(document).on('click', '.js-link-load', (evt) => {
    const self = $(evt.target).hasClass('.js-link-load') ? $(evt.target) : $(evt.target).closest('.js-link-load');
    evt.preventDefault();
    const selfX = $(self).offset().left;
    const selfY = $(self).offset().top;
    const linkToLoad = `${$(self).attr('href')}#content`;
    const valveMoveIn = anime.timeline();
    valveMoveIn.add({
      targets: '.valve',
      opacity: [0, 1],
      translateX: ['-100%', 0],
      easing: 'easeOutExpo',
      duration: 250,
    });
    $('.video-bg').hide(0);
    $('.brushes_layers').hide(0);
    $('.wrapper').removeClass('wrapper_onescreen');
    $('.footer').removeClass('footer_mcontacts').removeClass('footer_fixed');
    $('.page-content').removeClass('page-content_onescreen');
    $('#content').hide(300, () => {
      $('#content').load(linkToLoad, '', () => {
        $('#content').show(300, () => {
          const valveMoveOut = anime.timeline();
          valveMoveOut.add({
            targets: '.valve',
            opacity: [1, 0],
            translateX: [0, '100%'],
            easing: 'easeOutExpo',
            duration: 250,
          });
        });
      });
    });
  });
}
/* eslint-enable no-unused-vars */
