import { navigateTo } from '../main.js'; // Importamos la función navigateTo

export function home() {
  const section = document.createElement("section");
  const title = document.createElement("h2");
  const description = document.createElement("p");

  const createAccountButton = document.createElement("button");
  createAccountButton.textContent = "Crear cuenta";
  createAccountButton.addEventListener("click", function(){
    navigateTo("/create-account"); // Utilizamos la función de redirección navigateTo
  });

  const registerButton = document.createElement("button");
  registerButton.textContent = "Registro de cuenta";
  registerButton.addEventListener("click", function(){
    navigateTo("/register"); // Utilizamos la función de redirección navigateTo
  });

  title.textContent = "SisterPhere";
  description.textContent = "Bienvenidas a esta comunidad Kawaii-Like inspirada y creada para nosotras. Conecta, comparte y sueña en nuestra red.";

  section.append(title, description, createAccountButton, registerButton);
  return section;
}
