<<<<<<< HEAD
import { Home } from './ components/home.js';
import { Login } from './components/login.js';
import { Register } from './components/register.js';

const rootDiv = document.getElementById('root');
=======
import {Home} from './components/Home.js';
import {Register} from'./components/ Register.js';
import {Login} from './components/Login.js'; 

const rootDiv = document.getElementById('root'); 
>>>>>>> 4d6c365dab537d8501998a7c92e0af505f91ec63

const routes = {
    '/': Home,
    '/register': Register,
<<<<<<< HEAD
    '/login': Login,
=======
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
>>>>>>> 4d6c365dab537d8501998a7c92e0af505f91ec63
};


export const onNavigate = (pathname) => {
<<<<<<< HEAD
    console.log(window.location.origin + pathname);
    windows.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );
    rootDiv.appendChild(routes[pathname]()) 
    //while (rootDiv.firstChild) {
    //    rootDiv.removeChild(rootDiv.firstChild);
    // }
}
const component = routes[window.location.pathname];
rootDiv.appendChild(component());

// };

//const component = routes[window.location.pathname];
/* window.onpopstate = () => { 
    rootDiv.appendChild(component());
};

rootDiv.appendChild(component()
); */
=======
  window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname,
  );
  rootDiv.removeChild(rootDiv.firstChild);

  rootDiv.appendChild(routes[pathname]());
};
//   while (rootDiv.firstChild) {


const component = routes[window.location.pathname];
window.onpopstate = () => {
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.append(component());
};
// onNavigate('/Home')
// rootDiv.appendChild(routes[window.location.pathname]());
>>>>>>> 4d6c365dab537d8501998a7c92e0af505f91ec63
