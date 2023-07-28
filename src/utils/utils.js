export function createElement(elementType, classCss, container) {
    const element = document.createElement(elementType);
    if (classCss !== '') {
      element.classList.add(classCss);
    }
    if (container !== ''){
      container.appendChild(element);
    }
  
    return element;
  }