export function login() {
    const section = document.createElement("section");
    const title = document.createElement("h2");

    title.textContent = "Login";
    section.append(title);
    return section;
}