import { createElement } from '../utils/utils';
import { conexionUser } from '../controller/registroController';

export function registroView() {
  // Seccion principal del registro
  const container = createElement('main', 'container', '');
  // seccion del logo
  const logoContent = createElement('section', 'logo-content', container);
  const logo = createElement('img', 'img-logo', logoContent);
  logo.src = 'img/logo-principal.png';
  logo.alt = 'logo FandomFlix';
  // seccion del formulario del registro
  const formRegistro = createElement('form', 'form-registro', container);
  formRegistro.id = 'form-registro';
  const title = createElement('p', 'title', formRegistro);
  title.innerHTML = 'Signup';

  // input text nombre
  const nameDiv = createElement('div', 'input-iconos', formRegistro);
  const nameIcono = createElement('p', 'estilos-icono', nameDiv);
  nameIcono.innerHTML = '<i class="fa-solid fa-user"></i>';
  const nameText = createElement('input', 'estilos-input', nameDiv);
  nameText.setAttribute('type', 'text');
  nameText.setAttribute('required', ''); // campo es obligatorio
  nameText.placeholder = 'Nombre de Usuario';

  // input text email
  const emailDiv = createElement('div', 'input-iconos', formRegistro);
  const emailIcono = createElement('p', 'estilos-icono', emailDiv);
  emailIcono.innerHTML = '<i class="fa-solid fa-envelope"></i>';
  const emailText = createElement('input', 'estilos-input', emailDiv);
  emailText.setAttribute('type', 'email');
  emailText.setAttribute('name', 'email');
  emailText.setAttribute('required', ''); // campo es obligatorio
  emailText.placeholder = 'Correo Electronico';

  // input text password
  const passDiv = createElement('div', 'input-iconos', formRegistro);
  const passIcono = createElement('p', 'estilos-icono', passDiv);
  passIcono.innerHTML = '<i class="fa-solid fa-lock"></i>';
  const passText = createElement('input', 'estilos-input', passDiv);
  passText.setAttribute('type', 'password');
  passText.placeholder = 'Contraseña';

  // input text confirmar contraseña
  const confirmarpassDiv = createElement('div', 'input-iconos', formRegistro);
  const confirmarpassIcono = createElement('p', 'estilos-icono', confirmarpassDiv);
  confirmarpassIcono.innerHTML = '<i class="fa-solid fa-lock"></i>';
  const confirmarpassText = createElement('input', 'estilos-input', confirmarpassDiv);
  confirmarpassText.setAttribute('type', 'password');
  confirmarpassText.placeholder = 'Confirmar Contraseña';

  // seccion del boton de registro
  const btnRegistro = createElement('button', 'btnRegistro', formRegistro);
  btnRegistro.setAttribute('type', 'submit');
  btnRegistro.innerHTML = 'Registro <i class="fa-solid fa-right-to-bracket"></i>';

  // navegacion a la pagina de login
  const textRegreso = createElement('p', 'textRegreso', formRegistro);
  textRegreso.textContent = 'Ya tienes una cuenta?';
  const mensajeRegreso = createElement('span', 'mensajeRegreso', textRegreso);
  mensajeRegreso.textContent = 'Ingresa aquí';

  // seccion del boton de registro cuenta de Google
  const btnGoogle = createElement('button', 'btnGoogle', formRegistro);
  btnGoogle.innerHTML = '<img src="/img/google.png" alt="cuenta gmail">Google';

  // mensajes de error del registro cuenta
  const validaciones = createElement('div', '', formRegistro);
  validaciones.id = 'error-container';
  validaciones.innerHTML = ` 
  <p id="repeat-password" style="display: none"> Las contraseñas no coinciden </p>
  <p id="repeat-email" style="display: none"> El correo se encuentra registrado </p>
  <p id="emailError" style="display: none"> Formato de correo invalido </p>
  <p id="nameError" style="display: none"> Por favor ingrese su nombre de usuario</p>
  <p id="6-letters" style="display: none"> La contraseña debe contener al menos 6 caracteres </p> 
  <p id="7-letters" style="display: none"> Correo o contraseña inválidos </p> `;
  console.log(validaciones);
  formRegistro.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const nameValue = nameText.value;
    const emailValue = emailText.value;
    const passValue = passText.value;
    const confirmarPassValue = confirmarpassText.value;

    // Ocultar todos los mensajes de error antes de hacer una nueva validación
    document.getElementById('repeat-password').style.display = 'none';
    document.getElementById('repeat-email').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('6-letters').style.display = 'none';
    document.getElementById('7-letters').style.display = 'none';

    if (passValue === confirmarPassValue) {
      conexionUser(nameValue, emailValue, passValue);
    } else {
      document.getElementById('repeat-password').style.display = 'block';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      document.getElementById('emailError').style.display = 'block';
    }
  });

  /* -------------------------- Regreso a la vista de  login ------------------------- */
  /* Si ya tieenes una  cuenta registrada te redirecciona a Login */
  textRegreso.addEventListener('click', () => {
    window.history.pushState({}, '', `${window.location.origin}/`);
    /* ----- Dispara manualmente el evento popstate para actualizar la ruta ----- */
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.location.reload();
  });

  return container;
}
