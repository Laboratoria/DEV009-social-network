import login from './components/login.js';
import register from './components/register.js';
import timeline from './components/timeline.js';
import printError from './components/error.js';
import newPost from './components/newPost.js';


const root = document.getElementById('root');

const routes = [
  { path: '/', component: login },
  { path: '/register', component: register },
  { path: '/timeline', component: timeline },
  { path: '/error', component: printError },
  { path: '/newPost', component: newPost },
];

const defaultRoute = '/';

function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);
  if (route && route.component) {
    window.history.pushState({}, route.path, window.location.origin + route.path);
    root.appendChild(route.component(navigateTo));
  }
  if (root.firstChild) {
    root.removeChild(root.firstChild);
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  console.log('pauly paso por aqui');
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);


