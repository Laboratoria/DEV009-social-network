export function showError(errorMessage, errorClass) {
  const errorContainer = document.getElementById('error-container');
  errorContainer.innerHTML = errorMessage;
  errorContainer.className = errorClass;
}
