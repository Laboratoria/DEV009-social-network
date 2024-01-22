import login from './components/login.js';
import signup from './components/signup.js';
import wall from './components/wall.js';
import error from './components/error.js';

const root = document.querySelector('#root');
const routest = [
  { path: '/', component: login },
  { path: '/signup', component: signup },
  { path: '/wall', component: wall },
  { path: '/error', component: error },
];

const defaultRoute = '/';

export function navigateTo(hash) {
  const route = routest.find((routefind) => routefind.path === hash);
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
