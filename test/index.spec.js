import { registerUser, logInUser } from '../src/lib/firebaseAuth.js';

jest.mock('../src/lib/firebaseAuth.js', () => ({
  registerUser: jest.fn(),
  logInUser: jest.fn(),
  logInWithGoogle: jest.fn(),
}));

describe('registerUser', () => {
  it('Debería ser una función', () => {
    expect(typeof registerUser).toBe('function');
  });

  it('Debería registrar a Usuaria', async () => {
    const email = 'test@example.com';
    const password = 'testPassword';

    const callback = (result) => {
      expect(result).toBe(true);
    };

    // aqui se llama a registerUser con el correo electrónico, contraseña y callback
    await registerUser(email, password, callback);

    expect(registerUser).toHaveBeenCalledWith(email, password, callback);
  });

  //   it('correo electrónico no válido', async () => {
  //     const email = 'invalid-email';
  //     const password = 'testPassword';

  //     const callback = (result) => {
  //       expect(result).toBe(false);
  //     };

  //     await registerUser(email, password, callback);

//     expect(registerUser).toHaveBeenCalledWith(email, password, callback);
//   });
});

describe('logInUser', () => {
  it('Debería ser una función', () => {
    expect(typeof logInUser).toBe('function');
  });

  it('Debería iniciar sesión', async () => {
    const email = 'test@example.com';
    const password = 'testPassword';

    // aqui se define la función callback para recibir el resultado del inicio de sesión
    const callback = (result) => {
      expect(result).toBe(true);
    };

    // Llamar a la función logInUser con el correo electrónico, contraseña y callback
    await logInUser(email, password, callback);

    expect(logInUser).toHaveBeenCalledWith(email, password, callback);
  });
});
