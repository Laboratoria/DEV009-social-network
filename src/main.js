import {Home} from './components/Home.js';
<<<<<<< HEAD
=======
import {Register} from './components/Register.js';
import {Login} from './components/Login.js';

>>>>>>> 205c3a7de88b1ca0eb9167a91721f32f9944e6cf

import {Register} from'./components/ Register.js';

<<<<<<< HEAD
import {Login} from './components/Login.js'; 

const rootDiv = document.getElementById('root'); 

const routes = {
    '/': Home,
    '/register': register,
    '/Login': Login
}; 
/* export const onNavigate = (pathname) => {

    windows.history.pushState(
        
        {},
        pathname,
        window.location.origin + pathname,
    ); 
    while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
    } 
    rootDiv.appendChild(routes[pathname]());
};  */
const component = routes[window.location.pathname];
/* window.onpopstate = () => {
    rootDiv.appendChild(component());
};  */
rootDiv.appendChild(component());



=======
const routes= {
  '/Home': Home,
  '/Register': Register,
  '/Login': Login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
window.onpopstate = () => {
  rootDiv.appendChild(component());
};

rootDiv.appendChild(component());
>>>>>>> 205c3a7de88b1ca0eb9167a91721f32f9944e6cf
