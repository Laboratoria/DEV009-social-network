function register(){
    const section =  document.createElement ('section');
    section.classList.add('registerSection');

    const title = document.createElement('h2');
    title.textContent ='Registro de nuevo usuario';
    title.classList.add('titleregister');

    section.append(title);

    return section;

}
export default register;