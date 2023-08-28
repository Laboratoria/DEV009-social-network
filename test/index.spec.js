// Importamos la función que vamos a testear
import { registerWithEmail } from '../src/lib/index';

// Mockeamos la función importada para realizar pruebas aisladas
jest.mock('../src/lib/index', () => ({
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({})),
  sendEmailVerification: jest.fn(() => Promise.resolve({})),
  updateProfile: jest.fn(() => Promise.resolve({})),
}));

describe('Test para la función registro que usa registerWithEmail', () => {
  it('debería recibir los valores de email y contraseña', () => {
    // Simulamos la creación de elementos y configuramos valores simulados- registro.js línea 46
    const emailValue = 'test@example.com';
    const passwordValue = 'contraseña123';

    // Llamamos a la función registro para obtener los elementos simulados
    const registroResult = registerWithEmail();

    // Extraemos los elementos simulados del resultado de registro
    const {
      inputEmail, inputPass, formRegistro,
    } = registroResult;

    // Configuramos valores simulados para los campos de entrada
    inputEmail.value = emailValue;
    inputPass.value = passwordValue;

    // Simulamos hacer clic en el botón de registro
    formRegistro.submit();

    // Verificamos si la función registerWithEmail fue llamada con los valores esperados
    // toHaveBeenCalledWith para verificar si una función ha sido llamada con ciertos argumentos
    expect(registerWithEmail).toHaveBeenCalledWith(
      inputEmail.value,
      inputPass.value,
    );
  });
});

/* describe('test para la función registrarUsuario', () => {
  it('debería ser una función', () => {
    expect(typeof registrarUsuario).toBe('function');
  });
}); */
