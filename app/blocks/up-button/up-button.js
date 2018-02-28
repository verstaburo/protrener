const $ = window.$;

export default function upShow() {
  const footerPosition = $('.footer').offset().top;
  const windowHeight = $(window).innerHeight();
  const buttonH = $('.js-upbutton').outerHeight();

  if ($('.js-upbutton').length > 0) {
    $(window).on('scroll', () => {
      const buttonX = $('.js-upbutton').offset().top;

      if (((buttonX + 50) > windowHeight) && ((buttonX + buttonH) < (footerPosition + 1))) {
        $('.js-upbutton').addClass('active');
      } else {
        $('.js-upbutton').removeClass('active');
      }
    });
  }
}
