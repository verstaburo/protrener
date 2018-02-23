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

  /*
  imitation
  */
  let searchIs = false;
  $(document).on('input', '.search__input', (evt) => {
    const self = evt.target;

    if (!searchIs) {
      searchIs = true;
      $('.loading').show();
      setTimeout(() => {
        searchIs = false;
        const searchLine = $(self).val();
        $('.loading').hide();
        if (searchLine === ' ' || searchLine == null) {
          $('.search-popup__trainer-list').slideUp();
          if (!$('.search-popup__not-found').is(':visible')) {
            $('.search-popup__not-found').slideDown();
          }
        } else {
          $('.loading').hide();
          $('.search-popup__not-found').slideUp();
          if (!$('.search-popup__trainer-list').is(':visible')) {
            $('.search-popup__trainer-list').slideDown();
          }
        }
      }, 500);
    }
  });
}
