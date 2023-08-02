function welcome(navigateTo) {
  const section = document.createElement('section');
  const formWelcome = document.createElement('form');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const title = document.createElement('h2');
  const messageWelcome = document.createElement('p');
  const buttonToHome = document.createElement('button');

  buttonToHome.type = 'submit';
  title.textContent = 'Welcome';
  messageWelcome.textContent = 'We\'ve sent you an email, please check your inbox';
  buttonToHome.textContent = 'Take me to login';
  logo.setAttribute('src', './img/logo.png');

  formWelcome.classList.add('login-view');
  header.classList.add('logo');
  logo.classList.add('logo');
  buttonToHome.classList.add('button');

  header.append(logo);
  formWelcome.append(header, title, messageWelcome, buttonToHome);
  section.append(formWelcome);

  formWelcome.addEventListener('submit', (e) => {
    e.preventDefault();
    navigateTo('/login');
  });
  return section;
}

export default welcome;
