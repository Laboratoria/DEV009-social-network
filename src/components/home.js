import { signInWithGoogle } from "../lib";

function home (navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const logo = document.createElement('img');
    const login = document.createElement('button');
    const registerUser = document.createElement('button');
    const passwordLogin = document.createElement('input');
    const emailLogin = document.createElement('input');
    const nameLogin = document.createElement('input');
    const buttonGoogle = document.createElement('button');
    const h3 = document.createElement('h3')

    title.textContent='Las Recetas de ahora';
    nameLogin.textContent ='Usuario'
    passwordLogin.texcontent ='Contraseña'
    registerUser.textContent ='Registrarse'
    login.textContent = 'Ingresar'
    logo.src = './imagenes/image.png';
    buttonGoogle.textContent ='Continuar con Google';
    h3.textContent = '¡Unete a CocinArte hoy mismo!'

    //agregar logo google a botón 
    const googleLogo = document.createElement('img');
    googleLogo.src = './imagenes/logo_google.avif';
    buttonGoogle.appendChild(googleLogo);

    //agregar un ID para darle estilo en CSS
    buttonGoogle.classList.add('google-button')

    registerUser.addEventListener('click', () => {
        navigateTo('/register'); 
    });

    buttonGoogle.addEventListener('click', () =>{

        return signInWithGoogle()
     })   


    
   /* login.addEventListener('click', () =>{
        const passwordLogin
    })
signInWithEmailAndPassword(auth, userEmail, userPassword).then((userCredential) =>{
    const userHome = userCredential.user;
    if (userEmail && userPassword === userHome){

    }
})*/

    section.append(logo, title, nameLogin, passwordLogin, emailLogin, login, registerUser, buttonGoogle, h3 );
    

    return section;
}
export default home;