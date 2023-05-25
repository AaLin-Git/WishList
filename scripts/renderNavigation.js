import { createElement } from './helper.js';

const nav = document.querySelector('.nav');

//const burger = createBurgerMenu(nav);

export const renderNavigation = () => {
  nav.textContent = '';

  const buttonSignUp = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Sign up',
  });

  buttonSignUp.addEventListener('click', () => {
    console.log('sing up');
  });

  const buttonSignIn = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Sign in',
  });

  buttonSignIn.addEventListener('click', () => {
    console.log('sing in');
  });

  nav.append(buttonSignUp, buttonSignIn);
};
