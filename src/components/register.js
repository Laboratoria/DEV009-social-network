import {app} from '../lib/firebase.js';
import { getAuth, createUserWithEmailAndPassword, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from '../lib/firebase.js';

function register() {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const buttonRegister = document.createElement('button');
    const buttonGoogle = document.createElement('button');
    const password = document.createElement('input');
    const name = document.createElement('input');
    const email = document.createElement('input');
    const logo = document.createElement('img');
    const errorMessage = document.createElement('p');
    const successMessage = document.createElement('p');

    logo.src = './imagenes/image.png';
    title.textContent = 'Las Recetas de ahora';
    buttonRegister.textContent = 'Registrate';
    buttonGoogle.textContent = 'Continuar con Google';
    password.placeholder = 'Crea tu Contraseña';
    name.placeholder = 'Ingresa tu nombre';
    email.placeholder = 'Ingresa tu Email';
    errorMessage.style.color = 'red';
    successMessage.style.color = 'green';

    const auth = getAuth(app);

    buttonRegister.addEventListener('click', () =>{
        const userEmail = email.value;
        const userPassword = password.value;
        
        if (userEmail && userPassword){
             createUserWithEmailAndPassword(auth, userEmail, userPassword).then((userCredential) =>{

                const user = userCredential.user;
                successMessage.textContent = 'Usuario registrado con exito';
                errorMessage.textcontent = '';
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessageText = error.message;
                errorMessage.textContent = `Error al registrar usuario: ${errorCode} - ${errorMessageText}`;
                successMessage.textContent = '';
            });
        } else {
            errorMessage.textContent = 'Por favor, ingresa un correo y una contraseña válida.';
        }});

    buttonGoogle.addEventListener('click', () =>{
        const provider = new  GoogleAuthProvider();
        signInWithRedirect(auth, provider);

        getRedirectResult(auth).then((result) =>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            //const token = credential.accessToken
            //const userG = result.user
        })
    })   
        

        

    section.append(logo, title, name, email, password, buttonRegister, buttonGoogle, errorMessage, successMessage);


    return section;
}
export default register;
