function newPost(){
    const section =  document.createElement ('section');
    section.classList.add('newPostSection');

    const title = document.createElement('h2');
    title.textContent ='Crear nueva publicación';
    title.classList.add('titlenewPost');

    section.append(title);

    return section;

}
export default newPost;