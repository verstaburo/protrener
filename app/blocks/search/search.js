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
  $(document).on('input', '.search__input', (evt) => {
    const self = evt.target;
    const searchLine = $(self).val();
    if (searchLine !== '') {
      $('.search-popup__result').slideDown();
      $('.loading').show();
      setTimeout(() => {
        $('.loading').hide();
      }, 200);
      setTimeout(() => {
        if (searchLine === ' ' || searchLine == null) {
          $('.search-popup__trainers').hide();
          $('.search-popup__not-found').show();
        } else {
          $('.search-popup__not-found').hide();
          $('.search-popup__trainers').show();
        }
      }, 110);
    } else {
      $('.search-popup__result').slideUp();
    }
  });
}
