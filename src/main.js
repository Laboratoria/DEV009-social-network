// Este es el punto de entrada de tu aplicación

import { myFunction } from './lib/index.js';

myFunction();

import { home } from './components/home.js';
import { login } from './components/login.js';

// Llamamos a la función home y la agregamos al DOM
const root = document.getElementById("root");

const routes = [  
    { path: "/", components: home },
    { path: "/login", components: login },
];

const defaultRoute = "/";

function navigateTo(hash) {
    const route = routes.find((routeFind) => routeFind.path === hash); 

    if (route && route.components) {
        window.history.pushState(
            {},
            route.path,
            window.location.origin + route.path
        );
        root.appendChild(route.components());
    }
}

navigateTo(window.location.pathname);

