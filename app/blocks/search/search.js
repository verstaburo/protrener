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
    let isSearch = true;
    if (isSearch) {
      if (searchLine !== '') {
        $('.search-popup__form').addClass('is-moved');
        $('.search-popup__result').addClass('is-visible');
        $('.loading').addClass('active');
        isSearch = false;
        setTimeout(() => {
          $('.loading').removeClass('active');
          if (searchLine === ' ' || searchLine == null) {
            if ($('.search-popup__trainers').is(':visible')) {
              $('.search-popup__trainers').fadeOut(250, () => {
                $('.search-popup__not-found').fadeIn(250);
              });
            } else {
              $('.search-popup__not-found').fadeIn(250);
            }
          } else {
            if ($('.trainers-list_search .trainers-list__item').length > 1) {
              if ($('.search-popup__not-found').is(':visible')) {
                $('.search-popup__not-found').fadeOut(250, () => {
                  $('.search-popup__trainers').fadeIn(250);
                });
              } else {
                $('.search-popup__trainers').fadeIn(250);
              }
              $('.trainers-list_search .trainers-list__item:last-child').remove();
            } else {
              $('.search-popup__trainers').fadeOut(250, () => {
                $('.search-popup__not-found').fadeIn(250);
              });
            }
          }
          isSearch = true;
        }, 250);
      } else {
        $('.search-popup__result').removeClass('is-visible');
        $('.search-popup__trainers').fadeOut(250);
        $('.search-popup__not-found').fadeOut(250);
        $('.search-popup__form').removeClass('is-moved');
      }
    }
  });
}
/* eslint-enable no-lonely-if */
