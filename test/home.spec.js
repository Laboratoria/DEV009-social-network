import home from '../src/components/home.js';

jest.mock('../src/imagenes/logoHome.png');
const navigateTo = jest.fn();

describe('Home function', () => {
  it('Al dar click lleva a la pagina de registro', () => {
    document.body.append(home(navigateTo));
    const btnRegistro = document.querySelector('.buttonRegistroHome');
    btnRegistro.click();
    expect(navigateTo).toHaveBeenCalledWith('/registro');
  });

  it('Al dar click lleva a la pagina de login', () => {
    // const navigateTo = jest.fn();
    document.body.append(home(navigateTo));
    const btnSignIn = document.querySelector('.buttonSignInHome');
    btnSignIn.click();
    expect(navigateTo).toHaveBeenCalledWith('/login');
  });
});
