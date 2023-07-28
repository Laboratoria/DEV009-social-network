
function home (navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const logo = document.createElement('img');
    const login = document.createElement('button');
    const registerUser = document.createElement('button');
    const passwordLogin = document.createElement('input');
    const emailLogin = document.createElement('input');
    const nameLogin = document.createElement('input');
    const h3 = document.createElement('h3')

    title.textContent='Las Recetas de ahora';
    nameLogin.textContent ='Usuario'
    passwordLogin.texcontent ='Contraseña'
    registerUser.textContent ='Registrarse'
    login.textContent = 'Ingresar'
    logo.src = './imagenes/image.png';
    h3.textContent = '¡Unete a CocinArte hoy mismo!'

    registerUser.addEventListener('click', () => {
        navigateTo('/register'); 
    });

    


    
   /* login.addEventListener('click', () =>{
        const passwordLogin
    })
signInWithEmailAndPassword(auth, userEmail, userPassword).then((userCredential) =>{
    const userHome = userCredential.user;
    if (userEmail && userPassword === userHome){

    }
})*/

    section.append(logo, title, nameLogin, passwordLogin, emailLogin, login, registerUser, h3 );
    

    return section;
}
export default home;