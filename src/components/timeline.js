function timeline(){
    const section =  document.createElement ('section');
    section.classList.add('timelineSection');

    const title = document.createElement('h2');
    title.textContent ='muro Guide Ma+Pa';
    title.classList.add('titletimeline');

    section.append(title);

    return section;

}
export default timeline;