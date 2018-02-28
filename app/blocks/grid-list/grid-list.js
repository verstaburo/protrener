const $ = window.$;

export default function mixContent() {
  function targertColumn(sw) {
    let res;
    const ar1 = $('[data-move="nomix"] .news-card').length;
    const ar2 = $('[data-move="mix480"] .news-card').length;
    const ar3 = $('[data-move="mix1024"] .news-card').length;
    switch (sw) {
      case 1:
        res = (ar1 <= ar2) ? 1 : 2;
        break;
      case 2:
        if (ar1 <= ar2) {
          res = (ar1 <= ar3) ? 1 : 3;
        } else {
          res = (ar2 <= ar3) ? 2 : 3;
        }
        break;
      default:
        break;
    }
    return res;
  }

  function mixsher() {
    const items = [];
    const wW = $(window).innerWidth();

    if (wW < 480) {
      $.merge(items, $('[data-move="mix480"] .news-card'));
      $.merge(items, $('[data-move="mix1024"] .news-card'));
      $.merge(items, $('[data-move="mix1440"]  .news-card'));
      $(items).each((i, el) => {
        $('[data-move="nomix"]').append($(el));
      });
    } else if (wW >= 480 && wW < 1024) {
      $('[data-parent="mix480"]').each((i, el) => {
        $('[data-move="mix480"]').append($(el));
      });
      $.merge(items, $('[data-move="mix1024"] .news-card'));
      $.merge(items, $('[data-move="mix1440"]  .news-card'));
      $(items).each((i, el) => {
        if (targertColumn(1) === 2) {
          $('[data-move="mix480"]').append($(el));
        } else {
          $('[data-move="nomix"]').append($(el));
        }
      });
    } else if (wW >= 1024 && wW < 1440) {
      $('[data-parent="mix480"]').each((i, el) => {
        $('[data-move="mix480"]').append($(el));
      });
      $('[data-parent="mix1024"]').each((i, el) => {
        $('[data-move="mix1024"]').append($(el));
      });
      $.merge(items, $('[data-move="mix1440"] .news-card'));
      $(items).each((i, el) => {
        if (targertColumn(2) === 3) {
          $('[data-move="mix1024"]').append($(el));
        } else if (targertColumn(2) === 2) {
          $('[data-move="mix480"]').append($(el));
        } else {
          $('[data-move="nomix"]').append($(el));
        }
      });
    } else if (wW >= 1440) {
      $('[data-parent="mix480"]').each((i, el) => {
        $('[data-move="mix480"]').append($(el));
      });
      $('[data-parent="mix1024"]').each((i, el) => {
        $('[data-move="mix1024"]').append($(el));
      });
      $('[data-parent="mix1440"]').each((i, el) => {
        $('[data-move="mix1440"]').append($(el));
      });
    }
  }

  if ($('.js-mix').length > 0) {
    mixsher();

    $(window).on('resize', mixsher);
  }
}
