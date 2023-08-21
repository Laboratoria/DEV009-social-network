import registro from '../src/components/registro';

const navigateTo = jest.fn();

describe('Funcion Registro', () => {
  it('Al dar click lleva a la pagina de Home', () => {
    document.body.append(registro(navigateTo));
    const btnReturn = document.querySelector('.buttonReturnRegistro');
    btnReturn.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});
