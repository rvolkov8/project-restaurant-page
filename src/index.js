import './top-menu-bg.css';
import './home-page.css';
import './menu-page.css';
import './contacts-page.css';
import createTopMenu from './top-menu';
import createHomePage from './home-page';
import createMenuPage from './menu-page';
import createContactsPage from './contacts-page';

let currentPage = 'home';

const bodyEl = document.querySelector('body');
const contentDiv = document.querySelector('#content');

createTopMenu(bodyEl, contentDiv);
createHomePage();

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactsButton = document.querySelector('.contacts');

homeButton.style.color = '#fff';

homeButton.addEventListener('click', () => {
  if (currentPage !== 'home') {
    currentPage = 'home';
    homeButton.style.color = '#fff';
    menuButton.removeAttribute('style');
    contactsButton.removeAttribute('style');
  }
  contentDiv.innerHTML = '';
  createHomePage();
});

menuButton.addEventListener('click', () => {
  if (currentPage !== 'menu') {
    currentPage = 'menu';
    menuButton.style.color = '#fff';
    homeButton.removeAttribute('style');
    contactsButton.removeAttribute('style');
  }
  contentDiv.innerHTML = '';
  createMenuPage();
});

contactsButton.addEventListener('click', () => {
  if (currentPage !== 'contacts') {
    currentPage = 'contacts';
    contactsButton.style.color = '#fff';
    homeButton.removeAttribute('style');
    menuButton.removeAttribute('style');
  }
  contentDiv.innerHTML = '';
  createContactsPage();
});
