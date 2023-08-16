/**
 * @jest-environment jsdom
 */

import { home } from '../src/components/home';
import { logInWithGoogle } from '../src/lib/firebaseAuth';
// Mock para la función de redirección
const navigateToMock = jest.fn();

// Mock para logInWithGoogle
jest.mock('../lib/firebaseAuth', () => ({
  logInWithGoogle: jest.fn((callback) => {
    const success = true;
    callback(success);
  }),
}));

describe('Home Component', () => {
  let homeElement;

  // Configura el componente Home antes de cada prueba
  beforeEach(() => {
    homeElement = home(navigateToMock);
    document.body.appendChild(homeElement);
  });

  // Limpia después de cada prueba
  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  it('debería redirigir a la página de inicio de sesión al hacer clic en el botón de inicio de sesión', () => {
    const logInButton = homeElement.querySelector('.boton-login');
    logInButton.click();

    expect(navigateToMock).toHaveBeenCalledWith('/login');
  });

  it('debería redirigir a la página de registro al hacer clic en el botón de registro', () => {
    const registerButton = homeElement.querySelector('.boton-registro');
    registerButton.click();

    expect(navigateToMock).toHaveBeenCalledWith('/register');
  });

  it('debería redirigir a la página de muro al hacer clic en el botón de Google', async () => {
    const googleButton = homeElement.querySelector('.boton-google');
    googleButton.click();
    await Promise.resolve();

    expect(logInWithGoogle).toHaveBeenCalled();
    expect(navigateToMock).toHaveBeenCalledWith('/muro');
  });
});
