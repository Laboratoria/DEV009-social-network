// importamos la funcion que vamos a testear
// mport { registerUser } from '../src/lib';
// import login from '../src/components/login';
import register from '../src/components/register';

describe('login', () => {
  beforeEach(() => {
    const section = register();
    document.body.replaceChildren(section);
  });

  it('Create buttonInput', () => {
    const buttonInput = document.querySelector('.button-input');
    expect(buttonInput).toBeTruthy();
  });
});

describe('Section', () => {
  it('Should display login component', () => {
    const section = register();
    console.log(section);
  });
});

describe('register', () => {
  beforeEach(() => {
    const section = register();
    document.body.replaceChildren(section);
  });
});
