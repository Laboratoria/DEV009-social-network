function login(navigateTo){
    const section = document.createElement('section');
    const logo = document.createElement('img');
    const title = document.createElement('h2');
    const email = document.createElement('input');
    const password = document.createElement('input');
    const btnLogin = document.createElement('button');
    const toSignup = document.createElement('p');

    logo.src = "./img/logo.png";
    title.textContent = "Ingresa a tu sesion";
    email.placeholder = "Correo";
    password.placeholder = "Contraseña";
    btnLogin.textContent = "Iniciar Sesión";
    toSignup.textContent = "¿Aún no tienes cuenta? ¡Registrate!";

    btnLogin.addEventListener('click', ()=>{
        navigateTo("/wall");
    })
    toSignup.addEventListener('click', ()=>{
        navigateTo("/signup");
    } )
    section.append(logo, title, email, password, btnLogin, toSignup);
    return section;
}
export default login;