import { signInWithPassword } from '../lib/index';

function login(navigateTo) {
  const containerLogin = document.createElement('div');
  const buttonReturn = document.createElement('button');
  const inputEmail = document.createElement('input');
  inputEmail.className = 'inputEmail';
  inputEmail.type = 'email';
  inputEmail.setAttribute('placeholder', 'Correo electronico');
  inputEmail.setAttribute('required', '');  
  const inputPass = document.createElement('input');
  inputPass.className = 'inputPass';
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('placeholder', 'EScribe tu contraseña');
  inputPass.setAttribute('required', '');  
  const forgetPassword = document.createElement('h6'); // debe redirigirte a un formulario para hacer tu clave
  forgetPassword.textContent = 'Olvidaste tu contraseña?';
  forgetPassword.className = 'forgotet';
  const errorMessageL = document.createElement('h4');
  errorMessageL.className = 'errorMessage';
  errorMessageL.id = 'errorMessage';
  errorMessageL.style.display = 'none';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Continuar';

  const buttonSign = document.createElement('h6'); // boton que dirige a register
  buttonSign.textContent = 'No tienes una cuenta? Registrate';
  buttonSign.className = 'buttonSign';

  buttonReturn.textContent = 'back to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  containerLogin.append(inputEmail, inputPass, errorMessageL, forgetPassword, buttonLogin, buttonSign, buttonReturn);

  buttonLogin.addEventListener('click', () => {
    const emailValue = inputEmail.value;
    const passwordValue = inputPass.value;
    console.log(emailValue);
    if (emailValue === '' || passwordValue === '') {
      errorMessageL.style.display = 'block';
      errorMessageL.textContent = 'Los campos no pueden estar vacios'; 
    } else {
      const user = {
        email : emailValue,
        emailPassword : passwordValue,
      };
      signInWithPassword(user.email, user.emailPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          navigateTo('/principal');
        });
    }
  });
  return containerLogin;
}

export default login;
