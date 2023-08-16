import { signOutUser } from '../src/lib/index';
import profile from '../src/components/profile.js';

jest.mock('../src/firebase/initializeFirebase', () => ({
  onAuthStateChanged: jest.fn(),
  auth: {
    currentUser: {
      displayName: 'John Doe',
      photoURL: './img/test-photo.jpg',
    },
  },
  serverTimestamp: jest.fn(),
}));

jest.mock('../src/lib/index', () => ({
  signOutUser: jest.fn(),
  addPost: jest.fn(),
  displayUserPosts: jest.fn(),
}));

describe('profile', () => {
  const navigateToMock = jest.fn();
  const profileComponent = profile(navigateToMock);
  const inputSharePost = profileComponent.querySelector('.input-share-post');
  const post = profileComponent.querySelector('.post');
  const exitCreatePost = profileComponent.querySelector('.exit-create-post');
  const homeNav = profileComponent.querySelector('.home-nav');
  const profileMenu = profileComponent.querySelector('.profile');
  const menuButton = profileComponent.querySelector('.menu-button');
  const closeMenu = profileComponent.querySelector('.close-menu');
  const menu = profileComponent.querySelector('.menu');
  const signOff = profileComponent.querySelector('.sign-off');

  beforeEach(() => {
    document.body.innerHTML = '';
    document.body.appendChild(profileComponent);
  });

  it('should close the new post modal when clicking the exit button', () => {
    exitCreatePost.click();
    expect(post.style.display).toBe('none');
  });

  it('should navigate to the home page when clicking the home button', () => {
    homeNav.click();
    expect(navigateToMock).toHaveBeenCalledWith('/timeline');
  });

  it('should navigate to the profile page when clicking the "My Profile" menu item', () => {
    profileMenu.click();
    expect(navigateToMock).toHaveBeenCalledWith('/profile');
  });

  it('should open the menu when clicking the menu button', () => {
    menuButton.click();
    expect(menu.style.display).toBe('block');
  });

  it('should close the menu when clicking the close menu button', () => {
    closeMenu.click();
    expect(menu.style.display).toBe('none');
  });

  it('should sign out the user and navigate to the homepage when clicking the "Sign Off" menu item', () => {
    signOff.click();
    expect(signOutUser).toHaveBeenCalled();
    expect(navigateToMock).toHaveBeenCalledWith('/');
  });

  it('should display the new post creation window when Share button is clicked', () => {
    inputSharePost.click();
    expect(post.style.display).toBe('block');
  });

  it('should close the new post creation window when Exit button is clicked', () => {
    exitCreatePost.click();
    expect(post.style.display).toBe('none');
  });
});
