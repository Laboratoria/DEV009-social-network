function profile() {
  const mainConteiner = document.createElement('section');
  const section = document.createElement('section');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const profilePic = document.createElement('img');
  const createPost = document.createElement('input');

  const post = document.createElement('div');
  const userName = document.createElement('h3');
  const editPost = document.createElement('img');
  const deletePost = document.createElement('img');
  const postContent = document.createElement('p');
  const like = document.createElement('img');
  const countLikes = document.createElement('p');

  const menu = document.createElement('nav');
  const home = document.createElement('img');
  const profilePicMenu = document.createElement('img');
  const exit = document.createElement('img');

  logo.src = './img/logo.png';
  profilePic.src = './img/perfil.png';
  createPost.placeholder = '¿Cuál fue el ultimo lugar que visitaste?';

  editPost.src = './icons/edit.svg';
  deletePost.src = './icons/delete.svg';
  like.src = './icons/plane.svg';
  countLikes.textContent = '0';
  home.src = './icons/home.svg';
  exit.src = './icons/exit.svg';

  editPost.addEventListener('click', () => {
    // editar post

  });

  deletePost.addEventListener('click', () => {
    // eliminar post

  });

  mainConteiner.append(section, post, header, menu);
  section.append(header, profilePic, createPost, post, menu);
  post.append(userName, editPost, deletePost, postContent, like, countLikes);
  header.appendChild(logo);
  menu.append(home, profilePicMenu, exit);

  return mainConteiner;
}

export default profile;
