// init Isotope
import Isotope from 'isotope-layout';

const elem = document.querySelector('.portfolio__list');

const iso = new Isotope( elem, {
  itemSelector: '.portfolio__item',
  layoutMode: 'masonry',
});