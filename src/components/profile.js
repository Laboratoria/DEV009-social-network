function profile(navigateTo) {
  const section = document.createElement('section');
  const header = document.createElement('header');
  const userName = document.createElement('p');
  const menuButton = document.createElement('button');
  const containerProfilePic = document.createElement('div');
  const profilePicture = document.createElement('img');
  const firstAndLastName = document.createElement('p');
  const inputSharePost = document.createElement('button');
  const userPostsAndShare = document.createElement('div');
  const footer = document.createElement('footer');
  const footerNav = document.createElement('nav');
  const homeNav = document.createElement('button');
  const searchNav = document.createElement('button');
  const newPublicationNav = document.createElement('button');
  const profileNav = document.createElement('button');
  header.classList.add('view-profile');
  userName.textContent = 'lala45';
  userName.classList.add('user-name-profile');
  menuButton.innerHTML = '<i class="fa-solid fa-bars" style="color: #675ABF;"></i>';
  menuButton.classList.add('menu-button');
  containerProfilePic.classList.add('container-profile-picture-profile');
  profilePicture.setAttribute('src', './img/imagenGatoHumanoPrueba.jpeg');
  profilePicture.classList.add('profile-picture-profile');
  firstAndLastName.textContent = 'Laura Gonzales';
  firstAndLastName.classList.add('first-and-last-name');
  inputSharePost.textContent = 'Share what youre thinking';
  inputSharePost.classList.add('input-share-post');
  userPostsAndShare.classList.add('user-post-and-share');
  footer.classList.add('footer');
  footerNav.classList.add('footer-nav');
  homeNav.classList.add('home-nav');
  homeNav.innerHTML = '<i class="fa-regular fa-house" style="color: #1088E2;"></i>';
  searchNav.classList.add('search-nav');
  searchNav.innerHTML = '<i class="fa-solid fa-magnifying-glass" style="color: #0E89E4;"></i>';
  newPublicationNav.classList.add('new-publicacion-nav');
  newPublicationNav.innerHTML = '<i class="fa-regular fa-square-plus" style="color: #2696E7;"></i>';
  profileNav.classList.add('profile-nav');
  profileNav.innerHTML = '<i class="fa-light fa-paw" style="color: #0E87DF;"></i>';
  inputSharePost.addEventListener('click', () => {
    navigateTo('/createPost');
  });
  newPublicationNav.addEventListener('click', () => {
    navigateTo('/createPost');
  });
  footer.appendChild(
    footerNav,
  );
  footerNav.append(
    homeNav,
    searchNav,
    newPublicationNav,
    profileNav,
  );
  containerProfilePic.appendChild(profilePicture);
  header.append(
    userName,
    menuButton,
    containerProfilePic,
    firstAndLastName,
  );
  userPostsAndShare.append(inputSharePost);
  section.append(header, userPostsAndShare, footer);
  return section;
}
export default profile;
