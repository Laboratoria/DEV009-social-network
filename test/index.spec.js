// Importamos la función que vamos a testear
import { registerWithEmail } from '../src/lib/index';
import registro from '../src/components/registro.js';

// Mockeamos la función importada para realizar pruebas aisladas
jest.mock('../src/lib/index');

describe('Test para la función registro que usa registerWithEmail', () => {
  it('debería recibir los valores de email, nombre y contraseña', () => {
    // Simulamos la creación de elementos y configuramos valores simulados- registro.js línea 46
    const emailValue = 'test@example.com';
    const nameValue = 'Usuario de Prueba';
    const passwordValue = 'contraseña123';

    // Llamamos a la función registro para obtener los elementos simulados
    const registroResult = registro();

    // Extraemos los elementos simulados del resultado de registro
    const {
      inputName, inputEmail, inputPass, buttonRegistro,
    } = registroResult;

    // Configuramos valores simulados para los campos de entrada
    inputName.value = nameValue;
    inputEmail.value = emailValue;
    inputPass.value = passwordValue;

    // Simulamos hacer clic en el botón de registro
    buttonRegistro.click();

    // Verificamos si la función registerWithEmail fue llamada con los valores esperados
    // toHaveBeenCalledWith para verificar si una función ha sido llamada con ciertos argumentos
    expect(registerWithEmail).toHaveBeenCalledWith(
      inputEmail.value,
      inputPass.value,
      inputName.value,
    );
  });
});

/* describe('test para la función registrarUsuario', () => {
  it('debería ser una función', () => {
    expect(typeof registrarUsuario).toBe('function');
  });
}); */
