import { Home } from './components/Home.js';
import { Register } from './components/register.js';
import { Login } from './components/Login.js';

const rootDiv = document.getElementById('root');

const routes= {
    '/Home': Home,
    '/register': Register,
    '/login': Login
};

export const onNavigate = (pathname) => {
windows.history.pushState( 
    {},
    pathname,
    window.location.origin + pathname,
);

while(rootDiv.firstChild){
    rootDiv.removeChild(rootDiv.firstChild);
}

rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
window.onpopstate = () => {
    rootDiv.appendChild(component());
};

rootDiv.appendChild(component());