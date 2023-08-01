function home (navigateTo){
    const contenedorGeneral = document.createElement ('div');
    contenedorGeneral.className='contenedor'
    contenedorGeneral.textContent = 'hola'
    const section = document.createElement('section'); 
    const title = document.createElement('h2');
    const buttonInicio = document.createElement('button');
    const buttonRegistro =document.createElement('button');
    
    buttonInicio.textContent = 'Iniciar sección'
    buttonInicio.addEventListener('click', () => {
        navigateTo('/login');
    });
    

    buttonRegistro.textContent = 'Registrate'
    buttonRegistro.addEventListener('click', () => {
        navigateTo('/registro');
    });

    title.textContent = 'BIENVENIDOS A BON-BON';


   contenedorGeneral.append(section,title, buttonInicio, buttonRegistro);
    return contenedorGeneral;
}

export default home;