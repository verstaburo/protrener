const $ = window.$;

export default function phoneShow() {
  $(document).on('click', '.js-phone', (evt) => {
    const self = $(evt.target).hasClass('phone') ? $(evt.target) : $(evt.target).closest('.phone');
    if (!$(self).hasClass('active')) {
      $(self).addClass('active');
    }
  });
}
