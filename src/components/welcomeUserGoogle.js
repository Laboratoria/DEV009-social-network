function welcomeGoogle(navigateTo) {
  const section = document.createElement('section');
  section.innerHTML = `
    <form class="welcome-view">
      <header class="logo">
        <img class="logo" src="./img/logo.png" alt="Logo">
      </header>
      <h2>Welcome</h2>
      <p>We're delighted to have you join our pet-loving community.</p>
      <button type="submit" class="button-welcome">Take me to Home</button>
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
