/* eslint-disable no-unused-vars */
import StickySidebar from 'sticky-sidebar/dist/sticky-sidebar';

const $ = window.$;

export default function sidebar() {
  const side = new StickySidebar('.js-sidebar', {
    topSpacing: 56,
    innerWrapperSelector: '.js-sidebar-inner',
    resizeSensor: true,
  });
}
/* eslint-enable no-unused-vars */
