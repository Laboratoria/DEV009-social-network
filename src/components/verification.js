function verification(navigateTo) {
  const main = document.createElement('main');

  const title = document.createElement('h3');
  title.textContent = 'Bienvenid@ al SpookyVerse';

  const message = document.createElement('p');
  message.innerHTML = 'Ingrese a tu correo para verificar tu cuenta.';

  const logo = document.createElement('img');
  logo.src = 'components/images/logo.png';
  logo.setAttribute('id', 'logo-login-join');

  const btnReturn = document.createElement('button');
  btnReturn.className = 'button-back';
  btnReturn.textContent = '¡Ingresar a mi cuenta!';
  btnReturn.setAttribute('type', 'button');
  btnReturn.addEventListener('click', () => {
    navigateTo('/login');
  });

  main.append(title, message, logo, btnReturn);

  return main;
}

export default verification;
