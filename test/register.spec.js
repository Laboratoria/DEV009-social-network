import register from '../src/components/register.js';

describe('register', () => {
  it('Se renderiza correctamente register', () => {
    const navigateTo = jest.fn();
    document.body.append(register(navigateTo));
  });
});
