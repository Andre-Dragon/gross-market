'use strict';

const blogInstagram = () => {
  const blogButton = document.querySelector('.blog__button');
  const blogContent = document.querySelector('.blog__content');

  const addNewBlog = blog => {
    blogContent.insertAdjacentHTML('beforeend', blog);
  };

  const createNewBlog = () => {
    const blogHTML = `
      <div class="blog__elements blog__elements--next">
        <section class="blog__element blog--element__next--one">
          <article></article>
        </section>
        <section class="blog__element blog--element__next--two">
          <article></article>
        </section>
        <section class="blog__element blog--element__next--three">
          <article></article>
        </section>
        <section class="blog__element blog--element__next--four">
          <article></article>
        </section>
        <section class="blog__element blog--element__next--five">
          <article></article>
        </section>
        <section class="blog__element blog--element__next--six">
          <article></article>
        </section>
      </div>
    `;
    addNewBlog(blogHTML);
  };

  blogButton.addEventListener('click', createNewBlog);
};

blogInstagram();


