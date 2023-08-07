import { registerUser } from '../lib/credentials.js';

function register(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('registerSection');

  const title = document.createElement('h2');
  title.textContent = 'Registro de nuevo usuario';
  title.classList.add('titleregister');

  const inputName = document.createElement('input');
  inputName.classList.add('inputRegister'); 
  inputName.placeholder = 'Nombre';
  inputName.pattern='^[A-Za-z\s]+$';
  inputName.title='Ingresa solo nombre'
  

  const inputLastName = document.createElement('input');
  inputLastName.classList.add('inputRegister'); 
  inputLastName.placeholder = 'Apellido';
  inputLastName.pattern='^[A-Za-z\s]+$';



  const inputUser = document.createElement('input');
  inputUser.classList.add('inputRegister'); 
  inputUser.placeholder = 'Usuario';
  inputUser.pattern= '^[A-Za-z0-9]+$';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Correo electrónico';


  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.pattern = '^(?!.*\n)(?=(?:.*\d))(?=(?:.*[A-Z]))(?=(?:.*[a-z])).{6,10}$';
  inputPassword.title = 'Debe ser mayor a 6 caracteres y maximo 10';

  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.type = 'password';
  inputUser.classList.add('inputRegister'); 
  inputConfirmPassword.placeholder = 'Confirma tu contraseña';
  const buttonCreateAccount = document.createElement('button');
  buttonCreateAccount.textContent = 'Crear cuenta';
  buttonCreateAccount.classList.add('createAccount');
  buttonCreateAccount.addEventListener('click', () => {
    if (inputPassword.value === inputConfirmPassword.value && inputEmail.checkValidity()) {
      registerUser(inputUser.value, inputPassword.value);
      navigateTo('/timeline');
    } else {
      alert('Por favor corrige los campos marcados antes de continuar.');
    }
  });

  section.append(
    title,
    inputName,
    inputLastName,
    inputUser,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    buttonCreateAccount
  );

  return section;
}

export default register;


