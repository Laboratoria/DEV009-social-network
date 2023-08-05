// importamos la funcion que vamos a testear
import { loginUser, registerUser } from '../src/lib';
import login from '../src/components/login';
import register from '../src/components/register';

jest.mock('../src/lib/index');

describe('login', () => {
  beforeEach(() => {
    const section = login();
    document.body.replaceChildren(section);
  });
  it('Create buttonLogin', () => {
    const buttonLogin = document.querySelector('button');
    expect(buttonLogin).toBeTruthy();
  });
  it('Should call loginUser when submitting the form with correct credentials', async () => {
    const loginUserMock = jest.fn(() => Promise.resolve({ emailVerified: true }));
    loginUser.mockImplementation(loginUserMock);

    const loginComponent = login();
    const form = loginComponent.querySelector('form');

    form.dispatchEvent(new Event('submit'));
    await Promise.resolve();
    expect(loginUserMock).toHaveBeenCalled();
  });
});

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
