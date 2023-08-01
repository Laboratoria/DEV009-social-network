// Este es el punto de entrada de tu aplicacion
import home from './components/home.js';
import login from './components/login.js';
import error from './components/error.js';
import register from './components/register.js';

const root = document.getElementById('root');

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/error', component: error },
];

const defaultRoute = '/';

function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  console.log('Hubo un cambio');
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
