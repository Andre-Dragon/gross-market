'use strict';

$(function() {
  $('.banner__carousel').slick({
    dots: false,
    arrows: true,
    appendArrows:'.slider-arrows',
    prevArrow: `
      <button type="button" class="banner__button banner__btn--prev">
        <img class="btn-img" src="images/icons/prev.svg" alt="arrow prev">
      </button>
    `,
    nextArrow: `
      <button type="button" class="banner__button banner__btn--next">
        <img class="btn-img" src="images/icons/next.svg" alt="arrow next">
      </button>
    `,
    responsive: [
      {
        breakpoint: 799,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
});
