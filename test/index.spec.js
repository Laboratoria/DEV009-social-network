// importamos la funcion que vamos a testear
// import { login } from '../src/components/login';
import { loginUser } from '../src/lib';

describe('login', () => {
  it('Should show login page', () => {
    expect(typeof loginUser).toBe('function');
  });
});
