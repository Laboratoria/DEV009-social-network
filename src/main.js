// Este es el punto de entrada de tu aplicación

/* import { myFunction } from './lib/index.js';

myFunction(); */

import { home } from './components/home.js';
import { login } from './components/login.js';
import { register } from './components/register.js';
import { register2 } from './components/register2.js';

// Llamamos a la función home y la agregamos al DOM

const root = document.getElementById('root');

const routes = [
  { path: '/', components: home },
  { path: '/login', components: login },
  { path: '/register', components: register },
  { path: ' /register2', components: register2 },
];

const defaultRoute = '/';

function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);

  if (route && route.components) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    root.appendChild(route.components());
  }
}

// puse el ||defaultRoute pq me marcaba error y no me dejaba hacer el commit//
navigateTo(window.location.pathname || defaultRoute);
