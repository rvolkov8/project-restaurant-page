import './top-menu-bg.css';
import './home-page.css';
import './menu-page.css';
import createTopMenu from './top-menu';
import createHomePage from './home-page';
import createMenuPage from './menu-page';

let currentPage = 'home';

const bodyEl = document.querySelector('body');
const contentDiv = document.querySelector('#content');

createTopMenu(bodyEl, contentDiv);
createHomePage();

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');

homeButton.style.color = '#fff';

homeButton.addEventListener('click', () => {
  if (currentPage !== 'home') {
    currentPage = 'home';
    homeButton.style.color = '#fff';
    menuButton.removeAttribute('style');
  }
  contentDiv.innerHTML = '';
  createHomePage();
});

menuButton.addEventListener('click', () => {
  if (currentPage !== 'menu') {
    currentPage = 'menu';
    menuButton.style.color = '#fff';
    homeButton.removeAttribute('style');
  }
  contentDiv.innerHTML = '';
  createMenuPage();
});
