function home(){
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const logo = document.createElement('img');
    const login = document.createElement('button');
    const registerUser = document.createElement('button');
    const passwordLogin = document.createElement('input');
    const nameLogin = document.createElement('input');
    const h3 = document.createElement('h3')

    title.textContent='Las Recetas de ahora';
    nameLogin.textContent ='Usuario'
    passwordLogin.texcontent ='Contraseña'
    registerUser.textContent ='Registrarse'
    login.textContent = 'Ingresar'
    logo.src = './imagenes/image.png';
    h3.textContent = '¡Unete a CocinArte hoy mismo!'

    section.append(logo, title, nameLogin, passwordLogin, login, registerUser, h3);
    const auth = getAuth(app);

    return section;
}
export default home;