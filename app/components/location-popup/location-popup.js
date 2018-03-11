// import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

const $ = window.$;

export default function locationPopup() {
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

  $(document).on('click', '.js-location', (evt) => {
    const self = $(evt.target).hasClass('.js-location') ? $(evt.target) : $(evt.target).closest('.js-location');
    if (!$(self).hasClass('is-open')) {
      $(self).addClass('is-open');
      $('.location-popup').addClass('is-active').slideDown();
      // freeze();
    } else {
      $('.location-popup').slideUp(() => {
        $('.location-popup').removeClass('is-active');
        $(self).removeClass('is-open');
        // unfreeze();
      });
    }
  });

  $(document).on('click', '.location-popup__overlay', () => {
    $('.location-popup').slideUp(() => {
      $('.location-popup').removeClass('is-active');
      $('.js-location').removeClass('is-open');
      // unfreeze();
    });
  });
}
