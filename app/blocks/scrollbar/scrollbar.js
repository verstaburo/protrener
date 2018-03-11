import $ from 'jquery';

// https://github.com/gromo/jquery.scrollbar
import 'jquery.scrollbar';

export default function scrollbar() {
  $('.js-scrollbar').scrollbar();
  $('.js-scrollbar').on('scroll', () => {
    if ($('.sport-navigation__links').length > 0 && $('.content').is(':visible')) {
      const wW = $(window).innerWidth();
      const hH = $('.header').outerHeight();
      const snX = $('.sport-navigation__links .link-list__item:first-child').offset().top;
      if (wW >= 1024) {
        if (snX < hH) {
          $('.header__search').css({ opacity: 0, 'pointer-events': 'none' });
        } else {
          $('.header__search').css({ opacity: '', 'pointer-events': 'all' });
        }
      }
    }
  });
}
