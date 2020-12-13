'use strict';

const slider = function () {
  const slides = document.querySelectorAll('.banner__item');
  const btnPrev = document.querySelector('.btn__prev');
  const btnNext = document.querySelector('.btn__next');

  let position = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

    const checkBtns = () => {
    if (position === 0) {
      btnPrev.disabled = true;
      btnPrev.style.opacity = 0.2;
    } else {
      btnPrev.disabled = false;
      btnPrev.style.opacity = 1;
    }

    if (position === (maxSlide - 1)) {
      btnNext.disabled = true;
      btnNext.style.opacity = 0.2;
    } else {
      btnNext.disabled = false;
      btnNext.style.opacity = 1;
    }
  };

  // Next slide
  const nextSlide = function () {
    if (position === maxSlide - 1) {
      // position = 0;
    } else {
      position++;
    }

    checkBtns();
    goToSlide(position);
  };

  // Prev slide
  const prevSlide = function () {
    if (position === 0) {
      // position = maxSlide - 1;
    } else {
      position--;
    }

    checkBtns();
    goToSlide(position);
  };

  const init = function () {
    goToSlide(0);
  };

  init();

  // Event handlers
  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } 
    else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });

  checkBtns();

};

slider();