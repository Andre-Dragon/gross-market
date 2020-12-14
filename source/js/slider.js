'use strict';

const slider = () => {
  const slides = document.querySelectorAll('.banner__item');
  const btnPrev = document.querySelector('.btn__prev');
  const btnNext = document.querySelector('.btn__next');

  let position = 0;
  const maxSlide = slides.length;

  const goToSlide = slide => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const checkBtns = () => {
    if (position === 0) {
      btnPrev.disabled = true;
      btnPrev.classList.add('btn__hide');
    } else {
      btnPrev.disabled = false;
      btnPrev.classList.remove('btn__hide');
    }

    if (position === (maxSlide - 1)) {
      btnNext.disabled = true;
      btnNext.classList.add('btn__hide');
    } else {
      btnNext.disabled = false;
      btnNext.classList.remove('btn__hide');
    }
  };

  // Next slide
  const nextSlide = () => {
    if (position !== maxSlide - 1) {
      position++;
    }

    checkBtns();
    goToSlide(position);
  };

  // Prev slide
  const prevSlide = () => {
    if (position !== 0) {
      position--;
    }

    checkBtns();
    goToSlide(position);
  };

  const init = () => {
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