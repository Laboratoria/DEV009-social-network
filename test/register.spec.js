import { register } from '../src/components/register';
describe('cuando se hace click() ha registrado', () => {
  let testButton;
  beforeAll(() => {
    testButton = jest.fn();
    });
    require("./buttonRegister");
  });

  it('deberia registrar solo 1 vez por usuario', () => {
    // not sure what to do here
    expect(testButton).toHaveBeenCalled()
  });