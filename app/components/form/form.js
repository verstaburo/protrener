import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

const $ = window.$;

// floating labels on mobile

export function floatingLabels() {
  $('.js-floating-label input, .js-floating-label textarea').on('focus blur', (evt) => {
    const self = evt.target;
    $(self).parents('.js-floating-label').toggleClass('is-top', (evt.type === 'focus' || self.value.length > 0));
  }).trigger('blur');
  $('.js-floating-label select').on('focus blur change', (evt) => {
    const self = evt.target;
    $(self).parents('.js-floating-label').toggleClass('is-top', (evt.type === 'focus' || (self.value !== $(self).attr('placeholder'))));
  }).trigger('blur');
}

// form validation

export function validation() {
  let activeform;
  let formerrors;

  function isEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    return regex.test(email);
  }
  function isTel(tel) {
    const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return regex.test(tel);
  }
  function checkempty() {
    $(`#${activeform} [required]`).each(function () {
      if (!$(this).val()) {
        $(this).parent().addClass('error');
      } else {
        $(this).parent().removeClass('error');
      }
    });
  }
  function checkselects() {
    $(`#${activeform} select[required]`).each(function () {
      if (this.value === $(this).attr('placeholder')) {
        $(this).closest('.form__field').addClass('error');
      } else {
        $(this).closest('.form__field').removeClass('error');
      }
    });
  }
  function checkinputs() {
    checkempty();
    if (isEmail($(`#${activeform} input[data-type="email"]`).val()) === false) {
      $(`#${activeform} input[data-type="email"]`).parent().addClass('error');
    } else {
      $(`#${activeform} input[data-type="email"]`).parent().removeClass('error');
    }
    if (isTel($(`#${activeform} input[type="tel"]`).val()) === false) {
      $(`#${activeform} input[type="tel"]`).parent().addClass('error');
    } else {
      $(`#${activeform} input[type="tel"]`).parent().removeClass('error');
    }
  }
  function checkandsubmit() {
    formerrors = 0;
    $(`#${activeform}`).find('.error').each(() => {
      formerrors += 1;
    });

    $('.form__row').each((i, el) => {
      if ($(el).find('.error').length > 0) {
        $(el).addClass('error-label');
      }
    });

    $('.error-label').each((i, el) => {
      if ($(el).find('.error').length === 0) {
        $(el).removeClass('error-label');
      }
    });

    if (formerrors === 0) {
      $('.error-banner').removeClass('active');
      $.fancybox.open({
        src: '#success-popup',
        afterLoad: freeze,
        afterClose: unfreeze,
        animationDuration: 500,
        afterShow: () => {
          $('.popup').addClass('is-open');
        },
        beforeClose: () => {
          $('.popup').removeClass('is-open');
        },
        btnTpl: {
          smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.41 17.41"><path d="M8.71,7.29,16,0l1.41,1.41-7.29,7.3L17.41,16,16,17.41,8.71,10.12l-7.3,7.29L0,16,7.29,8.71,0,1.41,1.41,0Z"/></svg></button>',
        },
      });
    } else {
      $('.error-banner').addClass('active');
    }
  }
  $(document).on('click', '.js-validate', (evt) => {
    const self = evt.target;
    activeform = $(self).parents('form').attr('id');
    evt.preventDefault();
    checkinputs();
    checkselects();
    checkandsubmit();
  });
}
