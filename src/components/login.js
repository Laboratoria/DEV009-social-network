import { loginUser, authWithGoogle } from '../lib/index';
import logo from '../img/logo.png';

function login(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('login-section');
  section.innerHTML = `
    <form class="login-view">
      <header class="logo-header logo">
      <img class="logo-img logo" src=${logo}>
      </header>
      <h2>Welcome Back</h2>
      <p class="message-login">Login to your account</p>
      <input placeholder="Email" class="input-email input">
      <div class="password-container">
        <input type="password" name="password" id="password" placeholder="Password" class="input-pass input">
        <i class="bi bi-eye-slash" id="togglePassword"></i>
      </div>
      <button type="submit" class="button-input">Sign In</button>
      <p class="text-with-line">Or Sign in with</p>
      <button class="button-google">
        <span class="fa-brands fa-google"></span> Sign In
      </button>
      <div class="container-button-login">
        <p class="message">Don’t have an account?</p>
        <button class="no-button">Sign Up</button>
      </div>
    </form>
    <div class="modal">
      <div class="modal-content">
        <span href="#/register" class="close">
          <i class="fa-solid fa-circle-xmark"></i>
        </span>
        <h3>Alert</h3>
        <hr>
        <p class="message-modal">Passwords don't match</p>
      </div>
    </div>
  `;

  const formLogin = section.querySelector('form');
  const inputEmail = formLogin.querySelector('.input-email');
  const inputPass = formLogin.querySelector('.input-pass');
  const togglePassword = formLogin.querySelector('#togglePassword');
  const buttonRegister = formLogin.querySelector('.no-button');
  const buttonGoogle = formLogin.querySelector('.button-google');
  const messageModal = section.querySelector('.message-modal');
  const containerModal = section.querySelector('.modal');
  const closeModal = section.querySelector('.close');

  togglePassword.addEventListener('click', () => {
    const type = inputPass.getAttribute('type') === 'password' ? 'text' : 'password';
    inputPass.setAttribute('type', type);
    togglePassword.classList.toggle('bi-eye');
  });

  buttonGoogle.addEventListener('click', () => {
    authWithGoogle();
    navigateTo('/profile');
  });

  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPass.value;
    try {
      await loginUser(email, password);
      navigateTo('/profile');
    } catch (error) {
      messageModal.textContent = 'Wrong password ';
      containerModal.style.display = 'block';
    }
  });

  closeModal.addEventListener('click', () => {
    containerModal.style.display = 'none';
  });

  return section;
}
export default login;
