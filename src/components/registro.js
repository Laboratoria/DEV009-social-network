import { registerWithEmail } from '../lib/index.js';

function registro(navigateTo) {
  const section = document.createElement('section');
  section.className = 'section';
  const inputName = document.createElement('input');
  inputName.className = 'displayName';
  const inputEmail = document.createElement('input');
  inputName.className = 'inputEmail';
  const inputPass = document.createElement('input');
  inputPass.className = 'inputPass';
  const buttonRegistro = document.createElement('button');
  buttonRegistro.className = 'button buttonSignInRegistro';
  const buttonReturn = document.createElement('button');
  buttonReturn.className = 'button buttonReturnRegistro';
  const errorRegister = document.createElement('h3');

  inputName.placeholder = 'Nombre de usuario';
  inputEmail.placeholder = 'Correo';
  inputPass.placeholder = 'Contraseña';

  buttonRegistro.textContent = 'Registro';
  errorRegister.textContent = 'errorMessage';
  errorRegister.style.display = 'none';
  errorRegister.id = 'errorRegister';

  buttonRegistro.addEventListener('click', () => {
    const emailValue = inputEmail.value;
    const nameValue = inputName.value;
    const passwordValue = inputPass.value;

    if (nameValue === '') {
      errorRegister.style.display = 'block';
      errorRegister.textContent = 'Los campos no puede estar vacíos';
      return;
    }

    const userInfo = {
      email: emailValue,
      name: nameValue,
      password: passwordValue,
    };

    registerWithEmail(
      userInfo.email,
      userInfo.password,
      userInfo.name,
    )
      .then((user) => {
        navigateTo('/principal');
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/weak-password') {
          errorRegister.style.display = 'block';
          errorRegister.textContent = 'La contraseña debe tener al menos 6 caracteres';
        } else if (errorCode === 'auth/invalid-email') {
          errorRegister.style.display = 'block';
          errorRegister.textContent = 'Email invalido';
        } else if (errorCode === 'auth/missing-email') {
          errorRegister.style.display = 'block';
          errorRegister.textContent = 'Falta colocar correo';
        } else if (errorCode === 'auth/email-already-in-use') {
          errorRegister.style.display = 'block';
          errorRegister.textContent = 'El correo electrónico ya se encuentra registrado';
        } else if (errorCode === 'auth/internal-error') {
          errorRegister.style.display = 'block';
          errorRegister.textContent = 'Falta colocar contraseña';
        } 
        console.log(error.code);
        return error;
      });
  });

  buttonReturn.textContent = 'Regresar';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  section.append(inputName, inputEmail, inputPass, buttonRegistro, buttonReturn, errorRegister);
  return section;
}
//  navigateTo('/principal');

export default registro;
