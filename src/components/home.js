function home(){
    const section = document.createElement('section');
    const title = document.createElement('h2');

    title.textContent='Las Recetas de ahora';
    section.append(title);
    return section;
}
export default home;