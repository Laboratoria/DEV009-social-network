import { muro } from '../src/components/muro';
import {
  addPost,
} from '../src/lib/firebaseStore';

// Mock para addPost
jest.mock('../src/lib/firebaseAuth', () => ({
    addPost: jest.fn((callback) => {
      const success = true;
      callback(success);
    });

it('deberia disparar addPost para agregar un nuevo post', () => {

});

  }));

