export const Newpost = (navigateTo) => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h1');
  const inputPost = document.createElement('input');
  inputPost.id = 'enterPost';
  const post = document.createElement('p');
  post.innerHTML= 'What is happening?';
  const buttonShare = document.createElement('button');
  const buttonStart = document.createElement('button');
  const buttonEvents= document.createElement('button');
  const buttonNewPost = document.createElement('button');
  const buttonProfile = document.createElement('button');
  const buttonLogout = document.createElement('button');

  buttonStart.textContent = 'Home';
  buttonShare.textContent = 'Share';
  buttonEvents.textContent = 'Events';
  buttonNewPost.textContent = 'New Post';
  buttonProfile.textContent = 'Profile';
  buttonLogout.textContent = 'Log Out';
  title.textContent = 'Expressio Music';

  buttonStart.addEventListener('click', () => {
    navigateTo('/start');
  });
  buttonEvents.addEventListener('click', () => {
    navigateTo('/events');
  });
  buttonProfile.addEventListener('click', () => {
    navigateTo('/profile');
  });
  buttonLogout.addEventListener('click', () => {
    navigateTo('/');
  });

  homeDiv.append(title);
  homeDiv.append(post);
  homeDiv.append(inputPost);
  homeDiv.append(buttonShare);
  homeDiv.append(buttonStart);
  homeDiv.append(buttonEvents);
  homeDiv.append(buttonNewPost);
  homeDiv.append(buttonProfile);
  homeDiv.append(buttonLogout);

  const bottomMenuDiv = document.createElement('div');
  bottomMenuDiv.classList.add('bottom-menu');

  bottomMenuDiv.append(buttonStart);
  bottomMenuDiv.append(buttonEvents);
  bottomMenuDiv.append(buttonNewPost);
  bottomMenuDiv.append(buttonProfile);
  bottomMenuDiv.append(buttonLogout);

  homeDiv.append(bottomMenuDiv);

  return homeDiv;
};

