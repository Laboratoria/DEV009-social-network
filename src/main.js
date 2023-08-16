import login from './components/login.js';
import profile from './components/profile.js';
import signup from './components/signup.js';
import wall from './components/wall.js';
import error from './components/error.js';
// import { registerUser } from './lib/index.js';

const root = document.querySelector('#root');
const routest = [
  { path: '/', component: login },
  { path: '/profile', component: profile },
  { path: '/signup', component: signup },
  { path: '/wall', component: wall },
  { path: '/error', component: error },
];

const defaultRoute = '/';

function navigateTo(hash) {
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
