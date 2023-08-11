import { registerWithEmail, signInWithGoogle } from '../lib/index';



function registro(navigateTo) {
  const section = document.createElement('section');
  section.className = 'section';
  const inputName = document.createElement('input');
  inputName.className = 'displayName';

  inputName.setAttribute('type', 'name');
  inputName.setAttribute('placeholder', 'Nombre de Usuario');
  inputName.setAttribute('required', '');

  const inputEmail = document.createElement('input');
  inputName.className = 'inputEmail';
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Correo electronico');
  inputEmail.setAttribute('required', '');
  const inputPass = document.createElement('input');
  inputPass.className = 'inputPass';
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('placeholder', 'Crea tu contraseña');
  inputPass.setAttribute('required', '');
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

  const buttonGoogle = document.createElement('button');
  buttonGoogle.className = 'buttonGoogle';
  const strong = document.createElement('strong');
  strong.textContent = 'Seguir con Google';
  strong.className = 'textGoogle';

  section.append(inputName, inputEmail, inputPass, buttonRegistro, buttonReturn, errorRegister, buttonGoogle);
  buttonGoogle.appendChild(strong);
  buttonGoogle.addEventListener('click', () => {signInWithGoogle()
  .then((result) => {
    // nos da acceso al Google Access Token. lo podemos usar para acceder al google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // agregamos el signed-in en la informacion del usuario
    const user = result.user;
    navigateTo('/principal');
  })
  .catch ((error)=> {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // el correo de la cuenta del usuario.
    const email = error.customData.email;
    // la credencial Auth que fue usada.
    const credential_1 = GoogleAuthProvider.credentialFromError(error);
    navigateTo('/'); // si nos marca error nos manda al home
  });
  });
  return section;
}
//  navigateTo('/principal');

export default registro;
