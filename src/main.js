// Este es el punto de entrada de tu aplicacion
import home from './components/home.js';
import login from './components/login.js';
import error from './components/error.js';
import register from './components/register.js';
import welcome from './components/welcome.js';
import welcomeGoogle from './components/welcomeUserGoogle.js';
import profile from './components/profile.js';
import createPost from './components/createPost.js';
import timeline from './components/timeline.js';

const root = document.getElementById('root');

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/welcome', component: welcome },
  { path: '/welcomeGoogle', component: welcomeGoogle },
  { path: '/profile', component: profile },
  { path: '/error', component: error },
  { path: '/createPost', component: createPost },
  { path: '/timeline', component: timeline },
  { path: '/welcomeGoogle', component: welcomeGoogle },
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
