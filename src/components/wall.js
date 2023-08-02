function wall(navigateTo) {
    const mainConteiner = document.createElement('section');
    const section = document.createElement('section');
    const header = document.createElement('header');
    const logo = document.createElement('img');
    const profilePic = document.createElement('img');
    const createPost = document.createElement('input');

    const post = document.createElement('div');
    const userName = document.createElement('h3');
    const postContent = document.createElement('p');
    const like = document.createElement('img');
    const countLikes = document.createElement('p');

    const menu = document.createElement('nav');
    const home = document.createElement('img');
    const profile = document.createElement('img');
    const exit = document.createElement('img');

    logo.src = "./img/logo.png";
    profilePic.src = "./img/perfil.png";
    createPost.placeholder = "¿Cuál fue el ultimo lugar que visitaste?";

    like.src = "./icons/plane.svg";
    countLikes.textContent = "0";
    home.src = "./icons/home.svg";
    profilePic.width = 50;
    exit.src = "./icons/exit.svg";

    createPost.addEventListener('click', () => {
        const windowPost = document.createElement('div');
        const titleCreate = document.createElement('h2');
        const txtPost = document.createElement('input');
        const btnPublicar = document.createElement('button');

        titleCreate.textContent = "Crear Publicación";
        txtPost.placeholder = "Cuéntanos la experiencia de tu último viaje...";
        btnPublicar.textContent = "Publicar";

        btnPublicar.addEventListener('click', () => {
            navigateTo("/wall");
        });

        windowPost.append(titleCreate, txtPost, btnPublicar);
    });

    mainConteiner.append(section, post, header, menu);
    section.append(header, profilePic, createPost, post, menu);
    post.append(userName, postContent, like, countLikes);
    header.appendChild(logo);
    menu.append(home, profile, exit);

    return mainConteiner;
}

export default wall;