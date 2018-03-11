// http://fancyapps.com/fancybox/3/
import '@fancyapps/fancybox';

import { freeze, unfreeze } from '../js-functions/freeze';

const $ = window.$;

export default function popups() {
  $('.js-fancybox').fancybox({
    afterLoad: freeze,
    animationDuration: 500,
    afterShow: () => {
      $('.popup').addClass('is-open');
    },
    beforeClose: () => {
      $('.popup').removeClass('is-open');
    },
    afterClose: () => {
      unfreeze();
      $('.search')[0].reset();
      $('.search-popup__result').removeClass('is-visible');
      $('.search-popup__trainers').fadeOut(250);
      $('.search-popup__not-found').fadeOut(250);
      $('.search-popup__form').removeClass('is-moved');
    },
    btnTpl: {
      smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.41 17.41"><path d="M8.71,7.29,16,0l1.41,1.41-7.29,7.3L17.41,16,16,17.41,8.71,10.12l-7.3,7.29L0,16,7.29,8.71,0,1.41,1.41,0Z"/></svg></button>',
    },
  });
}
