/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import $ from 'jquery';

// http://iamceege.github.io/tooltipster/
import tooltipster from 'tooltipster';

export default function tooltips() {
  $('.js-tooltip').tooltipster({
    animation: 'fade',
    delay: 0,
    side: 'top',
    theme: 'tooltipster-borderless',
    distance: 22,
    maxWidth: 276,
  }).tooltipster('instance');

  $.tooltipster.on('position', (e) => {
  });

  $.tooltipster.on('close', (e) => {
  });
}
/* eslint-enable no-unused-vars */
/* eslint-enable max-len */
