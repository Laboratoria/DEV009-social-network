/**
 * @jest-environment jsdom
 */
import { home } from '../src/components/home';
// Importa la función home
describe('Pruebas de redirección de botones en home', () => {
  let originalNavigateTo;
  beforeAll(() => {
    originalNavigateTo = window.navigateTo;
  });
  afterAll(() => {
    window.navigateTo = originalNavigateTo;
  });
  it('El botón "Inicio de sesión" redirige correctamente a la página de inicio de sesión', () => {
    const mockNavigateTo = jest.fn();
    window.navigateTo = mockNavigateTo;
    const container = document.createElement('div');
    container.appendChild(home(window.navigateTo));
    const loginButton = container.querySelector('.boton-login');
    loginButton.click();
    expect(mockNavigateTo).toHaveBeenCalledWith('/login');
  });
  it('El botón "Crear cuenta" redirige correctamente a la página de registro', () => {
    const mockNavigateTo = jest.fn();
    window.navigateTo = mockNavigateTo;
    const container = document.createElement('div');
    container.appendChild(home(window.navigateTo));
    const registerButton = container.querySelector('.boton-registro');
    registerButton.click();
    expect(mockNavigateTo).toHaveBeenCalledWith('/register');
  });
});
