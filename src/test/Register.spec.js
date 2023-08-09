import { expect, jest } from "@jest/globals";
import { register } from '../components/register';
import { beforeEach, test } from "node:test";

describe( 'register', () =>{
    beforeEach(() => {
      const homeButton = register();
      document.body.replaceChildren(homeButton)
    });
    test('boton creado',() => {
        const registerNewUser = document.querySelector('buttonRegister')
        expect(registerNewUser).toBeTruthy()
    });
    test('el boton deberia ingresar si se registro un nuevo usuario',() =>{
        const mockNewUser = {
            uid: 'user0ner',
            email: 'user@gmail.com',
        };
        const mockCredential ={ user: mockNewUser };
        jest.spyOn(account, 'addUser').mockResolvedValue(mockCredential);
        const registerUser = document.querySelector('buttonRegister');
        registerUser.click();
        expect(account.addUser).toHaveBeenCalled();
    });
});
