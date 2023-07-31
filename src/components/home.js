function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  button.textContent = 'Login';
  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  title.textContent = 'Welcome to Pawssport 😺';

  section.append(title, button);
  return section;
}

export default home;
