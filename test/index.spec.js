// importamos la funcion que vamos a testear
import { loginUser, registerUser } from '../src/lib';
import login from '../src/components/login';
import register from '../src/components/register';

describe('Section', () => {
  it('Should display login component', () => {
    const section = login();
    console.log(section);
  });
});

describe('Section resgister', () => {
  it('Should display resgister component', () => {
    const section = register();
    console.log(section);
  });
});

describe('loginUser', () => {
  it('Should show login page', () => {
    expect(typeof loginUser).toBe('function');
  });
});

describe('registeruser', () => {
  it('Should show login page', () => {
    expect(typeof registerUser).toBe('function');
  });
});
