import login from '../src/components/login.js';

describe('login', () => {
  it('Se renderiza correctamente login, existe los inputs y botones necesarios', () => {
    const component = login();
    // console.log(component.innerHTML);
    document.body.append(component);
    const inputPassword = document.querySelector('.inputPassword');
    const inputEmail = document.querySelector('.inputEmail');
    const startSession = document.querySelector('.startSession');
    const createAccount = document.querySelector('.createAccount');
    const signInWithGoogle = document.querySelector('.b');
    expect([inputPassword, inputEmail, startSession,
      createAccount, signInWithGoogle]).not.toBeNull();
  });
});
