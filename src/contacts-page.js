export default function createContactsPage() {
  const contentDiv = document.querySelector('#content');

  // Creates contacts container
  const contactsContainerDiv = document.createElement('div');
  contactsContainerDiv.classList.add('contacts-container');

  // Creates map container
  const mapContainerDiv = document.createElement('div');
  mapContainerDiv.classList.add('map-container');

  // Appends the map container to contacts container
  contactsContainerDiv.appendChild(mapContainerDiv);

  // Creates info container
  const infoContainerDiv = document.createElement('div');
  infoContainerDiv.classList.add('info-container');

  // Creates all the info elements
  const phoneDiv = document.createElement('div');
  phoneDiv.classList.add('phone');
  const phoneIcon = document.createElement('div');
  phoneIcon.classList.add('phone-icon');
  const phoneText = document.createElement('div');
  phoneText.classList.add('phone-text');
  phoneText.textContent = '+359 877 607 023';
  phoneDiv.append(phoneIcon, phoneText);

  const addressDiv = document.createElement('div');
  addressDiv.classList.add('address');
  const addressIcon = document.createElement('div');
  addressIcon.classList.add('address-icon');
  const addressText = document.createElement('div');
  addressText.classList.add('address-text');
  addressText.textContent = 'ul. "Angel Kanchev" 2';
  addressDiv.append(addressIcon, addressText);

  const workingTimeDiv = document.createElement('div');
  workingTimeDiv.classList.add('workingTime');
  const workingTimeIcon = document.createElement('div');
  workingTimeIcon.classList.add('workingTime-icon');
  const workingTimeText = document.createElement('div');
  workingTimeText.classList.add('workingTime-text');
  workingTimeText.textContent = 'Mon-Sun: 10am. - 11pm';
  workingTimeDiv.append(workingTimeIcon, workingTimeText);

  const emailDiv = document.createElement('div');
  emailDiv.classList.add('email');
  const emailIcon = document.createElement('div');
  emailIcon.classList.add('email-icon');
  const emailText = document.createElement('div');
  emailText.classList.add('email-text');
  emailText.textContent = 'michi@restaurant.com';
  emailDiv.append(emailIcon, emailText);

  // Append all the elements to the info container
  infoContainerDiv.append(phoneDiv, addressDiv, workingTimeDiv, emailDiv);

  // Appends the info container to contacts container
  contactsContainerDiv.appendChild(infoContainerDiv);

  // Append the contacts container div to the content div
  contentDiv.appendChild(contactsContainerDiv);
}
