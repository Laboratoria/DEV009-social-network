export function home() {
    const section = document.createElement("section");
    const title = document.createElement("h2");
    const button= document.createElement("button");

    title.textContent = "Bienvenidas a SisterPhere";
    button.textContent = "Login";
    
    section.append(title, button);
    return section;
}
