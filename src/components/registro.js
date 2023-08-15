import { registerWithEmail, signInWithGoogle } from '../lib/index';

function registro(navigateTo) {
  const divRegister = document.createElement('div');
  divRegister.className = 'divRegister';

  const logoBon = document.createElement('img');
  logoBon.className = 'logoBon';

  const formRegistro = document.createElement('form');
  formRegistro.className = 'formRegistro';
  const inputName = document.createElement('input');
  inputName.className = 'input displayName';
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Nombre de Usuario');
  inputName.required = true;

  const inputEmail = document.createElement('input');
  inputEmail.className = 'input inputEmail';
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Correo electronico');
  inputEmail.required = true;

  const inputPass = document.createElement('input');
  inputPass.className = 'input inputPass';
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('placeholder', 'Crea tu contraseña');
  inputPass.required = true;

  const buttonRegistro = document.createElement('input');
  buttonRegistro.setAttribute('type', 'submit');
  buttonRegistro.className = 'button buttonSignInRegistro';
  buttonRegistro.textContent = 'Registro';

  const buttonReturn = document.createElement('button');
  buttonReturn.className = 'button buttonReturnRegistro';
  buttonReturn.textContent = 'Regresar';

  const errorRegister = document.createElement('p');
  errorRegister.className = 'parrafo';
  errorRegister.textContent = 'errorMessage';
  errorRegister.style.display = 'none';
  errorRegister.id = 'errorRegister';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.className = 'button buttonGoogle';
  const strong = document.createElement('strong');
  strong.textContent = 'Google';
  strong.className = 'textGoogle';
  const imgGoogle = document.createElement('img');
  imgGoogle.className = 'imgGoogle';

  const textRegistrateCon = document.createElement('p');
  textRegistrateCon.className = 'parrafo';
  textRegistrateCon.textContent = 'O registrate con...';

  formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = inputEmail.value;
    const nameValue = inputName.value;
    const passwordValue = inputPass.value;

    registerWithEmail(
      emailValue,
      passwordValue,
      nameValue,
    )
      .then(() => {
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
        return error;
      });
  });

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  divRegister.appendChild(logoBon);
  divRegister.appendChild(formRegistro);
  formRegistro.append(inputName, inputEmail, inputPass, buttonRegistro);
  divRegister.appendChild(errorRegister);
  divRegister.appendChild(textRegistrateCon);
  divRegister.appendChild(buttonGoogle);
  buttonGoogle.append(imgGoogle, strong);
  divRegister.appendChild(buttonReturn);

  buttonGoogle.addEventListener('click', () => {
    signInWithGoogle()
      .then(() => {
        navigateTo('/principal');
      })
      .catch(() => {
        navigateTo('/'); // si nos marca error nos manda al home
      });
  });
  return divRegister;
}

export default registro;
