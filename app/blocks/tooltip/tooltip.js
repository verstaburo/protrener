/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import $ from 'jquery';

// http://iamceege.github.io/tooltipster/
import tooltipster from 'tooltipster';

export default function tooltips() {
  /*
  const config = {
    in: {
      base: {
        duration: 800,
        easing: 'easeOutElastic',
        translateY: [60,0],
        scale: [0.5,1],
        opacity: {
          value: 1,
          easing: 'linear',
          duration: 100
        }
      },
      path: {
        duration: 1200,
        delay: 50,
        easing: 'easeOutElastic',
        elasticity: 700,
        d: 'M 22,74.2 22,202 C 22,202 82,202 103,202 124,202 184,202 184,202 L 200,219 216,202 C 216,202 274,202 297,202 320,202 378,202 378,202 L 378,74.2 C 378,74.2 318,73.7 200,73.7 82,73.7 22,74.2 22,74.2 Z'
      },
      content: {
        duration: 300,
        delay: 100,
        easing: 'easeOutQuint',
        translateY: [20,0],
        opacity: {
          value: 1,
          easing: 'linear',
          duration: 100
        }
      },
    },
    out: {
      base: {
        duration: 200,
        easing: 'easeInQuad',
        translateY: 60,
        scale: 0.5,
        opacity: {
          value: 0,
          delay: 100,
          duration: 100,
          easing: 'linear'
        }
      },
      path: {
        duration: 200,
        easing: 'easeInQuad',
        d: 'M 22,108 22,236 C 22,236 64,216 103,212 142,208 184,212 184,212 L 200,229 216,212 C 216,212 258,207 297,212 336,217 378,236 378,236 L 378,108 C 378,108 318,83.7 200,83.7 82,83.7 22,108 22,108 Z'
      },
      content: {
        duration: 100,
        easing: 'easeInQuad',
        translateY: 20,
        opacity: {
          value: 0,
          easing: 'linear'
        }
      },
    }
  }

  animate(dir) {
    if ( config[dir].base ) {
      anime.remove(this.DOM.base);
      let baseAnimOpts = {targets: this.DOM.base};
      anime(Object.assign(baseAnimOpts, config[dir].base));
    }
    if ( config[dir].path ) {
      anime.remove(this.DOM.path);
      let shapeAnimOpts = {targets: this.DOM.path};
      anime(Object.assign(shapeAnimOpts, config[dir].path));
    }
    if ( config[dir].content ) {
      anime.remove(this.DOM.content);
      let contentAnimOpts = {targets: this.DOM.content};
      anime(Object.assign(contentAnimOpts, config[dir].content));
    }
  }
  */

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
/* eslint-enable max-len */
