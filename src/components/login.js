import { signWithGoogle, signIn, startSession } from '../lib/credentials.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
​
​
function login(navigateTo) {
  const sectionP = document.createElement('section');
  sectionP.classList.add('loginSectionMain');
​
​
  const logo = document.createElement('img');
  logo.src = './images/logoLogin.png';
  logo.classList.add('logo');
  logo.alt='logo de Guide Ma+Pa';
​
  const logoInWords =document.createElement ('img');
  logoInWords.src= './images/logoWords.png';
  logoInWords.classList.add('logoWords');
  logoInWords.alt='Guide Ma+Pa';
​
  const description = document.createElement('h2');
  description.textContent = '"Descubre cómo criar sin morir en el intento, donde lo caótico se convierte en una aventura compartida en esta red social."';
  description.classList.add('description');
​
​
  const section = document.createElement('section');
  section.classList.add('loginSection');
​
  const title = document.createElement('h2');
  title.textContent = '¡Conéctate, comparte y descubre \n junto a otros papás como tú!';
  title.classList.add('titleLogin');
​
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Correo electrónico';
  inputEmail.classList.add('inputEmail');
​
  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.classList.add('inputPassword');
  inputPassword.required = true;
​
  const buttonStartSession = document.createElement('button');
  buttonStartSession.textContent = 'Iniciar sesión';
  buttonStartSession.classList.add('startSession');
  buttonStartSession.addEventListener('click', () => {
    startSession(inputEmail.value, inputPassword.value);
  });
​
  // const buttonSiginGoogle = document.createElement('button');
  // buttonSiginGoogle.textContent = 'Ingresar con Google';
  // buttonSiginGoogle.classList.add('buttonSiginGoogle');
  // buttonSiginGoogle.addEventListener('click', () => {
  //   signIn();
  // });
​
  const buttonSiginGoogle = document.createElement('img');
  buttonSiginGoogle.src='./images/iconGoogle.png'
  buttonSiginGoogle.classList.add('buttonSiginGoogle');
  buttonSiginGoogle.addEventListener('click', () => {
    signIn();
  });
​
  const paragraphYouAreNotRegistered=document.createElement('p');
  paragraphYouAreNotRegistered.innerText='¿Aún no estas registrado?';
  paragraphYouAreNotRegistered.classList.add('paragraph');
​
  const buttonCreateAccount = document.createElement('button');
  buttonCreateAccount.textContent = 'Crear cuenta';
  buttonCreateAccount.classList.add('createAccount');
  buttonCreateAccount.addEventListener('click', () => {
    navigateTo('/register');
  });
​
​
​
  section.append(
    title,
    inputEmail,
    inputPassword,
    buttonStartSession,
    buttonSiginGoogle,
    paragraphYouAreNotRegistered,
    buttonCreateAccount,
  );
  sectionP.append(logo, logoInWords, description, section);
​
  
​
  return (sectionP);
}
​
// const auth = getAuth()
// onAuthStateChanged(auth, (user) => {
//   console.log('user: ' + user);
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     navigateTo('/timeline');
//     console.log("YES");
//     // ...
//   } else {
//     // User is signed out
//     // ...
//     console.log("NO");
//   }
// });
​
export default login;