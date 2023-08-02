// Este es el punto de entrada de tu aplicacion

import home from './components/home.js';
import register from './components/register.js';
import feed from './components/feed.js';


const root = document.getElementById('root')

const routes = [
    { path: '/', component: home },
    { path: '/register', component: register },
    { path: '/feed', component: feed }
];
const defaultRoute = '/';

function navigateTo(hash) {
    const routex = routes.find((routeFind) => routeFind.path === hash);

    if (routex && routex.component) {
        window.history.pushState(
            {},
            routex.path,
            window.location.origin + routex.path,
        )
        if (root.firstChild) {
            root.removeChild(root.firstChild);
        }
        root.appendChild(routex.component(navigateTo));
    }
}
window.onpopstate = () => {
    navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
