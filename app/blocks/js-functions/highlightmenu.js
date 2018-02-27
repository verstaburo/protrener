const $ = window.$;

export default function highlightMenu() {
  const sections = $('.text-section');

  $(window).on('scroll', () => {
    const currentScroll = $(window).scrollTop();
    let currentSection;

    $(sections).each((i, el) => {
      const divPosition = $(el).offset().top;
      if (divPosition - 55 < currentScroll) {
        currentSection = $(el);
        const id = $(currentSection).attr('id');
        $('a').removeClass('active');
        $(`a[href='#${id}']`).addClass('active');
      }
    });
  });
}
