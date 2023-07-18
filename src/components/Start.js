export const Start = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h1');
  const buttonStart = document.createElement('button');
  const buttonEvents= document.createElement('button');

  const buttonNewPost = document.createElement('button');

  const buttonProfile = document.createElement('button');

  const buttonLogout = document.createElement('button');

  buttonStart.textContent = 'Home';
  buttonEvents.textContent = 'Events';
  buttonNewPost.textContent = 'New Post';
  buttonProfile.textContent = 'Profile';
  buttonLogout.textContent = 'Log Out';
  title.textContent = 'Expressio Music';

  //   buttonStart.addEventListener('click', () => {
  //     navigateTo('/');
  //   });
  //   buttonEvents.addEventListener('click', () => {
  //     navigateTo('/');
  //   });
  //   buttonNewPost.addEventListener('click', () => {
  //     navigateTo('/');
  //   });
  //   buttonProfile.addEventListener('click', () => {
  //     navigateTo('/');
  //   });
  buttonLogout.addEventListener('click', () => {
    navigateTo('/');
  });

  homeDiv.append(title);
  homeDiv.append(buttonStart);
  homeDiv.append(buttonEvents);
  homeDiv.append(buttonNewPost);
  homeDiv.append(buttonProfile);
  homeDiv.append(buttonLogout);

  return homeDiv;
};
