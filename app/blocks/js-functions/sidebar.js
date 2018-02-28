/* eslint-disable no-unused-vars */
import StickySidebar from 'sticky-sidebar/dist/sticky-sidebar';

const $ = window.$;

export default function sidebar() {
  if ($('.js-sidebar').length > 0) {
    const side = new StickySidebar('.js-sidebar', {
      topSpacing: 56,
      innerWrapperSelector: '.js-sidebar-inner',
      resizeSensor: true,
    });
  }
}
/* eslint-enable no-unused-vars */
