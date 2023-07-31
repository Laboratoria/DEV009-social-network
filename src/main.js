import home from './components/home.js';
import login from './components/login.js';

const root = document.getElementById('root');

const routes = [
    { path: '/', component: home },
    { path: '/login', component: login },
  ];

const defaultRoute = "/";

function navigateTo(hash) {
    const route = routes.find((routeFind) => routeFind.path === hash);

    if (route && route.component) {
        window.history.pushState(
          {},
          route.path,
          window.location.origin + route.path,
        );
    }
        root.appendChild(route.component());
}
navigateTo(window.location.pathname || defaultRoute)

