import { login } from '../src/components/login';

// Mock para la función de redirección
const navigateToMock = jest.fn();

// Mock para logInUser
// jest.mock('../src/lib/firebaseAuth', () => ({
//   logInUser: jest.fn((callback) => {
//     const success = true;
//     callback(success);
//   }),
// }));

describe('componente de inicio de sesion', () => {
  let loginElement;

  // Configura el componente Home antes de cada prueba
  beforeEach(() => {
    loginElement = login(navigateToMock);
    document.body.appendChild(loginElement);
  });

  // Limpia después de cada prueba
  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  it('Deberia retornar a Home al hacer click en el boton de regreso', () => {
    const backButton = loginElement.querySelector('.back-button');
    backButton.click();
    expect(navigateToMock).toHaveBeenCalledWith('/home');
  });
  it('Debe mostar vista de error cuando se haga click en iniciar sesion sin ingresar email y contraseña', () => {
    const buttonLog = loginElement.querySelector('.login-button');
    buttonLog.click();
    expect(navigateToMock).toHaveBeenCalledWith('/error');
  });
});
