function login(){
    const section =  document.createElement ('section');
    section.classList.add('loginSection');

    const title = document.createElement('h2');
    title.textContent ='Bienvenidos a Guide Ma+Pa';
    title.classList.add('titleLogin');

    const buttonStartSession =document.createElement ('button');
    buttonStartSession.textContent='Iniciar sesión';
    buttonStartSession.classList.add('startSession');

    const buttonCreateAccount =document.createElement ('button');
    buttonCreateAccount.textContent='Crear cuenta';
    buttonCreateAccount.classList.add('createAccount');

    section.append(title,buttonStartSession,buttonCreateAccount);

    return section;

}
export default login;