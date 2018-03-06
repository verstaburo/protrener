/* eslint-disable no-lonely-if */
const $ = window.$;

export default function search() {
  $(document).on('focus', '.search__input', (evt) => {
    const self = evt.target;
    $(self).closest('.search').addClass('is-focused');
  });

  $(document).on('blur', '.search__input', (evt) => {
    const self = evt.target;
    $(self).closest('.search').removeClass('is-focused');
  });

  $(document).on('keyup', '.search__input', (evt) => {
    if (evt.keyCode === 27) {
      $.fancybox.close();
    }
  });

  /*
  imitation
  */
  $(document).on('input', '.search__input', (evt) => {
    const self = evt.target;
    const searchLine = $(self).val();
    if (searchLine !== '') {
      $('.search-popup__result').slideDown();
      $('.loading').addClass('active');
      setTimeout(() => {
        $('.loading').removeClass('active');
        setTimeout(() => {
          if (searchLine === ' ' || searchLine == null) {
            if ($('.search-popup__trainers').is(':visible')) {
              $('.search-popup__trainers').fadeOut(() => {
                $('.search-popup__not-found').fadeIn();
              });
            } else {
              $('.search-popup__not-found').fadeIn();
            }
          } else {
            if ($('.search-popup__not-found').is(':visible')) {
              $('.search-popup__not-found').fadeOut(() => {
                $('.search-popup__trainers').fadeIn();
              });
            } else {
              $('.search-popup__trainers').fadeIn();
            }
          }
        }, 200);
      }, 200);
    } else {
      $('.search-popup__result').slideUp(() => {
        $('.search-popup__trainers').fadeOut();
        $('.search-popup__not-found').fadeOut();
      });
    }
  });
}
/* eslint-enable no-lonely-if */
