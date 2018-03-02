const $ = window.$;

export function linkHover() {
  $(document).on('mouseenter', '.js-link-hover', (evt) => {
    const self = $(evt.target).hasClass('link') ? $(evt.target) : $(evt.target).closest('.link');
    $(self).addClass('is-hover');
    $(self).closest('.link-list').addClass('is-hover');
  });

  $(document).on('mouseleave', '.js-link-hover', (evt) => {
    const self = $(evt.target).hasClass('link') ? $(evt.target) : $(evt.target).closest('.link');
    $(self).removeClass('is-hover');
    $(self).closest('.link-list').removeClass('is-hover');
  });
}

export function showLinkInfo() {
  $(document).on('mouseenter', '.js-link-info', (evt) => {
    const self = $(evt.target).hasClass('link') ? $(evt.target) : $(evt.target).closest('.link');
    const data = $(self).data('trainer-count');
    $('[data-target="trainers-count"]').text(data);
    $('.sport-navigation__info').addClass('active');
  });

  $(document).on('mouseleave', '.js-link-info', () => {
    $('.sport-navigation__info').removeClass('active');
  });
}
