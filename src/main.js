import {Home} from './components/Home.js';
import {Register} from './components/Register.js';
import {Login} from './components/Login.js';


const rootDiv = document.getElementById('root');

const routes= {
  '/Home': Home,
  '/Register': Register,
  '/Login': Login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname,
  );
  rootDiv.removeChild(rootDiv.firstChild);

  rootDiv.appendChild(routes[pathname]());
};
//   while (rootDiv.firstChild) {


const component = routes[window.location.pathname];
window.onpopstate = () => {
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.append(component());
};
// onNavigate('/Home')
// rootDiv.appendChild(routes[window.location.pathname]());

