function join(navigateTo) {
  const main = document.createElement('main');

  const title = document.createElement('h3');
  title.textContent = 'Únete al SpookyVerse';

  const joinForm = document.createElement('form');

  const fullName = document.createElement('input');
  fullName.setAttribute('type', 'text');
  fullName.setAttribute('placeholder', 'Nombre y apellido');
  fullName.setAttribute('required', '');

  const email = document.createElement('input');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Correo electronico');
  email.setAttribute('required', '');

  const password = document.createElement('input');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Crea tu contraseña');
  password.setAttribute('required', '');

  const btnEnter = document.createElement('button');
  btnEnter.textContent = 'Entrar';
  btnEnter.setAttribute('type', 'submit');

  const btnReturn = document.createElement('button');
  btnReturn.textContent = 'Volver';
  btnReturn.setAttribute('type', 'button');
  btnReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  joinForm.append(fullName, email, password, btnEnter, btnReturn);
  main.append(title, joinForm);

  return main;
}

export default join;
