// https://github.com/jshjohnson/Choices
import Choices from 'choices.js';

// https://github.com/leongersen/noUiSlider
import noUiSlider from 'nouislider';

// https://github.com/t1m0n/air-datepicker
import 'air-datepicker';

// https://github.com/RobinHerbots/Inputmask
import Inputmask from 'inputmask';

const $ = window.$;

export function selects() {
  /* eslint-disable no-unused-vars */
  if ($('.js-select').length > 0) {
    const choices = new Choices('.js-select', {
      searchEnabled: false,
      itemSelectText: '',
    });
  }
  /* eslint-enable no-unused-vars */
}

export function sliders() {
  // Параметры берутся из дата-атрибутов
  $('.js-range').each(function () {
    const el = $(this);

    noUiSlider.create(el.get(0), {
      start: el.data('start'),
      connect: el.data('connect'),
      range: {
        min: el.data('min'),
        max: el.data('max'),
      },
    });
  });
}

export function datepicker() {
  $('.js-datepicker').each(function () {
    const el = $(this);
    el.datepicker();
  });
}

export function inputmask() {
  Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
  }).mask('input[data-type="tel"]');

  Inputmask({
    mask: '**{1,63}@--{1,63}',
    definitions: {
      '*': {
        validator: "[0-9\uFF11-\uFF19а-яА-ЯЁёA-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5!#$%&'*+./=?^_`{|}~-]",
      },
      '-': {
        validator: '[0-9A-Za-zа-яА-ЯЁё.-]',
      },
    },
    // regex: '([a-zA-Zа-яА-ЯЁё0-9_.+-])+@(([a-zA-Zа-яА-ЯЁё0-9-])+.)+([a-zA-Zа-яА-ЯЁё0-9])',
  }).mask('input[data-type="email"]');

  Inputmask({
    mask: '9{1,20}',
    placeholder: ' ',
    showMaskOnHover: false,
  }).mask('input[data-type="number"]');
}

export function numberinput() {
  $(document).on('click', '.js-numberbox-minus, .js-numberbox-plus', function (e) {
    e.preventDefault();

    const input = $(this).parent().find('.js-numberbox-input');
    let val = +input.val();
    const minus = $(this).attr('class').includes('minus') || false;

    if (!val.length) {
      input.val(1);
    }

    if (minus) {
      input.val(val > 0 ? (val -= 1) : 0);
    } else {
      input.val(val += 1);
    }
  });

  $(document).on('keyup change', '.js-numberbox-input', function () {
    this.value = this.value.replace(/[^\d]/, '');
    if ($(this).val() < 0) $(this).val(0);
  });
}
