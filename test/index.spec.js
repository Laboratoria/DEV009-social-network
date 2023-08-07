// import { register } from '../src/components/register.js'; es  necesario traer register?
// Mock para el módulo de Firebase
// jest.mock('../lib/firebase', () => ({
// createUser: jest.fn((userEmail, userPassword) => {
//    if (userEmail === 'valid@example.com' && userPassword === 'validPassword') {
//      return Promise.resolve(
// usuario con info correcta
//        uid: 'usuario-id',
//        email: 'valid@example.com' });
//    }
//      return Promise.reject(new Error('Error al registrar usuario'));
//  }),
/*  signInWithGoogle: jest.fn(() => {
    return Promise.resolve({
      // uid:'', no tenemos uid ahora?
      email :'invalidemail@example.com' });
  }),
}));
describe('register.js', () => {
  it('debe registrar usuario con mail y clave válida', async () => {
    // Arrange -> se crean componentes a testear
    const navigateTo = jest.fn();
  // const registerComponent = register(navigateTo);
    const emailInput = registerComponent.querySelector('input[type="email"]');
    const passwordInput = registerComponent.querySelector('input[type="password"]');
    const registerButton = registerComponent.querySelector('button');
    // Act -> lo que se quiere testear
    emailInput.value = 'valid@example.com';
    passwordInput.value = 'validPassword';
    registerButton.click();
    await Promise.resolve(); // Esperamos a que todas las promesas asincrónicas se resuelvan
    // Assert -> verificación de resultados, se comparan los resultados obtenidos/esperados
    // expect(createUser).toHaveBeenCalledWith('valid@example.com', 'validPassword');
    expect(navigateTo).toHaveBeenCalledWith('/feed');
  });
  it('debe mostrar un mesnaje de error si el correo o clave son inválidos', async () => {
    // Arrange -> se crean componentes a testear
    const navigateTo = jest.fn();
    //const registerComponent = register(navigateTo);
    const emailInput = registerComponent.querySelector('input[type="email"]');
    const passwordInput = registerComponent.querySelector('input[type="password"]');
    const registerButton = registerComponent.querySelector('button');
    const errorMessage = registerComponent.querySelector('p[style="color: red;"]');
    // Act -> lo que se quiere testear
    emailInput.value = 'invalidemail@example.com';
    passwordInput.value = 'invalidPassword';
    registerButton.click();
    await Promise.resolve(); // Espera a que todas las promesas asincrónicas se resuelvan
    // Assert -> verificación de resultados, se comparan los resultados obtenidos/esperados
    //expect(createUser).not.toHaveBeenCalled();
    expect(errorMessage.textContent).toBe('Por favor, ingresa un correo y una contraseña válida.');
  });
}); */
