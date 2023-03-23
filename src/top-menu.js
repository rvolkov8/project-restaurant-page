export default function createTopMenu(bodyEl, contentDiv) {
  const topMenuDiv = document.createElement('div');
  topMenuDiv.classList.add('top-menu');

  const homeCategory = document.createElement('div');
  homeCategory.classList.add('home');
  homeCategory.textContent = 'Home';

  const menuCategory = document.createElement('div');
  menuCategory.classList.add('menu');
  menuCategory.textContent = 'Menu';

  const contactsCategory = document.createElement('div');
  contactsCategory.classList.add('contacts');
  contactsCategory.textContent = 'Contacts';

  topMenuDiv.appendChild(homeCategory);
  topMenuDiv.appendChild(menuCategory);
  topMenuDiv.appendChild(contactsCategory);

  bodyEl.insertBefore(topMenuDiv, contentDiv);
}
