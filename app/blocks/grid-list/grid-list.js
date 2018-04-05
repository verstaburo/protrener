const $ = window.$;

export default function mixContent() {
  function NewsCards() {
    this.grid = $('.js-mix');
    this.storage = $('.allnews');
    this.orderId = 'data-order-id';
  }

  NewsCards.prototype.getLowestColumn = function (columns) {
    const sortedColumns = columns.sort((a, b) => {
      const res = $(a).outerHeight() - $(b).outerHeight();
      return res;
    });
    return sortedColumns[0];
  };

  NewsCards.prototype.sortBlocks = function (blocks) {
    const self = this;
    return blocks.sort((a, b) => {
      const res = Number($(a).attr(self.orderId)) - Number($(b).attr(self.orderId));
      return res;
    });
  };

  NewsCards.prototype.setOrderId = function (blocks) {
    const self = this;
    const orderedBlocks = blocks.filter('[data-order-id]');
    let index = $(orderedBlocks).length > 0 ? $(orderedBlocks).length + 1 : 1;

    blocks.each(function () {
      const block = $(this);

      if (block.attr(self.orderId)) {
        return;
      }

      block.attr(self.orderId, index);
      index += 1;
    });
  };

  NewsCards.prototype.sort = function () {
    const self = this;

    if (!self.grid.length) {
      return;
    }

    const columns = self.grid.find('.grid-list__item:visible');
    let blocks = self.storage.find('.news-card');
    const gridBlocks = self.grid.find('.news-card');
    $.merge(blocks, gridBlocks);
    blocks.each(function () {
      $(this).appendTo(self.storage);
    });
    blocks = self.storage.find('.news-card');

    self.setOrderId(blocks);

    const sortedBlocks = self.sortBlocks(blocks);

    sortedBlocks
      .each(function () {
        $(this).appendTo(self.getLowestColumn(columns));
      });
  };

  const news = new NewsCards();
  news.sort();
  window.news = news;

  $(window).on('resize', () => {
    news.sort();
  });
}
