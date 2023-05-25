import { createElement } from './helper.js';

export const createUser = () => {
  const section = createElement('section', {
    className: 'user',
  });

  const container = createElement('div', {
    className: 'container user__container',
  });

  section.append(container);

  const title = createElement('h1', {
    className: 'user__title',
    textContent: 'WishList',
  });

  const description = createElement('p', {
    className: 'user__description',
    innerHTML:
      'You are never too old to set a new goal or to dream a new dream...',
  });

  const listSteps = createElement('ol', {
    className: 'user__steps steps',
  });

  [
    'Create a&nbsp;wishlist',
    'Share the link with your friends',
    'Receive the gift you want',
  ].forEach(text => {
    const step = createElement('li', {
      className: 'steps__item',
      innerHTML: text,
    });

    listSteps.append(step);
  });

  container.append(title, description, listSteps);

  return section;
};

/* <section class='user'>
  <div class='container user__container'>
    <h1 class='user__title'>WishList</h1>
    <p class='user__description'>
      Никогда не поздно поставить новую цель или обрести новую мечту...
    </p>
    <ol class='user__steps steps'>
      <li class='steps__item'>Создайте список желаний</li>
      <li class='steps__item'>Поделитесь ссылкой с&nbsp;друзьями</li>
      <li class='steps__item'>Получите желанный подарок</li>
    </ol>
  </div>
</section> */
