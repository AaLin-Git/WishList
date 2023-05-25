import { renderNavigation } from './renderNavigation.js';
import { createUser } from './createUser.js';

const app = document.querySelector('.app');

const handleHomePage = () => {
  app.textContent = '';
  renderNavigation();
  const section = createUser();
  app.append(section);
};

const init = () => {
  handleHomePage();
};

init();
