import { registerWithEmail } from '../lib/index.js';

function registro(navigateTo) {
  const section = document.createElement('section');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonRegistro = document.createElement('button');
  const buttonReturn = document.createElement('button');

  inputName.placeholder = 'Nombre de usuario';
  inputEmail.placeholder = 'Correo';
  inputPass.placeholder = 'Contraseña';

  buttonRegistro.textContent = 'registro';
  buttonRegistro.addEventListener('click', () => {
    const emailValue = inputEmail.value;
    const nameValue = inputName.value;
    const passwordValue = inputPass.value;

    const userInfo = {
      email: emailValue,
      name: nameValue,
      password: passwordValue,
    };

    registerWithEmail(userInfo.email, userInfo.password, userInfo.name)
    
     navigateTo('/principal');
    
  });
  buttonReturn.textContent = 'back to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  section.append(inputName, inputEmail, inputPass, buttonRegistro, buttonReturn);
  return section;
};


export default registro;
