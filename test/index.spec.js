// importamos la funcion que vamos a testear
// import { login } from '../src/components/login';
import { loginUser, registerUser } from '../src/lib';

describe('login', () => {
  it('Should show login page', () => {
    expect(typeof loginUser).toBe('function');
  });
});

describe('registeruser', () => {
  it('Should show login page', () => {
    expect(typeof registerUser).toBe('function');
  });
});

describe('registeruserrrrr', () => {
  it('Should show login page', () => {
    expect(typeof registerUser).toBe('function');
  });
});
