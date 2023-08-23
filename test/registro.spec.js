import registro from '../src/components/registro';
// import { registerWithEmail } from '../src/lib/index';
jest.mock('../src/imagenes/logoBon.png');
jest.mock('../src/lib/index');
const navigateTo = jest.fn();

describe('Funcion Registro', () => {
  /* const formRegistro = document.querySelector('formRegistro');
  const inputName = document.querySelector('displayName');
  const inputEmail = document.querySelector('inputEmail');
  const inputPass = document.querySelector('inputPass'); */

  it('Al dar click lleva a la pagina de Home', () => {
    document.body.append(registro(navigateTo));
    const btnReturn = document.querySelector('.buttonReturnRegistro');
    btnReturn.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});
