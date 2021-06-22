import initTilt from './js/tilt';
import initSr from './js/sr';
import initEx from './js/experience';
import initSc from './js/scrollTop';

import './style/main.scss';
import topFunction from './js/scrollTop';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

initSr();
initTilt();
initEx();
initSc();