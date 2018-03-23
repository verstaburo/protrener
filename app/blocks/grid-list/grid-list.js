const $ = window.$;

export default function mixContent() {
  function NewsCards() {
    this.grid = $('.js-mix');
    this.orderId = 'order-id';
    this.orderIdIsSet = false;
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
      const res = Number($(a).data(self.orderId)) - Number($(b).data(self.orderId));
      return res;
    });
  };

  NewsCards.prototype.setOrderId = function (blocks) {
    const self = this;

    blocks.each(function () {
      const block = $(this);

      if (block.data(self.orderId)) {
        return;
      }

      block.data(self.orderId, block.index());
    });
  };

  NewsCards.prototype.sort = function () {
    const self = this;

    if (!self.grid.length) {
      return;
    }

    const columns = self.grid.find('.grid-list__item:visible');
    const blocks = self.grid.find('.news-card:not(:first)');

    if (!self.orderIdIsSet) {
      self.setOrderId(blocks);
    }

    const sortedBlocks = self.sortBlocks(blocks);

    sortedBlocks
      .appendTo(columns.eq(0))
      .each(function () {
        $(this).appendTo(self.getLowestColumn(columns));
      });
  };

  const certificates = new NewsCards();
  certificates.sort();

  $(window).on('resize', () => {
    certificates.sort();
  });
}
