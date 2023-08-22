import logo from '../img/logo.png';

function welcomeGoogle(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('welcome-component');
  section.innerHTML = `
    <form class="welcome-view">
      <header class="logo">
        <img class="logo" src=${logo} alt="Logo">
      </header>
      <h2>Welcome</h2>
      <p>We're delighted to have you join our pet-loving community.</p>
      <button type="submit" class="button-welcome">Take me to Profile</button>
      <div class="overlay-image"></div>
    </form>
  `;
  const formWelcome = section.querySelector('.welcome-view');
  formWelcome.addEventListener('submit', (e) => {
    e.preventDefault();
    navigateTo('/profile');
  });
  return section;
}
export default welcomeGoogle;
