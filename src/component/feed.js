import { createElement } from '../utils/utils';

export function feedView() {
  const sectionFeed = createElement('section', 'container_feed', '');
  const sectionHeader = createElement('section', 'section_header', sectionFeed);
  const divLogo = createElement('div', 'logo', sectionHeader);
  const imagenLogo = createElement('img', 'logo_feed', divLogo);
  imagenLogo.src = '../imagenes/logo-feed.png';
  const divIcono = createElement('div', 'logo', sectionHeader);
  const iconoPerfil = createElement('i', '', divIcono);
  iconoPerfil.innerHTML = '<i class="fa-solid fa-user" style="color: #ffffff;"></i>';
  const sectionPost = createElement('section', 'section_post', sectionFeed);
  // const containerBarra = createElement('div', 'container_barra', sectionPost);
  // const divCharacter = createElement('div', 'character', divContainer);

  return sectionFeed;
}
