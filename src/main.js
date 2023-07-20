// Este es el punto de entrada de tu aplicacion

import home from './components/home.js';
import register from './components/register.js';

const root= document.getElementById('root')

const routes = [
    {path: '/', component: home},
    {path: '/register', component: register},
];
const defaulRoute = '/';

 function navigateTo(hash){
    const routex = routes.find((routex) => routex.path===hash);

       if(routex && routex.component) {
        window.history.pushState(
            {},
            routex.path,
            window.location.origin + routex.path,
        )
        root.appendChild(routex.component());
       }
    }

    navigateTo(window.location.pathname);

 
