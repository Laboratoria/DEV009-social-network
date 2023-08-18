import home from '../src/components/home.js';

const navigateTo = jest.fn();

describe('Home function', () => {
  it('Al dar click lleva a la pagina de registro', () => {
    document.body.append(home(navigateTo));
    const registro = document.querySelector('.buttonRegistroHome');
    registro.click();
    expect(navigateTo).toHaveBeenCalledWith('/registro');
  });

  it('Al dar click lleva a la pagina de login', () => {
    // const navigateTo = jest.fn();
    document.body.append(home(navigateTo));
    const signIn = document.querySelector('.buttonSignInHome');
    signIn.click();
    expect(navigateTo).toHaveBeenCalledWith('/login');
  });
});
