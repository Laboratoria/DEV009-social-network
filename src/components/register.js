import { registerUser } from '../lib/credentials.js';

function register(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('registerSection');

  const title = document.createElement('h2');
  title.textContent = 'Registro de nuevo usuario';
  title.classList.add('titleregister');

  const inputName = document.createElement('input');
  inputName.classList.add('inputRegister'); 
  inputName.type= 'text';
  inputName.placeholder = 'Nombre';
  inputName.pattern='^[a-zA-ZñÑ ]+$';
  inputName.title='Ingrese nombre válido';
  inputName.required = true;
  inputName.autocomplete='off';

  const inputLastName = document.createElement('input');
  inputLastName.classList.add('inputRegister'); 
  inputLastName.type= 'text';
  inputLastName.placeholder = 'Apellido';
  inputLastName.pattern='^[a-zA-ZñÑ ]+$';
  inputLastName.autocomplete='off';
  inputLastName.required = true



  const inputUser = document.createElement('input');
  inputUser.classList.add('inputRegister'); 
  inputUser.type= 'text';
  inputUser.placeholder = 'Usuario';
  inputUser.pattern= '^[A-Za-z0-9]+$';
  inputUser.autocomplete='off';
  inputUser.required = true;


  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Correo electrónico';
  inputEmail.autocomplete='off';
  inputEmail.required = true;

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.pattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
  inputPassword.title = 'Debe ser mayor a 6 caracteres y máximo 10';
  inputPassword.autocomplete='off';
  inputPassword.required = true;

  const buttonShowPassword= document.createElement('button');
  buttonShowPassword.classList.add='showPassword';
  


  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.type = 'password';
  inputConfirmPassword.classList.add('inputRegister'); 
  inputConfirmPassword.placeholder = 'Confirma tu contraseña';
  inputConfirmPassword.required = true;

  const buttonCreateAccount = document.createElement('button');
  buttonCreateAccount.textContent = 'Crear cuenta';
  buttonCreateAccount.classList.add('createAccount');
  buttonCreateAccount.addEventListener('click', () => {
   /*  if (inputPassword.value === inputConfirmPassword.value && inputEmail.checkValidity()) {
      registerUser(inputUser.value, inputPassword.value);
      navigateTo('/timeline');
    } else {
      alert('Por favor corrige los campos marcados antes de continuar.');
    } */
  });

  section.append(
    title,
    inputName,
    inputLastName,
    inputUser,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    buttonCreateAccount,
  );

  return section;
}

export default register;


