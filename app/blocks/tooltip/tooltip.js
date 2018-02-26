/* eslint-disable no-unused-vars */
import $ from 'jquery';

// http://iamceege.github.io/tooltipster/
import tooltipster from 'tooltipster';

export default function tooltips() {
  $('.js-tooltip').tooltipster({
    animation: 'fade',
    delay: 0,
    side: 'top',
    theme: 'tooltipster-borderless',
    trigger: 'click',
    distance: 22,
    maxWidth: 276,
  });
}
/* eslint-enable no-unused-vars */
