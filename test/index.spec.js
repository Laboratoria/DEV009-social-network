/* eslint-disable no-undef */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable jest/valid-expect */
import { verifyEmail, createAccount } from '../src/lib/index';

// jest.mock('./__mocks__/firebase.js');

describe('createAccount', () => {
  it('debería ser una función', () => {
    expect(typeof createAccount).toBe('function');
  });
});

describe('verifyEmail', () => {
  it('debería ser una función', () => {
    expect(typeof verifyEmail).toBe('function');
  });
});
