function login (){
    const section = document.createElement('section'); 
    const title = document.createElement('h2');

    title.textContent = 'LOGIN';
    section.append(title);
    return section;
}

export default login;