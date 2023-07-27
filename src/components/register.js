import { createUser, signInWithGoogle, auth, SendEmail} from "../lib";

function register() {
    const section = document.createElement('section');
    const buttonRegister = document.createElement('button');
    const buttonGoogle = document.createElement('button');
    const password = document.createElement('input');
    const name = document.createElement('input');
    const email = document.createElement('input');
    const logo = document.createElement('img');
    const avatar = document.createElement('img');
    const errorMessage = document.createElement('p');
    const successMessage = document.createElement('p');
    const logoutButtom = document.createElement('button');
    const logoutMessage = document.createElement('p');
    const logoutMessageError = document.createElement('p');

    logo.src = './imagenes/image.png';
    avatar.src = './imagenes/avatar.png';
    avatar.classList.add('avatar')
    buttonRegister.textContent = 'Registrate';
    buttonGoogle.textContent = 'Continuar con Google';
    password.placeholder = 'Crea tu Contraseña';
    name.placeholder = 'Ingresa tu nombre';
    email.placeholder = 'Ingresa tu Email';
    errorMessage.style.color = 'red';
    successMessage.style.color = 'green';
    logoutButtom.textContent = 'Salir';
    logoutMessage.style.color = 'green';
    logoutMessageError.style.color = 'red';



    buttonRegister.addEventListener('click', async () => {
        const userEmail = email.value;
        const userPassword = password.value;

        if (userEmail && userPassword) {
            try {
                const user = await createUser(userEmail, userPassword);
                
                SendEmail(userEmail);
                successMessage.textContent = 'Usuario registrado con éxito';
                errorMessage.textContent = '';
            } catch (error){
                errorMessage.textContent = error.message;
                successMessage.textContent = '';
            }
             
        } else {
            errorMessage.textContent = 'Por favor, ingresa un correo y una contraseña válida.';
        }
    });


   /* logoutButtom.addEventListener('click', () => {
        auth.signOut().then(() => {
            logoutMessage.textContent = 'El usuario ha cerrado sesion.';
            logoutMessageError.textContent = '';
        }).catch(() => {
            logoutMessageError.textContent ='Error al cerrar sesion.' + error.message;
            logoutMessage.textContent = '';
        }); 
    });

    auth.onAuthStateChanged((user) => {
        if (auth.user){
            return successMessage.textContent = 'El usuario sigue autenticado';
        } else {
            return successMessage.textContent = 'Se cerro sesion';
        }
    })*/



    password.addEventListener('input', () => {
        password.type = 'password';
    });

    buttonGoogle.addEventListener('click', () =>{

       return signInWithGoogle()
       
    })   




    section.append(logo, avatar, name, email, password, buttonRegister, buttonGoogle, errorMessage, successMessage, logoutButtom);


    return section;
}
export default register;
