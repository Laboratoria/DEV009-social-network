function join(navigateTo) {
  const main = document.createElement('main');

  const title = document.createElement('h3');
  title.textContent = 'Únete al SpookyVerse';

  const logologin = document.createElement('img');
  logologin.src = 'components/images/logo.png';
  logologin.setAttribute('id','logo-login-join');

  const joinForm = document.createElement('form');

  const fullName = document.createElement('input');
  fullName.className='input-login-join';
  fullName.setAttribute('type', 'text');
  fullName.setAttribute('placeholder', 'Nombre y apellido');
  fullName.setAttribute('required', '');

  const email = document.createElement('input');
  email.className='input-login-join';
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Correo electronico');
  email.setAttribute('required', '');

  const password = document.createElement('input');
  password.className='input-login-join';
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Crea tu contraseña');
  password.setAttribute('required', '');

  const buttonend = document.createElement('div'); 

  const btnEnter = document.createElement('button');
  btnEnter.className='button-login-join';
  btnEnter.textContent = 'Entrar';
  btnEnter.setAttribute('type', 'submit');

  const btnReturn = document.createElement('button');
  btnReturn.className='button-login-join';
  btnReturn.textContent = 'Volver';
  btnReturn.setAttribute('type', 'button');
  btnReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  joinForm.append(fullName, email, password);
  main.append(title, logologin,joinForm,buttonend);
  buttonend.append(btnEnter, btnReturn);

  return main;
}

export default join;
