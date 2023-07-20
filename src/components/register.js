function register() {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const buttonRegister = document.createElement('button')
    const buttonGoogle = document.createElement('button')

    title.textContent = 'Las Recetas de ahora';
    buttonRegister.textContent = 'Registrate';
    buttonGoogle.textContent = 'Continuar con Google';
    section.append(title, buttonRegister, buttonGoogle);
    return section;
}
export default register;