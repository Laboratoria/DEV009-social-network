function register() {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const buttonRegister = document.createElement('button');
    const buttonGoogle = document.createElement('button');
    const password = document.createElement('input');
    const name = document.createElement('input');
    const mail = document.createElement('input');
    const logo = document.createElement('img');

    logo.src = './imagenes/image.png';
    title.textContent = 'Las Recetas de ahora';
    buttonRegister.textContent = 'Registrate';
    buttonGoogle.textContent = 'Continuar con Google';
    password.textContent = 'Contraseña';
    name.textContent = 'Nombre';
    mail.textContent = 'Apellido';

    section.append(logo, title, name, mail, password, buttonRegister, buttonGoogle);
    return section;
}
export default register;