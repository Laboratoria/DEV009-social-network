import { registerUser } from '../lib/credentials.js';

function register(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('registerSection');

  const title = document.createElement('h2');
  title.textContent = 'Registro de nuevo usuario';
  title.classList.add('titleregister');

  const inputName = document.createElement('input');
  inputName.classList.add('inputRegister'); 
  inputName.type= 'text'
  inputName.placeholder = 'Nombre';
  inputName.pattern='^[A-Za-z]+(?:\s[A-Za-z]+)*$';
  inputName.title='Ingresa solo nombre';
  inputName.required = true
  inputName.autocomplete='off';

  const inputLastName = document.createElement('input');
  inputLastName.classList.add('inputRegister'); 
  inputLastName.type= 'text'
  inputLastName.placeholder = 'Apellido';
  inputLastName.pattern='^[A-Za-z]+(?:\s[A-Za-z]+)*$';
  inputLastName.autocomplete='off';
  inputLastName.required = true



  const inputUser = document.createElement('input');
  inputUser.classList.add('inputRegister'); 
  inputUser.type= 'text';
  inputUser.placeholder = 'Usuario';
  inputUser.pattern= '^[A-Za-z0-9]+$';
  inputUser.autocomplete='off';
  inputUser.required = true


  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inputRegister');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Correo electrónico';
  inputEmail.autocomplete='off';
  inputEmail.required = true


  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inputRegister');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.pattern = '^(?!.*\n)(?=(?:.*\d))(?=(?:.*[A-Z]))(?=(?:.*[a-z])).{6,10}$';
  inputPassword.title = 'Debe ser mayor a 6 caracteres y máximo 10';
  inputPassword.autocomplete='off';
  inputPassword.required = true

  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.classList.add('inputRegister');
  inputConfirmPassword.type = 'password';
  inputConfirmPassword.classList.add('inputRegister'); 
  inputConfirmPassword.placeholder = 'Confirma tu contraseña';
  inputConfirmPassword.required = true

  const buttonCreateAccount = document.createElement('button');
  buttonCreateAccount.textContent = 'Crear cuenta';
  buttonCreateAccount.classList.add('createAccount');
  buttonCreateAccount.addEventListener('click', () => {
    if (inputPassword.value === inputConfirmPassword.value && inputEmail.checkValidity()) {
      registerUser(inputUser.value, inputPassword.value);
      alert('Tu registro se ha completado con éxito. \n Gracias por unirte a Guide Ma+Pa!');
      navigateTo('/timeline');
    } else if(!inputEmail.checkValidity()){
      alert('El correo electrónico no es válido. Por favor, verifica que esté en el formato correcto');
    } else if(inputPassword.value != inputConfirmPassword.value){
      alert('Las contraseñas no coinciden. Asegúrate de ingresar la misma contraseña en ambos campos e intenta nuevamente');
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





