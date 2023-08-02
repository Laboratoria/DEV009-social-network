// // importamos la funcion que vamos a testear
// // import { myFunction } from '../src/lib/index';

// import { home } from '../src/components/home';

// // describe('myFunction', () => {
// //   it('debería ser una función', () => {
// //     expect(typeof myFunction).toBe('function');
// //   });
// // });

// jest.mock('../src/lib/firebaseAuth.js', () => ({
//   createUserWithEmailAndPassword: jest.fn(),
//   signInWithEmailAndPassword: jest.fn(),
//   GoogleAuthProvider: jest.fn(),
//   signOut: jest.fn(),
//   auth: jest.fn(),
// }));

// describe('home', () => {
// //   it('Debe redirigirse a la página de inicio de sesió
// n al hacer clic en el botón de inicio de sesión', () => {
//     const navigateToMock = jest.fn();

//     const section = home(navigateToMock);

//     const logInButton = section.querySelector('.boton-login');

//     logInButton.click();

//     expect(navigateToMock).toHaveBeenCalledWith('/login');
//   });

//   it('Debe redirigirse a la página de registro al hacer clic en el botón de registro', () => {
//     const navigateToMock = jest.fn();

//     const section = home(navigateToMock);

//     const registerButton = section.querySelector('.boton-registro');

//     registerButton.click();

//     expect(navigateToMock).toHaveBeenCalledWith('/register');
//   });
// });

// Importar las funciones que vamos a probar
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { registerUser } from '../src/lib/firebaseAuth';

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(),
  })),
}));

describe('registerUser', () => {
  it('Deveria ser uma função de registro', () => {
    expect(typeof registroUsuario).toBe('function');
  });

describe('registerUser', () => {
  describe('createUserWithEmailAndPassword', () => {
    it('should be a function', () => {
      expect(typeof createUserWithEmailAndPassword).toEqual('function');
    });

    it('should call createUserWithEmailAndPassword with the correct arguments', async () => {
      // Mock de la función createUserWithEmailAndPassword
      const createUserWithEmailAndPasswordMock = jest.fn(() => Promise.resolve());

      // Obtener una referencia al mock de auth
      const auth = getAuth();
      // Hacer que el mock de getAuth devuelva el mock de createUserWithEmailAndPassword
      auth.createUserWithEmailAndPassword = createUserWithEmailAndPasswordMock;

      const email = 'test@example.com';
      const password = 'password123';
      const callback = jest.fn();

      await registerUser(email, password, callback);

      // Verificar que createUserWithEmailAndPassword se llamó con los argumentos correctos
      expect(createUserWithEmailAndPasswordMock).toHaveBeenCalledWith(email, password);
      // Verificar que el callback se llamó con true
      expect(callback).toHaveBeenCalledWith(true);
    });
  });

  // Otras pruebas para logInUser y logOut, si es necesario...
});
