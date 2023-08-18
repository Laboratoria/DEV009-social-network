import { muro } from '../src/components/muro';
import {
  getPosts,
  updatePost,
  updateLikePost,
  deletePost,
} from '../src/lib/firebaseStore';

const navigateToMock = jest.fn();

describe('Muro Component', () => {
  let muroElement;

  // Configura el componente Muro antes de cada prueba
  beforeEach(() => {
    muroElement = muro(navigateToMock);
    document.body.appendChild(muroElement);
  });

  // Limpia después de cada prueba
  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  it('Deberia de ')

});