export default function createTopMenu(bodyEl, contentDiv) {
  // Creates a div for the menu
  const topMenuDiv = document.createElement('div');
  topMenuDiv.classList.add('top-menu');

  // Created the home page button
  const homeCategory = document.createElement('div');
  homeCategory.classList.add('home');
  homeCategory.textContent = 'Home';

  // Created the menu page button
  const menuCategory = document.createElement('div');
  menuCategory.classList.add('menu');
  menuCategory.textContent = 'Menu';

  // Created the contacts page button
  const contactsCategory = document.createElement('div');
  contactsCategory.classList.add('contacts');
  contactsCategory.textContent = 'Contacts';

  // Appends all the pages to the menu div
  topMenuDiv.append(homeCategory, menuCategory, contactsCategory);

  // Appends the menu div to the body element
  bodyEl.insertBefore(topMenuDiv, contentDiv);
}
