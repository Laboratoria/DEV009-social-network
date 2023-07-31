export function showError(errorMessage, errorId) {
  const errorElement = document.getElementById(errorId);

  if (errorElement) {
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
  } else {
    // Si el elemento con el ID dado no existe, lo creamos y lo agregamos al formulario
    const validaciones = document.getElementById('validaciones');
    const newErrorElement = document.createElement('p');
    newErrorElement.id = errorId;
    newErrorElement.textContent = errorMessage;
    newErrorElement.style.display = 'block';
    validaciones.appendChild(newErrorElement);
  }
}
