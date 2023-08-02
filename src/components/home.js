import { AsyncIterator } from "regenerator-runtime";
import { signInEP, signInWithGoogle } from "../lib";

function home (navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const logo = document.createElement('img');
    const login = document.createElement('button');
    const errorMessage = document.createElement('p');
    const registerUser = document.createElement('button');
    const passwordLogin = document.createElement('input');
    const emailLogin = document.createElement('input');
    const nameLogin = document.createElement('input');
    const buttonGoogle = document.createElement('button');
    const h3 = document.createElement('h3')

    title.textContent='Las Recetas de ahora';
    nameLogin.placeholder ='Usuario'
    emailLogin.placeholder = 'email'
    passwordLogin.placeholder ='Contraseña'
    registerUser.textContent ='Registrarse'
    login.textContent = 'Ingresar'
    logo.src = './imagenes/image.png';
    buttonGoogle.textContent ='Continuar con Google';
    h3.textContent = '¡Unete a CocinArte hoy mismo!'
    errorMessage.style.color = 'red';

    passwordLogin.addEventListener('input', () => {
        passwordLogin.type = 'password';
    });
    
    //agregar logo google a botón 
    const googleLogo = document.createElement('img');
    googleLogo.src = './imagenes/logo_google.avif';
    buttonGoogle.appendChild(googleLogo);

    //agregar un ID para darle estilo en CSS
    buttonGoogle.classList.add('google-button')

    registerUser.addEventListener('click', () => {
        navigateTo('/register'); 
    });

    buttonGoogle.addEventListener('click', async () =>{
        try {
            const user = await signInWithGoogle();
            navigateTo('/feed');
        } catch (error){
            errorMessage.textContent = error.message;
            
        }         
     })   


    
     login.addEventListener('click', async () =>{
        const email = emailLogin.value;
        const password = passwordLogin.value;

        if (email && password) {
            try {
                const user = await signInEP(email, password);
                navigateTo('/feed');
            } catch (error){
                errorMessage.textContent = error.message + ' ' +  'Por favor, ingresa un correo y una contraseña válida.';
                
            }
             
        } else {
            errorMessage.textContent = 'Por favor, ingresa un correo y una contraseña válida.';
        }
    });
    
/*signInWithEmailAndPassword(auth, userEmail, userPassword).then((userCredential) =>{
    const userHome = userCredential.user;
    if (userEmail && userPassword === userHome){

    }
})*/

    section.append(logo, title, nameLogin, passwordLogin, emailLogin, login, errorMessage, registerUser, buttonGoogle, h3 );
    

    return section;
}
export default home;