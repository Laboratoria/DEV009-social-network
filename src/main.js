import { Home } from './ components/home.js';
import { Login } from './components/login.js';
import { Register } from './components/register.js';

const rootDiv = document.getElementById('root');

const routes = {
    '/': Home,
    '/register': Register,
    '/login': Login,
};


export const onNavigate = (pathname) => {
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