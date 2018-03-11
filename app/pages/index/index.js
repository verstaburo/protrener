/* eslint-disable no-unused-vars */
// http://animejs.com/
import anime from 'animejs';
import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

const $ = window.$;

export default function loadContent() {
  $(document).on('click', '.js-link-load', (evt) => {
    const self = $(evt.target).hasClass('.js-link-load') ? $(evt.target) : $(evt.target).closest('.js-link-load');
    evt.preventDefault();
    const div = document.createElement('div');
    div.setAttribute('class', 'title-imitation');
    const selfX = $(self).offset().left;
    const selfY = $(self).offset().top;
    $('body').append(div);
    $('.title-imitation').text($(self).find('.link__text').text());
    $('.title-imitation').css({ top: `${selfY}px`, left: `${selfX}px`, opacity: 1 });
    $('.header').addClass('js-z601');
    $('.video-bg').hide(0);
    $('.banner').hide(0);
    $('.brushes_layers').hide(0);
    $('.wrapper').removeClass('wrapper_onescreen');
    $('.footer').removeClass('footer_mcontacts').removeClass('footer_fixed');
    $('.footer .brushes').removeClass('brushes_notablet');
    $('.page-content').removeClass('page-content_onescreen');

    const linkToLoad = `${$(self).attr('href')} #content`;
    const valveMoveIn = anime.timeline();
    valveMoveIn
    .add({
      targets: '.sport-navigation',
      opacity: 0,
      easing: 'easeOutExpo',
      duration: 150,
    })
    .add({
      targets: '.title-imitation',
      top: () => {
        let res;
        if ($(window).innerWidth() >= 1024) {
          res = `${($(window).innerHeight() * 0.25) - 8}px`;
        } else {
          res = `${224 - $('.title-imitation').height()}px`;
        }
        return res;
      },
      left: `${$(window).innerWidth() * 0.0625}px`,
      easing: 'easeOutExpo',
      duration: 300,
      offset: 150,
    })
    .add({
      targets: '.valve',
      opacity: [0, 1],
      translateX: ['-100%', 0],
      easing: 'easeOutExpo',
      duration: 300,
      offset: 450,
      begin() {
        freeze();
        $('#main-content').hide(300, () => {
          $('#main-content').load(linkToLoad, '', () => {
            $('#main-content').show(300, () => {
              const valveMoveOut = anime.timeline();
              $('.page-title__text').text($(self).find('.link__text').text());
              valveMoveOut.add({
                targets: '.valve',
                opacity: 0,
                translateX: '-100%',
                easing: 'easeOutExpo',
                duration: 300,
                complete() {
                  $('.header').removeClass('js-z601');
                  $('.title-imitation').fadeOut(0);
                  unfreeze();
                },
              });

              // location-popup angle
              function anglePositon() {
                const wW = $(window).innerWidth();
                const tW = $('.js-location').width();
                const tX = $('.js-location').offset().left;
                if (wW >= 1024) {
                  $('.location-popup__angle').css({ left: `${(((tW * 0.5) + tX) - 36)}px` });
                } else {
                  $('.location-popup__angle').css({ left: `${(((tW * 0.5) + tX) - 10)}px` });
                }
              }
              if ($('.location-popup').length > 0) {
                anglePositon();

                $(window).on('resize', () => {
                  anglePositon();
                });
              }

              history.pushState(null, null, $(self).attr('href'));
            });
          });
        });
      },
    });

    // load content
    /*
    $('#main-content').hide(300, () => {
      $('#main-content').load(linkToLoad, '', () => {
        $('#main-content').show(300, () => {
          const valveMoveOut = anime.timeline();
          valveMoveOut.add({
            targets: '.valve',
            opacity: 0,
            translateX: '-100%',
            easing: 'easeOutExpo',
            duration: 300,
          });

          // location-popup angle
          function anglePositon() {
            const wW = $(window).innerWidth();
            const tW = $('.js-location').width();
            const tX = $('.js-location').offset().left;
            if (wW >= 1024) {
              $('.location-popup__angle').css({ left: `${(((tW * 0.5) + tX) - 36)}px` });
            } else {
              $('.location-popup__angle').css({ left: `${(((tW * 0.5) + tX) - 10)}px` });
            }
          }
          if ($('.location-popup').length > 0) {
            anglePositon();

            $(window).on('resize', () => {
              anglePositon();
            });
          }

          history.pushState(null, null, $(self).attr('href'));
        });
      });
    });
    */
  });
}
/* eslint-enable no-unused-vars */
