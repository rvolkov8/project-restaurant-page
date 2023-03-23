export default function createMenuPage() {
  const contentDiv = document.querySelector('#content');

  // Clears the content div
  //   contentDiv.innerHTML = '';

  // Creates menu container
  const menuContainerDiv = document.createElement('div');
  menuContainerDiv.classList.add('menu-container');

  // Creates the first menu element
  const ramenOneDiv = document.createElement('div');
  ramenOneDiv.classList.add('menu-item');

  // Creates all the elements to the first menu item
  const ramenOneImage = document.createElement('div');
  ramenOneImage.classList.add('image');
  ramenOneImage.classList.add('ramen1');

  const ramenOnePrice = document.createElement('div');
  ramenOnePrice.classList.add('price');
  ramenOnePrice.textContent = '$12';

  const ramenOneName = document.createElement('div');
  ramenOneName.classList.add('name');
  ramenOneName.textContent = 'Tonkotsu ramen';

  const ramenOneDescription = document.createElement('div');
  ramenOneDescription.classList.add('description');
  ramenOneDescription.textContent =
    'Originating from modern-day Fukuoka and lending its mouthwatering fragrance to Tokyo’s Asakusa region, tonkotsu ramen is made from boiling pork bones for hours until it brings a creamy cloudy look to the tonkotsu broth.';

  // Appends all the elements to the first menu item
  ramenOneDiv.append(
    ramenOneImage,
    ramenOnePrice,
    ramenOneName,
    ramenOneDescription
  );

  // Creates the second menu element
  const ramenTwoDiv = document.createElement('div');
  ramenTwoDiv.classList.add('menu-item');

  // Creates all the elements to the second menu item
  const ramenTwoImage = document.createElement('div');
  ramenTwoImage.classList.add('image');
  ramenTwoImage.classList.add('ramen2');

  const ramenTwoPrice = document.createElement('div');
  ramenTwoPrice.classList.add('price');
  ramenTwoPrice.textContent = '$10';

  const ramenTwoName = document.createElement('div');
  ramenTwoName.classList.add('name');
  ramenTwoName.textContent = 'Miso Ramen';

  const ramenTwoDescription = document.createElement('div');
  ramenTwoDescription.classList.add('description');
  ramenTwoDescription.textContent =
    'Coming from the Sapporo region of Hokkaido, miso ramen takes its name from its main ingredient. This broth is strong and savory and has an opaque appearance.';

  // Appends all the elements to the second menu item
  ramenTwoDiv.append(
    ramenTwoImage,
    ramenTwoPrice,
    ramenTwoName,
    ramenTwoDescription
  );

  // Creates the third menu element
  const ramenThreeDiv = document.createElement('div');
  ramenThreeDiv.classList.add('menu-item');

  // Creates all the elements to the third menu item
  const ramenThreeImage = document.createElement('div');
  ramenThreeImage.classList.add('image');
  ramenThreeImage.classList.add('ramen3');

  const ramenThreePrice = document.createElement('div');
  ramenThreePrice.classList.add('price');
  ramenThreePrice.textContent = '$15';

  const ramenThreeName = document.createElement('div');
  ramenThreeName.classList.add('name');
  ramenThreeName.textContent = 'Shoyu Ramen';

  const ramenThreeDescription = document.createElement('div');
  ramenThreeDescription.classList.add('description');
  ramenThreeDescription.textContent =
    'Shoyu means soy sauce in Japanese and this style of noodle dish was actually the first type of ramen and is still going strong. There’s lots of different varieties of shoyu ramen but the taste is normally salty and tangy.';

  // Appends all the elements to the third menu item
  ramenThreeDiv.append(
    ramenThreeImage,
    ramenThreePrice,
    ramenThreeName,
    ramenThreeDescription
  );

  // Creates the fourth menu element
  const ramenFourDiv = document.createElement('div');
  ramenFourDiv.classList.add('menu-item');

  // Creates all the elements to the fourth menu item
  const ramenFourImage = document.createElement('div');
  ramenFourImage.classList.add('image');
  ramenFourImage.classList.add('ramen4');

  const ramenFourPrice = document.createElement('div');
  ramenFourPrice.classList.add('price');
  ramenFourPrice.textContent = '$9';

  const ramenFourName = document.createElement('div');
  ramenFourName.classList.add('name');
  ramenFourName.textContent = 'Shio Ramen';

  const ramenFourDescription = document.createElement('div');
  ramenFourDescription.classList.add('description');
  ramenFourDescription.textContent =
    'Shio means salt and this style of ramen tends to be light and transparent. It’s often made by boiling down chicken bones and flavored with seafood based products like dried sardines, dashi stock, and bonito flakes.';

  // Appends all the elements to the fourth menu item
  ramenFourDiv.append(
    ramenFourImage,
    ramenFourPrice,
    ramenFourName,
    ramenFourDescription
  );

  // Creates the fifth menu element
  const ramenFiveDiv = document.createElement('div');
  ramenFiveDiv.classList.add('menu-item');

  // Creates all the elements to the fifth menu item
  const ramenFiveImage = document.createElement('div');
  ramenFiveImage.classList.add('image');
  ramenFiveImage.classList.add('ramen5');

  const ramenFivePrice = document.createElement('div');
  ramenFivePrice.classList.add('price');
  ramenFivePrice.textContent = '$12';

  const ramenFiveName = document.createElement('div');
  ramenFiveName.classList.add('name');
  ramenFiveName.textContent = 'B&F Ramen';

  const ramenFiveDescription = document.createElement('div');
  ramenFiveDescription.classList.add('description');
  ramenFiveDescription.textContent =
    'From Tokyo, B&F ramen has a clear soy sauce-based broth with chicken and pork, curly noodles, and classic toppings like sliced pork, bamboo shoots, and nori seaweed.';

  // Appends all the elements to the fifth menu item
  ramenFiveDiv.append(
    ramenFiveImage,
    ramenFivePrice,
    ramenFiveName,
    ramenFiveDescription
  );

  // Creates the sixth menu element
  const ramenSixDiv = document.createElement('div');
  ramenSixDiv.classList.add('menu-item');

  // Creates all the elements to the sixth menu item
  const ramenSixImage = document.createElement('div');
  ramenSixImage.classList.add('image');
  ramenSixImage.classList.add('ramen6');

  const ramenSixPrice = document.createElement('div');
  ramenSixPrice.classList.add('price');
  ramenSixPrice.textContent = '$17';

  const ramenSixName = document.createElement('div');
  ramenSixName.classList.add('name');
  ramenSixName.textContent = 'Tsukemen';

  const ramenSixDescription = document.createElement('div');
  ramenSixDescription.classList.add('description');
  ramenSixDescription.textContent =
    'These thick and hearty ramen noodles are cooked, plunged into cool water, and then served alongside a bowl of tare ramen broth. You dip the noodles and let the thick soup coat each strand in tasty moisture.';

  // Appends all the elements to the sixth menu item
  ramenSixDiv.append(
    ramenSixImage,
    ramenSixPrice,
    ramenSixName,
    ramenSixDescription
  );

  // Appends all the menu item to the menu container div
  menuContainerDiv.append(
    ramenOneDiv,
    ramenTwoDiv,
    ramenThreeDiv,
    ramenFourDiv,
    ramenFiveDiv,
    ramenSixDiv
  );

  // Append the menu container div to the content div
  contentDiv.appendChild(menuContainerDiv);
}
