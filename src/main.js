import home from './components/home.js';
import login from './components/login.js';
import error from './components/error.js';
import registro from './components/registro.js';
import principal from './components/principal.js';
import editarpost from './components/editarpost.js';
import usuarioPost from './components/usuarioPost.js';

const root = document.getElementById('root');

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error', component: error },
  { path: '/registro', component: registro },
  { path: '/principal', component: principal },
  { path: '/editarpost', component: editarpost },
  { path: '/usuarioPost', component: usuarioPost },
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
    root.append(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  console.log('hubo un cambio');
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
