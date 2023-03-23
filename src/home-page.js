export default function createHomePage() {
  const contentDiv = document.querySelector('#content');

  // const topMenuDiv = document.createElement('div');
  // topMenuDiv.classList.add('top-menu');

  // const homeCategory = document.createElement('div');
  // homeCategory.classList.add('home');
  // homeCategory.textContent = 'Home';

  // const menuCategory = document.createElement('div');
  // menuCategory.classList.add('menu');
  // menuCategory.textContent = 'Menu';

  // const contactsCategory = document.createElement('div');
  // contactsCategory.classList.add('contacts');
  // contactsCategory.textContent = 'Contacts';

  // topMenuDiv.appendChild(homeCategory);
  // topMenuDiv.appendChild(menuCategory);
  // topMenuDiv.appendChild(contactsCategory);

  const mainInfoDiv = document.createElement('div');
  mainInfoDiv.classList.add('main-info');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = 'MICHI RAMEN';

  const subheadline = document.createElement('div');
  subheadline.classList.add('subheadline');
  subheadline.textContent = 'Online ordering is available';

  mainInfoDiv.appendChild(headline);
  mainInfoDiv.appendChild(subheadline);

  // contentDiv.appendChild(topMenuDiv);
  contentDiv.appendChild(mainInfoDiv);
}
