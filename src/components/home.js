import cat from '../img/cat.png';
import dog from '../img/dog.png';
import firstImage from '../img/img-first.png';

function home(navigateTo) {
  const section = document.createElement('section');
  section.innerHTML = `
    <section class="first-view">
      <header class="logo">
        <img src="./img/logo.png" class="logo">
      </header>
      <h2 class="title">Travel with Your Pet</h2>
      <p class="message">With just one click you'll have all the information you need</p>
      <div class="square"></div>
      <div class="container-button">
        <button class="button-second-style">Login</button>
        <button class="button">Sign Up</button>
      </div>
    </section>
  `;

  const buttonRegister = section.querySelector('.button');
  const button = section.querySelector('.button-second-style');

  const views = section.querySelector('.first-view');

  let currentIndex = 0;

  const backgrounds = [
    `url(${cat})`,
    `url(${dog})`,
    `url(${firstImage})`,
  ];

  function changeBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    views.style.backgroundImage = backgrounds[currentIndex];
  }
  setInterval(changeBackground, 5000);

  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  return section;
}

export default home;
