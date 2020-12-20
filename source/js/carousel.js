const jobCarousel = () => {
  'use strict';

  const jobCarousel = document.querySelector('.job__carousel');
  const jobTrack = document.querySelector('.job__track');
  const jobCards = document.querySelectorAll('.job__card');
  const buttonPrev = document.querySelector('.button__prev');
  const buttonNext = document.querySelector('.button__next');
  const jobCardLayer =  document.querySelectorAll('.job__card--layer');

  let pos = 0;
  const cardsToScroll = 1;
  const cardsToShow = 3.5;
  const cardsBorder = 30;
  const itemWidth = jobCarousel.clientWidth / cardsToShow;
  
  const maxCard = jobCards.length;
  const movePosition = cardsToScroll * itemWidth + cardsBorder;

  jobCards.forEach(item => {
    item.style.minWidth = `${itemWidth}px`;
  });

  const setPosition = () => {
    jobTrack.style.transform = `translateX(${pos}px)`;
  };

    const checkButtons = () => {
    if (pos >= 0) {
      buttonPrev.disabled = true;
      buttonPrev.classList.add('btn__hide');
    } else {
      buttonPrev.disabled = false;
      buttonPrev.classList.remove('btn__hide');
    }

    if (pos <= -(maxCard - cardsToShow) * itemWidth) {
      buttonNext.disabled = true;
      buttonNext.classList.add('btn__hide');
    } else {
      buttonNext.disabled = false;
      buttonNext.classList.remove('btn__hide');
    }
  };

  buttonPrev.addEventListener('click', event => {
    event.preventDefault();
    const itemsLeft = Math.abs(pos) / itemWidth;

    pos += itemsLeft >= cardsToScroll ? movePosition : itemsLeft + itemWidth / 2;

    setPosition();
    checkButtons();
  });


  buttonNext.addEventListener('click', event => {
    event.preventDefault();
    const itemsLeft = maxCard - (Math.abs(pos) + cardsToShow * itemWidth) / itemWidth;

    pos -= itemsLeft >= cardsToScroll ? movePosition : itemsLeft + itemWidth / 2;

    setPosition();
    checkButtons();
  });

  checkButtons();

  jobCards.forEach(item => {
    item.addEventListener('click', () => {
      console.log('click');
    });
  });
  
};

jobCarousel();