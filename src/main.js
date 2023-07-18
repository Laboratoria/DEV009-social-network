/* eslint-disable require-jsdoc */
import {Home} from './components/Home.js';
import {Register} from './components/Register.js';
import {Login} from './components/Login.js';
import {Start} from './components/Start.js';
import {Events} from './components/Events.js';
import {Newpost} from './components/Newpost.js';
import {Profile} from './components/Profile.js';

const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/start', component: Start},
  {path: '/events', component: Events},
  {path: '/newpost', component: Newpost},
  {path: '/profile', component: Profile},
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

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
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
