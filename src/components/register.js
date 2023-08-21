import { authWithGoogle, createAccountWithEmail } from '../lib/index';
import logo from '../img/logo.png';

function register(navigateTo) {
  const section = document.createElement('section');
  section.innerHTML = `
    <section>
      <form class="register-view">
        <header class="logo">
          <img class="logo" src=${logo}>
        </header>
        <h2 >Create account</h2>
        <input class="input input-name" type="text" minLength="2" placeholder="Name">
        <input class="input input-email" type="email" placeholder="Email">
        <input class="input input-pass" type="password" minLength="6" placeholder="Password">
        <input class="input input-pass-confirm" type="password"
            minLength="6" placeholder="Confirm Password">
        <button type="submit" class="button-input">Sign Up</button>
        <button class="button-google">
         <span class="fa-brands fa-google"></span> Sign In
        </button>
        <div class="container-button-register">
          <p>Already have an account?</p>
          <button class="no-button"> Sign In</button>
        </div>
      </form>
      <div class="modal">
        <div class="modal-content">
          <span class="close" href="#/register"><i class="fa-solid fa-circle-xmark"></i></span>
          <h3>Alert</h3>
          <hr>
          <p>Passwords don't match</p>
        </div>
      </div>
    </section>
  `;

  let whereToGo = '/register';

  const form = section.querySelector('form');
  const inputName = form.querySelector('.input-name');
  const inputEmail = form.querySelector('.input-email');
  const inputPass = form.querySelector('.input-pass');
  const inputConfirmPass = form.querySelector('.input-pass-confirm');
  const buttonGoogle = form.querySelector('.button-google');
  const buttonLogin = form.querySelector('.no-button');
  const containerModal = section.querySelector('.modal');
  const messageModal = section.querySelector('.modal-content p');
  const closeModal = section.querySelector('.close');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = inputName.value;
    const email = inputEmail.value;
    const password = inputPass.value;
    const confirmPass = inputConfirmPass.value;

    if (confirmPass === password) {
      try {
        await createAccountWithEmail(name, email, password);
        navigateTo('/welcome');
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          messageModal.textContent = 'The user already exists';
          containerModal.style.display = 'block';
          whereToGo = '/login';
        }
      }
    } else {
      messageModal.textContent = "Passwords don't match";
      whereToGo = '/register';
      containerModal.style.display = 'block';
    }
  });

  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonGoogle.addEventListener('click', () => {
    authWithGoogle();
    navigateTo('/welcomeGoogle');
  });

  closeModal.addEventListener('click', () => {
    containerModal.style.display = 'none';
    navigateTo(whereToGo);
  });

  return section;
}

export default register;
