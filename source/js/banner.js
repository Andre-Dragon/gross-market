'use strict';

const slider = () => {
  const slides = document.querySelectorAll('.banner__item');
  const btnPrev = document.querySelector('.btn__prev');
  const btnNext = document.querySelector('.btn__next');
  const dotContainer = document.querySelector('.banner__dots');

  let position = 0;
  const maxSlide = slides.length;

  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="banner__dots--dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = slide => {
    document
      .querySelectorAll('.banner__dots--dot')
      .forEach(dot => dot.classList.remove('banner__dots--dot-active'));

    document
      .querySelector(`.banner__dots--dot[data-slide="${slide}"]`)
      .classList.add('banner__dots--dot-active');
  };

  const goToSlide = slide => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = () => {
    if (position === maxSlide - 1) {
      position = 0;
    } else {
      position++;
    }

    goToSlide(position);
    activateDot(position);
  };

  // Prev slide
  const prevSlide = () => {
    if (position === 0) {
      position = maxSlide - 1;
    } else {
      position--;
    }

    goToSlide(position);
    activateDot(position);
  };

  const init = () => {
    goToSlide(0);
    createDots();

    activateDot(0);
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

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('banner__dots--dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

};

slider();